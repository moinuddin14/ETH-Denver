import * as chroma from 'chroma-js';
import * as _ from 'lodash';
import TextField from 'material-ui/TextField';
import * as React from 'react';
import * as DocumentTitle from 'react-document-title';
import * as HighLight from 'react-highlight';
import ReactTooltip = require('react-tooltip');
import { Footer } from 'ts/components/footer';
import { TopBar } from 'ts/components/top_bar/top_bar';
import { LifeCycleRaisedButton } from 'ts/components/ui/lifecycle_raised_button';
import { colors } from 'ts/utils/colors';
import { configs } from 'ts/utils/configs';
import { constants } from 'ts/utils/constants';

interface GasCostByLine {
    [line: string]: number;
}

const API_PAYLOAD: any = {
    gasCostByLineBySignature: {
        '*': {
            '1001': 1610,
            '1002': 138,
            '1003': 138,
            '1004': 138,
            '1005': 138,
            '1009': 920,
            '146': 474,
            '1707': 2507,
            '1719': 1280,
            '1723': 1120,
            '1724': 7360,
            '1727': 6541158,
            '1728': 96,
            '1729': 96,
            '1730': 96,
            '1731': 96,
            '1732': 64,
            '1739': 236,
            '1751': 160,
            '1752': 152,
            '1753': 920,
            '1756': 4380,
            '1757': 12,
            '1758': 12,
            '1759': 12,
            '1760': 12,
            '1761': 8,
            '1769': 252,
            '1778': 360,
            '1779': 342,
            '1780': 369,
            '1783': 1702434,
            '1784': 2106,
            '1787': 1666091,
            '1788': 288,
            '1806': 6,
            '1809': 6,
            '1810': 6,
            '1819': 644,
            '1827': 138,
            '1832': 98,
            '1833': 446,
            '1835': 94,
            '1836': 448,
            '1838': 445684,
            '1839': 6,
            '1840': 30,
            '1842': 6,
            '1843': 4,
            '1846': 10430,
            '1851': 66,
            '1852': 453364,
            '1855': 58,
            '1857': 34,
            '1860': 46,
            '1864': 6,
            '187': 22901,
            '1872': 112292,
            '1946': 96,
            '2000': 48,
            '2005': 4,
            '348': 90,
            '350': 61794,
            '352': 61704,
            '354': 138,
            '355': 21172,
            '357': 21136,
            '359': 21100,
            '362': 9774,
            '374': 24,
            '382': 6,
            '388': 58,
            '389': 58,
            '390': 58,
            '393': 38,
            '394': 64,
            '398': 432,
            '400': 4,
            '408': 145050,
            '412': 58,
            '415': 4356,
            '416': 6,
            '417': 6,
            '418': 36,
            '419': 36,
            '420': 12,
            '425': 48,
            '427': 6,
            '495': 17,
            '500': 6,
            '516': 1164,
            '517': 27839,
            '532': 342,
            '533': 771476,
            '549': 200,
            '557': 104,
            '561': 148,
            '565': 952,
            '566': 952,
            '569': 160,
            '572': 88,
            '605': 154,
            '624': 11,
            '629': 24,
            '768': 1594,
            '772': 8202,
            '778': 192,
            '779': 13488,
            '780': 12480,
            '784': 1200,
            '790': 1210,
            '792': 669400,
            '797': 4400,
            '798': 544046,
            '799': 309,
            '830': 156,
            '833': 78,
            '835': 299,
            '836': 3926,
            '837': 9022,
            '842': 384,
            '845': 96,
            '847': 736,
            '849': 17120,
            '858': 1320,
            '866': 165,
            '869': 1430,
            '874': 27060,
            '877': 27060,
            '883': 25368,
            '884': 84,
            '888': 46991,
            '891': 46991,
            '896': 147,
            '901': 9,
            '904': 27,
            '906': 2772,
            '907': 2772,
            '908': 234,
            '917': 627,
            '926': 171,
            '927': 57,
            '932': 935,
            '934': 16940,
            '935': 17325,
            '938': 287925,
            '941': 990,
            '942': 990,
            '946': 291610,
            '947': 290290,
            '950': 287155,
            '953': 132927,
            '961': 1344,
            '967': 10800,
            '970': 1920,
            '986': 1968,
            '989': 15072,
            '992': 34138,
            '995': 13892,
            '998': 32706,
            undefined: 169179,
        },
        'bidOnSiringAuction(uint256,uint256)': {
            '1769': 252,
            '1778': 360,
            '1779': 342,
            '1780': 369,
            '1783': 1702434,
            '1784': 2106,
            '1787': 1666091,
            '1788': 288,
            '187': 2106,
            '1872': 11592,
            '1946': 9,
            '516': 108,
            '517': 2583,
            '605': 126,
            '624': 9,
            '768': 135,
            '772': 693,
            '790': 198,
            '792': 109520,
            '797': 720,
            '798': 68666,
            '799': 39,
            '830': 108,
            '833': 54,
            '835': 207,
            '836': 2718,
            '837': 6246,
            '858': 216,
            '866': 27,
            '869': 234,
            '874': 4428,
            '877': 4428,
            '883': 3920,
            '884': 28,
            '888': 6713,
            '891': 6713,
            '896': 21,
            '901': 9,
            '904': 27,
            '906': 2772,
            '907': 2772,
            '908': 234,
            '917': 99,
            '926': 27,
            '927': 9,
            '932': 153,
            '934': 2772,
            '935': 2835,
            '938': 47115,
            '941': 162,
            '942': 162,
            '946': 47718,
            '947': 47502,
            '950': 46989,
            '953': 21699,
            undefined: 20487,
        },
        'breedWithAuto(uint256,uint256)': {
            '1001': 1610,
            '1002': 138,
            '1003': 138,
            '1004': 138,
            '1005': 138,
            '1009': 920,
            '1819': 644,
            '1827': 138,
            '187': 11232,
            '1872': 64992,
            '1946': 46,
            '495': 17,
            '500': 6,
            '516': 576,
            '517': 13776,
            '768': 1399,
            '772': 7201,
            '778': 192,
            '779': 13488,
            '780': 12480,
            '784': 1200,
            '790': 1012,
            '792': 559880,
            '797': 3680,
            '798': 475380,
            '799': 270,
            '858': 1104,
            '866': 138,
            '869': 1196,
            '874': 22632,
            '877': 22632,
            '883': 21448,
            '884': 56,
            '888': 40278,
            '891': 40278,
            '896': 126,
            '917': 528,
            '926': 144,
            '927': 48,
            '932': 782,
            '934': 14168,
            '935': 14490,
            '938': 240810,
            '941': 828,
            '942': 828,
            '946': 243892,
            '947': 242788,
            '950': 240166,
            '953': 111228,
            '961': 1344,
            '967': 10800,
            '970': 1920,
            '986': 1968,
            '989': 15072,
            '992': 34138,
            '995': 13892,
            '998': 32706,
            undefined: 115796,
        },
        'createGen0Auction(uint256)': {
            '146': 474,
            '1806': 6,
            '1809': 6,
            '1810': 6,
            '1832': 98,
            '1833': 446,
            '1835': 94,
            '1836': 448,
            '1838': 445684,
            '1839': 6,
            '1840': 30,
            '1842': 6,
            '1843': 4,
            '1846': 10430,
            '1851': 66,
            '1852': 453364,
            '1855': 58,
            '1857': 34,
            '1860': 46,
            '1864': 6,
            '1872': 13458,
            '1946': 2,
            '348': 30,
            '350': 40598,
            '352': 40568,
            '354': 46,
            '362': 3246,
            '374': 24,
            '382': 6,
            '388': 58,
            '389': 58,
            '390': 58,
            '393': 38,
            '394': 64,
            '398': 432,
            '400': 4,
            '408': 145050,
            '412': 58,
            '415': 4356,
            '416': 6,
            '417': 6,
            '418': 36,
            '419': 36,
            '420': 12,
            '425': 48,
            '427': 6,
            '532': 18,
            '533': 40604,
            '605': 28,
            '624': 2,
            '629': 24,
            undefined: 2236,
        },
        'createSaleAuction(uint256,uint256,uint256,uint256)': {
            '1707': 2443,
            '1719': 1280,
            '1723': 1120,
            '1724': 7360,
            '1727': 5796998,
            '1728': 96,
            '1729': 96,
            '1730': 96,
            '1731': 96,
            '1732': 64,
            '187': 7691,
            '1872': 15642,
            '1946': 31,
            '516': 384,
            '517': 9184,
            '532': 288,
            '533': 649664,
            '842': 384,
            '845': 96,
            '847': 736,
            '849': 17120,
            undefined: 22724,
        },
        'createSiringAuction(uint256,uint256,uint256,uint256)': {
            '1707': 64,
            '1727': 744160,
            '1739': 236,
            '1751': 160,
            '1752': 152,
            '1753': 920,
            '1756': 4380,
            '1757': 12,
            '1758': 12,
            '1759': 12,
            '1760': 12,
            '1761': 8,
            '187': 936,
            '1872': 2336,
            '1946': 4,
            '516': 48,
            '517': 1148,
            '532': 36,
            '533': 81208,
            '768': 60,
            '772': 308,
            '830': 48,
            '833': 24,
            '835': 92,
            '836': 1208,
            '837': 2776,
            undefined: 3904,
        },
        'transfer(address,uint256)': {
            '187': 936,
            '1872': 4272,
            '1946': 4,
            '2000': 48,
            '2005': 4,
            '348': 60,
            '350': 21196,
            '352': 21136,
            '354': 92,
            '355': 21172,
            '357': 21136,
            '359': 21100,
            '362': 6528,
            '516': 48,
            '517': 1148,
            '549': 200,
            '557': 104,
            '561': 148,
            '565': 952,
            '566': 952,
            '569': 160,
            '572': 88,
            undefined: 4032,
        },
    },
    name: 'KittyCore',
    optimized: true,
    optimizedRounds: 200,
    solcVersion: 'v0.4.18+commit.9cf6e910',
    sourcecode:
        "pragma solidity ^0.4.11;\r\n\r\n\r\n/**\r\n * @title Ownable\r\n * @dev The Ownable contract has an owner address, and provides basic authorization control\r\n * functions, this simplifies the implementation of \"user permissions\".\r\n */\r\ncontract Ownable {\r\n  address public owner;\r\n\r\n\r\n  /**\r\n   * @dev The Ownable constructor sets the original `owner` of the contract to the sender\r\n   * account.\r\n   */\r\n  function Ownable() {\r\n    owner = msg.sender;\r\n  }\r\n\r\n\r\n  /**\r\n   * @dev Throws if called by any account other than the owner.\r\n   */\r\n  modifier onlyOwner() {\r\n    require(msg.sender == owner);\r\n    _;\r\n  }\r\n\r\n\r\n  /**\r\n   * @dev Allows the current owner to transfer control of the contract to a newOwner.\r\n   * @param newOwner The address to transfer ownership to.\r\n   */\r\n  function transferOwnership(address newOwner) onlyOwner {\r\n    if (newOwner != address(0)) {\r\n      owner = newOwner;\r\n    }\r\n  }\r\n\r\n}\r\n\r\n\r\n\r\n/// @title Interface for contracts conforming to ERC-721: Non-Fungible Tokens\r\n/// @author Dieter Shirley <,<a href=\"/cdn-cgi/l/email-protection\" class=\"__cf_email__\" data-cfemail=\"bedadbcadbfedfc6d7d1d3c4dbd090ddd1\">[email protected]</a>,> (https://github.com/dete)\r\ncontract ERC721 {\r\n    // Required methods\r\n    function totalSupply() public view returns (uint256 total);\r\n    function balanceOf(address _owner) public view returns (uint256 balance);\r\n    function ownerOf(uint256 _tokenId) external view returns (address owner);\r\n    function approve(address _to, uint256 _tokenId) external;\r\n    function transfer(address _to, uint256 _tokenId) external;\r\n    function transferFrom(address _from, address _to, uint256 _tokenId) external;\r\n\r\n    // Events\r\n    event Transfer(address from, address to, uint256 tokenId);\r\n    event Approval(address owner, address approved, uint256 tokenId);\r\n\r\n    // Optional\r\n    // function name() public view returns (string name);\r\n    // function symbol() public view returns (string symbol);\r\n    // function tokensOfOwner(address _owner) external view returns (uint256[] tokenIds);\r\n    // function tokenMetadata(uint256 _tokenId, string _preferredTransport) public view returns (string infoUrl);\r\n\r\n    // ERC-165 Compatibility (https://github.com/ethereum/EIPs/issues/165)\r\n    function supportsInterface(bytes4 _interfaceID) external view returns (bool);\r\n}\r\n\r\n\r\n// // Auction wrapper functions\r\n\r\n\r\n// Auction wrapper functions\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/// @title SEKRETOOOO\r\ncontract GeneScienceInterface {\r\n    /// @dev simply a boolean to indicate this is the contract we expect to be\r\n    function isGeneScience() public pure returns (bool);\r\n\r\n    /// @dev given genes of kitten 1 & 2, return a genetic combination - may have a random factor\r\n    /// @param genes1 genes of mom\r\n    /// @param genes2 genes of sire\r\n    /// @return the genes that are supposed to be passed down the child\r\n    function mixGenes(uint256 genes1, uint256 genes2, uint256 targetBlock) public returns (uint256);\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/// @title A facet of KittyCore that manages special access privileges.\r\n/// @author Axiom Zen (https://www.axiomzen.co)\r\n/// @dev See the KittyCore contract documentation to understand how the various contract facets are arranged.\r\ncontract KittyAccessControl {\r\n    // This facet controls access control for CryptoKitties. There are four roles managed here:\r\n    //\r\n    //     - The CEO: The CEO can reassign other roles and change the addresses of our dependent smart\r\n    //         contracts. It is also the only role that can unpause the smart contract. It is initially\r\n    //         set to the address that created the smart contract in the KittyCore constructor.\r\n    //\r\n    //     - The CFO: The CFO can withdraw funds from KittyCore and its auction contracts.\r\n    //\r\n    //     - The COO: The COO can release gen0 kitties to auction, and mint promo cats.\r\n    //\r\n    // It should be noted that these roles are distinct without overlap in their access abilities, the\r\n    // abilities listed for each role above are exhaustive. In particular, while the CEO can assign any\r\n    // address to any role, the CEO address itself doesn't have the ability to act in those roles. This\r\n    // restriction is intentional so that we aren't tempted to use the CEO address frequently out of\r\n    // convenience. The less we use an address, the less likely it is that we somehow compromise the\r\n    // account.\r\n\r\n    /// @dev Emited when contract is upgraded - See README.md for updgrade plan\r\n    event ContractUpgrade(address newContract);\r\n\r\n    // The addresses of the accounts (or contracts) that can execute actions within each roles.\r\n    address public ceoAddress;\r\n    address public cfoAddress;\r\n    address public cooAddress;\r\n\r\n    // @dev Keeps track whether the contract is paused. When that is true, most actions are blocked\r\n    bool public paused = false;\r\n\r\n    /// @dev Access modifier for CEO-only functionality\r\n    modifier onlyCEO() {\r\n        require(msg.sender == ceoAddress);\r\n        _;\r\n    }\r\n\r\n    /// @dev Access modifier for CFO-only functionality\r\n    modifier onlyCFO() {\r\n        require(msg.sender == cfoAddress);\r\n        _;\r\n    }\r\n\r\n    /// @dev Access modifier for COO-only functionality\r\n    modifier onlyCOO() {\r\n        require(msg.sender == cooAddress);\r\n        _;\r\n    }\r\n\r\n    modifier onlyCLevel() {\r\n        require(\r\n            msg.sender == cooAddress ||\r\n            msg.sender == ceoAddress ||\r\n            msg.sender == cfoAddress\r\n        );\r\n        _;\r\n    }\r\n\r\n    /// @dev Assigns a new address to act as the CEO. Only available to the current CEO.\r\n    /// @param _newCEO The address of the new CEO\r\n    function setCEO(address _newCEO) external onlyCEO {\r\n        require(_newCEO != address(0));\r\n\r\n        ceoAddress = _newCEO;\r\n    }\r\n\r\n    /// @dev Assigns a new address to act as the CFO. Only available to the current CEO.\r\n    /// @param _newCFO The address of the new CFO\r\n    function setCFO(address _newCFO) external onlyCEO {\r\n        require(_newCFO != address(0));\r\n\r\n        cfoAddress = _newCFO;\r\n    }\r\n\r\n    /// @dev Assigns a new address to act as the COO. Only available to the current CEO.\r\n    /// @param _newCOO The address of the new COO\r\n    function setCOO(address _newCOO) external onlyCEO {\r\n        require(_newCOO != address(0));\r\n\r\n        cooAddress = _newCOO;\r\n    }\r\n\r\n    /*** Pausable functionality adapted from OpenZeppelin ***/\r\n\r\n    /// @dev Modifier to allow actions only when the contract IS NOT paused\r\n    modifier whenNotPaused() {\r\n        require(!paused);\r\n        _;\r\n    }\r\n\r\n    /// @dev Modifier to allow actions only when the contract IS paused\r\n    modifier whenPaused {\r\n        require(paused);\r\n        _;\r\n    }\r\n\r\n    /// @dev Called by any \"C-level\" role to pause the contract. Used only when\r\n    ///  a bug or exploit is detected and we need to limit damage.\r\n    function pause() external onlyCLevel whenNotPaused {\r\n        paused = true;\r\n    }\r\n\r\n    /// @dev Unpauses the smart contract. Can only be called by the CEO, since\r\n    ///  one reason we may pause the contract is when CFO or COO accounts are\r\n    ///  compromised.\r\n    /// @notice This is public rather than external so it can be called by\r\n    ///  derived contracts.\r\n    function unpause() public onlyCEO whenPaused {\r\n        // can't unpause if contract was upgraded\r\n        paused = false;\r\n    }\r\n}\r\n\r\n\r\n\r\n\r\n/// @title Base contract for CryptoKitties. Holds all common structs, events and base variables.\r\n/// @author Axiom Zen (https://www.axiomzen.co)\r\n/// @dev See the KittyCore contract documentation to understand how the various contract facets are arranged.\r\ncontract KittyBase is KittyAccessControl {\r\n    /*** EVENTS ***/\r\n\r\n    /// @dev The Birth event is fired whenever a new kitten comes into existence. This obviously\r\n    ///  includes any time a cat is created through the giveBirth method, but it is also called\r\n    ///  when a new gen0 cat is created.\r\n    event Birth(address owner, uint256 kittyId, uint256 matronId, uint256 sireId, uint256 genes);\r\n\r\n    /// @dev Transfer event as defined in current draft of ERC721. Emitted every time a kitten\r\n    ///  ownership is assigned, including births.\r\n    event Transfer(address from, address to, uint256 tokenId);\r\n\r\n    /*** DATA TYPES ***/\r\n\r\n    /// @dev The main Kitty struct. Every cat in CryptoKitties is represented by a copy\r\n    ///  of this structure, so great care was taken to ensure that it fits neatly into\r\n    ///  exactly two 256-bit words. Note that the order of the members in this structure\r\n    ///  is important because of the byte-packing rules used by Ethereum.\r\n    ///  Ref: http://solidity.readthedocs.io/en/develop/miscellaneous.html\r\n    struct Kitty {\r\n        // The Kitty's genetic code is packed into these 256-bits, the format is\r\n        // sooper-sekret! A cat's genes never change.\r\n        uint256 genes;\r\n\r\n        // The timestamp from the block when this cat came into existence.\r\n        uint64 birthTime;\r\n\r\n        // The minimum timestamp after which this cat can engage in breeding\r\n        // activities again. This same timestamp is used for the pregnancy\r\n        // timer (for matrons) as well as the siring cooldown.\r\n        uint64 cooldownEndBlock;\r\n\r\n        // The ID of the parents of this kitty, set to 0 for gen0 cats.\r\n        // Note that using 32-bit unsigned integers limits us to a \"mere\"\r\n        // 4 billion cats. This number might seem small until you realize\r\n        // that Ethereum currently has a limit of about 500 million\r\n        // transactions per year! So, this definitely won't be a problem\r\n        // for several years (even as Ethereum learns to scale).\r\n        uint32 matronId;\r\n        uint32 sireId;\r\n\r\n        // Set to the ID of the sire cat for matrons that are pregnant,\r\n        // zero otherwise. A non-zero value here is how we know a cat\r\n        // is pregnant. Used to retrieve the genetic material for the new\r\n        // kitten when the birth transpires.\r\n        uint32 siringWithId;\r\n\r\n        // Set to the index in the cooldown array (see below) that represents\r\n        // the current cooldown duration for this Kitty. This starts at zero\r\n        // for gen0 cats, and is initialized to floor(generation/2) for others.\r\n        // Incremented by one for each successful breeding action, regardless\r\n        // of whether this cat is acting as matron or sire.\r\n        uint16 cooldownIndex;\r\n\r\n        // The \"generation number\" of this cat. Cats minted by the CK contract\r\n        // for sale are called \"gen0\" and have a generation number of 0. The\r\n        // generation number of all other cats is the larger of the two generation\r\n        // numbers of their parents, plus one.\r\n        // (i.e. max(matron.generation, sire.generation) + 1)\r\n        uint16 generation;\r\n    }\r\n\r\n    /*** CONSTANTS ***/\r\n\r\n    /// @dev A lookup table indicating the cooldown duration after any successful\r\n    ///  breeding action, called \"pregnancy time\" for matrons and \"siring cooldown\"\r\n    ///  for sires. Designed such that the cooldown roughly doubles each time a cat\r\n    ///  is bred, encouraging owners not to just keep breeding the same cat over\r\n    ///  and over again. Caps out at one week (a cat can breed an unbounded number\r\n    ///  of times, and the maximum cooldown is always seven days).\r\n    uint32[14] public cooldowns = [\r\n        uint32(1 minutes),\r\n        uint32(2 minutes),\r\n        uint32(5 minutes),\r\n        uint32(10 minutes),\r\n        uint32(30 minutes),\r\n        uint32(1 hours),\r\n        uint32(2 hours),\r\n        uint32(4 hours),\r\n        uint32(8 hours),\r\n        uint32(16 hours),\r\n        uint32(1 days),\r\n        uint32(2 days),\r\n        uint32(4 days),\r\n        uint32(7 days)\r\n    ];\r\n\r\n    // An approximation of currently how many seconds are in between blocks.\r\n    uint256 public secondsPerBlock = 15;\r\n\r\n    /*** STORAGE ***/\r\n\r\n    /// @dev An array containing the Kitty struct for all Kitties in existence. The ID\r\n    ///  of each cat is actually an index into this array. Note that ID 0 is a negacat,\r\n    ///  the unKitty, the mythical beast that is the parent of all gen0 cats. A bizarre\r\n    ///  creature that is both matron and sire... to itself! Has an invalid genetic code.\r\n    ///  In other words, cat ID 0 is invalid... ;-)\r\n    Kitty[] kitties;\r\n\r\n    /// @dev A mapping from cat IDs to the address that owns them. All cats have\r\n    ///  some valid owner address, even gen0 cats are created with a non-zero owner.\r\n    mapping (uint256 => address) public kittyIndexToOwner;\r\n\r\n    // @dev A mapping from owner address to count of tokens that address owns.\r\n    //  Used internally inside balanceOf() to resolve ownership count.\r\n    mapping (address => uint256) ownershipTokenCount;\r\n\r\n    /// @dev A mapping from KittyIDs to an address that has been approved to call\r\n    ///  transferFrom(). Each Kitty can only have one approved address for transfer\r\n    ///  at any time. A zero value means no approval is outstanding.\r\n    mapping (uint256 => address) public kittyIndexToApproved;\r\n\r\n    /// @dev A mapping from KittyIDs to an address that has been approved to use\r\n    ///  this Kitty for siring via breedWith(). Each Kitty can only have one approved\r\n    ///  address for siring at any time. A zero value means no approval is outstanding.\r\n    mapping (uint256 => address) public sireAllowedToAddress;\r\n\r\n    /// @dev The address of the ClockAuction contract that handles sales of Kitties. This\r\n    ///  same contract handles both peer-to-peer sales as well as the gen0 sales which are\r\n    ///  initiated every 15 minutes.\r\n    SaleClockAuction public saleAuction;\r\n\r\n    /// @dev The address of a custom ClockAuction subclassed contract that handles siring\r\n    ///  auctions. Needs to be separate from saleAuction because the actions taken on success\r\n    ///  after a sales and siring auction are quite different.\r\n    SiringClockAuction public siringAuction;\r\n\r\n    /// @dev Assigns ownership of a specific Kitty to an address.\r\n    function _transfer(address _from, address _to, uint256 _tokenId) internal {\r\n        // Since the number of kittens is capped to 2^32 we can't overflow this\r\n        ownershipTokenCount[_to]++;\r\n        // transfer ownership\r\n        kittyIndexToOwner[_tokenId] = _to;\r\n        // When creating new kittens _from is 0x0, but we can't account that address.\r\n        if (_from != address(0)) {\r\n            ownershipTokenCount[_from]--;\r\n            // once the kitten is transferred also clear sire allowances\r\n            delete sireAllowedToAddress[_tokenId];\r\n            // clear any previously approved ownership exchange\r\n            delete kittyIndexToApproved[_tokenId];\r\n        }\r\n        // Emit the transfer event.\r\n        Transfer(_from, _to, _tokenId);\r\n    }\r\n\r\n    /// @dev An internal method that creates a new kitty and stores it. This\r\n    ///  method doesn't do any checking and should only be called when the\r\n    ///  input data is known to be valid. Will generate both a Birth event\r\n    ///  and a Transfer event.\r\n    /// @param _matronId The kitty ID of the matron of this cat (zero for gen0)\r\n    /// @param _sireId The kitty ID of the sire of this cat (zero for gen0)\r\n    /// @param _generation The generation number of this cat, must be computed by caller.\r\n    /// @param _genes The kitty's genetic code.\r\n    /// @param _owner The inital owner of this cat, must be non-zero (except for the unKitty, ID 0)\r\n    function _createKitty(\r\n        uint256 _matronId,\r\n        uint256 _sireId,\r\n        uint256 _generation,\r\n        uint256 _genes,\r\n        address _owner\r\n    )\r\n        internal\r\n        returns (uint)\r\n    {\r\n        // These requires are not strictly necessary, our calling code should make\r\n        // sure that these conditions are never broken. However! _createKitty() is already\r\n        // an expensive call (for storage), and it doesn't hurt to be especially careful\r\n        // to ensure our data structures are always valid.\r\n        require(_matronId == uint256(uint32(_matronId)));\r\n        require(_sireId == uint256(uint32(_sireId)));\r\n        require(_generation == uint256(uint16(_generation)));\r\n\r\n        // New kitty starts with the same cooldown as parent gen/2\r\n        uint16 cooldownIndex = uint16(_generation / 2);\r\n        if (cooldownIndex > 13) {\r\n            cooldownIndex = 13;\r\n        }\r\n\r\n        Kitty memory _kitty = Kitty({\r\n            genes: _genes,\r\n            birthTime: uint64(now),\r\n            cooldownEndBlock: 0,\r\n            matronId: uint32(_matronId),\r\n            sireId: uint32(_sireId),\r\n            siringWithId: 0,\r\n            cooldownIndex: cooldownIndex,\r\n            generation: uint16(_generation)\r\n        });\r\n        uint256 newKittenId = kitties.push(_kitty) - 1;\r\n\r\n        // It's probably never going to happen, 4 billion cats is A LOT, but\r\n        // let's just be 100% sure we never let this happen.\r\n        require(newKittenId == uint256(uint32(newKittenId)));\r\n\r\n        // emit the birth event\r\n        Birth(\r\n            _owner,\r\n            newKittenId,\r\n            uint256(_kitty.matronId),\r\n            uint256(_kitty.sireId),\r\n            _kitty.genes\r\n        );\r\n\r\n        // This will assign ownership, and also emit the Transfer event as\r\n        // per ERC721 draft\r\n        _transfer(0, _owner, newKittenId);\r\n\r\n        return newKittenId;\r\n    }\r\n\r\n    // Any C-level can fix how many seconds per blocks are currently observed.\r\n    function setSecondsPerBlock(uint256 secs) external onlyCLevel {\r\n        require(secs < cooldowns[0]);\r\n        secondsPerBlock = secs;\r\n    }\r\n}\r\n\r\n\r\n\r\n\r\n\r\n/// @title The external contract that is responsible for generating metadata for the kitties,\r\n///  it has one function that will return the data as bytes.\r\ncontract ERC721Metadata {\r\n    /// @dev Given a token Id, returns a byte array that is supposed to be converted into string.\r\n    function getMetadata(uint256 _tokenId, string) public view returns (bytes32[4] buffer, uint256 count) {\r\n        if (_tokenId == 1) {\r\n            buffer[0] = \"Hello World! :D\";\r\n            count = 15;\r\n        } else if (_tokenId == 2) {\r\n            buffer[0] = \"I would definitely choose a medi\";\r\n            buffer[1] = \"um length string.\";\r\n            count = 49;\r\n        } else if (_tokenId == 3) {\r\n            buffer[0] = \"Lorem ipsum dolor sit amet, mi e\";\r\n            buffer[1] = \"st accumsan dapibus augue lorem,\";\r\n            buffer[2] = \" tristique vestibulum id, libero\";\r\n            buffer[3] = \" suscipit varius sapien aliquam.\";\r\n            count = 128;\r\n        }\r\n    }\r\n}\r\n\r\n\r\n/// @title The facet of the CryptoKitties core contract that manages ownership, ERC-721 (draft) compliant.\r\n/// @author Axiom Zen (https://www.axiomzen.co)\r\n/// @dev Ref: https://github.com/ethereum/EIPs/issues/721\r\n///  See the KittyCore contract documentation to understand how the various contract facets are arranged.\r\ncontract KittyOwnership is KittyBase, ERC721 {\r\n\r\n    /// @notice Name and symbol of the non fungible token, as defined in ERC721.\r\n    string public constant name = \"CryptoKitties\";\r\n    string public constant symbol = \"CK\";\r\n\r\n    // The contract that will return kitty metadata\r\n    ERC721Metadata public erc721Metadata;\r\n\r\n    bytes4 constant InterfaceSignature_ERC165 =\r\n        bytes4(keccak256('supportsInterface(bytes4)'));\r\n\r\n    bytes4 constant InterfaceSignature_ERC721 =\r\n        bytes4(keccak256('name()')) ^\r\n        bytes4(keccak256('symbol()')) ^\r\n        bytes4(keccak256('totalSupply()')) ^\r\n        bytes4(keccak256('balanceOf(address)')) ^\r\n        bytes4(keccak256('ownerOf(uint256)')) ^\r\n        bytes4(keccak256('approve(address,uint256)')) ^\r\n        bytes4(keccak256('transfer(address,uint256)')) ^\r\n        bytes4(keccak256('transferFrom(address,address,uint256)')) ^\r\n        bytes4(keccak256('tokensOfOwner(address)')) ^\r\n        bytes4(keccak256('tokenMetadata(uint256,string)'));\r\n\r\n    /// @notice Introspection interface as per ERC-165 (https://github.com/ethereum/EIPs/issues/165).\r\n    ///  Returns true for any standardized interfaces implemented by this contract. We implement\r\n    ///  ERC-165 (obviously!) and ERC-721.\r\n    function supportsInterface(bytes4 _interfaceID) external view returns (bool)\r\n    {\r\n        // DEBUG ONLY\r\n        //require((InterfaceSignature_ERC165 == 0x01ffc9a7) && (InterfaceSignature_ERC721 == 0x9a20483d));\r\n\r\n        return ((_interfaceID == InterfaceSignature_ERC165) || (_interfaceID == InterfaceSignature_ERC721));\r\n    }\r\n\r\n    /// @dev Set the address of the sibling contract that tracks metadata.\r\n    ///  CEO only.\r\n    function setMetadataAddress(address _contractAddress) public onlyCEO {\r\n        erc721Metadata = ERC721Metadata(_contractAddress);\r\n    }\r\n\r\n    // Internal utility functions: These functions all assume that their input arguments\r\n    // are valid. We leave it to public methods to sanitize their inputs and follow\r\n    // the required logic.\r\n\r\n    /// @dev Checks if a given address is the current owner of a particular Kitty.\r\n    /// @param _claimant the address we are validating against.\r\n    /// @param _tokenId kitten id, only valid when > 0\r\n    function _owns(address _claimant, uint256 _tokenId) internal view returns (bool) {\r\n        return kittyIndexToOwner[_tokenId] == _claimant;\r\n    }\r\n\r\n    /// @dev Checks if a given address currently has transferApproval for a particular Kitty.\r\n    /// @param _claimant the address we are confirming kitten is approved for.\r\n    /// @param _tokenId kitten id, only valid when > 0\r\n    function _approvedFor(address _claimant, uint256 _tokenId) internal view returns (bool) {\r\n        return kittyIndexToApproved[_tokenId] == _claimant;\r\n    }\r\n\r\n    /// @dev Marks an address as being approved for transferFrom(), overwriting any previous\r\n    ///  approval. Setting _approved to address(0) clears all transfer approval.\r\n    ///  NOTE: _approve() does NOT send the Approval event. This is intentional because\r\n    ///  _approve() and transferFrom() are used together for putting Kitties on auction, and\r\n    ///  there is no value in spamming the log with Approval events in that case.\r\n    function _approve(uint256 _tokenId, address _approved) internal {\r\n        kittyIndexToApproved[_tokenId] = _approved;\r\n    }\r\n\r\n    /// @notice Returns the number of Kitties owned by a specific address.\r\n    /// @param _owner The owner address to check.\r\n    /// @dev Required for ERC-721 compliance\r\n    function balanceOf(address _owner) public view returns (uint256 count) {\r\n        return ownershipTokenCount[_owner];\r\n    }\r\n\r\n    /// @notice Transfers a Kitty to another address. If transferring to a smart\r\n    ///  contract be VERY CAREFUL to ensure that it is aware of ERC-721 (or\r\n    ///  CryptoKitties specifically) or your Kitty may be lost forever. Seriously.\r\n    /// @param _to The address of the recipient, can be a user or contract.\r\n    /// @param _tokenId The ID of the Kitty to transfer.\r\n    /// @dev Required for ERC-721 compliance.\r\n    function transfer(\r\n        address _to,\r\n        uint256 _tokenId\r\n    )\r\n        external\r\n        whenNotPaused\r\n    {\r\n        // Safety check to prevent against an unexpected 0x0 default.\r\n        require(_to != address(0));\r\n        // Disallow transfers to this contract to prevent accidental misuse.\r\n        // The contract should never own any kitties (except very briefly\r\n        // after a gen0 cat is created and before it goes on auction).\r\n        require(_to != address(this));\r\n        // Disallow transfers to the auction contracts to prevent accidental\r\n        // misuse. Auction contracts should only take ownership of kitties\r\n        // through the allow + transferFrom flow.\r\n        require(_to != address(saleAuction));\r\n        require(_to != address(siringAuction));\r\n\r\n        // You can only send your own cat.\r\n        require(_owns(msg.sender, _tokenId));\r\n\r\n        // Reassign ownership, clear pending approvals, emit Transfer event.\r\n        _transfer(msg.sender, _to, _tokenId);\r\n    }\r\n\r\n    /// @notice Grant another address the right to transfer a specific Kitty via\r\n    ///  transferFrom(). This is the preferred flow for transfering NFTs to contracts.\r\n    /// @param _to The address to be granted transfer approval. Pass address(0) to\r\n    ///  clear all approvals.\r\n    /// @param _tokenId The ID of the Kitty that can be transferred if this call succeeds.\r\n    /// @dev Required for ERC-721 compliance.\r\n    function approve(\r\n        address _to,\r\n        uint256 _tokenId\r\n    )\r\n        external\r\n        whenNotPaused\r\n    {\r\n        // Only an owner can grant transfer approval.\r\n        require(_owns(msg.sender, _tokenId));\r\n\r\n        // Register the approval (replacing any previous approval).\r\n        _approve(_tokenId, _to);\r\n\r\n        // Emit approval event.\r\n        Approval(msg.sender, _to, _tokenId);\r\n    }\r\n\r\n    /// @notice Transfer a Kitty owned by another address, for which the calling address\r\n    ///  has previously been granted transfer approval by the owner.\r\n    /// @param _from The address that owns the Kitty to be transfered.\r\n    /// @param _to The address that should take ownership of the Kitty. Can be any address,\r\n    ///  including the caller.\r\n    /// @param _tokenId The ID of the Kitty to be transferred.\r\n    /// @dev Required for ERC-721 compliance.\r\n    function transferFrom(\r\n        address _from,\r\n        address _to,\r\n        uint256 _tokenId\r\n    )\r\n        external\r\n        whenNotPaused\r\n    {\r\n        // Safety check to prevent against an unexpected 0x0 default.\r\n        require(_to != address(0));\r\n        // Disallow transfers to this contract to prevent accidental misuse.\r\n        // The contract should never own any kitties (except very briefly\r\n        // after a gen0 cat is created and before it goes on auction).\r\n        require(_to != address(this));\r\n        // Check for approval and valid ownership\r\n        require(_approvedFor(msg.sender, _tokenId));\r\n        require(_owns(_from, _tokenId));\r\n\r\n        // Reassign ownership (also clears pending approvals and emits Transfer event).\r\n        _transfer(_from, _to, _tokenId);\r\n    }\r\n\r\n    /// @notice Returns the total number of Kitties currently in existence.\r\n    /// @dev Required for ERC-721 compliance.\r\n    function totalSupply() public view returns (uint) {\r\n        return kitties.length - 1;\r\n    }\r\n\r\n    /// @notice Returns the address currently assigned ownership of a given Kitty.\r\n    /// @dev Required for ERC-721 compliance.\r\n    function ownerOf(uint256 _tokenId)\r\n        external\r\n        view\r\n        returns (address owner)\r\n    {\r\n        owner = kittyIndexToOwner[_tokenId];\r\n\r\n        require(owner != address(0));\r\n    }\r\n\r\n    /// @notice Returns a list of all Kitty IDs assigned to an address.\r\n    /// @param _owner The owner whose Kitties we are interested in.\r\n    /// @dev This method MUST NEVER be called by smart contract code. First, it's fairly\r\n    ///  expensive (it walks the entire Kitty array looking for cats belonging to owner),\r\n    ///  but it also returns a dynamic array, which is only supported for web3 calls, and\r\n    ///  not contract-to-contract calls.\r\n    function tokensOfOwner(address _owner) external view returns(uint256[] ownerTokens) {\r\n        uint256 tokenCount = balanceOf(_owner);\r\n\r\n        if (tokenCount == 0) {\r\n            // Return an empty array\r\n            return new uint256[](0);\r\n        } else {\r\n            uint256[] memory result = new uint256[](tokenCount);\r\n            uint256 totalCats = totalSupply();\r\n            uint256 resultIndex = 0;\r\n\r\n            // We count on the fact that all cats have IDs starting at 1 and increasing\r\n            // sequentially up to the totalCat count.\r\n            uint256 catId;\r\n\r\n            for (catId = 1; catId <= totalCats; catId++) {\r\n                if (kittyIndexToOwner[catId] == _owner) {\r\n                    result[resultIndex] = catId;\r\n                    resultIndex++;\r\n                }\r\n            }\r\n\r\n            return result;\r\n        }\r\n    }\r\n\r\n    /// @dev Adapted from memcpy() by @arachnid (Nick Johnson <,<a href=\"/cdn-cgi/l/email-protection\" class=\"__cf_email__\" data-cfemail=\"d0b1a2b1b3b8beb9b490bebfa4b4bfa4febeb5a4\">[email protected]</a>,>)\r\n    ///  This method is licenced under the Apache License.\r\n    ///  Ref: https://github.com/Arachnid/solidity-stringutils/blob/2f6ca9accb48ae14c66f1437ec50ed19a0616f78/strings.sol\r\n    function _memcpy(uint _dest, uint _src, uint _len) private view {\r\n        // Copy word-length chunks while possible\r\n        for(; _len >= 32; _len -= 32) {\r\n            assembly {\r\n                mstore(_dest, mload(_src))\r\n            }\r\n            _dest += 32;\r\n            _src += 32;\r\n        }\r\n\r\n        // Copy remaining bytes\r\n        uint256 mask = 256 ** (32 - _len) - 1;\r\n        assembly {\r\n            let srcpart := and(mload(_src), not(mask))\r\n            let destpart := and(mload(_dest), mask)\r\n            mstore(_dest, or(destpart, srcpart))\r\n        }\r\n    }\r\n\r\n    /// @dev Adapted from toString(slice) by @arachnid (Nick Johnson <,<a href=\"/cdn-cgi/l/email-protection\" class=\"__cf_email__\" data-cfemail=\"58392a393b3036313c1836372c3c372c76363d2c\">[email protected]</a>,>)\r\n    ///  This method is licenced under the Apache License.\r\n    ///  Ref: https://github.com/Arachnid/solidity-stringutils/blob/2f6ca9accb48ae14c66f1437ec50ed19a0616f78/strings.sol\r\n    function _toString(bytes32[4] _rawBytes, uint256 _stringLength) private view returns (string) {\r\n        var outputString = new string(_stringLength);\r\n        uint256 outputPtr;\r\n        uint256 bytesPtr;\r\n\r\n        assembly {\r\n            outputPtr := add(outputString, 32)\r\n            bytesPtr := _rawBytes\r\n        }\r\n\r\n        _memcpy(outputPtr, bytesPtr, _stringLength);\r\n\r\n        return outputString;\r\n    }\r\n\r\n    /// @notice Returns a URI pointing to a metadata package for this token conforming to\r\n    ///  ERC-721 (https://github.com/ethereum/EIPs/issues/721)\r\n    /// @param _tokenId The ID number of the Kitty whose metadata should be returned.\r\n    function tokenMetadata(uint256 _tokenId, string _preferredTransport) external view returns (string infoUrl) {\r\n        require(erc721Metadata != address(0));\r\n        bytes32[4] memory buffer;\r\n        uint256 count;\r\n        (buffer, count) = erc721Metadata.getMetadata(_tokenId, _preferredTransport);\r\n\r\n        return _toString(buffer, count);\r\n    }\r\n}\r\n\r\n\r\n\r\n/// @title A facet of KittyCore that manages Kitty siring, gestation, and birth.\r\n/// @author Axiom Zen (https://www.axiomzen.co)\r\n/// @dev See the KittyCore contract documentation to understand how the various contract facets are arranged.\r\ncontract KittyBreeding is KittyOwnership {\r\n\r\n    /// @dev The Pregnant event is fired when two cats successfully breed and the pregnancy\r\n    ///  timer begins for the matron.\r\n    event Pregnant(address owner, uint256 matronId, uint256 sireId, uint256 cooldownEndBlock);\r\n\r\n    /// @notice The minimum payment required to use breedWithAuto(). This fee goes towards\r\n    ///  the gas cost paid by whatever calls giveBirth(), and can be dynamically updated by\r\n    ///  the COO role as the gas price changes.\r\n    uint256 public autoBirthFee = 2 finney;\r\n\r\n    // Keeps track of number of pregnant kitties.\r\n    uint256 public pregnantKitties;\r\n\r\n    /// @dev The address of the sibling contract that is used to implement the sooper-sekret\r\n    ///  genetic combination algorithm.\r\n    GeneScienceInterface public geneScience;\r\n\r\n    /// @dev Update the address of the genetic contract, can only be called by the CEO.\r\n    /// @param _address An address of a GeneScience contract instance to be used from this point forward.\r\n    function setGeneScienceAddress(address _address) external onlyCEO {\r\n        GeneScienceInterface candidateContract = GeneScienceInterface(_address);\r\n\r\n        // NOTE: verify that a contract is what we expect - https://github.com/Lunyr/crowdsale-contracts/blob/cfadd15986c30521d8ba7d5b6f57b4fefcc7ac38/contracts/LunyrToken.sol#L117\r\n        require(candidateContract.isGeneScience());\r\n\r\n        // Set the new contract address\r\n        geneScience = candidateContract;\r\n    }\r\n\r\n    /// @dev Checks that a given kitten is able to breed. Requires that the\r\n    ///  current cooldown is finished (for sires) and also checks that there is\r\n    ///  no pending pregnancy.\r\n    function _isReadyToBreed(Kitty _kit) internal view returns (bool) {\r\n        // In addition to checking the cooldownEndBlock, we also need to check to see if\r\n        // the cat has a pending birth; there can be some period of time between the end\r\n        // of the pregnacy timer and the birth event.\r\n        return (_kit.siringWithId == 0) && (_kit.cooldownEndBlock <= uint64(block.number));\r\n    }\r\n\r\n    /// @dev Check if a sire has authorized breeding with this matron. True if both sire\r\n    ///  and matron have the same owner, or if the sire has given siring permission to\r\n    ///  the matron's owner (via approveSiring()).\r\n    function _isSiringPermitted(uint256 _sireId, uint256 _matronId) internal view returns (bool) {\r\n        address matronOwner = kittyIndexToOwner[_matronId];\r\n        address sireOwner = kittyIndexToOwner[_sireId];\r\n\r\n        // Siring is okay if they have same owner, or if the matron's owner was given\r\n        // permission to breed with this sire.\r\n        return (matronOwner == sireOwner || sireAllowedToAddress[_sireId] == matronOwner);\r\n    }\r\n\r\n    /// @dev Set the cooldownEndTime for the given Kitty, based on its current cooldownIndex.\r\n    ///  Also increments the cooldownIndex (unless it has hit the cap).\r\n    /// @param _kitten A reference to the Kitty in storage which needs its timer started.\r\n    function _triggerCooldown(Kitty storage _kitten) internal {\r\n        // Compute an estimation of the cooldown time in blocks (based on current cooldownIndex).\r\n        _kitten.cooldownEndBlock = uint64((cooldowns[_kitten.cooldownIndex]/secondsPerBlock) + block.number);\r\n\r\n        // Increment the breeding count, clamping it at 13, which is the length of the\r\n        // cooldowns array. We could check the array size dynamically, but hard-coding\r\n        // this as a constant saves gas. Yay, Solidity!\r\n        if (_kitten.cooldownIndex < 13) {\r\n            _kitten.cooldownIndex += 1;\r\n        }\r\n    }\r\n\r\n    /// @notice Grants approval to another user to sire with one of your Kitties.\r\n    /// @param _addr The address that will be able to sire with your Kitty. Set to\r\n    ///  address(0) to clear all siring approvals for this Kitty.\r\n    /// @param _sireId A Kitty that you own that _addr will now be able to sire with.\r\n    function approveSiring(address _addr, uint256 _sireId)\r\n        external\r\n        whenNotPaused\r\n    {\r\n        require(_owns(msg.sender, _sireId));\r\n        sireAllowedToAddress[_sireId] = _addr;\r\n    }\r\n\r\n    /// @dev Updates the minimum payment required for calling giveBirthAuto(). Can only\r\n    ///  be called by the COO address. (This fee is used to offset the gas cost incurred\r\n    ///  by the autobirth daemon).\r\n    function setAutoBirthFee(uint256 val) external onlyCOO {\r\n        autoBirthFee = val;\r\n    }\r\n\r\n    /// @dev Checks to see if a given Kitty is pregnant and (if so) if the gestation\r\n    ///  period has passed.\r\n    function _isReadyToGiveBirth(Kitty _matron) private view returns (bool) {\r\n        return (_matron.siringWithId != 0) && (_matron.cooldownEndBlock <= uint64(block.number));\r\n    }\r\n\r\n    /// @notice Checks that a given kitten is able to breed (i.e. it is not pregnant or\r\n    ///  in the middle of a siring cooldown).\r\n    /// @param _kittyId reference the id of the kitten, any user can inquire about it\r\n    function isReadyToBreed(uint256 _kittyId)\r\n        public\r\n        view\r\n        returns (bool)\r\n    {\r\n        require(_kittyId > 0);\r\n        Kitty storage kit = kitties[_kittyId];\r\n        return _isReadyToBreed(kit);\r\n    }\r\n\r\n    /// @dev Checks whether a kitty is currently pregnant.\r\n    /// @param _kittyId reference the id of the kitten, any user can inquire about it\r\n    function isPregnant(uint256 _kittyId)\r\n        public\r\n        view\r\n        returns (bool)\r\n    {\r\n        require(_kittyId > 0);\r\n        // A kitty is pregnant if and only if this field is set\r\n        return kitties[_kittyId].siringWithId != 0;\r\n    }\r\n\r\n    /// @dev Internal check to see if a given sire and matron are a valid mating pair. DOES NOT\r\n    ///  check ownership permissions (that is up to the caller).\r\n    /// @param _matron A reference to the Kitty struct of the potential matron.\r\n    /// @param _matronId The matron's ID.\r\n    /// @param _sire A reference to the Kitty struct of the potential sire.\r\n    /// @param _sireId The sire's ID\r\n    function _isValidMatingPair(\r\n        Kitty storage _matron,\r\n        uint256 _matronId,\r\n        Kitty storage _sire,\r\n        uint256 _sireId\r\n    )\r\n        private\r\n        view\r\n        returns(bool)\r\n    {\r\n        // A Kitty can't breed with itself!\r\n        if (_matronId == _sireId) {\r\n            return false;\r\n        }\r\n\r\n        // Kitties can't breed with their parents.\r\n        if (_matron.matronId == _sireId || _matron.sireId == _sireId) {\r\n            return false;\r\n        }\r\n        if (_sire.matronId == _matronId || _sire.sireId == _matronId) {\r\n            return false;\r\n        }\r\n\r\n        // We can short circuit the sibling check (below) if either cat is\r\n        // gen zero (has a matron ID of zero).\r\n        if (_sire.matronId == 0 || _matron.matronId == 0) {\r\n            return true;\r\n        }\r\n\r\n        // Kitties can't breed with full or half siblings.\r\n        if (_sire.matronId == _matron.matronId || _sire.matronId == _matron.sireId) {\r\n            return false;\r\n        }\r\n        if (_sire.sireId == _matron.matronId || _sire.sireId == _matron.sireId) {\r\n            return false;\r\n        }\r\n\r\n        // Everything seems cool! Let's get DTF.\r\n        return true;\r\n    }\r\n\r\n    /// @dev Internal check to see if a given sire and matron are a valid mating pair for\r\n    ///  breeding via auction (i.e. skips ownership and siring approval checks).\r\n    function _canBreedWithViaAuction(uint256 _matronId, uint256 _sireId)\r\n        internal\r\n        view\r\n        returns (bool)\r\n    {\r\n        Kitty storage matron = kitties[_matronId];\r\n        Kitty storage sire = kitties[_sireId];\r\n        return _isValidMatingPair(matron, _matronId, sire, _sireId);\r\n    }\r\n\r\n    /// @notice Checks to see if two cats can breed together, including checks for\r\n    ///  ownership and siring approvals. Does NOT check that both cats are ready for\r\n    ///  breeding (i.e. breedWith could still fail until the cooldowns are finished).\r\n    ///  TODO: Shouldn't this check pregnancy and cooldowns?!?\r\n    /// @param _matronId The ID of the proposed matron.\r\n    /// @param _sireId The ID of the proposed sire.\r\n    function canBreedWith(uint256 _matronId, uint256 _sireId)\r\n        external\r\n        view\r\n        returns(bool)\r\n    {\r\n        require(_matronId > 0);\r\n        require(_sireId > 0);\r\n        Kitty storage matron = kitties[_matronId];\r\n        Kitty storage sire = kitties[_sireId];\r\n        return _isValidMatingPair(matron, _matronId, sire, _sireId) &&\r\n            _isSiringPermitted(_sireId, _matronId);\r\n    }\r\n\r\n    /// @dev Internal utility function to initiate breeding, assumes that all breeding\r\n    ///  requirements have been checked.\r\n    function _breedWith(uint256 _matronId, uint256 _sireId) internal {\r\n        // Grab a reference to the Kitties from storage.\r\n        Kitty storage sire = kitties[_sireId];\r\n        Kitty storage matron = kitties[_matronId];\r\n\r\n        // Mark the matron as pregnant, keeping track of who the sire is.\r\n        matron.siringWithId = uint32(_sireId);\r\n\r\n        // Trigger the cooldown for both parents.\r\n        _triggerCooldown(sire);\r\n        _triggerCooldown(matron);\r\n\r\n        // Clear siring permission for both parents. This may not be strictly necessary\r\n        // but it's likely to avoid confusion!\r\n        delete sireAllowedToAddress[_matronId];\r\n        delete sireAllowedToAddress[_sireId];\r\n\r\n        // Every time a kitty gets pregnant, counter is incremented.\r\n        pregnantKitties++;\r\n\r\n        // Emit the pregnancy event.\r\n        Pregnant(kittyIndexToOwner[_matronId], _matronId, _sireId, matron.cooldownEndBlock);\r\n    }\r\n\r\n    /// @notice Breed a Kitty you own (as matron) with a sire that you own, or for which you\r\n    ///  have previously been given Siring approval. Will either make your cat pregnant, or will\r\n    ///  fail entirely. Requires a pre-payment of the fee given out to the first caller of giveBirth()\r\n    /// @param _matronId The ID of the Kitty acting as matron (will end up pregnant if successful)\r\n    /// @param _sireId The ID of the Kitty acting as sire (will begin its siring cooldown if successful)\r\n    function breedWithAuto(uint256 _matronId, uint256 _sireId)\r\n        external\r\n        payable\r\n        whenNotPaused\r\n    {\r\n        // Checks for payment.\r\n        require(msg.value >= autoBirthFee);\r\n\r\n        // Caller must own the matron.\r\n        require(_owns(msg.sender, _matronId));\r\n\r\n        // Neither sire nor matron are allowed to be on auction during a normal\r\n        // breeding operation, but we don't need to check that explicitly.\r\n        // For matron: The caller of this function can't be the owner of the matron\r\n        //   because the owner of a Kitty on auction is the auction house, and the\r\n        //   auction house will never call breedWith().\r\n        // For sire: Similarly, a sire on auction will be owned by the auction house\r\n        //   and the act of transferring ownership will have cleared any oustanding\r\n        //   siring approval.\r\n        // Thus we don't need to spend gas explicitly checking to see if either cat\r\n        // is on auction.\r\n\r\n        // Check that matron and sire are both owned by caller, or that the sire\r\n        // has given siring permission to caller (i.e. matron's owner).\r\n        // Will fail for _sireId = 0\r\n        require(_isSiringPermitted(_sireId, _matronId));\r\n\r\n        // Grab a reference to the potential matron\r\n        Kitty storage matron = kitties[_matronId];\r\n\r\n        // Make sure matron isn't pregnant, or in the middle of a siring cooldown\r\n        require(_isReadyToBreed(matron));\r\n\r\n        // Grab a reference to the potential sire\r\n        Kitty storage sire = kitties[_sireId];\r\n\r\n        // Make sure sire isn't pregnant, or in the middle of a siring cooldown\r\n        require(_isReadyToBreed(sire));\r\n\r\n        // Test that these cats are a valid mating pair.\r\n        require(_isValidMatingPair(\r\n            matron,\r\n            _matronId,\r\n            sire,\r\n            _sireId\r\n        ));\r\n\r\n        // All checks passed, kitty gets pregnant!\r\n        _breedWith(_matronId, _sireId);\r\n    }\r\n\r\n    /// @notice Have a pregnant Kitty give birth!\r\n    /// @param _matronId A Kitty ready to give birth.\r\n    /// @return The Kitty ID of the new kitten.\r\n    /// @dev Looks at a given Kitty and, if pregnant and if the gestation period has passed,\r\n    ///  combines the genes of the two parents to create a new kitten. The new Kitty is assigned\r\n    ///  to the current owner of the matron. Upon successful completion, both the matron and the\r\n    ///  new kitten will be ready to breed again. Note that anyone can call this function (if they\r\n    ///  are willing to pay the gas!), but the new kitten always goes to the mother's owner.\r\n    function giveBirth(uint256 _matronId)\r\n        external\r\n        whenNotPaused\r\n        returns(uint256)\r\n    {\r\n        // Grab a reference to the matron in storage.\r\n        Kitty storage matron = kitties[_matronId];\r\n\r\n        // Check that the matron is a valid cat.\r\n        require(matron.birthTime != 0);\r\n\r\n        // Check that the matron is pregnant, and that its time has come!\r\n        require(_isReadyToGiveBirth(matron));\r\n\r\n        // Grab a reference to the sire in storage.\r\n        uint256 sireId = matron.siringWithId;\r\n        Kitty storage sire = kitties[sireId];\r\n\r\n        // Determine the higher generation number of the two parents\r\n        uint16 parentGen = matron.generation;\r\n        if (sire.generation > matron.generation) {\r\n            parentGen = sire.generation;\r\n        }\r\n\r\n        // Call the sooper-sekret gene mixing operation.\r\n        uint256 childGenes = geneScience.mixGenes(matron.genes, sire.genes, matron.cooldownEndBlock - 1);\r\n\r\n        // Make the new kitten!\r\n        address owner = kittyIndexToOwner[_matronId];\r\n        uint256 kittenId = _createKitty(_matronId, matron.siringWithId, parentGen + 1, childGenes, owner);\r\n\r\n        // Clear the reference to sire from the matron (REQUIRED! Having siringWithId\r\n        // set is what marks a matron as being pregnant.)\r\n        delete matron.siringWithId;\r\n\r\n        // Every time a kitty gives birth counter is decremented.\r\n        pregnantKitties--;\r\n\r\n        // Send the balance fee to the person who made birth happen.\r\n        msg.sender.send(autoBirthFee);\r\n\r\n        // return the new kitten's ID\r\n        return kittenId;\r\n    }\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/// @title Auction Core\r\n/// @dev Contains models, variables, and internal methods for the auction.\r\n/// @notice We omit a fallback function to prevent accidental sends to this contract.\r\ncontract ClockAuctionBase {\r\n\r\n    // Represents an auction on an NFT\r\n    struct Auction {\r\n        // Current owner of NFT\r\n        address seller;\r\n        // Price (in wei) at beginning of auction\r\n        uint128 startingPrice;\r\n        // Price (in wei) at end of auction\r\n        uint128 endingPrice;\r\n        // Duration (in seconds) of auction\r\n        uint64 duration;\r\n        // Time when auction started\r\n        // NOTE: 0 if this auction has been concluded\r\n        uint64 startedAt;\r\n    }\r\n\r\n    // Reference to contract tracking NFT ownership\r\n    ERC721 public nonFungibleContract;\r\n\r\n    // Cut owner takes on each auction, measured in basis points (1/100 of a percent).\r\n    // Values 0-10,000 map to 0%-100%\r\n    uint256 public ownerCut;\r\n\r\n    // Map from token ID to their corresponding auction.\r\n    mapping (uint256 => Auction) tokenIdToAuction;\r\n\r\n    event AuctionCreated(uint256 tokenId, uint256 startingPrice, uint256 endingPrice, uint256 duration);\r\n    event AuctionSuccessful(uint256 tokenId, uint256 totalPrice, address winner);\r\n    event AuctionCancelled(uint256 tokenId);\r\n\r\n    /// @dev Returns true if the claimant owns the token.\r\n    /// @param _claimant - Address claiming to own the token.\r\n    /// @param _tokenId - ID of token whose ownership to verify.\r\n    function _owns(address _claimant, uint256 _tokenId) internal view returns (bool) {\r\n        return (nonFungibleContract.ownerOf(_tokenId) == _claimant);\r\n    }\r\n\r\n    /// @dev Escrows the NFT, assigning ownership to this contract.\r\n    /// Throws if the escrow fails.\r\n    /// @param _owner - Current owner address of token to escrow.\r\n    /// @param _tokenId - ID of token whose approval to verify.\r\n    function _escrow(address _owner, uint256 _tokenId) internal {\r\n        // it will throw if transfer fails\r\n        nonFungibleContract.transferFrom(_owner, this, _tokenId);\r\n    }\r\n\r\n    /// @dev Transfers an NFT owned by this contract to another address.\r\n    /// Returns true if the transfer succeeds.\r\n    /// @param _receiver - Address to transfer NFT to.\r\n    /// @param _tokenId - ID of token to transfer.\r\n    function _transfer(address _receiver, uint256 _tokenId) internal {\r\n        // it will throw if transfer fails\r\n        nonFungibleContract.transfer(_receiver, _tokenId);\r\n    }\r\n\r\n    /// @dev Adds an auction to the list of open auctions. Also fires the\r\n    ///  AuctionCreated event.\r\n    /// @param _tokenId The ID of the token to be put on auction.\r\n    /// @param _auction Auction to add.\r\n    function _addAuction(uint256 _tokenId, Auction _auction) internal {\r\n        // Require that all auctions have a duration of\r\n        // at least one minute. (Keeps our math from getting hairy!)\r\n        require(_auction.duration >= 1 minutes);\r\n\r\n        tokenIdToAuction[_tokenId] = _auction;\r\n\r\n        AuctionCreated(\r\n            uint256(_tokenId),\r\n            uint256(_auction.startingPrice),\r\n            uint256(_auction.endingPrice),\r\n            uint256(_auction.duration)\r\n        );\r\n    }\r\n\r\n    /// @dev Cancels an auction unconditionally.\r\n    function _cancelAuction(uint256 _tokenId, address _seller) internal {\r\n        _removeAuction(_tokenId);\r\n        _transfer(_seller, _tokenId);\r\n        AuctionCancelled(_tokenId);\r\n    }\r\n\r\n    /// @dev Computes the price and transfers winnings.\r\n    /// Does NOT transfer ownership of token.\r\n    function _bid(uint256 _tokenId, uint256 _bidAmount)\r\n        internal\r\n        returns (uint256)\r\n    {\r\n        // Get a reference to the auction struct\r\n        Auction storage auction = tokenIdToAuction[_tokenId];\r\n\r\n        // Explicitly check that this auction is currently live.\r\n        // (Because of how Ethereum mappings work, we can't just count\r\n        // on the lookup above failing. An invalid _tokenId will just\r\n        // return an auction object that is all zeros.)\r\n        require(_isOnAuction(auction));\r\n\r\n        // Check that the bid is greater than or equal to the current price\r\n        uint256 price = _currentPrice(auction);\r\n        require(_bidAmount >= price);\r\n\r\n        // Grab a reference to the seller before the auction struct\r\n        // gets deleted.\r\n        address seller = auction.seller;\r\n\r\n        // The bid is good! Remove the auction before sending the fees\r\n        // to the sender so we can't have a reentrancy attack.\r\n        _removeAuction(_tokenId);\r\n\r\n        // Transfer proceeds to seller (if there are any!)\r\n        if (price > 0) {\r\n            // Calculate the auctioneer's cut.\r\n            // (NOTE: _computeCut() is guaranteed to return a\r\n            // value <= price, so this subtraction can't go negative.)\r\n            uint256 auctioneerCut = _computeCut(price);\r\n            uint256 sellerProceeds = price - auctioneerCut;\r\n\r\n            // NOTE: Doing a transfer() in the middle of a complex\r\n            // method like this is generally discouraged because of\r\n            // reentrancy attacks and DoS attacks if the seller is\r\n            // a contract with an invalid fallback function. We explicitly\r\n            // guard against reentrancy attacks by removing the auction\r\n            // before calling transfer(), and the only thing the seller\r\n            // can DoS is the sale of their own asset! (And if it's an\r\n            // accident, they can call cancelAuction(). )\r\n            seller.transfer(sellerProceeds);\r\n        }\r\n\r\n        // Calculate any excess funds included with the bid. If the excess\r\n        // is anything worth worrying about, transfer it back to bidder.\r\n        // NOTE: We checked above that the bid amount is greater than or\r\n        // equal to the price so this cannot underflow.\r\n        uint256 bidExcess = _bidAmount - price;\r\n\r\n        // Return the funds. Similar to the previous transfer, this is\r\n        // not susceptible to a re-entry attack because the auction is\r\n        // removed before any transfers occur.\r\n        msg.sender.transfer(bidExcess);\r\n\r\n        // Tell the world!\r\n        AuctionSuccessful(_tokenId, price, msg.sender);\r\n\r\n        return price;\r\n    }\r\n\r\n    /// @dev Removes an auction from the list of open auctions.\r\n    /// @param _tokenId - ID of NFT on auction.\r\n    function _removeAuction(uint256 _tokenId) internal {\r\n        delete tokenIdToAuction[_tokenId];\r\n    }\r\n\r\n    /// @dev Returns true if the NFT is on auction.\r\n    /// @param _auction - Auction to check.\r\n    function _isOnAuction(Auction storage _auction) internal view returns (bool) {\r\n        return (_auction.startedAt > 0);\r\n    }\r\n\r\n    /// @dev Returns current price of an NFT on auction. Broken into two\r\n    ///  functions (this one, that computes the duration from the auction\r\n    ///  structure, and the other that does the price computation) so we\r\n    ///  can easily test that the price computation works correctly.\r\n    function _currentPrice(Auction storage _auction)\r\n        internal\r\n        view\r\n        returns (uint256)\r\n    {\r\n        uint256 secondsPassed = 0;\r\n\r\n        // A bit of insurance against negative values (or wraparound).\r\n        // Probably not necessary (since Ethereum guarnatees that the\r\n        // now variable doesn't ever go backwards).\r\n        if (now > _auction.startedAt) {\r\n            secondsPassed = now - _auction.startedAt;\r\n        }\r\n\r\n        return _computeCurrentPrice(\r\n            _auction.startingPrice,\r\n            _auction.endingPrice,\r\n            _auction.duration,\r\n            secondsPassed\r\n        );\r\n    }\r\n\r\n    /// @dev Computes the current price of an auction. Factored out\r\n    ///  from _currentPrice so we can run extensive unit tests.\r\n    ///  When testing, make this function public and turn on\r\n    ///  `Current price computation` test suite.\r\n    function _computeCurrentPrice(\r\n        uint256 _startingPrice,\r\n        uint256 _endingPrice,\r\n        uint256 _duration,\r\n        uint256 _secondsPassed\r\n    )\r\n        internal\r\n        pure\r\n        returns (uint256)\r\n    {\r\n        // NOTE: We don't use SafeMath (or similar) in this function because\r\n        //  all of our public functions carefully cap the maximum values for\r\n        //  time (at 64-bits) and currency (at 128-bits). _duration is\r\n        //  also known to be non-zero (see the require() statement in\r\n        //  _addAuction())\r\n        if (_secondsPassed >= _duration) {\r\n            // We've reached the end of the dynamic pricing portion\r\n            // of the auction, just return the end price.\r\n            return _endingPrice;\r\n        } else {\r\n            // Starting price can be higher than ending price (and often is!), so\r\n            // this delta can be negative.\r\n            int256 totalPriceChange = int256(_endingPrice) - int256(_startingPrice);\r\n\r\n            // This multiplication can't overflow, _secondsPassed will easily fit within\r\n            // 64-bits, and totalPriceChange will easily fit within 128-bits, their product\r\n            // will always fit within 256-bits.\r\n            int256 currentPriceChange = totalPriceChange * int256(_secondsPassed) / int256(_duration);\r\n\r\n            // currentPriceChange can be negative, but if so, will have a magnitude\r\n            // less that _startingPrice. Thus, this result will always end up positive.\r\n            int256 currentPrice = int256(_startingPrice) + currentPriceChange;\r\n\r\n            return uint256(currentPrice);\r\n        }\r\n    }\r\n\r\n    /// @dev Computes owner's cut of a sale.\r\n    /// @param _price - Sale price of NFT.\r\n    function _computeCut(uint256 _price) internal view returns (uint256) {\r\n        // NOTE: We don't use SafeMath (or similar) in this function because\r\n        //  all of our entry functions carefully cap the maximum values for\r\n        //  currency (at 128-bits), and ownerCut <= 10000 (see the require()\r\n        //  statement in the ClockAuction constructor). The result of this\r\n        //  function is always guaranteed to be <= _price.\r\n        return _price * ownerCut / 10000;\r\n    }\r\n\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/**\r\n * @title Pausable\r\n * @dev Base contract which allows children to implement an emergency stop mechanism.\r\n */\r\ncontract Pausable is Ownable {\r\n  event Pause();\r\n  event Unpause();\r\n\r\n  bool public paused = false;\r\n\r\n\r\n  /**\r\n   * @dev modifier to allow actions only when the contract IS paused\r\n   */\r\n  modifier whenNotPaused() {\r\n    require(!paused);\r\n    _;\r\n  }\r\n\r\n  /**\r\n   * @dev modifier to allow actions only when the contract IS NOT paused\r\n   */\r\n  modifier whenPaused {\r\n    require(paused);\r\n    _;\r\n  }\r\n\r\n  /**\r\n   * @dev called by the owner to pause, triggers stopped state\r\n   */\r\n  function pause() onlyOwner whenNotPaused returns (bool) {\r\n    paused = true;\r\n    Pause();\r\n    return true;\r\n  }\r\n\r\n  /**\r\n   * @dev called by the owner to unpause, returns to normal state\r\n   */\r\n  function unpause() onlyOwner whenPaused returns (bool) {\r\n    paused = false;\r\n    Unpause();\r\n    return true;\r\n  }\r\n}\r\n\r\n\r\n/// @title Clock auction for non-fungible tokens.\r\n/// @notice We omit a fallback function to prevent accidental sends to this contract.\r\ncontract ClockAuction is Pausable, ClockAuctionBase {\r\n\r\n    /// @dev The ERC-165 interface signature for ERC-721.\r\n    ///  Ref: https://github.com/ethereum/EIPs/issues/165\r\n    ///  Ref: https://github.com/ethereum/EIPs/issues/721\r\n    bytes4 constant InterfaceSignature_ERC721 = bytes4(0x9a20483d);\r\n\r\n    /// @dev Constructor creates a reference to the NFT ownership contract\r\n    ///  and verifies the owner cut is in the valid range.\r\n    /// @param _nftAddress - address of a deployed contract implementing\r\n    ///  the Nonfungible Interface.\r\n    /// @param _cut - percent cut the owner takes on each auction, must be\r\n    ///  between 0-10,000.\r\n    function ClockAuction(address _nftAddress, uint256 _cut) public {\r\n        require(_cut <= 10000);\r\n        ownerCut = _cut;\r\n\r\n        ERC721 candidateContract = ERC721(_nftAddress);\r\n        require(candidateContract.supportsInterface(InterfaceSignature_ERC721));\r\n        nonFungibleContract = candidateContract;\r\n    }\r\n\r\n    /// @dev Remove all Ether from the contract, which is the owner's cuts\r\n    ///  as well as any Ether sent directly to the contract address.\r\n    ///  Always transfers to the NFT contract, but can be called either by\r\n    ///  the owner or the NFT contract.\r\n    function withdrawBalance() external {\r\n        address nftAddress = address(nonFungibleContract);\r\n\r\n        require(\r\n            msg.sender == owner ||\r\n            msg.sender == nftAddress\r\n        );\r\n        // We are using this boolean method to make sure that even if one fails it will still work\r\n        bool res = nftAddress.send(this.balance);\r\n    }\r\n\r\n    /// @dev Creates and begins a new auction.\r\n    /// @param _tokenId - ID of token to auction, sender must be owner.\r\n    /// @param _startingPrice - Price of item (in wei) at beginning of auction.\r\n    /// @param _endingPrice - Price of item (in wei) at end of auction.\r\n    /// @param _duration - Length of time to move between starting\r\n    ///  price and ending price (in seconds).\r\n    /// @param _seller - Seller, if not the message sender\r\n    function createAuction(\r\n        uint256 _tokenId,\r\n        uint256 _startingPrice,\r\n        uint256 _endingPrice,\r\n        uint256 _duration,\r\n        address _seller\r\n    )\r\n        external\r\n        whenNotPaused\r\n    {\r\n        // Sanity check that no inputs overflow how many bits we've allocated\r\n        // to store them in the auction struct.\r\n        require(_startingPrice == uint256(uint128(_startingPrice)));\r\n        require(_endingPrice == uint256(uint128(_endingPrice)));\r\n        require(_duration == uint256(uint64(_duration)));\r\n\r\n        require(_owns(msg.sender, _tokenId));\r\n        _escrow(msg.sender, _tokenId);\r\n        Auction memory auction = Auction(\r\n            _seller,\r\n            uint128(_startingPrice),\r\n            uint128(_endingPrice),\r\n            uint64(_duration),\r\n            uint64(now)\r\n        );\r\n        _addAuction(_tokenId, auction);\r\n    }\r\n\r\n    /// @dev Bids on an open auction, completing the auction and transferring\r\n    ///  ownership of the NFT if enough Ether is supplied.\r\n    /// @param _tokenId - ID of token to bid on.\r\n    function bid(uint256 _tokenId)\r\n        external\r\n        payable\r\n        whenNotPaused\r\n    {\r\n        // _bid will throw if the bid or funds transfer fails\r\n        _bid(_tokenId, msg.value);\r\n        _transfer(msg.sender, _tokenId);\r\n    }\r\n\r\n    /// @dev Cancels an auction that hasn't been won yet.\r\n    ///  Returns the NFT to original owner.\r\n    /// @notice This is a state-modifying function that can\r\n    ///  be called while the contract is paused.\r\n    /// @param _tokenId - ID of token on auction\r\n    function cancelAuction(uint256 _tokenId)\r\n        external\r\n    {\r\n        Auction storage auction = tokenIdToAuction[_tokenId];\r\n        require(_isOnAuction(auction));\r\n        address seller = auction.seller;\r\n        require(msg.sender == seller);\r\n        _cancelAuction(_tokenId, seller);\r\n    }\r\n\r\n    /// @dev Cancels an auction when the contract is paused.\r\n    ///  Only the owner may do this, and NFTs are returned to\r\n    ///  the seller. This should only be used in emergencies.\r\n    /// @param _tokenId - ID of the NFT on auction to cancel.\r\n    function cancelAuctionWhenPaused(uint256 _tokenId)\r\n        whenPaused\r\n        onlyOwner\r\n        external\r\n    {\r\n        Auction storage auction = tokenIdToAuction[_tokenId];\r\n        require(_isOnAuction(auction));\r\n        _cancelAuction(_tokenId, auction.seller);\r\n    }\r\n\r\n    /// @dev Returns auction info for an NFT on auction.\r\n    /// @param _tokenId - ID of NFT on auction.\r\n    function getAuction(uint256 _tokenId)\r\n        external\r\n        view\r\n        returns\r\n    (\r\n        address seller,\r\n        uint256 startingPrice,\r\n        uint256 endingPrice,\r\n        uint256 duration,\r\n        uint256 startedAt\r\n    ) {\r\n        Auction storage auction = tokenIdToAuction[_tokenId];\r\n        require(_isOnAuction(auction));\r\n        return (\r\n            auction.seller,\r\n            auction.startingPrice,\r\n            auction.endingPrice,\r\n            auction.duration,\r\n            auction.startedAt\r\n        );\r\n    }\r\n\r\n    /// @dev Returns the current price of an auction.\r\n    /// @param _tokenId - ID of the token price we are checking.\r\n    function getCurrentPrice(uint256 _tokenId)\r\n        external\r\n        view\r\n        returns (uint256)\r\n    {\r\n        Auction storage auction = tokenIdToAuction[_tokenId];\r\n        require(_isOnAuction(auction));\r\n        return _currentPrice(auction);\r\n    }\r\n\r\n}\r\n\r\n\r\n/// @title Reverse auction modified for siring\r\n/// @notice We omit a fallback function to prevent accidental sends to this contract.\r\ncontract SiringClockAuction is ClockAuction {\r\n\r\n    // @dev Sanity check that allows us to ensure that we are pointing to the\r\n    //  right auction in our setSiringAuctionAddress() call.\r\n    bool public isSiringClockAuction = true;\r\n\r\n    // Delegate constructor\r\n    function SiringClockAuction(address _nftAddr, uint256 _cut) public\r\n        ClockAuction(_nftAddr, _cut) {}\r\n\r\n    /// @dev Creates and begins a new auction. Since this function is wrapped,\r\n    /// require sender to be KittyCore contract.\r\n    /// @param _tokenId - ID of token to auction, sender must be owner.\r\n    /// @param _startingPrice - Price of item (in wei) at beginning of auction.\r\n    /// @param _endingPrice - Price of item (in wei) at end of auction.\r\n    /// @param _duration - Length of auction (in seconds).\r\n    /// @param _seller - Seller, if not the message sender\r\n    function createAuction(\r\n        uint256 _tokenId,\r\n        uint256 _startingPrice,\r\n        uint256 _endingPrice,\r\n        uint256 _duration,\r\n        address _seller\r\n    )\r\n        external\r\n    {\r\n        // Sanity check that no inputs overflow how many bits we've allocated\r\n        // to store them in the auction struct.\r\n        require(_startingPrice == uint256(uint128(_startingPrice)));\r\n        require(_endingPrice == uint256(uint128(_endingPrice)));\r\n        require(_duration == uint256(uint64(_duration)));\r\n\r\n        require(msg.sender == address(nonFungibleContract));\r\n        _escrow(_seller, _tokenId);\r\n        Auction memory auction = Auction(\r\n            _seller,\r\n            uint128(_startingPrice),\r\n            uint128(_endingPrice),\r\n            uint64(_duration),\r\n            uint64(now)\r\n        );\r\n        _addAuction(_tokenId, auction);\r\n    }\r\n\r\n    /// @dev Places a bid for siring. Requires the sender\r\n    /// is the KittyCore contract because all bid methods\r\n    /// should be wrapped. Also returns the kitty to the\r\n    /// seller rather than the winner.\r\n    function bid(uint256 _tokenId)\r\n        external\r\n        payable\r\n    {\r\n        require(msg.sender == address(nonFungibleContract));\r\n        address seller = tokenIdToAuction[_tokenId].seller;\r\n        // _bid checks that token ID is valid and will throw if bid fails\r\n        _bid(_tokenId, msg.value);\r\n        // We transfer the kitty back to the seller, the winner will get\r\n        // the offspring\r\n        _transfer(seller, _tokenId);\r\n    }\r\n\r\n}\r\n\r\n\r\n\r\n\r\n\r\n/// @title Clock auction modified for sale of kitties\r\n/// @notice We omit a fallback function to prevent accidental sends to this contract.\r\ncontract SaleClockAuction is ClockAuction {\r\n\r\n    // @dev Sanity check that allows us to ensure that we are pointing to the\r\n    //  right auction in our setSaleAuctionAddress() call.\r\n    bool public isSaleClockAuction = true;\r\n\r\n    // Tracks last 5 sale price of gen0 kitty sales\r\n    uint256 public gen0SaleCount;\r\n    uint256[5] public lastGen0SalePrices;\r\n\r\n    // Delegate constructor\r\n    function SaleClockAuction(address _nftAddr, uint256 _cut) public\r\n        ClockAuction(_nftAddr, _cut) {}\r\n\r\n    /// @dev Creates and begins a new auction.\r\n    /// @param _tokenId - ID of token to auction, sender must be owner.\r\n    /// @param _startingPrice - Price of item (in wei) at beginning of auction.\r\n    /// @param _endingPrice - Price of item (in wei) at end of auction.\r\n    /// @param _duration - Length of auction (in seconds).\r\n    /// @param _seller - Seller, if not the message sender\r\n    function createAuction(\r\n        uint256 _tokenId,\r\n        uint256 _startingPrice,\r\n        uint256 _endingPrice,\r\n        uint256 _duration,\r\n        address _seller\r\n    )\r\n        external\r\n    {\r\n        // Sanity check that no inputs overflow how many bits we've allocated\r\n        // to store them in the auction struct.\r\n        require(_startingPrice == uint256(uint128(_startingPrice)));\r\n        require(_endingPrice == uint256(uint128(_endingPrice)));\r\n        require(_duration == uint256(uint64(_duration)));\r\n\r\n        require(msg.sender == address(nonFungibleContract));\r\n        _escrow(_seller, _tokenId);\r\n        Auction memory auction = Auction(\r\n            _seller,\r\n            uint128(_startingPrice),\r\n            uint128(_endingPrice),\r\n            uint64(_duration),\r\n            uint64(now)\r\n        );\r\n        _addAuction(_tokenId, auction);\r\n    }\r\n\r\n    /// @dev Updates lastSalePrice if seller is the nft contract\r\n    /// Otherwise, works the same as default bid method.\r\n    function bid(uint256 _tokenId)\r\n        external\r\n        payable\r\n    {\r\n        // _bid verifies token ID size\r\n        address seller = tokenIdToAuction[_tokenId].seller;\r\n        uint256 price = _bid(_tokenId, msg.value);\r\n        _transfer(msg.sender, _tokenId);\r\n\r\n        // If not a gen0 auction, exit\r\n        if (seller == address(nonFungibleContract)) {\r\n            // Track gen0 sale prices\r\n            lastGen0SalePrices[gen0SaleCount % 5] = price;\r\n            gen0SaleCount++;\r\n        }\r\n    }\r\n\r\n    function averageGen0SalePrice() external view returns (uint256) {\r\n        uint256 sum = 0;\r\n        for (uint256 i = 0; i < 5; i++) {\r\n            sum += lastGen0SalePrices[i];\r\n        }\r\n        return sum / 5;\r\n    }\r\n\r\n}\r\n\r\n\r\n/// @title Handles creating auctions for sale and siring of kitties.\r\n///  This wrapper of ReverseAuction exists only so that users can create\r\n///  auctions with only one transaction.\r\ncontract KittyAuction is KittyBreeding {\r\n\r\n    // @notice The auction contract variables are defined in KittyBase to allow\r\n    //  us to refer to them in KittyOwnership to prevent accidental transfers.\r\n    // `saleAuction` refers to the auction for gen0 and p2p sale of kitties.\r\n    // `siringAuction` refers to the auction for siring rights of kitties.\r\n\r\n    /// @dev Sets the reference to the sale auction.\r\n    /// @param _address - Address of sale contract.\r\n    function setSaleAuctionAddress(address _address) external onlyCEO {\r\n        SaleClockAuction candidateContract = SaleClockAuction(_address);\r\n\r\n        // NOTE: verify that a contract is what we expect - https://github.com/Lunyr/crowdsale-contracts/blob/cfadd15986c30521d8ba7d5b6f57b4fefcc7ac38/contracts/LunyrToken.sol#L117\r\n        require(candidateContract.isSaleClockAuction());\r\n\r\n        // Set the new contract address\r\n        saleAuction = candidateContract;\r\n    }\r\n\r\n    /// @dev Sets the reference to the siring auction.\r\n    /// @param _address - Address of siring contract.\r\n    function setSiringAuctionAddress(address _address) external onlyCEO {\r\n        SiringClockAuction candidateContract = SiringClockAuction(_address);\r\n\r\n        // NOTE: verify that a contract is what we expect - https://github.com/Lunyr/crowdsale-contracts/blob/cfadd15986c30521d8ba7d5b6f57b4fefcc7ac38/contracts/LunyrToken.sol#L117\r\n        require(candidateContract.isSiringClockAuction());\r\n\r\n        // Set the new contract address\r\n        siringAuction = candidateContract;\r\n    }\r\n\r\n    /// @dev Put a kitty up for auction.\r\n    ///  Does some ownership trickery to create auctions in one tx.\r\n    function createSaleAuction(\r\n        uint256 _kittyId,\r\n        uint256 _startingPrice,\r\n        uint256 _endingPrice,\r\n        uint256 _duration\r\n    )\r\n        external\r\n        whenNotPaused\r\n    {\r\n        // Auction contract checks input sizes\r\n        // If kitty is already on any auction, this will throw\r\n        // because it will be owned by the auction contract.\r\n        require(_owns(msg.sender, _kittyId));\r\n        // Ensure the kitty is not pregnant to prevent the auction\r\n        // contract accidentally receiving ownership of the child.\r\n        // NOTE: the kitty IS allowed to be in a cooldown.\r\n        require(!isPregnant(_kittyId));\r\n        _approve(_kittyId, saleAuction);\r\n        // Sale auction throws if inputs are invalid and clears\r\n        // transfer and sire approval after escrowing the kitty.\r\n        saleAuction.createAuction(\r\n            _kittyId,\r\n            _startingPrice,\r\n            _endingPrice,\r\n            _duration,\r\n            msg.sender\r\n        );\r\n    }\r\n\r\n    /// @dev Put a kitty up for auction to be sire.\r\n    ///  Performs checks to ensure the kitty can be sired, then\r\n    ///  delegates to reverse auction.\r\n    function createSiringAuction(\r\n        uint256 _kittyId,\r\n        uint256 _startingPrice,\r\n        uint256 _endingPrice,\r\n        uint256 _duration\r\n    )\r\n        external\r\n        whenNotPaused\r\n    {\r\n        // Auction contract checks input sizes\r\n        // If kitty is already on any auction, this will throw\r\n        // because it will be owned by the auction contract.\r\n        require(_owns(msg.sender, _kittyId));\r\n        require(isReadyToBreed(_kittyId));\r\n        _approve(_kittyId, siringAuction);\r\n        // Siring auction throws if inputs are invalid and clears\r\n        // transfer and sire approval after escrowing the kitty.\r\n        siringAuction.createAuction(\r\n            _kittyId,\r\n            _startingPrice,\r\n            _endingPrice,\r\n            _duration,\r\n            msg.sender\r\n        );\r\n    }\r\n\r\n    /// @dev Completes a siring auction by bidding.\r\n    ///  Immediately breeds the winning matron with the sire on auction.\r\n    /// @param _sireId - ID of the sire on auction.\r\n    /// @param _matronId - ID of the matron owned by the bidder.\r\n    function bidOnSiringAuction(\r\n        uint256 _sireId,\r\n        uint256 _matronId\r\n    )\r\n        external\r\n        payable\r\n        whenNotPaused\r\n    {\r\n        // Auction contract checks input sizes\r\n        require(_owns(msg.sender, _matronId));\r\n        require(isReadyToBreed(_matronId));\r\n        require(_canBreedWithViaAuction(_matronId, _sireId));\r\n\r\n        // Define the current price of the auction.\r\n        uint256 currentPrice = siringAuction.getCurrentPrice(_sireId);\r\n        require(msg.value >= currentPrice + autoBirthFee);\r\n\r\n        // Siring auction will throw if the bid fails.\r\n        siringAuction.bid.value(msg.value - autoBirthFee)(_sireId);\r\n        _breedWith(uint32(_matronId), uint32(_sireId));\r\n    }\r\n\r\n    /// @dev Transfers the balance of the sale auction contract\r\n    /// to the KittyCore contract. We use two-step withdrawal to\r\n    /// prevent two transfer calls in the auction bid function.\r\n    function withdrawAuctionBalances() external onlyCLevel {\r\n        saleAuction.withdrawBalance();\r\n        siringAuction.withdrawBalance();\r\n    }\r\n}\r\n\r\n\r\n/// @title all functions related to creating kittens\r\ncontract KittyMinting is KittyAuction {\r\n\r\n    // Limits the number of cats the contract owner can ever create.\r\n    uint256 public constant PROMO_CREATION_LIMIT = 5000;\r\n    uint256 public constant GEN0_CREATION_LIMIT = 45000;\r\n\r\n    // Constants for gen0 auctions.\r\n    uint256 public constant GEN0_STARTING_PRICE = 10 finney;\r\n    uint256 public constant GEN0_AUCTION_DURATION = 1 days;\r\n\r\n    // Counts the number of cats the contract owner has created.\r\n    uint256 public promoCreatedCount;\r\n    uint256 public gen0CreatedCount;\r\n\r\n    /// @dev we can create promo kittens, up to a limit. Only callable by COO\r\n    /// @param _genes the encoded genes of the kitten to be created, any value is accepted\r\n    /// @param _owner the future owner of the created kittens. Default to contract COO\r\n    function createPromoKitty(uint256 _genes, address _owner) external onlyCOO {\r\n        address kittyOwner = _owner;\r\n        if (kittyOwner == address(0)) {\r\n             kittyOwner = cooAddress;\r\n        }\r\n        require(promoCreatedCount < PROMO_CREATION_LIMIT);\r\n\r\n        promoCreatedCount++;\r\n        _createKitty(0, 0, 0, _genes, kittyOwner);\r\n    }\r\n\r\n    /// @dev Creates a new gen0 kitty with the given genes and\r\n    ///  creates an auction for it.\r\n    function createGen0Auction(uint256 _genes) external onlyCOO {\r\n        require(gen0CreatedCount < GEN0_CREATION_LIMIT);\r\n\r\n        uint256 kittyId = _createKitty(0, 0, 0, _genes, address(this));\r\n        _approve(kittyId, saleAuction);\r\n\r\n        saleAuction.createAuction(\r\n            kittyId,\r\n            _computeNextGen0Price(),\r\n            0,\r\n            GEN0_AUCTION_DURATION,\r\n            address(this)\r\n        );\r\n\r\n        gen0CreatedCount++;\r\n    }\r\n\r\n    /// @dev Computes the next gen0 auction starting price, given\r\n    ///  the average of the past 5 prices + 50%.\r\n    function _computeNextGen0Price() internal view returns (uint256) {\r\n        uint256 avePrice = saleAuction.averageGen0SalePrice();\r\n\r\n        // Sanity check to ensure we don't overflow arithmetic\r\n        require(avePrice == uint256(uint128(avePrice)));\r\n\r\n        uint256 nextPrice = avePrice + (avePrice / 2);\r\n\r\n        // We never auction for less than starting price\r\n        if (nextPrice < GEN0_STARTING_PRICE) {\r\n            nextPrice = GEN0_STARTING_PRICE;\r\n        }\r\n\r\n        return nextPrice;\r\n    }\r\n}\r\n\r\n\r\n/// @title CryptoKitties: Collectible, breedable, and oh-so-adorable cats on the Ethereum blockchain.\r\n/// @author Axiom Zen (https://www.axiomzen.co)\r\n/// @dev The main CryptoKitties contract, keeps track of kittens so they don't wander around and get lost.\r\ncontract KittyCore is KittyMinting {\r\n\r\n    // This is the main CryptoKitties contract. In order to keep our code seperated into logical sections,\r\n    // we've broken it up in two ways. First, we have several seperately-instantiated sibling contracts\r\n    // that handle auctions and our super-top-secret genetic combination algorithm. The auctions are\r\n    // seperate since their logic is somewhat complex and there's always a risk of subtle bugs. By keeping\r\n    // them in their own contracts, we can upgrade them without disrupting the main contract that tracks\r\n    // kitty ownership. The genetic combination algorithm is kept seperate so we can open-source all of\r\n    // the rest of our code without making it _too_ easy for folks to figure out how the genetics work.\r\n    // Don't worry, I'm sure someone will reverse engineer it soon enough!\r\n    //\r\n    // Secondly, we break the core contract into multiple files using inheritence, one for each major\r\n    // facet of functionality of CK. This allows us to keep related code bundled together while still\r\n    // avoiding a single giant file with everything in it. The breakdown is as follows:\r\n    //\r\n    //      - KittyBase: This is where we define the most fundamental code shared throughout the core\r\n    //             functionality. This includes our main data storage, constants and data types, plus\r\n    //             internal functions for managing these items.\r\n    //\r\n    //      - KittyAccessControl: This contract manages the various addresses and constraints for operations\r\n    //             that can be executed only by specific roles. Namely CEO, CFO and COO.\r\n    //\r\n    //      - KittyOwnership: This provides the methods required for basic non-fungible token\r\n    //             transactions, following the draft ERC-721 spec (https://github.com/ethereum/EIPs/issues/721).\r\n    //\r\n    //      - KittyBreeding: This file contains the methods necessary to breed cats together, including\r\n    //             keeping track of siring offers, and relies on an external genetic combination contract.\r\n    //\r\n    //      - KittyAuctions: Here we have the public methods for auctioning or bidding on cats or siring\r\n    //             services. The actual auction functionality is handled in two sibling contracts (one\r\n    //             for sales and one for siring), while auction creation and bidding is mostly mediated\r\n    //             through this facet of the core contract.\r\n    //\r\n    //      - KittyMinting: This final facet contains the functionality we use for creating new gen0 cats.\r\n    //             We can make up to 5000 \"promo\" cats that can be given away (especially important when\r\n    //             the community is new), and all others can only be created and then immediately put up\r\n    //             for auction via an algorithmically determined starting price. Regardless of how they\r\n    //             are created, there is a hard limit of 50k gen0 cats. After that, it's all up to the\r\n    //             community to breed, breed, breed!\r\n\r\n    // Set in case the core contract is broken and an upgrade is required\r\n    address public newContractAddress;\r\n\r\n    /// @notice Creates the main CryptoKitties smart contract instance.\r\n    function KittyCore() public {\r\n        // Starts paused.\r\n        paused = true;\r\n\r\n        // the creator of the contract is the initial CEO\r\n        ceoAddress = msg.sender;\r\n\r\n        // the creator of the contract is also the initial COO\r\n        cooAddress = msg.sender;\r\n\r\n        // start with the mythical kitten 0 - so we don't have generation-0 parent issues\r\n        _createKitty(0, 0, 0, uint256(-1), address(0));\r\n    }\r\n\r\n    /// @dev Used to mark the smart contract as upgraded, in case there is a serious\r\n    ///  breaking bug. This method does nothing but keep track of the new contract and\r\n    ///  emit a message indicating that the new address is set. It's up to clients of this\r\n    ///  contract to update to the new contract address in that case. (This contract will\r\n    ///  be paused indefinitely if such an upgrade takes place.)\r\n    /// @param _v2Address new address\r\n    function setNewAddress(address _v2Address) external onlyCEO whenPaused {\r\n        // See README.md for updgrade plan\r\n        newContractAddress = _v2Address;\r\n        ContractUpgrade(_v2Address);\r\n    }\r\n\r\n    /// @notice No tipping!\r\n    /// @dev Reject all Ether from being sent here, unless it's from one of the\r\n    ///  two auction contracts. (Hopefully, we can prevent user accidents.)\r\n    function() external payable {\r\n        require(\r\n            msg.sender == address(saleAuction) ||\r\n            msg.sender == address(siringAuction)\r\n        );\r\n    }\r\n\r\n    /// @notice Returns all the relevant information about a specific kitty.\r\n    /// @param _id The ID of the kitty of interest.\r\n    function getKitty(uint256 _id)\r\n        external\r\n        view\r\n        returns (\r\n        bool isGestating,\r\n        bool isReady,\r\n        uint256 cooldownIndex,\r\n        uint256 nextActionAt,\r\n        uint256 siringWithId,\r\n        uint256 birthTime,\r\n        uint256 matronId,\r\n        uint256 sireId,\r\n        uint256 generation,\r\n        uint256 genes\r\n    ) {\r\n        Kitty storage kit = kitties[_id];\r\n\r\n        // if this variable is 0 then it's not gestating\r\n        isGestating = (kit.siringWithId != 0);\r\n        isReady = (kit.cooldownEndBlock <= block.number);\r\n        cooldownIndex = uint256(kit.cooldownIndex);\r\n        nextActionAt = uint256(kit.cooldownEndBlock);\r\n        siringWithId = uint256(kit.siringWithId);\r\n        birthTime = uint256(kit.birthTime);\r\n        matronId = uint256(kit.matronId);\r\n        sireId = uint256(kit.sireId);\r\n        generation = uint256(kit.generation);\r\n        genes = kit.genes;\r\n    }\r\n\r\n    /// @dev Override unpause so it requires all external contract addresses\r\n    ///  to be set before contract can be unpaused. Also, we can't have\r\n    ///  newContractAddress set either, because then the contract was upgraded.\r\n    /// @notice This is public rather than external so we can call super.unpause\r\n    ///  without using an expensive CALL.\r\n    function unpause() public onlyCEO whenPaused {\r\n        require(saleAuction != address(0));\r\n        require(siringAuction != address(0));\r\n        require(geneScience != address(0));\r\n        require(newContractAddress == address(0));\r\n\r\n        // Actually unpause the contract.\r\n        super.unpause();\r\n    }\r\n\r\n    // @dev Allows the CFO to capture the balance available to the contract.\r\n    function withdrawBalance() external onlyCFO {\r\n        uint256 balance = this.balance;\r\n        // Subtract all the currently pregnant kittens we have, plus 1 of margin.\r\n        uint256 subtractFees = (pregnantKitties + 1) * autoBirthFee;\r\n\r\n        if (balance > subtractFees) {\r\n            cfoAddress.send(balance - subtractFees);\r\n        }\r\n    }\r\n}",
    txCountBySignature: {
        '*': 100,
        'bidOnSiringAuction(uint256,uint256)': 9,
        'breedWithAuto(uint256,uint256)': 48,
        'createGen0Auction(uint256)': 2,
        'createSaleAuction(uint256,uint256,uint256,uint256)': 33,
        'createSiringAuction(uint256,uint256,uint256,uint256)': 4,
        'transfer(address,uint256)': 4,
    },
};

