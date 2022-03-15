/* TODO
[DONE no need to do this since mint calculation is coming from supply + 1 meaning the unminted token would always appear) add new requirement for minting - the token to be minted must not be already owned 
[DONE with mint it yourself then safeTransferFrom] add minting for other people but with specified token id 
[DONE no need to do this since tranfer can only be called nevertheless by the owner or approved] add pause for transferring of token aside from pause on minting
[DONE] add unrevealed picture until revealed
fix withdraw make it by equity not withdraw all
make your contract sniper proof 
*/

// SPDX-License-Identifier: GPL-3.0 

pragma solidity >=0.7.0 <0.9.0; // version of solidity 

// ive researched about open zeppelin and couldnt find any hint of bad things + they kinda standardized the way of creation of smart contract by having built in methods in their contracts 
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol"; // link: https://docs.openzeppelin.com/contracts/4.x/api/token/erc721#ERC721Enumerable
import "@openzeppelin/contracts/access/Ownable.sol"; // link: https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol

contract NFT is ERC721Enumerable, Ownable { // inherit from erc721enumerable and ownable, meaning our contract would have the access into their built in methods
  // declaration of variables
  using Strings for uint256; // allows uint256 datatype to be able to call methods of strings, e.g. intNumber.toString() - converts an int to string 

  string public baseURI; // link for json metadata of each character which contains the image to be minted - modifiable by only owner
  string public baseExtension = ".json"; // comes with baseUri - modifiable by only owner 
  string public notRevealedUri; // link for dummy metadata to be displayed if we do not want to reveal a character's metadata to public, people can see a character/token's metadata by calling tokenUri
  uint256 public whitelistCost = 562610 gwei; // price of minting during whitelist sale - modifiable by only owner 
  uint256 public cost = 1562610 gwei; // price of minting during public sale - modifiable by only owner 
  uint256 public maxSupply = 10; // max supply to be mintable - modifiable by only owner
  uint256 public maxMintAmount = 20; // max mint amount per transaction - modifiable by only owner 
  uint256 public whitelistNftPerAddressLimit = 2; // max cyber outlaws nft per address during whitelist - modifiable by only owner 
  uint256 public nftPerAddressLimit = 200; // max nft per address limit during public sale 
  bool public paused = false; // ability to stop the minting sale - modifiable by only owner
  bool public revealed = false; // if revealed is true meaning when we call tokenUri(function that returns the metadata of the token specified) it would return the metadata of the specified tokenId, its much better to set default to false until everything is minted to avoid people sniping for certain attributes
  bool public onlyWhitelisted = true; // determines whether minting is available for whitelists only, if false then it's for public - modifiable by only owner
  address[] public whitelistedAddresses;
  mapping(address => uint256) public addressMintedBalance; // determines the amount of mint done by the user 

  // constructor - this is the first things that's gonna be called as we deploy/create the contract
  constructor(
    // string memory _initBaseURI, // ipfs json cdi of the images | UNCOMMENT ON DEPLOYMENT
    // string memory _initNotRevealedUri // UNCOMMENT ON DEPLOYMENT
  ) ERC721("Cyber Outlaws NFT", "CONFT") { 
    setBaseURI("ipfs://QmWJJHbBFHKDV4Eq8ihnxgsfQSvsgi5mGHqq4F4KhSxiJq/"); // uri for the characters | DO NOT HARDCODE ON REAL DEPLOYMENT 
    setNotRevealedURI("ipfs://Qmc1FCWNEegDsvzbrfiJU6Z2p6g27SkYPiTGcMY1VHNyzC/"); // uri to appear if we would not want public to call tokenUri then learn our character's metadata | DO NOT HARDCODE ON REAL DEPLOYMENT 
  }

  // internal
  function _baseURI() internal view virtual override returns (string memory) {
    return baseURI;
  }

  // public
  function mint(uint256 _mintAmount) public payable { // public - outside of the contract have access to the function | payable - allows a function to process transaction
    require(!paused, "the contract is paused"); // if not paused then proceed to next line else reject the transaction with an error message 
    uint256 supply = totalSupply(); // totalSupply() returns the current supply then assigns its value into supply variable 
    require(_mintAmount > 0, "need to mint at least 1 NFT"); // mint amount must be greater than 0 else reject the transaction with an error message
    require(_mintAmount <= maxMintAmount, "max mint amount per session exceeded"); // mint amount for this transaction should not exceed the max mint amount (default: 20) else reject the transaction with an error message
    require(supply + _mintAmount <= maxSupply, "max NFT limit exceeded"); // current supply + mint amount should not exceed max supply else reject the transaction with an error message 

    if (msg.sender != owner()) { // if the caller of the mint function is not the owner then do everything within the scope, else if the owner then proceed to minting without paying any cost 
      if(onlyWhitelisted == true) { // if whitelist sale is active then do everything within the scope of this if statement
          require(isWhitelisted(msg.sender), "user is not whitelisted"); // calls the isWhitelisted function which then determines whether the caller of the mint function is whitelisted or not else reject the transaction with an error message 
          uint256 ownerMintedCount = addressMintedBalance[msg.sender];
          require(ownerMintedCount + _mintAmount <= whitelistNftPerAddressLimit, "max mint per address during whitelist exceeded");
          require(balanceOf(msg.sender) + _mintAmount <= whitelistNftPerAddressLimit, "max NFT per address during whitelist exceeded");
          require(msg.value >= whitelistCost * _mintAmount, "insufficient funds");
      } else {
        require(balanceOf(msg.sender) + _mintAmount <= nftPerAddressLimit, "max NFT per address exceeded");
        require(msg.value >= cost * _mintAmount, "insufficient funds");
      }
    }

    for (uint256 i = 1; i <= _mintAmount; i++) {
      addressMintedBalance[msg.sender]++;
      _safeMint(msg.sender, supply + i);
    }
  }
  
  function isWhitelisted(address _user) public view returns (bool) { // // public - outside of the contract have access to the function | view - cannot do any modifications inside the function
    for (uint i = 0; i < whitelistedAddresses.length; i++) { // loop thru all of the values inside whitelistedAddresses 
      if (whitelistedAddresses[i] == _user) { // if the _user matches one of them meaning they are included in the whitelisted list then return true 
          return true;
      }
    }
    return false; // if the user is not included, return false 
  }

  function walletOfOwner(address _owner)
    public
    view
    returns (uint256[] memory)
  {
    uint256 ownerTokenCount = balanceOf(_owner);
    uint256[] memory tokenIds = new uint256[](ownerTokenCount);
    for (uint256 i; i < ownerTokenCount; i++) {
      tokenIds[i] = tokenOfOwnerByIndex(_owner, i);
    }
    return tokenIds;
  }

  function tokenURI(uint256 tokenId)
    public
    view
    virtual
    override
    returns (string memory)
  {
    require(
      _exists(tokenId),
      "ERC721Metadata: URI query for nonexistent token"
    );
    
    if(revealed == false) {
        return notRevealedUri;
    }

    string memory currentBaseURI = _baseURI();
    return bytes(currentBaseURI).length > 0
        ? string(abi.encodePacked(currentBaseURI, tokenId.toString(), baseExtension))
        : "";
  }

  //only owner
  function reveal() public onlyOwner {
      revealed = true;
  }
  
  function setMaxSupply(uint256 _newSupply) public onlyOwner {
    maxSupply = _newSupply;
  }

  function setWhitelistNftPerAddressLimit(uint256 _limit) public onlyOwner {
    whitelistNftPerAddressLimit = _limit;
  }
  
  function setNftPerAddressLimit(uint256 _limit) public onlyOwner{
    nftPerAddressLimit = _limit;
  }

  function setWhitelistCost(uint256 _newCost) public onlyOwner {
    whitelistCost = _newCost;
  }

  function setCost(uint256 _newCost) public onlyOwner {
    cost = _newCost;
  }

  function setMaxMintAmount(uint256 _newmaxMintAmount) public onlyOwner {
    maxMintAmount = _newmaxMintAmount;
  }

  function setBaseURI(string memory _newBaseURI) public onlyOwner {
    baseURI = _newBaseURI;
  }

  function setBaseExtension(string memory _newBaseExtension) public onlyOwner {
    baseExtension = _newBaseExtension;
  }
  
  function setNotRevealedURI(string memory _notRevealedURI) public onlyOwner {
    notRevealedUri = _notRevealedURI;
  }

  function pause(bool _state) public onlyOwner {
    paused = _state;
  }
  
  function setOnlyWhitelisted(bool _state) public onlyOwner {
    onlyWhitelisted = _state;
  }
  
  function whitelistUsers(address[] calldata _users) public onlyOwner {
    delete whitelistedAddresses;
    whitelistedAddresses = _users;
  }
 
  function withdraw() public payable onlyOwner {
    (bool os, ) = payable(owner()).call{value: address(this).balance}("");
    require(os);
  }

  function mintTo(uint256 _mintAmount, address _addressTo) public onlyOwner { // public - outside of the contract have access to the function | payable - allows a function to process transaction
    require(!paused, "the contract is paused"); // if not paused then proceed to next line else reject the transaction with an error message 
    uint256 supply = totalSupply(); // totalSupply() returns the current supply then assigns its value into supply variable 
    require(_mintAmount > 0, "need to mint at least 1 NFT"); // mint amount must be greater than 0 else reject the transaction with an error message
    require(_mintAmount <= maxMintAmount, "max mint amount per session exceeded"); // mint amount for this transaction should not exceed the max mint amount (default: 20) else reject the transaction with an error message
    require(supply + _mintAmount <= maxSupply, "max NFT limit exceeded"); // current supply + mint amount should not exceed max supply else reject the transaction with an error message 

    if(onlyWhitelisted == true) { // if whitelist sale is active then do everything within the scope of this if statement
        require(isWhitelisted(_addressTo), "user is not whitelisted"); // calls the isWhitelisted function which then determines whether the caller of the mint function is whitelisted or not else reject the transaction with an error message 
        uint256 ownerMintedCount = addressMintedBalance[_addressTo];
        require(ownerMintedCount + _mintAmount <= whitelistNftPerAddressLimit, "max mint per address during whitelist exceeded");
        require(balanceOf(_addressTo) + _mintAmount <= whitelistNftPerAddressLimit, "max NFT per address during whitelist exceeded");
    } else {
      require(balanceOf(_addressTo) + _mintAmount <= nftPerAddressLimit, "max NFT per address exceeded");
    }

    // start minting 
    for (uint256 i = 1; i <= _mintAmount; i++) {
      addressMintedBalance[_addressTo]++;
      _safeMint(_addressTo, supply + i);
    }
  }
}