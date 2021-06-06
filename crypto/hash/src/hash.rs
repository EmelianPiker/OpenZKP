#[cfg(feature = "std")]
use std::fmt;

#[cfg(feature = "zk-compat")]
use neptune::poseidon::Poseidon;

#[cfg(feature = "zk-compat")]
use neptune::poseidon::PoseidonConstants;

#[cfg(feature = "zk-compat")]
use neptune::poseidon::fr::Fr;

#[derive(Clone, Default, PartialEq, Eq)]
#[cfg(not(feature = "zk-compat"))]
pub struct Hash([u8; 32]);

#[derive(Clone, Default, PartialEq, Eq)]
#[cfg(feature = "zk-compat")]
pub struct Hash {
    data: Fr,
    is_mongometry: Bool,
    is_branch: Bool,
}

impl Hash {
    #[must_use]
    pub fn new(bytes: [u8; 32]) -> Self {
        Self(bytes)
    }

    #[must_use]
    pub fn as_bytes(&self) -> &[u8] {
        &self.0
    }
}

#[cfg(feature = "std")]
impl fmt::Debug for Hash {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        write!(f, "Hash(0x{:})", hex::encode(self.0))
    }
}
