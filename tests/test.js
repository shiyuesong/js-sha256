assert('sha256 1', 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855', sha256(''));
assert('sha256 2', 'd7a8fbb307d7809469ca9abcb0082e4f8d5651e46d3cdb762d02d0bf37c9e592', sha256('The quick brown fox jumps over the lazy dog'));
assert('sha256 3', 'ef537f25c895bfa782526529a9b63d97aa631564d5d789c2b765448c8635fb6c', sha256('The quick brown fox jumps over the lazy dog.'));
assert('sha224 1', 'd14a028c2a3a2bc9476102bb288234c415a2b01f828ea62ac5b3e42f', sha224(''));
assert('sha224 2', '730e109bd7a8a32b1cb9d9a09aa2325d2430587ddbc0c38bad911525', sha224('The quick brown fox jumps over the lazy dog'));
assert('sha224 3', '619cba8e8e05826e9b8c519c0a5c68f4fb653e8a3d8aa04bb2c8cd4c', sha224('The quick brown fox jumps over the lazy dog.'));