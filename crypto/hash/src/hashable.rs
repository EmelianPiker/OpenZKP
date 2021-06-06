// False positive: attribute has a use
#[allow(clippy::useless_attribute)]
// False positive: Importing preludes is allowed
#[allow(clippy::wildcard_imports)]
use std::prelude::v1::*;

use crate::{hash::Hash, masked_keccak::MaskedKeccak};
use zkp_primefield::FieldElement;
use zkp_u256::U256;

#[cfg(feature = "zk-compat")]
use neptune::poseidon::Poseidon;
#[cfg(feature = "zk-compat")]
use neptune::poseidon::PoseidonConstants;

#[cfg(feature = "zk-compat")]
pub fn neptune_constants() -> PoseidonConstants
{
    use neptune::Strength::Strengthened;
    let constants = PoseidonConstants::new_with_strength(Strengthened);
    constants
}

pub trait Hashable {
    fn hash(&self) -> Hash;
}

impl Hashable for Hash {
    fn hash(&self) -> Hash {
        // Hashing here is idempotent. Defining this in combination
        // with `Hashable for [T]` makes it do the right thing for
        // `[Hash]::hash().`
        self.clone()
    }
}

impl Hashable for U256 {
    fn hash(&self) -> Hash {
        // U256 values are passed as-is
        // OPT: Figure out a way to get in-place access.
        Hash::new(self.to_bytes_be())
    }
}

impl Hashable for FieldElement {
    fn hash(&self) -> Hash {
        // We hash as U256 in Montgomery form (which is identity-hashed)
        self.as_montgomery().hash()
    }
}

impl<T: Hashable> Hashable for &T {
    fn hash(&self) -> Hash {
        (*self).hash()
    }
}

impl<T: Hashable> Hashable for &[T] {
    fn hash(&self) -> Hash {

        #[cfg(not(feature = "zk-compat"))]
        if self.len() == 1 {
            // For a single element, return its hash.
            self[0].hash()
        } else {
            // Concatenate the element hashes and hash the result.
            let mut hasher = MaskedKeccak::new();
            for value in self.iter() {
                hasher.update(value.hash().as_bytes());
            }
            hasher.hash()
        }

        #[cfg(feature = "zk-compat")]
        {
            let constants = neptune_constants();
            let mut h = Poseidon::new(&constants);
            //h.set_preimage();
            unimplemented!()
        }

    }
}

impl<T: Hashable> Hashable for Vec<T> {
    fn hash(&self) -> Hash {
        self.as_slice().hash()
    }
}
