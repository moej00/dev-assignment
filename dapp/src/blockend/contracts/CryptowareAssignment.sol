// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract CryptowareAssignment is ERC721 {
    // @notice mint cost of token
    uint256 public mintPrice;

    /// @notice Minting event definition
    event Minted(address indexed to, uint256 indexed tokenId);

    /**
     * @notice constructor
     * @param name_ the name of the Contract
     * @param symbol_ the token symbol
     **/
    constructor(
        string memory name_,
        string memory symbol_,
        uint256 mintPrice_
    ) ERC721(name_, symbol_) {
        mintPrice = mintPrice_;
    }

    /**
     * @notice the minting function
     * @param to_ the address to send the minted token to
     * @param id_ id of the token to mint
     **/
    function mint(address to_, uint256 id_) external payable {
        uint256 received = msg.value;

        require(to_ != address(0), "CryptowareAssignment: Address cannot be 0");
        require(
            received == mintPrice,
            "CryptowareAssignment: Ether sent mismatch with mint price"
        );

        _safeMint(to_, id_);

        emit Minted(to_, id_);
    }
}