export interface ProfilerProps {
    location: Location;
}

interface ProfilerState {
    contractAddress: string;
    percentToColor: { [percent: string]: string };
}

export class Profiler extends React.Component<ProfilerProps, ProfilerState> {
    constructor() {
        super();
        const percentToColor = this._getPercentToColor();
        this.state = {
            contractAddress: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
            percentToColor,
        };
    }
    public componentDidMount() {
        window.scrollTo(0, 0);
    }
    public render() {
        return (
            <div>
                <DocumentTitle title="0x Profiler" />
                <TopBar blockchainIsLoaded={false} location={this.props.location} />
                <div id="profiler" className="mx-auto max-width-4 pt4" style={{ color: colors.grey800 }}>
                    <h1 className="center">Solidity Gas Profiler</h1>
                    {this._renderContractAddressInput()}
                    {this._renderResults()}
                </div>
                <Footer />
            </div>
        );
    }
    private _renderContractAddressInput() {
        return (
            <div className="mx-auto flex pb2" style={{ width: 400 }}>
                <div>
                    <TextField
                        value={this.state.contractAddress}
                        floatingLabelText="Contract Address"
                        onChange={this._contractAddressUpdated.bind(this)}
                    />
                </div>
                <div className="pl2" style={{ paddingTop: 27 }}>
                    <LifeCycleRaisedButton
                        isPrimary={true}
                        labelReady="Profile"
                        labelLoading="Profiling..."
                        labelComplete="Profiled!"
                        onClickAsyncFn={this._onProfileClicked.bind(this)}
                    />
                </div>
            </div>
        );
    }
    private _renderResults() {
        return (
            <div className="pt2 clearfix">
                <div className="col col-2">{this._renderBars()}</div>
                <div className="col col-10">
                    <HighLight className={'solidity'}>{API_PAYLOAD.sourcecode}</HighLight>
                </div>
            </div>
        );
    }
    private _renderBars() {
        const linesOfSource = API_PAYLOAD.sourcecode.split('\n').length;
        const bars: React.ReactNode[] = [];
        let i = 1;
        const logarithmicGasCostByLine = this._getLogGasCostByLine();
        const maxLogGasCost = this._getMaxGasCost(logarithmicGasCostByLine);
        _.times(linesOfSource, () => {
            let width = 0;
            let barColor = 'green';
            let gasCost = 0;
            if (!_.isUndefined(logarithmicGasCostByLine[i])) {
                gasCost = API_PAYLOAD.gasCostByLineBySignature['*'][i];
                const logGasCost = logarithmicGasCostByLine[i];
                const logGasCostPercent = logGasCost / maxLogGasCost;
                width = logGasCostPercent * 170;
                const widthPercent = logGasCostPercent * 100;
                barColor = this._getBarColor(widthPercent);
            }
            const tooltipId = `${i}-tooltip`;
            const bar = (
                <div key={`${i}-bar`} className="clearfix" style={{ width: '100%' }}>
                    <span data-tip={true} data-for={tooltipId}>
                        <div className="right" style={{ height: 21, width, backgroundColor: barColor }} />
                    </span>
                    <ReactTooltip id={tooltipId}>{gasCost}</ReactTooltip>
                </div>
            );
            bars.push(bar);
            i++;
        });
        return <div style={{ paddingTop: 25 }}>{bars}</div>;
    }
    private _getBarColor(percent: number): string {
        const color = 'green';
        const percents = _.keys(this.state.percentToColor);
        const percentColors = _.values(this.state.percentToColor);
        for (let i = 0; i < _.size(this.state.percentToColor); i++) {
            const percentCutoff = percents[i];
            if (percent <= _.parseInt(percentCutoff)) {
                return percentColors[i];
            }
        }
        return color;
    }
    private _contractAddressUpdated(event: any, newValue: string) {
        this.setState({
            contractAddress: newValue,
        });
    }
    private _getLogGasCostByLine() {
        const logGasCostByLine: { [line: string]: number } = {};
        _.each(API_PAYLOAD.gasCostByLineBySignature['*'], (gasCostString: string, line: number) => {
            logGasCostByLine[line] = Math.log(_.parseInt(gasCostString));
        });
        return logGasCostByLine;
    }
    private _getMaxGasCost(gasCostByLine: GasCostByLine) {
        let max = 0;
        _.each(gasCostByLine, (gasCost: number, line: string) => {
            if (max < gasCost) {
                max = gasCost;
            }
        });
        return max;
    }
    private _onProfileClicked() {
        console.log('Profile contract at: ', this.state.contractAddress);
    }
    private _getPercentToColor() {
        const chromaColors = chroma
            .scale('RdYlBu')
            .padding(0.15)
            .colors(101);
        const percentToColor: { [percent: string]: string } = {};
        let i = 0;
        _.times(chromaColors.length, () => {
            percentToColor[i] = chromaColors[i];
            i++;
        });
        console.log('percentToColor', percentToColor);
        return percentToColor;
    }
}
