'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"icons/Icon-512.png": "c4915943da2140b0daff661762582559",
"icons/Icon-192.png": "c0917325a93f16779495daba53da0e52",
"icons/favicon.png": "213113c2259fd2c199bc6f15a7945001",
"manifest.json": "eddce4088f494ed58525e107f58ebd81",
"index.html": "facff98bec0e10e2b1f5cd6689e3b2cc",
"/": "facff98bec0e10e2b1f5cd6689e3b2cc",
"splash/img/light-4x.png": "a2dc4875424c0939461e7c385277db6e",
"splash/img/dark-4x.png": "a2dc4875424c0939461e7c385277db6e",
"splash/img/dark-3x.png": "92921292e4fb9458e64f81a0da1a52d8",
"splash/img/dark-1x.png": "003176a847da2f91d1aca0a9b578bfe2",
"splash/img/dark-2x.png": "cc118a99fe250b77e0584962344156f1",
"splash/img/light-1x.png": "003176a847da2f91d1aca0a9b578bfe2",
"splash/img/light-3x.png": "92921292e4fb9458e64f81a0da1a52d8",
"splash/img/light-2x.png": "cc118a99fe250b77e0584962344156f1",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin.json": "1f61f1839dcfd989c3ac0af67f19f414",
"assets/assets/images/background.png": "38a8841ceb5ac07ed5cc34a82d2b2d79",
"assets/assets/images/kinet_logo.png": "e767e1415e289a27e0c0afdd0ea018b1",
"assets/assets/images/icon.png": "e4ae5be4db340cf5582b660dbb4d0a82",
"assets/assets/images/kinet_logo.svg": "7b5d03cb60822c79edfe1f06f03605a0",
"assets/assets/images/logo.svg": "eaf2bb0a68c85538f68704f06cb43812",
"assets/assets/images/alhusna_logo.png": "2185ed89c31bfb2f39db89e1501e0a4b",
"assets/assets/images/logo.png": "113fc191696c85a5d615eb4798ba901b",
"assets/assets/images/icon.svg": "dd7c933791c896667c1659db1fd18ff4",
"assets/assets/images/drawing.svg": "b75bcf612f0217e7f4a74576a94e8855",
"assets/assets/images/hahu_logo.svg": "1b5bdaa647daa8001565ac5c2c20a9e1",
"assets/assets/images/hahu_logo.png": "52d445f8c0adb5e378fabc495e2ed02e",
"assets/assets/fonts/NotoSans_500.ttf": "f96bc8ccaf64194e4daf5880dace862e",
"assets/assets/fonts/NotoSansEthiopic_regular.ttf": "8bb27ef9e5c56cfaa67c38c095b8828f",
"assets/assets/fonts/NotoNaskhArabic_regular.ttf": "6d7b593c7d9dd13e767e2298c8bb9de3",
"assets/assets/fonts/NotoSans_regular.ttf": "1830a0330e97bf073130760550280c3e",
"assets/assets/audio/wrong.mp3": "fdb28133158efaf18814b5dadfc8f504",
"assets/assets/audio/level_6/14.mp3": "915a53b4aeacfe063dd5cdd39a5840c3",
"assets/assets/audio/level_6/8.mp3": "180344856c92b75b8a3d62ccedf322e2",
"assets/assets/audio/level_6/9.mp3": "469b43cdd5c957963c95a0dc9b4bc219",
"assets/assets/audio/level_6/26.mp3": "f5d947219e5d1f30d6c28ba44b22aa6b",
"assets/assets/audio/level_6/1.mp3": "c713d187238de2ff9e4f610bc8890d1f",
"assets/assets/audio/level_6/12.mp3": "3536cf7f9d0026fc4c1d05c662ed08a0",
"assets/assets/audio/level_6/5.mp3": "6df19766fe1233118a196def8e66daeb",
"assets/assets/audio/level_6/25.mp3": "2df42f2da593549e88f6cced901acdf7",
"assets/assets/audio/level_6/4.mp3": "9e255d5f7c6ab0c43d12967120c939b9",
"assets/assets/audio/level_6/7.mp3": "f70d023f8cac325d3e246ae9888f6002",
"assets/assets/audio/level_6/15.mp3": "6cbc7763002254a8c92c06aa71898ac6",
"assets/assets/audio/level_6/18.mp3": "8d15d702bb52706fd5a0a4de8a8e6e4e",
"assets/assets/audio/level_6/17.mp3": "0c428da8d60083bd3b1c4e7078037d4f",
"assets/assets/audio/level_6/2.mp3": "127938e3e65c7def598c401cbd36480a",
"assets/assets/audio/level_6/11.mp3": "3f62fa0bb87754b85972ac57d589eb68",
"assets/assets/audio/level_6/19.mp3": "44fc003e112eca42df84f83a666133c5",
"assets/assets/audio/level_6/13.mp3": "b8112b618b487d0294d728f13667d9ae",
"assets/assets/audio/level_6/10.mp3": "aa9fad88087c7a60fccf63f2a6d3945c",
"assets/assets/audio/level_6/27.mp3": "7a8f1347073af633a03969f4ae023839",
"assets/assets/audio/level_6/6.mp3": "65f971b12481f31cb641fff2ad15d806",
"assets/assets/audio/level_6/22.mp3": "5308c4f4f68980b86d110fa6584a5bf4",
"assets/assets/audio/level_6/28.mp3": "23ed4538a1a7ba1aea5641078e84b72c",
"assets/assets/audio/level_6/21.mp3": "70337b351cfe2f00549e4ebafa49c784",
"assets/assets/audio/level_6/23.mp3": "a3b41762aea5b48bde10c610b53e4023",
"assets/assets/audio/level_6/16.mp3": "a1477bdf9332d9cdee3ec33c5dce082f",
"assets/assets/audio/level_6/20.mp3": "908db01ebb779eba7d825c45a69f8c9c",
"assets/assets/audio/level_6/24.mp3": "473c8542683ba49f8d3d1f8fbdd221d4",
"assets/assets/audio/level_6/3.mp3": "5978c69a1cbf52d41cf6476d667de6b7",
"assets/assets/audio/level_5/14.mp3": "4166e9f1bca8c4554b5054e155912081",
"assets/assets/audio/level_5/8.mp3": "8faed73dcc410d18a3bbde0fc837be94",
"assets/assets/audio/level_5/9.mp3": "87e3fec1b9fd3673a7efabb82894703e",
"assets/assets/audio/level_5/26.mp3": "8216994983aa3b09905787abeb849843",
"assets/assets/audio/level_5/1.mp3": "f401d420dea2b1419aa388ef7a1b5e5d",
"assets/assets/audio/level_5/12.mp3": "460c389ccd9f173292e5abc0dc3dafad",
"assets/assets/audio/level_5/5.mp3": "dc8d495a1aef5cd73db8ebe5afd8f016",
"assets/assets/audio/level_5/25.mp3": "d44ae4dbcefd57cb4a3dba7387f87fbb",
"assets/assets/audio/level_5/4.mp3": "08442a87f8e3af02d2376d61383dea05",
"assets/assets/audio/level_5/7.mp3": "55194082b67df77a8e81d1869bd7ffe5",
"assets/assets/audio/level_5/15.mp3": "15547b9df83ad72411e0e2f80f7031f9",
"assets/assets/audio/level_5/18.mp3": "8feb4c81f984891dbda94ff0604ab227",
"assets/assets/audio/level_5/17.mp3": "dd6bf9ffc0a85d206880891a8bdee141",
"assets/assets/audio/level_5/2.mp3": "db1c405a6cb28ac78fb4fcb83a2fa78d",
"assets/assets/audio/level_5/11.mp3": "0aeb9496807ddad1a9490dd635468156",
"assets/assets/audio/level_5/19.mp3": "6e1c46fd0f563f60c5dae20da31e249a",
"assets/assets/audio/level_5/13.mp3": "4cf282843575766d6e241024e5506130",
"assets/assets/audio/level_5/10.mp3": "4d5ede490d191acfc261394c651d1985",
"assets/assets/audio/level_5/27.mp3": "53f30d1b103a901be223bc906eafac0a",
"assets/assets/audio/level_5/6.mp3": "ff38115b751ce60e8e5650df65fdea32",
"assets/assets/audio/level_5/22.mp3": "72b0797b500b7d108d22ccc5f1d7d889",
"assets/assets/audio/level_5/28.mp3": "de176c1634c6252bd5c823df22455d83",
"assets/assets/audio/level_5/21.mp3": "07e600da4610a7943fdd8905f413f49f",
"assets/assets/audio/level_5/23.mp3": "dca3bd06cf607c1cc1229a485dfb4690",
"assets/assets/audio/level_5/16.mp3": "a6ce29b8da2d66242e977d4992d60309",
"assets/assets/audio/level_5/20.mp3": "44da1c3a76847df9c51012c88295576f",
"assets/assets/audio/level_5/24.mp3": "c3cc65fd815a841e17bd832b6499134e",
"assets/assets/audio/level_5/3.mp3": "9ea960103b7ac2ce013edf96056f5f17",
"assets/assets/audio/level_7/14.mp3": "0d59955ae24940945792127eedace7a6",
"assets/assets/audio/level_7/8.mp3": "27018ee7ec8909f0be288840eff1fc68",
"assets/assets/audio/level_7/9.mp3": "88015fc954eef8c010980a3f3d3836bb",
"assets/assets/audio/level_7/26.mp3": "284acb6842a338b6cf53d9c5ce404a89",
"assets/assets/audio/level_7/1.mp3": "f225a22207e3886c0df29d0469cade77",
"assets/assets/audio/level_7/12.mp3": "716728d10ba178cda838457e48a2de6a",
"assets/assets/audio/level_7/5.mp3": "a9d81913973da9a96643cda7f5c4b2f6",
"assets/assets/audio/level_7/25.mp3": "2f24a851fd03133bc8a83d52819886b1",
"assets/assets/audio/level_7/4.mp3": "23c75df4ef98198e756f24732b678b5a",
"assets/assets/audio/level_7/7.mp3": "abc984c5b3ca7b66547f7fb46588eb92",
"assets/assets/audio/level_7/15.mp3": "f2a598facf4a3c979e312c7c70e5fdc4",
"assets/assets/audio/level_7/18.mp3": "6682ad17968684ce4c8bac7db8ae48ec",
"assets/assets/audio/level_7/17.mp3": "65313d1c78a9f68096801039bde2145b",
"assets/assets/audio/level_7/2.mp3": "f0567fde141f5b0cfedf828d022da7c5",
"assets/assets/audio/level_7/11.mp3": "2c33c0f34aba556f1e228c4190e839a3",
"assets/assets/audio/level_7/19.mp3": "14b90e2f25512e36d3dcdf855e66d604",
"assets/assets/audio/level_7/13.mp3": "8051ee5ae65dcc10ec85e22b4b02a001",
"assets/assets/audio/level_7/10.mp3": "73c20ad891d1290e01e9cb7b627291bc",
"assets/assets/audio/level_7/27.mp3": "9001bd4f99621c5b85c8849097ace380",
"assets/assets/audio/level_7/6.mp3": "a5d7374bcd0540c3be86773310df941b",
"assets/assets/audio/level_7/22.mp3": "4385f3511d091167d377f0b7a573ecc6",
"assets/assets/audio/level_7/28.mp3": "c81539d631ae5a5ffe042be22b48a5dd",
"assets/assets/audio/level_7/21.mp3": "17bceb7191773f3af446316abfee1f5a",
"assets/assets/audio/level_7/23.mp3": "142a4c7a8bbe679bab84ee219d2f4906",
"assets/assets/audio/level_7/16.mp3": "c3d845859ca172db7db46489b594607f",
"assets/assets/audio/level_7/20.mp3": "97935379b1c774ae9e26dcb916668b1f",
"assets/assets/audio/level_7/24.mp3": "f15536ea8144406c30e6bbf67934c8a0",
"assets/assets/audio/level_7/3.mp3": "74f2dd6ca188aee63dd3e22e872805b8",
"assets/assets/audio/level_9/14.mp3": "dd4087c0b106f39d32a16ca4a70e8b6c",
"assets/assets/audio/level_9/8.mp3": "066c9cc5ae07ee59a493f3804f58357d",
"assets/assets/audio/level_9/9.mp3": "c7c1232ebfc91edadf645d8ab606a2c6",
"assets/assets/audio/level_9/1.mp3": "cf8ce59637b32f42fab8546802488943",
"assets/assets/audio/level_9/12.mp3": "1b9877c117ae18efac08a3d7885cd067",
"assets/assets/audio/level_9/5.mp3": "6b0f0191f7145a9ec4dcfe46b3ec2079",
"assets/assets/audio/level_9/4.mp3": "fbcfd4e3984c9ab986c96ea12f7ad9a3",
"assets/assets/audio/level_9/7.mp3": "249c762605ac965ecbdb4cbc8dfa4e18",
"assets/assets/audio/level_9/15.mp3": "35b03656bc4e672133f75db04ca8ba43",
"assets/assets/audio/level_9/2.mp3": "6013b09e704e3d694519edd3e19f3020",
"assets/assets/audio/level_9/11.mp3": "7684bcd1416bf081878430a8e6367b9a",
"assets/assets/audio/level_9/13.mp3": "a32149fc1c64e370a0079026d4567192",
"assets/assets/audio/level_9/10.mp3": "cf4ff092e12df28581065f1eaff2baad",
"assets/assets/audio/level_9/6.mp3": "9c4129edda6ec7b7b98d9f2793102d0a",
"assets/assets/audio/level_9/3.mp3": "169288ca86a7a7c0748ec9cc78944bbc",
"assets/assets/audio/level_4/14.mp3": "0ec213d8ecdc85cef21d671658f910ff",
"assets/assets/audio/level_4/8.mp3": "a4766e9d6352317f98e1c846875c7fc7",
"assets/assets/audio/level_4/9.mp3": "123c020a136b6b661de5b4990e172ab4",
"assets/assets/audio/level_4/26.mp3": "5361197d1a841ed3abff4983c8c67bde",
"assets/assets/audio/level_4/1.mp3": "eee04a06823de62f1503100ffd7e8fd6",
"assets/assets/audio/level_4/12.mp3": "f99e70844d54883bc1f72fe06348eced",
"assets/assets/audio/level_4/5.mp3": "7c69f08c07734c0a731786580bfa04b4",
"assets/assets/audio/level_4/25.mp3": "9d11a645d4eb71653c17efec3d411c20",
"assets/assets/audio/level_4/4.mp3": "9b742555ee29a6587d7fb86fad13461c",
"assets/assets/audio/level_4/7.mp3": "bedc67362696583ccb68424cbe9766d2",
"assets/assets/audio/level_4/15.mp3": "c49cb7fd8b62330b559390d98d5262d7",
"assets/assets/audio/level_4/18.mp3": "f6640b89dc4693ebc29c215a05efa0e1",
"assets/assets/audio/level_4/17.mp3": "24c7d477bd8ab429a15287a655025952",
"assets/assets/audio/level_4/2.mp3": "4df4382fa6904bf18cf4b7c0e39f307f",
"assets/assets/audio/level_4/11.mp3": "35719884c1e99c14fbe5766aa74b14ba",
"assets/assets/audio/level_4/19.mp3": "0f7ad180a3b92960fe0601d16dd8afa5",
"assets/assets/audio/level_4/13.mp3": "1be08f664863e4fe07e868f025dbf69d",
"assets/assets/audio/level_4/10.mp3": "8e9f34f51a606ed660139e7aa42f8498",
"assets/assets/audio/level_4/27.mp3": "bad2c85fbf8368764ea4df288db0f602",
"assets/assets/audio/level_4/6.mp3": "ff99681e1550d527633c6fb0a1aed6bb",
"assets/assets/audio/level_4/22.mp3": "e198c013e5e4b2bc443fbb902bee4832",
"assets/assets/audio/level_4/28.mp3": "d44df6dc2609152606d33f58fc073ad8",
"assets/assets/audio/level_4/21.mp3": "781a08758de98d5bfecb00bc36be2b10",
"assets/assets/audio/level_4/23.mp3": "709d39006e9c9932c0b6a5d94f15cbb7",
"assets/assets/audio/level_4/16.mp3": "abb56b863e9d43aa6db321f253be99f0",
"assets/assets/audio/level_4/20.mp3": "a01365bd05c52bc6cbb4a4cccb1d7ba2",
"assets/assets/audio/level_4/24.mp3": "f2bf10308fb257701ed073dd416124cc",
"assets/assets/audio/level_4/3.mp3": "831605478011f9de2cd62e4590b31d8d",
"assets/assets/audio/level_1/14.mp3": "8d6f89de97c42bd8e6a739f64b69cbb2",
"assets/assets/audio/level_1/8.mp3": "371a546798cf9d504673aafc8d8ebd48",
"assets/assets/audio/level_1/9.mp3": "c843a9d3ef0384056f3f50eff23c825d",
"assets/assets/audio/level_1/26.mp3": "22b3e7acb13f5e8482db412d5f8a0dca",
"assets/assets/audio/level_1/1.mp3": "e871f6d9207b038b24a3cf0f5b0d59eb",
"assets/assets/audio/level_1/12.mp3": "152a3507edc9013824ca43ca752e026a",
"assets/assets/audio/level_1/5.mp3": "7011d2f78a7ec8f2744a6c873c37c208",
"assets/assets/audio/level_1/25.mp3": "ef196c291abc294944eaf5b448d01215",
"assets/assets/audio/level_1/29.mp3": "724ef28da8be5e068426ab6706e8feb3",
"assets/assets/audio/level_1/4.mp3": "ab8f8a0718c35d204c2c2be7f540ffdc",
"assets/assets/audio/level_1/7.mp3": "7b9ebc2b1a1b6eb6db9b38b953c7e231",
"assets/assets/audio/level_1/15.mp3": "aa24457cccde2e255d6ec2867f76d4c0",
"assets/assets/audio/level_1/18.mp3": "bb0d524ca613497ddc1f20eb81f3cf40",
"assets/assets/audio/level_1/17.mp3": "9d31b0f007744f26e3bc4774d25074ae",
"assets/assets/audio/level_1/2.mp3": "fc14f40caea8e68b265a2d5a44c62134",
"assets/assets/audio/level_1/11.mp3": "957c7556fb3148bd113509e9847cb4bd",
"assets/assets/audio/level_1/19.mp3": "376bf067581095ffa1de9b297a90b4bc",
"assets/assets/audio/level_1/13.mp3": "23a85ea6f8200f583c4f3f8563c2ed98",
"assets/assets/audio/level_1/10.mp3": "f92b0ea8c820cdcbab88e3c355d69c26",
"assets/assets/audio/level_1/27.mp3": "e2723dd7abd93193c92677f1964373b1",
"assets/assets/audio/level_1/6.mp3": "be92201e92af8a64eb245906e229dff4",
"assets/assets/audio/level_1/22.mp3": "3789b09528530fd7283b21946efc7bd5",
"assets/assets/audio/level_1/28.mp3": "894427c63a0c512e3c369b3f90854bf7",
"assets/assets/audio/level_1/21.mp3": "efe516733a15551378094bcf1d724be9",
"assets/assets/audio/level_1/23.mp3": "8b2fec351248af24426e723d57982e3e",
"assets/assets/audio/level_1/16.mp3": "8cf4a51812eed83645d4c2253339c5aa",
"assets/assets/audio/level_1/20.mp3": "6a41b7ead03026a60c5c1c5745ffd842",
"assets/assets/audio/level_1/24.mp3": "c0bb9ff7f72d333e54adf1d80ec6aed0",
"assets/assets/audio/level_1/3.mp3": "e0b4d2f586b69d846b36b4369e504ad1",
"assets/assets/audio/level_3/14.mp3": "74e1bcb676512ade0400d7f0a8814f20",
"assets/assets/audio/level_3/8.mp3": "4f1e3fd7abe0111302af5bcb09851e94",
"assets/assets/audio/level_3/9.mp3": "73955adea420c31fce98ef41834b454c",
"assets/assets/audio/level_3/26.mp3": "7f74b29d391792eddd61514abfff38cd",
"assets/assets/audio/level_3/1.mp3": "0cffd9e4c34688848a85002240be6c5a",
"assets/assets/audio/level_3/12.mp3": "f11d311a75334b01651dac8fc2a3c8e7",
"assets/assets/audio/level_3/5.mp3": "b03cb3825e17d7f69cc5cabc802f5808",
"assets/assets/audio/level_3/25.mp3": "7bbe8506dc34d65a1fb74d1100a8c109",
"assets/assets/audio/level_3/4.mp3": "a5efcb86e21c7265334cb83c88bdaf6f",
"assets/assets/audio/level_3/7.mp3": "b1159aa243fd6ecb1a59b00759091536",
"assets/assets/audio/level_3/15.mp3": "43dea48a7fb36a7346d21326082c8417",
"assets/assets/audio/level_3/18.mp3": "148179b660b002a7ccd589d43fc7ced5",
"assets/assets/audio/level_3/17.mp3": "3e5020c7c9565e707db9c9e6cac78064",
"assets/assets/audio/level_3/2.mp3": "c69dacbefd438305d7d6520fb44b8df2",
"assets/assets/audio/level_3/11.mp3": "3e3a30bd91b4d8bb084724ecccb1faac",
"assets/assets/audio/level_3/19.mp3": "f6d6c2f9939d0b19e9b563d01bb74168",
"assets/assets/audio/level_3/13.mp3": "10c8d87987fd78cef23a54a672c550d3",
"assets/assets/audio/level_3/10.mp3": "a23458bbaa82c4da2cbc766301d918fa",
"assets/assets/audio/level_3/27.mp3": "f7b24f55a32d34384d7bc2a5ffcecb31",
"assets/assets/audio/level_3/6.mp3": "be46c2840c62af3c57e8c30555da3cf7",
"assets/assets/audio/level_3/22.mp3": "129d199374748fe38e68a367c9bf2595",
"assets/assets/audio/level_3/28.mp3": "c3cd631dd6c307294a17a159d55ab9b4",
"assets/assets/audio/level_3/21.mp3": "dc3a9bdfd9e37b74d6aa8c7e01f50c59",
"assets/assets/audio/level_3/23.mp3": "3e09d58fae97009320ddaf9ecd959731",
"assets/assets/audio/level_3/16.mp3": "4060dde8017d812b66aacd3e28f399c3",
"assets/assets/audio/level_3/20.mp3": "8ef765f4e7b58982ed6b5ec11f8d01f9",
"assets/assets/audio/level_3/24.mp3": "0b8f49dedefb8e7ecb6e86880394d35c",
"assets/assets/audio/level_3/3.mp3": "1a22941f223fd4856cd6e8c1f7d9ab8f",
"assets/assets/audio/applause.mp3": "0aa880ae48863e599b892bfddf64a0e1",
"assets/assets/audio/level_2/14.mp3": "f95dabe9ba257a3e90ee879c429438e8",
"assets/assets/audio/level_2/8.mp3": "5fd6647e7faccf4c5b4fc831282fd724",
"assets/assets/audio/level_2/9.mp3": "21b3b30b1ded90e7889abd6c29ed676f",
"assets/assets/audio/level_2/26.mp3": "aafda197dc4987395f5c5dda053e22a6",
"assets/assets/audio/level_2/1.mp3": "3e6d95410c99c843ff30ef8748d582fc",
"assets/assets/audio/level_2/12.mp3": "500f1caaf9afe6ea9b1d8b977eac4c18",
"assets/assets/audio/level_2/5.mp3": "1ffa1a3d62ee7126dfdb459979660f29",
"assets/assets/audio/level_2/25.mp3": "7f610130547b9f079453561c26166720",
"assets/assets/audio/level_2/4.mp3": "d2cd89d3f6a35db14d0d988ed74317f0",
"assets/assets/audio/level_2/7.mp3": "6f9477cf35a982fd1708a9606d84f803",
"assets/assets/audio/level_2/15.mp3": "7e95faa70ca7afcf9c61004a05459fd4",
"assets/assets/audio/level_2/18.mp3": "a6738fb1ff1db2c38c78236d37d60400",
"assets/assets/audio/level_2/17.mp3": "3051397b106d4520f7b1ec227eb0dd28",
"assets/assets/audio/level_2/2.mp3": "5bfa7f2eacef81b7943829603fc7d3db",
"assets/assets/audio/level_2/11.mp3": "2230fbb6f15cba928ab56a80435bca06",
"assets/assets/audio/level_2/19.mp3": "2e8d444a0be255e34b62b58f0f8aed0c",
"assets/assets/audio/level_2/13.mp3": "d0ef4a59b974e34ac72610dbc68ecb85",
"assets/assets/audio/level_2/10.mp3": "2c92fae44fb6cb34250e431c0cc3f8ad",
"assets/assets/audio/level_2/27.mp3": "54eba0e010f4c9f1f0d437465c69b95e",
"assets/assets/audio/level_2/6.mp3": "fe46425d74e394daa3661dd79eaceaed",
"assets/assets/audio/level_2/22.mp3": "aec55b4993ef20560eea9bf343802016",
"assets/assets/audio/level_2/28.mp3": "33de82c06b60f915f7b7007377bcc6fc",
"assets/assets/audio/level_2/21.mp3": "4834d162ad38db9c008f5445a4ead17f",
"assets/assets/audio/level_2/23.mp3": "385716b565f82d299ba4746e40b4c4c3",
"assets/assets/audio/level_2/16.mp3": "1c3ad1f3d904eedaa2b7f942e31dd643",
"assets/assets/audio/level_2/20.mp3": "6b76e3a6534dd820e77ff88483ab1ed5",
"assets/assets/audio/level_2/24.mp3": "d5faa7686da9f1c89b5d473aa31eb0ab",
"assets/assets/audio/level_2/3.mp3": "3618fc0ec405f1cf70b303183a6db026",
"assets/assets/audio/level_13/14.mp3": "21388cfc2ff06293ab41e00964f68eab",
"assets/assets/audio/level_13/8.mp3": "a0d55c47f874f70d060d4c3d52badb55",
"assets/assets/audio/level_13/9.mp3": "20109cf4bfa2d62b78a57f9a8a427790",
"assets/assets/audio/level_13/26.mp3": "ca264d91fd49621de428e57d4a7203b7",
"assets/assets/audio/level_13/1.mp3": "76296ffd4f2b5df35b223a0036458d06",
"assets/assets/audio/level_13/12.mp3": "1ad3c7a21079a4bdad528216bb4c85f3",
"assets/assets/audio/level_13/5.mp3": "b7f89bd44780a222475729baa40fd2bc",
"assets/assets/audio/level_13/25.mp3": "10238bcf7c8be1965119c8ac16ca6680",
"assets/assets/audio/level_13/4.mp3": "b5032508d1a02d2e9d92a0b4daa0039e",
"assets/assets/audio/level_13/7.mp3": "9e5a01d3613020cde686bf2403712f7f",
"assets/assets/audio/level_13/15.mp3": "fc10410c43c76d00ef1a2737a9c83a90",
"assets/assets/audio/level_13/18.mp3": "44cf713db831f07cb354000322d5200d",
"assets/assets/audio/level_13/17.mp3": "906b8bd96c4cc87fbc78a227c00fbf27",
"assets/assets/audio/level_13/2.mp3": "bad7849e181853c05f948c8a29c6d4e5",
"assets/assets/audio/level_13/11.mp3": "5806d77a345c8a154478d6bf7e743e63",
"assets/assets/audio/level_13/19.mp3": "c5bdeac5843c816b1904ed379833f44b",
"assets/assets/audio/level_13/13.mp3": "da1d0ecb71e2ce58619cd7ec38a304f1",
"assets/assets/audio/level_13/10.mp3": "43cc15027b48324c923c7094e0c55a54",
"assets/assets/audio/level_13/27.mp3": "691b52378a54c7534b26dda0feb646db",
"assets/assets/audio/level_13/6.mp3": "6c5a5a92c390a5a74ca017d3787089d0",
"assets/assets/audio/level_13/22.mp3": "58f88b992e93dbfd1fb51187a3b07743",
"assets/assets/audio/level_13/21.mp3": "585539e6249dc5969a8ee9db71fa7e61",
"assets/assets/audio/level_13/23.mp3": "0b4fecbbed670613313b96b8ef72acd8",
"assets/assets/audio/level_13/16.mp3": "d8250c1155633eec374a12ced9987213",
"assets/assets/audio/level_13/20.mp3": "dbb70cf9a6f891ddbb60933d7a199c35",
"assets/assets/audio/level_13/24.mp3": "62cc2bb6b5f6ebe4cc0189858d76dfab",
"assets/assets/audio/level_13/3.mp3": "f086dfc41024c2893a958b46ed66b23b",
"assets/assets/audio/level_8/14.mp3": "68a4bafbd62be523ffb41c3182eea38c",
"assets/assets/audio/level_8/8.mp3": "0ba8328e6f2fb7c745cfde9c84dd7808",
"assets/assets/audio/level_8/9.mp3": "eac2ccaa76133b867f1d046d294a42a0",
"assets/assets/audio/level_8/26.mp3": "52d51d75ff1b8927f90238e2557a4598",
"assets/assets/audio/level_8/1.mp3": "61e535d912a95c06e3f4c61e1694bcbb",
"assets/assets/audio/level_8/12.mp3": "fa6a9d40ed6d58a75a1ffa95d35154cb",
"assets/assets/audio/level_8/5.mp3": "27c46d0ab7009e591f6e6118bdd5fed0",
"assets/assets/audio/level_8/25.mp3": "fd1b6557c4bf17baf71690b0959aed54",
"assets/assets/audio/level_8/4.mp3": "23e9fa2fdeeaa35c233632c5c75df7ef",
"assets/assets/audio/level_8/7.mp3": "c53b492f976b26b529cb4624370699ef",
"assets/assets/audio/level_8/15.mp3": "1e4c15e84f0a71d147a859dfc4218f2d",
"assets/assets/audio/level_8/18.mp3": "62537de9c9536025d7200f457b8e0a88",
"assets/assets/audio/level_8/17.mp3": "67445ac1ef4b50559c215d31ad94eba6",
"assets/assets/audio/level_8/2.mp3": "3530de39e07e44aa9ac4e0beb975c8af",
"assets/assets/audio/level_8/11.mp3": "c33a39215fd1a873dcc608649798545e",
"assets/assets/audio/level_8/19.mp3": "09a0509536d5c245d1e76eceaa288e33",
"assets/assets/audio/level_8/13.mp3": "371880167d09d8bbb7eb81f03881fae5",
"assets/assets/audio/level_8/10.mp3": "38b0b2c04f0a52edd7218c29a96880b6",
"assets/assets/audio/level_8/27.mp3": "3625d4cd6a3ba6e600feea3e281f7611",
"assets/assets/audio/level_8/6.mp3": "b0fef4d22753a8303a6210c1c75a523b",
"assets/assets/audio/level_8/22.mp3": "ad0f987a688335b0b9b7949a8e01ab4e",
"assets/assets/audio/level_8/28.mp3": "e722bf99f13ec5fda52d201498dbf6f1",
"assets/assets/audio/level_8/21.mp3": "f1aab8bda4397c27f386613425fcc9f5",
"assets/assets/audio/level_8/23.mp3": "999424a83dd406395cd0c7fdb2f17895",
"assets/assets/audio/level_8/16.mp3": "bca1d830ec7bc071be19f60015376a61",
"assets/assets/audio/level_8/20.mp3": "13eec99830243b5a36c07b30f2881851",
"assets/assets/audio/level_8/24.mp3": "af4b7db89db66aa702f2994ef81310fa",
"assets/assets/audio/level_8/3.mp3": "9ee9b49ca7bfdf51b6b4a181d8941475",
"assets/assets/audio/level_12/8.mp3": "5e0760edb41b4951ef45800b5db1b4ee",
"assets/assets/audio/level_12/9.mp3": "eca1bf64c0381f66efdc7f95b5979cc8",
"assets/assets/audio/level_12/1.mp3": "a0fc23652af7135dc681401c7a05d69f",
"assets/assets/audio/level_12/5.mp3": "79bed63567cf835e65ba9d1537473572",
"assets/assets/audio/level_12/4.mp3": "9dcd95a41acab609ac84b8c1681a2b8e",
"assets/assets/audio/level_12/7.mp3": "7e0e4f8745060664b8d48c300b89f337",
"assets/assets/audio/level_12/2.mp3": "8f4265b138357cbab6070663b7062093",
"assets/assets/audio/level_12/10.mp3": "f0332175837045d088b5e15a73a2fdc1",
"assets/assets/audio/level_12/6.mp3": "f2dce41924edf8b05f91628da2bd809f",
"assets/assets/audio/level_12/3.mp3": "20a2b2cc36b5719ee7924235c9f14565",
"assets/assets/audio/correct.mp3": "bc2263df2d3a42359e5343bc066c746c",
"assets/assets/audio/level_10/8.mp3": "67d329687d3127667dc9d46d3c1db236",
"assets/assets/audio/level_10/9.mp3": "3b44e058bddee35fdfae8e3d8f95a9d2",
"assets/assets/audio/level_10/1.mp3": "46959903510efbe6bd590770005bf5b1",
"assets/assets/audio/level_10/5.mp3": "dcbaaa871fd5e3b42400f9828f5c6e96",
"assets/assets/audio/level_10/4.mp3": "48b3bfdf266d58ecc1a0456f458bd909",
"assets/assets/audio/level_10/7.mp3": "b0ea16f7616ee10af6fe39a971ece026",
"assets/assets/audio/level_10/2.mp3": "4f7097b312df72d205ab2f8e02dde9dc",
"assets/assets/audio/level_10/10.mp3": "c34597ffd5d170c279fb537a76837174",
"assets/assets/audio/level_10/6.mp3": "1046e0ae2c1689f1a86332382fee8d4f",
"assets/assets/audio/level_10/3.mp3": "29498ae596ec563fe82684f3dc57feb8",
"assets/assets/audio/non-enthusiastic-clap.mp3": "4e37ee642591edc2274021b692d291e8",
"assets/assets/audio/level_11/8.mp3": "421638f8afc829f0b15a8cf486f6eff7",
"assets/assets/audio/level_11/9.mp3": "c1abd5b927a004ea08dca3811a4b1b3a",
"assets/assets/audio/level_11/1.mp3": "08c9c083488fda3bb8a327ff49d4f682",
"assets/assets/audio/level_11/5.mp3": "aef82328cec22f9f79e289b5838f9252",
"assets/assets/audio/level_11/4.mp3": "1de24e398b43e8701035037a331d3ffd",
"assets/assets/audio/level_11/7.mp3": "1f0d743720eb51ebb28f4bd575457e6c",
"assets/assets/audio/level_11/2.mp3": "1f3f0643facdac1d8837c2f99ef5bfa6",
"assets/assets/audio/level_11/10.mp3": "c4e977e2c6bd04c83e3f355dfdfe5dca",
"assets/assets/audio/level_11/6.mp3": "b935f5c70d67c9e99f67dec9739124d0",
"assets/assets/audio/level_11/3.mp3": "1e80b0d0baa6f60b570fa3809dfd15ee",
"assets/assets/data/app.json": "1d9e7d21bce4d0fd41ea1ce9f5d213bb",
"assets/fonts/MaterialIcons-Regular.otf": "25b0ac86049e1abdb92d97f1e749fae8",
"assets/NOTICES": "541b7c064f23b804257425c544fdca99",
"assets/packages/country_flags/res/si/sa.si": "cf93fcbb04c97fac13136e80fd27ade9",
"assets/packages/country_flags/res/si/ph.si": "c8899c0eb2232931f49fa35de57f5d09",
"assets/packages/country_flags/res/si/ls.si": "f469f1632ad300b4fb00db8328f9b844",
"assets/packages/country_flags/res/si/tv.si": "7e462e7d6fa8bdd967bf9e37b86d0906",
"assets/packages/country_flags/res/si/cd.si": "092862ef3f988f301bf81d937d0b2251",
"assets/packages/country_flags/res/si/az.si": "203fdb6be0df02e0b86e1ab468a84588",
"assets/packages/country_flags/res/si/lk.si": "c8f0c394d54b1618603d89307e6cd127",
"assets/packages/country_flags/res/si/uy.si": "8163529e4c65d4f7f97dad78c51918c7",
"assets/packages/country_flags/res/si/ki.si": "80c4adc8b03b18055be571a612fa3f79",
"assets/packages/country_flags/res/si/kz.si": "f5aad35a9ce49a2a17f165d4761d8ace",
"assets/packages/country_flags/res/si/ky.si": "498424ad28f6c9e005ae14e8d66c3e2f",
"assets/packages/country_flags/res/si/aq.si": "e15ec1a740dfd94250faaf3a04c3e009",
"assets/packages/country_flags/res/si/il.si": "5926479ae8ffa09647b9c20feceb9415",
"assets/packages/country_flags/res/si/sj.si": "04dcac0249ab5999520c35c8e7f3ce38",
"assets/packages/country_flags/res/si/gq.si": "e8e087ae91048f042fa212b5f79a496c",
"assets/packages/country_flags/res/si/ai.si": "98108de6fc34688b9281b6040f855730",
"assets/packages/country_flags/res/si/ae.si": "600a0ce358d82ca58155a6298524084f",
"assets/packages/country_flags/res/si/pn.si": "4df57b8f366ab9d559a134e25fa92201",
"assets/packages/country_flags/res/si/mo.si": "4a369319962984183cfed7f0bf4d60a5",
"assets/packages/country_flags/res/si/ci.si": "2dd6886cd9b611e8301f347233f275db",
"assets/packages/country_flags/res/si/ge.si": "6f700846562325e1e647946a9b7e26f6",
"assets/packages/country_flags/res/si/sk.si": "009a8dbaf2bc675683650d84bde81643",
"assets/packages/country_flags/res/si/ck.si": "30d75fc50470f00d7fc590c058b7a4c1",
"assets/packages/country_flags/res/si/kh.si": "711d8494963708be2a01a1dfc5a002db",
"assets/packages/country_flags/res/si/dm.si": "114b039b7de692af992aa75bdfd324d9",
"assets/packages/country_flags/res/si/vn.si": "5e53b20018d53d957714d0211c237211",
"assets/packages/country_flags/res/si/tk.si": "9fc0141c9928734e4229f05d2f2f68d4",
"assets/packages/country_flags/res/si/im.si": "3bca9cb89673cd2c1837c69f72038bde",
"assets/packages/country_flags/res/si/ax.si": "a456e36511e13498fa3d610a026d79b8",
"assets/packages/country_flags/res/si/pa.si": "3231c2af8957eddd456819783df37ef5",
"assets/packages/country_flags/res/si/mr.si": "73d5e7f3158beeb1e09e294cc2cc3b79",
"assets/packages/country_flags/res/si/cm.si": "d89b50b2a1e7c5814a53894ddf6842f6",
"assets/packages/country_flags/res/si/jm.si": "db4e387e95c824cefb80b16ae8f8af9f",
"assets/packages/country_flags/res/si/fi.si": "6ed37987c4dee7606f35b1f3ef2f4352",
"assets/packages/country_flags/res/si/mx.si": "add64001e4e654f95a36c24e5b212b80",
"assets/packages/country_flags/res/si/nf.si": "1473b829023248dbbd77f49b9e6e5ede",
"assets/packages/country_flags/res/si/bg.si": "75bcf4b187601813fcf6008da5ef3625",
"assets/packages/country_flags/res/si/cf.si": "00cce9e9924e59417fd640f22ff3c068",
"assets/packages/country_flags/res/si/mq.si": "b319560213233391af1170881595344f",
"assets/packages/country_flags/res/si/id.si": "9cf3c91fee39a1ff1d93cbbe385d7bbf",
"assets/packages/country_flags/res/si/ws.si": "1644f5c199bfc4a5ee49d0907eb26efa",
"assets/packages/country_flags/res/si/lc.si": "981c9cb18294152ac0423aa64039f6e0",
"assets/packages/country_flags/res/si/ht.si": "2f82778ff6d4910a677170a08545bfd6",
"assets/packages/country_flags/res/si/me.si": "d87206186e9601dcfabdd0d38b655899",
"assets/packages/country_flags/res/si/ch.si": "25b5af40c1ed5254d8a5c9286a235a78",
"assets/packages/country_flags/res/si/is.si": "6a75ef472e3b3674cb992a6c1a2d8656",
"assets/packages/country_flags/res/si/tt.si": "6550348a507c01feaf93fd191503ce72",
"assets/packages/country_flags/res/si/gb-sct.si": "c1e2452023ede8ca68306f9360bec03f",
"assets/packages/country_flags/res/si/as.si": "f12705f23ac102cc4fa8e85c3a780040",
"assets/packages/country_flags/res/si/bj.si": "e356b737969b4d0413d0d17781f5476f",
"assets/packages/country_flags/res/si/ug.si": "b5368d2d0a873dd2ff8adc689c6c6b09",
"assets/packages/country_flags/res/si/kr.si": "0fc0217454ce0fac5d5b0ed0e19051ce",
"assets/packages/country_flags/res/si/cg.si": "a9df20410076c50e9abbd11b324712c3",
"assets/packages/country_flags/res/si/li.si": "08d65db7ba158c62f8b70240985fbbe9",
"assets/packages/country_flags/res/si/td.si": "7fe532f134f64c198cc8b4feb90efcaf",
"assets/packages/country_flags/res/si/nu.si": "dac0a569e83a73006b8600fa1f1f8ac5",
"assets/packages/country_flags/res/si/bm.si": "2c1effe65d4c9c6ea846536f9ebcac93",
"assets/packages/country_flags/res/si/vu.si": "54ccd51f720f6bb242f2256626a172b8",
"assets/packages/country_flags/res/si/et.si": "6020d43892ed1096172d0d01a00afe89",
"assets/packages/country_flags/res/si/bv.si": "d2e12ff6011d4fc76d0044e61abbd8a1",
"assets/packages/country_flags/res/si/sn.si": "e283672331f67926294d3609b6317d82",
"assets/packages/country_flags/res/si/uz.si": "9141032bde5150e86cd2d159c4f31b72",
"assets/packages/country_flags/res/si/cp.si": "5ac3d76ce03f06c4463d135d4129c494",
"assets/packages/country_flags/res/si/ea.si": "c59363bf0d9a595df07cfe238f9cc16a",
"assets/packages/country_flags/res/si/gb-eng.si": "c23da032fa2a18ca5390c2cab903ac80",
"assets/packages/country_flags/res/si/vi.si": "acbfd08b5cd096eac556c46efecb7926",
"assets/packages/country_flags/res/si/xx.si": "95362a356a59ae95c73b1a7a415abff6",
"assets/packages/country_flags/res/si/kw.si": "fae7c5f1138fcb68b76b6bf1ecb5f422",
"assets/packages/country_flags/res/si/tg.si": "2a23d4dbc913968f6eb97dbb5454941e",
"assets/packages/country_flags/res/si/bo.si": "1491a562f1ee0f5fdf512a72821dc3b1",
"assets/packages/country_flags/res/si/cc.si": "831df80000b0c6d12f0c37f696a11e31",
"assets/packages/country_flags/res/si/mw.si": "529e2edb7b4f71261a4d8c52de450f5d",
"assets/packages/country_flags/res/si/bw.si": "50b6724787e9b206d8998f747748f133",
"assets/packages/country_flags/res/si/ml.si": "e583b41ed5e4f9508970265999bf47bf",
"assets/packages/country_flags/res/si/sh.si": "084b17449dd0ba76474f133039ee68d3",
"assets/packages/country_flags/res/si/kg.si": "1f1f0daac400da3f36e873982f002844",
"assets/packages/country_flags/res/si/ec.si": "87d4beb1830c8746d02bd3eb81daa1cf",
"assets/packages/country_flags/res/si/sm.si": "e29d9a0493a72947dfc5e5668bcdcc30",
"assets/packages/country_flags/res/si/al.si": "3a10d259f602c6832ed5316403f6fe91",
"assets/packages/country_flags/res/si/bb.si": "a0f7ccd01c2e5eee48607b53d0791941",
"assets/packages/country_flags/res/si/au.si": "93810e1a767ca77d78fa8d70ef89878a",
"assets/packages/country_flags/res/si/bt.si": "9b9f54fdaeb57d27628dd7318c23d632",
"assets/packages/country_flags/res/si/cr.si": "7385af5d3c967dad1c62027ece383dd6",
"assets/packages/country_flags/res/si/cy.si": "f4f95412e75e3e82b62b140f1fb4d327",
"assets/packages/country_flags/res/si/cl.si": "1765b8d051900505b51ca7149756b62e",
"assets/packages/country_flags/res/si/vc.si": "a6d41b2c67d49f3f202dc920ad2f8c49",
"assets/packages/country_flags/res/si/sc.si": "65a3e456a8f0cfb400f7a4b354fd1839",
"assets/packages/country_flags/res/si/do.si": "0c12349ea290f3e7d6bd3c7eba8ec556",
"assets/packages/country_flags/res/si/sz.si": "780a7eb9794bd6cf85d59d42766e62b3",
"assets/packages/country_flags/res/si/ba.si": "6719180c7b4f5d76a1c41fd76668cc69",
"assets/packages/country_flags/res/si/yt.si": "5ac3d76ce03f06c4463d135d4129c494",
"assets/packages/country_flags/res/si/at.si": "da9709351758847fbf187e9947fd44a5",
"assets/packages/country_flags/res/si/sy.si": "e510652843b486afcb5f160188b4514a",
"assets/packages/country_flags/res/si/gi.si": "1d4b7516dbef91dd53a3223786433468",
"assets/packages/country_flags/res/si/jp.si": "ee22ac07312690001d82c27ed0fab0a8",
"assets/packages/country_flags/res/si/ye.si": "cc3bd4c5b25155d249015f88380a3023",
"assets/packages/country_flags/res/si/nz.si": "95a431faf2077c36c314e060d3565e11",
"assets/packages/country_flags/res/si/pk.si": "afa64ff88820436b4ec66b1043a1ca7d",
"assets/packages/country_flags/res/si/np.si": "aac703fec2d68d1f05f0b368bcd05b5c",
"assets/packages/country_flags/res/si/cn.si": "a629d6ea2863bc2e2783ed86427fccdf",
"assets/packages/country_flags/res/si/bf.si": "36c828d75ffb1b1ee0c074f08dbd162e",
"assets/packages/country_flags/res/si/tn.si": "d15a30567010db55d9a398ffde25694c",
"assets/packages/country_flags/res/si/gm.si": "b764f5bed08b62f0c908d224b61c62ce",
"assets/packages/country_flags/res/si/ca.si": "a911aefa8694f795f4066047492134be",
"assets/packages/country_flags/res/si/va.si": "c23d81f5e4e3acd336ce01d9ed561ee8",
"assets/packages/country_flags/res/si/fr.si": "5ac3d76ce03f06c4463d135d4129c494",
"assets/packages/country_flags/res/si/cz.si": "722387eee039fb858312120170af2ba7",
"assets/packages/country_flags/res/si/mf.si": "5ac3d76ce03f06c4463d135d4129c494",
"assets/packages/country_flags/res/si/gb-nir.si": "70756040e8747ea10547485c1b5493dd",
"assets/packages/country_flags/res/si/fm.si": "d195abb2e8d6961f6ffa0da23d8b2813",
"assets/packages/country_flags/res/si/gd.si": "2bd89cc35d9a35aa6b5c7dfa8888e769",
"assets/packages/country_flags/res/si/gu.si": "f47c5abf0b2dd4b8b717e87c82e1f328",
"assets/packages/country_flags/res/si/sg.si": "3e20b9387970793f6b3db62609820d4a",
"assets/packages/country_flags/res/si/om.si": "8d23e422f6191c117e764aa17c80e195",
"assets/packages/country_flags/res/si/nc.si": "8760c0e60c7ab868ea1577de40a8dd04",
"assets/packages/country_flags/res/si/af.si": "9fb0d66778b5afe46c5750f6b2de0a06",
"assets/packages/country_flags/res/si/cu.si": "b561ce782460b38c99795d3891be4bd8",
"assets/packages/country_flags/res/si/bq.si": "130b5b1f64baa8e002dc668b0d3d589f",
"assets/packages/country_flags/res/si/be.si": "6d9dd724fd5dd06b3cff71955bf03728",
"assets/packages/country_flags/res/si/ag.si": "f2607a0fcfd1aeecb45e1ea7d17979a0",
"assets/packages/country_flags/res/si/eh.si": "99373a71bd21ee4d5ce37dd840fa8bc5",
"assets/packages/country_flags/res/si/rs.si": "f231dce72ce3243a624eb723d200a63e",
"assets/packages/country_flags/res/si/bl.si": "b319560213233391af1170881595344f",
"assets/packages/country_flags/res/si/hu.si": "379f70d867e53920ef1105ae9d3dc5e1",
"assets/packages/country_flags/res/si/tz.si": "643850342b81b7015ad57cddc9589a69",
"assets/packages/country_flags/res/si/pe.si": "978e662d337e34163ef3dbc28cf35f11",
"assets/packages/country_flags/res/si/io.si": "3469f709b852fa25f3d735d4e7ee88a2",
"assets/packages/country_flags/res/si/se.si": "64f75927796e3bcf418a7f1bce12cf39",
"assets/packages/country_flags/res/si/rw.si": "8b075359fc5a06224acf83d24b058752",
"assets/packages/country_flags/res/si/am.si": "f1c0decc96d76ecce7dda29e1b0a3048",
"assets/packages/country_flags/res/si/ie.si": "58082f0739794c2562fbd21b9700a0a9",
"assets/packages/country_flags/res/si/hn.si": "bf1d541bc8c0b4826c3cf7f2d36e1b87",
"assets/packages/country_flags/res/si/er.si": "1f32851695ad06a33b607cbfe96cbe5c",
"assets/packages/country_flags/res/si/ao.si": "042c2a03c013acf928449dbaf2a4affe",
"assets/packages/country_flags/res/si/ga.si": "863042bec1c7781b8245d2fec2961835",
"assets/packages/country_flags/res/si/es-ga.si": "c128cec2feffaff7aab7940dadcd9ccd",
"assets/packages/country_flags/res/si/ps.si": "e91b4cc92cc8629f42c9d8fb11d028ba",
"assets/packages/country_flags/res/si/eu.si": "0c7acf5338eb131940e6a2d53022fda7",
"assets/packages/country_flags/res/si/jo.si": "3c4f0683e2fe5e5d9b1424a5865c1e59",
"assets/packages/country_flags/res/si/ro.si": "ec81c7e1014f2b8584ddd07d0fad9c43",
"assets/packages/country_flags/res/si/sv.si": "912cc0a01ad6e839db6392ece5736b68",
"assets/packages/country_flags/res/si/ma.si": "9ced8447a0a9b2e720d870bc5aef87cf",
"assets/packages/country_flags/res/si/lr.si": "8ea704b8b395abcb8dbd13a7fb738b3e",
"assets/packages/country_flags/res/si/dj.si": "c39ebb82ae2414d5b42b0c78d7db1626",
"assets/packages/country_flags/res/si/mu.si": "9f4070ad133e7380edb48cb11cffaef1",
"assets/packages/country_flags/res/si/pt.si": "04c1755d12a50d7524a66124c8d725cc",
"assets/packages/country_flags/res/si/je.si": "5fb5c37d3e7469ad537882debd8c4f33",
"assets/packages/country_flags/res/si/ng.si": "d2764e808010a6d2389cfc1e83e3b710",
"assets/packages/country_flags/res/si/km.si": "6cc50d7456a351984bae778298741591",
"assets/packages/country_flags/res/si/no.si": "6b6efedb50f0a7b05a9afe882924fe99",
"assets/packages/country_flags/res/si/so.si": "ee4702222805ec60fe47cca5500fced8",
"assets/packages/country_flags/res/si/vg.si": "de1ed29316c1d0f81af9946e35d254d7",
"assets/packages/country_flags/res/si/kn.si": "cd16cb0ce86ecb131422414a132352bb",
"assets/packages/country_flags/res/si/gl.si": "f447d0f9f9e95027def4b4a333f59393",
"assets/packages/country_flags/res/si/si.si": "11367d866b110a2971aae42dbc72b47f",
"assets/packages/country_flags/res/si/dk.si": "23b9112d01b91326804b173427d0a991",
"assets/packages/country_flags/res/si/br.si": "dc32cd1c578da0b7106bd15a74434692",
"assets/packages/country_flags/res/si/mz.si": "65389bae62f6de08c93ff93fe61e7b24",
"assets/packages/country_flags/res/si/tm.si": "61cac086e156158fe52394aadb734bd1",
"assets/packages/country_flags/res/si/pl.si": "034643869bc1b14ad2af44cc9aa24b9f",
"assets/packages/country_flags/res/si/mt.si": "2c7e94cc8b51a7ce1c1958a00f880398",
"assets/packages/country_flags/res/si/ms.si": "e04ef3545afb3927de3aff13640ff6b9",
"assets/packages/country_flags/res/si/gy.si": "6373d2b94878202fd94563aeea4fd8ca",
"assets/packages/country_flags/res/si/fj.si": "5315abdde8d2a5274a621a7d1fdb92a6",
"assets/packages/country_flags/res/si/cefta.si": "4a619e7166e3a91fd3333a0aa9a7f212",
"assets/packages/country_flags/res/si/ke.si": "87ce4c55414a8c5d29f23ca16310a01c",
"assets/packages/country_flags/res/si/ne.si": "5323700b3b0dc68916ffe048c4afc2b1",
"assets/packages/country_flags/res/si/wf.si": "5ac3d76ce03f06c4463d135d4129c494",
"assets/packages/country_flags/res/si/pg.si": "51e824f62d970ad02c7afa9cc70330d8",
"assets/packages/country_flags/res/si/md.si": "074b41437a23811d27d4db98bedd56d8",
"assets/packages/country_flags/res/si/ic.si": "5459bbd72389b2300c7da170cd528f23",
"assets/packages/country_flags/res/si/mk.si": "0aee6cc90fb321101c9d4afd923c2d85",
"assets/packages/country_flags/res/si/bd.si": "18bcbe7c5cd7ef99faf8e581dcf6f2db",
"assets/packages/country_flags/res/si/ir.si": "84eb55b574dd390d8fc86b185d182578",
"assets/packages/country_flags/res/si/tr.si": "3bd279bd1f4c26e0ad0abed7fb744df3",
"assets/packages/country_flags/res/si/in.si": "335a5837f0d2b45527db4e60087b4221",
"assets/packages/country_flags/res/si/my.si": "6487d3c60a6fb74711c8bf732ef9aaea",
"assets/packages/country_flags/res/si/fo.si": "c074164f5875cc2ac648caa3461a4ffa",
"assets/packages/country_flags/res/si/ac.si": "084b17449dd0ba76474f133039ee68d3",
"assets/packages/country_flags/res/si/aw.si": "bac854c7bbf50dd71fc643f9197f4587",
"assets/packages/country_flags/res/si/la.si": "161dccf57b198768b6c95fd585966156",
"assets/packages/country_flags/res/si/tj.si": "ff5523df78dbb97dbc212adec3b67a5e",
"assets/packages/country_flags/res/si/to.si": "999f5edc1d7bd74937dab96f8d035368",
"assets/packages/country_flags/res/si/nr.si": "7762af79a081de69557b7611eaf93bf9",
"assets/packages/country_flags/res/si/st.si": "201fdb14910faacd6ce8c30c0a2c1bec",
"assets/packages/country_flags/res/si/gb.si": "b875cc97c8e2a1a41fd3ccbbdb63d291",
"assets/packages/country_flags/res/si/sr.si": "c996e0d2b46e4afc13b18a5abe492fe7",
"assets/packages/country_flags/res/si/ad.si": "c3ccb8e3cf8b3ce384280c687c94ed53",
"assets/packages/country_flags/res/si/bz.si": "3fad74bf2e5948e1556c8048e65e084e",
"assets/packages/country_flags/res/si/ni.si": "8af49cf35b72204052de6fab8322afc8",
"assets/packages/country_flags/res/si/gg.si": "57b684be8b0e0fa86e1dae5100f3c0ee",
"assets/packages/country_flags/res/si/ly.si": "b99bf6af3ded37ca4b35c612bfe98721",
"assets/packages/country_flags/res/si/es.si": "c59363bf0d9a595df07cfe238f9cc16a",
"assets/packages/country_flags/res/si/th.si": "1654e97b82bcdcdaade71e1bc3a5590d",
"assets/packages/country_flags/res/si/iq.si": "a0be6279c1905893dcbcbe0c7ce44302",
"assets/packages/country_flags/res/si/tw.si": "7bba519f0f26cca5417d8edb57bdef83",
"assets/packages/country_flags/res/si/gp.si": "5ac3d76ce03f06c4463d135d4129c494",
"assets/packages/country_flags/res/si/zw.si": "b32c711b08bfe7425d509407c48ee5ed",
"assets/packages/country_flags/res/si/kp.si": "863f41ba80f1b3f9c794aaeafafb02d6",
"assets/packages/country_flags/res/si/gf.si": "5ac3d76ce03f06c4463d135d4129c494",
"assets/packages/country_flags/res/si/gn.si": "ebb9409ab8449de9d040549ffcef1321",
"assets/packages/country_flags/res/si/bs.si": "5818730530c519e134452e41830a7d4b",
"assets/packages/country_flags/res/si/de.si": "aaabd585b21d0960b60d05acf4c54cd3",
"assets/packages/country_flags/res/si/ua.si": "aeb59a31627c7e9cb89c2c31c8b95d15",
"assets/packages/country_flags/res/si/mc.si": "0cb03fed360c4c1401b0e9cff5dea505",
"assets/packages/country_flags/res/si/ee.si": "d1d0e6c483ec14291ccafc69c4390f07",
"assets/packages/country_flags/res/si/gr.si": "a7ffe39d3dbd0f7e2d7cf03b38ebce8b",
"assets/packages/country_flags/res/si/bn.si": "1334a282f886a35989ab2d1fee8b3acc",
"assets/packages/country_flags/res/si/mg.si": "f6406a9d332acb29115b31235c49c920",
"assets/packages/country_flags/res/si/gw.si": "9c6f62e2963f012b571dad989416a1f3",
"assets/packages/country_flags/res/si/un.si": "d3a2546a132b2e216aa17ffafaca8f57",
"assets/packages/country_flags/res/si/bi.si": "4e22a5fa7d3657998c6424ee89ba328f",
"assets/packages/country_flags/res/si/zm.si": "ef4d9e8828b6609e41642a3fbb6541ec",
"assets/packages/country_flags/res/si/lv.si": "d61111f2dcbc8b2c84e644f7288b1fd7",
"assets/packages/country_flags/res/si/py.si": "a05eb3d105fde5507180087464bc282b",
"assets/packages/country_flags/res/si/cv.si": "1d61ed1ebf59c2a571f54da09340b52b",
"assets/packages/country_flags/res/si/pr.si": "ccb19936defb882dea166d865f8ee5ff",
"assets/packages/country_flags/res/si/tl.si": "307e25e1507c3e76df867108079cb487",
"assets/packages/country_flags/res/si/us.si": "a524142e2a2f7df4ee1b26a98f09a927",
"assets/packages/country_flags/res/si/za.si": "a66971379a3a65b274a702c82b3375d7",
"assets/packages/country_flags/res/si/es-ct.si": "9d497fc098e8ac8eb94576ca2b72a65a",
"assets/packages/country_flags/res/si/re.si": "b319560213233391af1170881595344f",
"assets/packages/country_flags/res/si/tf.si": "2fdcf8c49f0b17d65aa2601d4b505cfa",
"assets/packages/country_flags/res/si/lt.si": "8ef10e2712fa997ca06742fc1d79c095",
"assets/packages/country_flags/res/si/pw.si": "e658e7c8cdf0e27c4d9ccb084768f383",
"assets/packages/country_flags/res/si/by.si": "045e4e447111a76bb834bd9e969756b4",
"assets/packages/country_flags/res/si/nl.si": "130b5b1f64baa8e002dc668b0d3d589f",
"assets/packages/country_flags/res/si/gt.si": "2841eca17a032575b20e97e3c4c0977e",
"assets/packages/country_flags/res/si/ve.si": "e846876f7ec7ad396e58fb20e969a486",
"assets/packages/country_flags/res/si/ar.si": "4ce98d701be0d5607ec3f0d62e5c7ff8",
"assets/packages/country_flags/res/si/pm.si": "5ac3d76ce03f06c4463d135d4129c494",
"assets/packages/country_flags/res/si/lu.si": "0ac3af11df6af8b90ca8f8078902fc9a",
"assets/packages/country_flags/res/si/gs.si": "d6e2a1be23c5e70fced629d467e0a1f7",
"assets/packages/country_flags/res/si/gh.si": "21e46cb3743f96b4e47de0c0b277c604",
"assets/packages/country_flags/res/si/ss.si": "cd22425520f63dac39be3dbfdb49465b",
"assets/packages/country_flags/res/si/dz.si": "74f32a3036da03823454cf8c2fbcc22f",
"assets/packages/country_flags/res/si/sb.si": "b6160f674954161619f0f57d4039e010",
"assets/packages/country_flags/res/si/mv.si": "47d6de70a92bb16bc0284187d12dfb47",
"assets/packages/country_flags/res/si/um.si": "bec8665843b879da2d8ed65532da7e01",
"assets/packages/country_flags/res/si/cx.si": "8d7a59ff653f34ab3323c39c5c5b2f75",
"assets/packages/country_flags/res/si/dg.si": "3469f709b852fa25f3d735d4e7ee88a2",
"assets/packages/country_flags/res/si/ru.si": "677089233d82298520fd2b176f8003a8",
"assets/packages/country_flags/res/si/hm.si": "93810e1a767ca77d78fa8d70ef89878a",
"assets/packages/country_flags/res/si/pf.si": "29e59d85bfa9cc1ed50424098c4577b5",
"assets/packages/country_flags/res/si/hr.si": "dc0efaf40fb58a21f52fd9a86c7ddfdc",
"assets/packages/country_flags/res/si/mh.si": "88c8196c37481de5021237e01ccb95a1",
"assets/packages/country_flags/res/si/tc.si": "78d2718e865371288caf216fb083c8bd",
"assets/packages/country_flags/res/si/gb-wls.si": "bb7216967d97426e1d684b2745118f89",
"assets/packages/country_flags/res/si/qa.si": "534abea02d79321b510b2a3fb040ffbc",
"assets/packages/country_flags/res/si/it.si": "c472c6bc7844cc6633d4e41d139b282c",
"assets/packages/country_flags/res/si/lb.si": "d2268cc1967d63699bb1ff2a87264c75",
"assets/packages/country_flags/res/si/eg.si": "eb6351aaa487d5e422ecd8f1160ada0d",
"assets/packages/country_flags/res/si/mp.si": "48f591d6c4a1e7aab511bcc750536836",
"assets/packages/country_flags/res/si/cw.si": "8c2327f9686e6183f85b4141294f7944",
"assets/packages/country_flags/res/si/sd.si": "c6e5b30fafc73d2d84b45a10c6053568",
"assets/packages/country_flags/res/si/hk.si": "cdc28623f40113eb4227c9ed796b6201",
"assets/packages/country_flags/res/si/na.si": "d49f748db27e5d6f63293f41c2e8361e",
"assets/packages/country_flags/res/si/sx.si": "424c70f52c10927bd40135e75d958e8b",
"assets/packages/country_flags/res/si/fk.si": "bcdc2242f7af2a72255f8d89d2642fe8",
"assets/packages/country_flags/res/si/xk.si": "967bec40d36ab8264262777667c5da33",
"assets/packages/country_flags/res/si/mm.si": "3ab23c7fcc44e249de75e6019af32611",
"assets/packages/country_flags/res/si/ta.si": "084b17449dd0ba76474f133039ee68d3",
"assets/packages/country_flags/res/si/bh.si": "637d8c9177fdc8bf98d2afb4de3a3cbe",
"assets/packages/country_flags/res/si/co.si": "471a020ee0695a4be6867c76e3e4fcdf",
"assets/packages/country_flags/res/si/sl.si": "a0d669d7821909f6b73d73ebd29e77e7",
"assets/packages/country_flags/res/si/mn.si": "d7d59010e2822958f8390d72bfbf0072",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/FontManifest.json": "3cd47034e691521811f45caa5223c22d",
"assets/AssetManifest.bin": "d7126adecd3e4fab6a534654ee549ed9",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"favicon.png": "09dbf6fa5fb8b92d6c9b780e7da2f5c4",
"flutter_bootstrap.js": "1eb0da591e76f12b5828be96217e4a81",
"version.json": "6a418330b063ecc68bd8350b1e425cab",
"main.dart.js": "6ed8978373dfde398d129b3a3a05b650"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
