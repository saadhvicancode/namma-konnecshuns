/* Namma Konnecshuns, puzzle bank.

   The rule that matters most: difficulty comes from the frame, not from
   trivia. A group of four names you have either heard of or you have not is
   the "US presidents 1950-80" trick, and it locks out everyone outside the
   circle without being hard for anyone inside it. So tiles are words a
   stranger would recognise, and the work is spotting which frame they sit in.
   SILK is the worst junction in Bengaluru and also the odd one among keyboard,
   surfboard and cardboard. Knowing the city can actively mislead you.

   Puzzles are also NOT single-themed: four categories, four different domains,
   so the board itself gives nothing away. Hence no puzzle names; a name is a
   hint.

   level:  0 yellow (most accessible) through 3 purple (wordplay)
   domain: one per puzzle, enforced by tools/check.js

   And every puzzle plants a decoy, a tile that obviously belongs to a category
   it is not in. SANKEY is a lake and a Raj engineer. GOKAK is a waterfall and a
   Jnanpith laureate. TALE is an English word and the Kannada for head. */
const PUZZLES = [
  { id: 1, groups: [
    { level: 0, domain: "NATURE", name: "CITY LAKES", words: ["ULSOOR", "SANKEY", "HEBBAL", "JAKKUR"] },
    { level: 1, domain: "CITY", name: "RAJ-ERA NAMES ON THE CITY MAP", words: ["CUBBON", "HUDSON", "RICHMOND", "LAVELLE"] },
    { level: 2, domain: "NIGHT", name: "BANDS FROM THIS CITY", words: ["PARVAAZ", "KRYPTOS", "SWARATHMA", "TAAQ"] },
    { level: 3, domain: "ARTS", name: "ONE-WORD KANNADA FILMS", words: ["OM", "LUCIA", "UPENDRA", "JACKIE"] }
  ]},
  { id: 2, groups: [
    { level: 0, domain: "NATURE", name: "KARNATAKA WATERFALLS", words: ["JOG", "ABBEY", "SHIVANASAMUDRA", "HEBBE"] },
    { level: 1, domain: "ARTS", name: "GALLERIES", words: ["NGMA", "VENKATAPPA", "SUMUKHA", "RANGOLI"] },
    { level: 2, domain: "PEOPLE", name: "JNANPITH LAUREATES IN KANNADA", words: ["KUVEMPU", "BENDRE", "KARANTH", "GOKAK"] },
    { level: 3, domain: "WORDPLAY", name: "___ MAADI", words: ["ADJUST", "WAIT", "CALL", "ORDER"] }
  ]},
  { id: 3, groups: [
    { level: 0, domain: "EDU", name: "COLLEGES", words: ["CHRIST", "MOUNT CARMEL", "ST JOSEPH'S", "JYOTI NIVAS"] },
    { level: 1, domain: "LANG", name: "BODY PARTS", words: ["TALE", "KAI", "KANNU", "KIVI"] },
    { level: 2, domain: "SCI", name: "AIRCRAFT BUILT BY HAL", words: ["TEJAS", "DHRUV", "MARUT", "KIRAN"] },
    { level: 3, domain: "WORDPLAY", name: "KANNADA WORDS SPELLED LIKE ENGLISH ONES", words: ["MANE", "BALE", "HALE", "MELE"] }
  ]},
  { id: 4, groups: [
    { level: 0, domain: "NATURE", name: "SOUTH INDIAN RIVERS", words: ["KAVERI", "TUNGA", "BHADRA", "SHARAVATHI"] },
    { level: 1, domain: "TRANSPORT", name: "AUTO REFUSAL REASONS", words: ["NO CHANGE", "TOO FAR", "SHIFT CHANGE", "GAS ILLA"] },
    { level: 2, domain: "HIST", name: "DYNASTIES THAT RULED KARNATAKA", words: ["KADAMBA", "CHALUKYA", "RASHTRAKUTA", "GANGA"] },
    { level: 3, domain: "WORDPLAY", name: "___ TANK", words: ["SANKEY", "THINK", "WATER", "FISH"] }
  ]},
  { id: 5, groups: [
    { level: 0, domain: "ARTS", name: "STAGES AND AUDITORIA", words: ["RANGA SHANKARA", "CHOWDIAH", "KALAKSHETRA", "JAGRITI"] },
    { level: 1, domain: "HIST", name: "FOUNDING LORE", words: ["BENDA KALU", "PETE", "KOTE", "1537"] },
    { level: 2, domain: "LANG", name: "ANIMALS IN KANNADA", words: ["HULI", "ANE", "NAAYI", "KOLI"] },
    { level: 3, domain: "WORDPLAY", name: "PLACES NAMED FOR ANIMALS", words: ["ANEKAL", "HULIMAVU", "KUDREMUKH", "NANDI"] }
  ]},
  { id: 6, groups: [
    { level: 0, domain: "CIVIC", name: "WATER SOURCES", words: ["CAUVERY", "BOREWELL", "TANKER", "RAINWATER"] },
    { level: 1, domain: "EDU", name: "ENGINEERING COLLEGES", words: ["RV", "PES", "BMS", "MSRIT"] },
    { level: 2, domain: "LANG", name: "KANNADA KITCHEN STAPLES", words: ["UPPU", "MENASU", "ENNE", "SASIVE"] },
    { level: 3, domain: "WORDPLAY", name: "INITIALS IN AREA NAMES", words: ["BTM", "JP", "RT", "KR"] }
  ]},
  { id: 7, groups: [
    { level: 0, domain: "CITY", name: "ON CHURCH STREET", words: ["BLOSSOM", "KOSHY'S", "MATTEO", "GOOBE'S"] },
    { level: 1, domain: "NATURE", name: "A BENGALURU WINTER", words: ["MIST", "SWEATER", "DEW", "SHORT DAYS"] },
    { level: 2, domain: "FOOD", name: "THINGS WITH LAYERS", words: ["PARATHA", "ONION", "CAKE", "SECURITY"] },
    { level: 3, domain: "WORDPLAY", name: "___ STREET", words: ["CHURCH", "COMMERCIAL", "WALL", "EASY"] }
  ]},
  { id: 8, groups: [
    { level: 0, domain: "HIST", name: "HISTORIC SITES", words: ["TIPU'S PALACE", "BANGALORE FORT", "ATTARA KACHERI", "BANGALORE PALACE"] },
    { level: 1, domain: "TRANSPORT", name: "AUTO NEGOTIATION", words: ["METER", "ONE AND HALF", "NO CHANGE", "RETURN"] },
    { level: 2, domain: "PLACE", name: "THE OLD SPELLINGS", words: ["MYSORE", "HUBLI", "MANGALORE", "BELGAUM"] },
    { level: 3, domain: "LANG", name: "THE FOUR PARTS OF A MEAL", words: ["HULI", "SAARU", "PALYA", "TOVVE"] }
  ]},
  { id: 9, groups: [
    { level: 0, domain: "SCI", name: "APPS BUILT HERE", words: ["DUNZO", "YULU", "BOUNCE", "RAPIDO"] },
    { level: 1, domain: "LIFE", name: "FIRST WEEK IN A NEW CITY", words: ["BROKER", "SIM CARD", "ADDRESS PROOF", "MAPS"] },
    { level: 2, domain: "TRANSPORT", name: "CITY RAILWAY STATION CODES", words: ["SBC", "YPR", "KJM", "BNC"] },
    { level: 3, domain: "LANG", name: "KANNADA COLOURS", words: ["KEMPU", "HASIRU", "BILI", "KARI"] }
  ]},
  { id: 10, groups: [
    { level: 0, domain: "NATURE", name: "KARNATAKA HILL STATIONS", words: ["KEMMANNUGUNDI", "AGUMBE", "KODACHADRI", "MADIKERI"] },
    { level: 1, domain: "SHOP", name: "WHAT THEY SELL THERE", words: ["SAREES", "JEWELLERY", "HARDWARE", "CRACKERS"] },
    { level: 2, domain: "PEOPLE", name: "THINGS PEOPLE QUEUE FOR", words: ["DARSHAN", "PETROL", "TICKETS", "VOTING"] },
    { level: 3, domain: "ARTS", name: "FOLK PERFORMANCES", words: ["DOLLU", "VEERAGASE", "KAMSALE", "YAKSHAGANA"] }
  ]},
  { id: 11, groups: [
    { level: 0, domain: "FOOD", name: "COFFEE COUNTER TALK", words: ["DECOCTION", "DAVARA", "TUMBLER", "BY TWO"] },
    { level: 1, domain: "SPORT", name: "THE CHINNASWAMY CHANT", words: ["EE", "SALA", "CUP", "NAMDE"] },
    { level: 2, domain: "HIST", name: "ON A WEDDING BUFFET", words: ["PAYASA", "PULAO", "GULAB JAMUN", "PAAN"] },
    { level: 3, domain: "WORDPLAY", name: "MYSORE ___", words: ["PAK", "PETA", "BONDA", "MALLIGE"] }
  ]},
  { id: 12, groups: [
    { level: 0, domain: "TRANSPORT", name: "BIKE TAXI ERA", words: ["RAPIDO", "BOUNCE", "YULU", "VOGO"] },
    { level: 1, domain: "LANG", name: "SLANG FOR 'FRIEND'", words: ["MACHA", "MAGA", "ANNA", "BRO"] },
    { level: 2, domain: "SPORT", name: "STARS BEYOND CRICKET", words: ["PADUKONE", "BOPANNA", "PONNAPPA", "CHHETRI"] },
    { level: 3, domain: "WORDPLAY", name: "___ CIRCLE", words: ["TRAFFIC", "VICIOUS", "ARCTIC", "INNER"] }
  ]},
  { id: 13, groups: [
    { level: 0, domain: "EDU", name: "BIG HOSPITALS", words: ["MANIPAL", "NARAYANA", "ST JOHN'S", "SAKRA"] },
    { level: 1, domain: "FOOD", name: "ANGLO-INDIAN CHRISTMAS", words: ["PLUM CAKE", "KULKUL", "ROSE COOKIE", "MARZIPAN"] },
    { level: 2, domain: "TRANSPORT", name: "TRAINS OUT OF BENGALURU", words: ["SHATABDI", "VANDE BHARAT", "UDYAN", "TIPPU"] },
    { level: 3, domain: "WORDPLAY", name: "SWALPA ___", words: ["ADJUST", "JASTI", "KAMMI", "NIDHANA"] }
  ]},
  { id: 14, groups: [
    { level: 0, domain: "TRANSPORT", name: "RAILWAY TICKET CLASSES", words: ["SLEEPER", "GENERAL", "TATKAL", "AC"] },
    { level: 1, domain: "EDU", name: "SPECIALTY CENTRES", words: ["NIMHANS", "JAYADEVA", "KIDWAI", "VICTORIA"] },
    { level: 2, domain: "SHOP", name: "WHAT THE TAILOR SAYS", words: ["FITTING", "ALTER", "LOOSE", "MEASURE"] },
    { level: 3, domain: "LANG", name: "ONE-WORD KANNADA ORDERS", words: ["BA", "HOGU", "TINNU", "NODU"] }
  ]},
  { id: 15, groups: [
    { level: 0, domain: "LANG", name: "CROWD AND CHAOS", words: ["GALATA", "GADIBIDI", "JAAM", "RUSH"] },
    { level: 1, domain: "ARTS", name: "RK NARAYAN NOVELS", words: ["SWAMI AND FRIENDS", "THE GUIDE", "THE ENGLISH TEACHER", "THE VENDOR OF SWEETS"] },
    { level: 2, domain: "PLACE", name: "WEEKEND ESCAPES", words: ["COORG", "CHIKMAGALURU", "SAKLESHPUR", "WAYANAD"] },
    { level: 3, domain: "WORDPLAY", name: "SILICON ___", words: ["VALLEY", "CHIP", "CARBIDE", "PLATEAU"] }
  ]},
  { id: 16, groups: [
    { level: 0, domain: "PEOPLE", name: "OFFICE SMALL TALK", words: ["WEATHER", "TRAFFIC", "WEEKEND", "CRICKET"] },
    { level: 1, domain: "CITY", name: "CITY FESTIVALS", words: ["KARAGA", "RAJYOTSAVA", "FLOWER SHOW", "GANESHA"] },
    { level: 2, domain: "FOOD", name: "MILITARY HOTEL ORDERS", words: ["RAGI MUDDE", "PEPPER CHICKEN", "NATI KOLI", "KAAL SOUP"] },
    { level: 3, domain: "WORDPLAY", name: "___ PARK", words: ["CUBBON", "BALL", "THEME", "TRAILER"] }
  ]},
  { id: 17, groups: [
    { level: 0, domain: "SPORT", name: "IPL TEAMS", words: ["RCB", "CSK", "MI", "KKR"] },
    { level: 1, domain: "WORDPLAY", name: "___ STAND", words: ["BUS", "AUTO", "HAND", "GRAND"] },
    { level: 2, domain: "CITY", name: "GOVERNMENT LANDMARKS", words: ["VIDHANA SOUDHA", "VIKASA SOUDHA", "RAJ BHAVAN", "HIGH COURT"] },
    { level: 3, domain: "LANG", name: "KANNADA FOR 'FESTIVAL'", words: ["HABBA", "JATRE", "PARISHE", "UTSAVA"] }
  ]},
  { id: 18, groups: [
    { level: 0, domain: "CIVIC", name: "HYPERLOCAL COMPLAINTS", words: ["DUST", "POTHOLE", "GARBAGE", "DIGGING"] },
    { level: 1, domain: "PEOPLE", name: "THINGS THAT RUN OUT", words: ["PATIENCE", "BATTERY", "MILK", "TIME"] },
    { level: 2, domain: "TRANSPORT", name: "AT THE AIRPORT", words: ["BLR", "KIA", "T1", "T2"] },
    { level: 3, domain: "WORDPLAY", name: "FULL ___", words: ["MOON", "STOP", "HOUSE", "TIGHT"] }
  ]},
  { id: 19, groups: [
    { level: 0, domain: "NATURE", name: "TIGER RESERVES", words: ["BANDIPUR", "NAGARAHOLE", "BHADRA", "BILIGIRIRANGA"] },
    { level: 1, domain: "SHOP", name: "TEA STALL ORDERS", words: ["CUTTING", "GINGER", "BLACK", "ICED"] },
    { level: 2, domain: "MEDIA", name: "WHAT GETS FORWARDED", words: ["MEME", "GOOD MORNING", "RUMOUR", "RESUME"] },
    { level: 3, domain: "WORDPLAY", name: "___ HOUSE", words: ["CORNER", "GLASS", "OPERA", "FULL"] }
  ]},
  { id: 20, groups: [
    { level: 0, domain: "CIVIC", name: "PG LIFE", words: ["WARDEN", "MESS", "COT", "CURFEW"] },
    { level: 1, domain: "SPORT", name: "CRICKET COMMENTARY WORDS", words: ["MAIDEN", "DUCK", "COVER", "SLIP"] },
    { level: 2, domain: "EDU", name: "UNIVERSITIES OF KARNATAKA", words: ["KUVEMPU", "MANGALORE", "GULBARGA", "TUMKUR"] },
    { level: 3, domain: "WORDPLAY", name: "___ ROAD", words: ["RING", "SILK", "HIGH", "ABBEY"] }
  ]},
  { id: 21, groups: [
    { level: 0, domain: "NATURE", name: "WAYS RAIN ARRIVES", words: ["DRIZZLE", "SHOWER", "POUR", "SPIT"] },
    { level: 1, domain: "TRANSPORT", name: "AUTO RIDE REALITIES", words: ["METER", "CHANGE", "SHARING", "SURGE"] },
    { level: 2, domain: "MEDIA", name: "KANNADA TV CHANNELS", words: ["SUVARNA", "COLORS", "ZEE", "PUBLIC"] },
    { level: 3, domain: "WORDPLAY", name: "___ BATH", words: ["KHARA", "KESARI", "CHOW CHOW", "BISI BELE"] }
  ]},
  { id: 22, groups: [
    { level: 0, domain: "LIFE", name: "GAMES FROM THE GULLY", words: ["LAGORI", "GOLI", "KUNTE BILLE", "CHINNI DANDU"] },
    { level: 1, domain: "CIVIC", name: "WHAT THE MONSOON RUINS", words: ["LEAK", "MOULD", "POTHOLE", "DELAY"] },
    { level: 2, domain: "LANG", name: "KANNADA FOR WATER BODIES", words: ["KERE", "HALLA", "BAVI", "KALYANI"] },
    { level: 3, domain: "WORDPLAY", name: "THE BANGALORE ___", words: ["TORPEDO", "BLUE", "ROSE ONION", "DAYS"] }
  ]},
  { id: 23, groups: [
    { level: 0, domain: "ARTS", name: "MALGUDI DAYS", words: ["AGUMBE", "SHANKAR NAG", "RK NARAYAN", "SWAMI"] },
    { level: 1, domain: "NATURE", name: "CITY BIRDS", words: ["MYNA", "BULBUL", "KITE", "PARAKEET"] },
    { level: 2, domain: "FOOD", name: "THE UDUPI HOTEL LEGACY", words: ["DASAPRAKASH", "WOODLANDS", "KAMAT", "SUKH SAGAR"] },
    { level: 3, domain: "LANG", name: "KANNADA FOR 'STREET'", words: ["BEEDI", "VEEDHI", "MARGA", "RASTE"] }
  ]},
  { id: 24, groups: [
    { level: 0, domain: "TRANSPORT", name: "CHOKEPOINTS", words: ["SILK BOARD", "TIN FACTORY", "HEBBAL", "ANIL KUMBLE"] },
    { level: 1, domain: "FOOD", name: "TEATIME BUYS", words: ["PUFF", "SAMOSA", "CUTLET", "ROLL"] },
    { level: 2, domain: "LANG", name: "WAYS TO REFUSE", words: ["ILLA", "BEDA", "SAAKU", "GOTHILLA"] },
    { level: 3, domain: "WORDPLAY", name: "___ BOARD", words: ["SILK", "KEY", "SURF", "CARD"] }
  ]},
  { id: 25, groups: [
    { level: 0, domain: "CIVIC", name: "BBMP CHORES", words: ["GARBAGE", "POTHOLE", "KHATA", "PROPERTY TAX"] },
    { level: 1, domain: "FOOD", name: "IN THE LUNCH DABBA", words: ["RICE", "CURD", "PICKLE", "SWEET"] },
    { level: 2, domain: "SCI", name: "___ SIGNAL", words: ["TRAFFIC", "SMOKE", "MIXED", "BUSY"] },
    { level: 3, domain: "WORDPLAY", name: "___ STAR", words: ["POWER", "ROCKING", "REAL", "CHALLENGING"] }
  ]},
  { id: 26, groups: [
    { level: 0, domain: "PEOPLE", name: "WHAT AJJI CALLS YOU", words: ["KANDA", "PUTTA", "MARI", "CHINNA"] },
    { level: 1, domain: "FOOD", name: "COASTAL BREAKFAST", words: ["NEER DOSE", "GOLI BAJE", "KORI ROTTI", "PUNDI"] },
    { level: 2, domain: "PLACE", name: "___ TRAFFIC", words: ["AIR", "FOOT", "DRUG", "HEAVY"] },
    { level: 3, domain: "WORDPLAY", name: "___ BUN", words: ["CONGRESS", "MASALA", "KHARA", "BUTTER"] }
  ]},
  { id: 27, groups: [
    { level: 0, domain: "FOOD", name: "GI-TAGGED PRODUCE", words: ["BYADAGI", "NANJANAGUD", "MATTU GULLA", "DEVANAHALLI"] },
    { level: 1, domain: "SHOP", name: "SOUVENIRS TO CARRY BACK", words: ["SANDAL SOAP", "MYSORE SILK", "CHANNAPATNA TOY", "COORG COFFEE"] },
    { level: 2, domain: "CITY", name: "TEMPLES IN TOWN", words: ["RAGIGUDDA", "SOMESHWARA", "KOTE VENKATARAMANA", "GAVIPURAM"] },
    { level: 3, domain: "LANG", name: "DIRECTIONS FOR THE AUTO", words: ["MUNDE", "HINDE", "EDA", "BALA"] }
  ]},
  { id: 28, groups: [
    { level: 0, domain: "HIST", name: "STATE SYMBOLS", words: ["SANDALWOOD", "LOTUS", "ELEPHANT", "ROLLER"] },
    { level: 1, domain: "FOOD", name: "FESTIVAL SPECIALS", words: ["HOLIGE", "PAYASA", "CHAKKULI", "UNDE"] },
    { level: 2, domain: "CIVIC", name: "PROPERTY PAPERWORK", words: ["KHATA", "EC", "OC", "SALE DEED"] },
    { level: 3, domain: "WORDPLAY", name: "___ URU", words: ["BENGAL", "MANGAL", "MYS", "TUMAK"] }
  ]},
  { id: 29, groups: [
    { level: 0, domain: "ARTS", name: "KANNADA BLOCKBUSTERS", words: ["KGF", "KANTARA", "777 CHARLIE", "TAGARU"] },
    { level: 1, domain: "HIST", name: "STREET FOOD ANYWHERE", words: ["PANI PURI", "VADA PAV", "MOMO", "CHAAT"] },
    { level: 2, domain: "CIVIC", name: "WHAT GETS DELAYED", words: ["FLIGHT", "SALARY", "MONSOON", "VERDICT"] },
    { level: 3, domain: "WORDPLAY", name: "TOWNS INSIDE FOOD NAMES", words: ["DHARWAD", "NANJANGUD", "BYADAGI", "MADDUR"] }
  ]},
  { id: 30, groups: [
    { level: 0, domain: "SCI", name: "ISRO MISSIONS", words: ["CHANDRAYAAN", "MANGALYAAN", "GAGANYAAN", "ADITYA"] },
    { level: 1, domain: "CIVIC", name: "SPRINT LIFE", words: ["DEPLOY", "STANDUP", "BACKLOG", "ESCALATION"] },
    { level: 2, domain: "HIST", name: "WODEYAR LEGACIES", words: ["KRS", "BRINDAVAN", "SILK", "SANDAL"] },
    { level: 3, domain: "LANG", name: "KANNADA NUMBERS FIVE TO EIGHT", words: ["AIDU", "ARU", "ELU", "ENTU"] }
  ]},
  { id: 31, groups: [
    { level: 0, domain: "CIVIC", name: "WHAT A LANDLORD ASKS FOR", words: ["DEPOSIT", "ADVANCE", "REFERENCE", "ID"] },
    { level: 1, domain: "NATURE", name: "RIVERS OF KARNATAKA", words: ["TUNGABHADRA", "KRISHNA", "MALAPRABHA", "GHATAPRABHA"] },
    { level: 2, domain: "LANG", name: "SLANG FOR 'AWESOME'", words: ["SAKKATH", "BHARI", "SOLID", "MAST"] },
    { level: 3, domain: "FOOD", name: "___ CITY", words: ["GARDEN", "INNER", "CAPACITY", "ELECTRONIC"] }
  ]},
  { id: 32, groups: [
    { level: 0, domain: "TRANSPORT", name: "METRO ESSENTIALS", words: ["TOKEN", "SMART CARD", "SECURITY", "ESCALATOR"] },
    { level: 1, domain: "FOOD", name: "MANGALUREAN MENU", words: ["BUNS", "GHEE ROAST", "KANE FRY", "PATHRODE"] },
    { level: 2, domain: "CIVIC", name: "STORM DRAIN NEWS", words: ["RAJAKALUVE", "CULVERT", "SILT", "OVERFLOW"] },
    { level: 3, domain: "LANG", name: "___ GATE", words: ["FLOOD", "TOLL", "TAIL", "WATER"] }
  ]},
  { id: 33, groups: [
    { level: 0, domain: "SHOP", name: "IN EVERY INDIAN KITCHEN", words: ["PRESSURE COOKER", "STEEL DABBA", "MIXIE", "BUCKET"] },
    { level: 1, domain: "LANG", name: "KANNADA TIME WORDS", words: ["NINNE", "IVATTU", "NALE", "EEGA"] },
    { level: 2, domain: "FOOD", name: "FANCY BAKERIES", words: ["GLEN'S", "LAVONNE", "SMOOR", "ALBERT"] },
    { level: 3, domain: "CIVIC", name: "LEASE FINE PRINT", words: ["LOCK IN", "ESCALATION", "NOTICE", "INDEMNITY"] }
  ]},
  { id: 34, groups: [
    { level: 0, domain: "LIFE", name: "BREAKFAST SOMEWHERE IN INDIA", words: ["IDLI", "POHA", "PARATHA", "UPMA"] },
    { level: 1, domain: "FOOD", name: "RAMZAN NIGHTS", words: ["HALEEM", "PATHER GOSHT", "PHIRNI", "DATES"] },
    { level: 2, domain: "ARTS", name: "GIRISH KARNAD PLAYS", words: ["TUGHLAQ", "HAYAVADANA", "NAGAMANDALA", "YAYATI"] },
    { level: 3, domain: "WORDPLAY", name: "___ DOSE", words: ["NEER", "SET", "BENNE", "KHALI"] }
  ]},
  { id: 35, groups: [
    { level: 0, domain: "FOOD", name: "IYENGAR BAKERY SHELF", words: ["HONEY CAKE", "DILKUSH", "RUSK", "BENNE BISCUIT"] },
    { level: 1, domain: "TRANSPORT", name: "SCOOTER SEASON", words: ["HELMET", "RAINCOAT", "PETROL", "CHALLAN"] },
    { level: 2, domain: "LIFE", name: "WHAT A CHAI TAPRI SELLS", words: ["CIGARETTE", "BISCUIT", "CHAI", "GOSSIP"] },
    { level: 3, domain: "SHOP", name: "WORDS ON OLD SHOP BOARDS", words: ["STORES", "SILKS", "EMPORIUM", "BHANDAR"] }
  ]},
  { id: 36, groups: [
    { level: 0, domain: "HIST", name: "DASARA SIGHTS", words: ["JAMBOO SAVARI", "TORCHLIGHT", "HOWDAH", "CHAMUNDI"] },
    { level: 1, domain: "LANG", name: "KANNADA FAMILY WORDS", words: ["AKKA", "ANNA", "THAMMA", "THANGI"] },
    { level: 2, domain: "EDU", name: "THINGS THAT GET BOOKED", words: ["CAB", "TICKET", "TABLE", "CULPRIT"] },
    { level: 3, domain: "CIVIC", name: "THINGS THAT CAN BE CHARGED", words: ["PHONE", "BULL", "CUSTOMER", "CRIME"] }
  ]},
  { id: 37, groups: [
    { level: 0, domain: "NATURE", name: "ONE-NIGHT TREKS", words: ["SKANDAGIRI", "SAVANDURGA", "ANTARGANGE", "MAKALIDURGA"] },
    { level: 1, domain: "PLACE", name: "CITY NICKNAMES", words: ["GARDEN CITY", "PINK CITY", "WINDY CITY", "MOTOR CITY"] },
    { level: 2, domain: "ARTS", name: "MUSIC DIRECTORS", words: ["HAMSALEKHA", "RAJAN NAGENDRA", "VIJAYA BHASKAR", "AJANEESH"] },
    { level: 3, domain: "FOOD", name: "BIRYANI STYLES", words: ["DONNE", "AMBUR", "THALASSERY", "HYDERABADI"] }
  ]},
  { id: 38, groups: [
    { level: 0, domain: "SPORT", name: "RCB CAPTAINS", words: ["DRAVID", "KUMBLE", "KOHLI", "DU PLESSIS"] },
    { level: 1, domain: "SCI", name: "BRANDS BORN IN BENGALURU", words: ["HIMALAYA", "TITAN", "NANDINI", "COFFEE DAY"] },
    { level: 2, domain: "NATURE", name: "BIRDS AT THE LAKE", words: ["PELICAN", "CORMORANT", "HERON", "IBIS"] },
    { level: 3, domain: "WORDPLAY", name: "___ VANI", words: ["PRAJA", "UDAYA", "SANJE", "AKASHA"] }
  ]},
  { id: 39, groups: [
    { level: 0, domain: "LANG", name: "KANNADA WEATHER WORDS", words: ["MALE", "BISILU", "CHALI", "GALI"] },
    { level: 1, domain: "SCI", name: "LAUNCH VEHICLES AND SATELLITES", words: ["PSLV", "GSLV", "ARYABHATA", "INSAT"] },
    { level: 2, domain: "WORDPLAY", name: "___ MARKET", words: ["RUSSELL", "BLACK", "FLEA", "STOCK"] },
    { level: 3, domain: "ARTS", name: "KANNADA NEW WAVE CLASSICS", words: ["SAMSKARA", "GHATASHRADDHA", "CHOMANA DUDI", "VAMSHA VRIKSHA"] }
  ]},
  { id: 40, groups: [
    { level: 0, domain: "LANG", name: "QUESTION WORDS", words: ["YARU", "YENU", "ELLI", "YAAKE"] },
    { level: 1, domain: "PLACE", name: "TEMPLE TOWNS", words: ["HAMPI", "AIHOLE", "BELUR", "TALAKAD"] },
    { level: 2, domain: "FOOD", name: "ACCOMPANIMENTS", words: ["KOSAMBARI", "GOJJU", "TAMBLI", "RAITA"] },
    { level: 3, domain: "WORDPLAY", name: "___ JAM", words: ["TRAFFIC", "LOG", "FRUIT", "SESSION"] }
  ]},
  { id: 41, groups: [
    { level: 0, domain: "FOOD", name: "KEBAB STREET", words: ["SEEKH", "SHAWARMA", "ROLL", "TANGDI"] },
    { level: 1, domain: "ARTS", name: "DIRECTORS OF THE NEW WAVE", words: ["PRASHANTH NEEL", "PAWAN KUMAR", "HEMANTH RAO", "RAKSHIT SHETTY"] },
    { level: 2, domain: "TRANSPORT", name: "THINGS THAT RUN", words: ["NOSE", "TAP", "TRAIN", "RIVER"] },
    { level: 3, domain: "WORDPLAY", name: "___ LINE", words: ["PURPLE", "PUNCH", "FINISH", "CLOTHES"] }
  ]},
  { id: 42, groups: [
    { level: 0, domain: "MEDIA", name: "FM STATIONS", words: ["RADIO CITY", "BIG FM", "FEVER", "INDIGO"] },
    { level: 1, domain: "ARTS", name: "PARALLEL CINEMA DIRECTORS", words: ["KASARAVALLI", "KARNAD", "NAGABHARANA", "PUTTANNA"] },
    { level: 2, domain: "FOOD", name: "NORTH KARNATAKA PLATE", words: ["ENNEGAI", "ZUNKA", "GIRMIT", "JOLADA ROTTI"] },
    { level: 3, domain: "LANG", name: "SENTENCE ENDERS", words: ["ALVA", "ANTHE", "KANRI", "ASHTE"] }
  ]},
  { id: 43, groups: [
    { level: 0, domain: "ARTS", name: "SINGLE SCREENS", words: ["SANTOSH", "URVASHI", "NARTAKI", "TRIVENI"] },
    { level: 1, domain: "CIVIC", name: "BROKER SPEAK", words: ["PRIME LOCATION", "WALKING DISTANCE", "NEGOTIABLE", "BACHELORS OK"] },
    { level: 2, domain: "NATURE", name: "RESERVOIRS", words: ["KRS", "LINGANAMAKKI", "HARANGI", "KABINI"] },
    { level: 3, domain: "LANG", name: "KANNADA NATURE WORDS", words: ["KERE", "MARA", "HUVU", "NEERU"] }
  ]},
  { id: 44, groups: [
    { level: 0, domain: "FOOD", name: "RICE DISHES", words: ["PULIYOGARE", "CHITRANNA", "MOSARANNA", "VANGIBHATH"] },
    { level: 1, domain: "NIGHT", name: "LIVE MUSIC VENUES", words: ["FANDOM", "BFLAT", "HUMMING TREE", "COUNTERCULTURE"] },
    { level: 2, domain: "ARTS", name: "___ FILTER", words: ["COFFEE", "AIR", "WATER", "SPAM"] },
    { level: 3, domain: "CIVIC", name: "VC SPEAK", words: ["RUNWAY", "BURN", "MOAT", "CAP TABLE"] }
  ]},
  { id: 45, groups: [
    { level: 0, domain: "FOOD", name: "CAFETERIA STAPLES", words: ["SAMBAR RICE", "CURD RICE", "FRIED RICE", "GOBI MANCHURIAN"] },
    { level: 1, domain: "MEDIA", name: "NEWSPAPER SECTIONS", words: ["CLASSIFIEDS", "MATRIMONIAL", "OBITUARY", "SPORTS"] },
    { level: 2, domain: "ARTS", name: "FESTIVALS THAT SELL TICKETS", words: ["BLF", "ECHOES OF EARTH", "COMIC CON", "ART BENGALURU"] },
    { level: 3, domain: "CIVIC", name: "OFFICE SPEAK", words: ["SYNERGY", "BANDWIDTH", "CIRCLE BACK", "ONSITE"] }
  ]},
  { id: 46, groups: [
    { level: 0, domain: "NIGHT", name: "PUB CRAWL STOPS", words: ["TOIT", "SOCIAL", "PECOS", "HARD ROCK"] },
    { level: 1, domain: "HIST", name: "MYSURU LANDMARKS", words: ["AMBA VILAS", "JAGANMOHAN", "LALITHA MAHAL", "KARANJI"] },
    { level: 2, domain: "TRANSPORT", name: "PARKING BATTLES", words: ["NO PARKING", "TOWING", "BASEMENT", "VALET"] },
    { level: 3, domain: "SCI", name: "BANKS BORN IN KARNATAKA", words: ["CANARA", "SYNDICATE", "VIJAYA", "CORPORATION"] }
  ]},
  { id: 47, groups: [
    { level: 0, domain: "FOOD", name: "DOSA VARIETIES", words: ["MASALA", "PAPER", "BUTTER", "ONION"] },
    { level: 1, domain: "CIVIC", name: "AT A KANNADA WEDDING", words: ["MUHURTA", "DHARE", "ARISHINA", "BAGINA"] },
    { level: 2, domain: "NATURE", name: "___ POINT", words: ["VIEW", "BOILING", "POWER", "SUNRISE"] },
    { level: 3, domain: "WORDPLAY", name: "HOSA ___ (NEW)", words: ["KOTE", "PETE", "DURGA", "HALLI"] }
  ]},
  { id: 48, groups: [
    { level: 0, domain: "TRANSPORT", name: "AT MAJESTIC", words: ["PLATFORM", "CONDUCTOR", "PASS", "DEPOT"] },
    { level: 1, domain: "MEDIA", name: "ENGLISH DAILIES", words: ["DECCAN HERALD", "TIMES", "HINDU", "MIRROR"] },
    { level: 2, domain: "FOOD", name: "SWEET COUNTER", words: ["MYSORE PAK", "CHIROTI", "OBBATTU", "KAJJAYA"] },
    { level: 3, domain: "NATURE", name: "BENGALURU'S VALLEYS", words: ["VRISHABHAVATHI", "KORAMANGALA", "CHALLAGHATTA", "HEBBAL"] }
  ]}
];
