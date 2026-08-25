/* Namma Konnecshuns, puzzle bank.

   Puzzles are deliberately NOT single-themed. A board that is all food, or all
   cinema, tells you where to look. Every puzzle here draws its four categories
   from four different domains, so the only way in is the words themselves.
   That is why puzzles have no names: a name is a hint.

   Place names are rationed. "Which Bengaluru road is this" is a trick that goes
   stale fast, so only a handful of area categories survive, each earning its
   place with history or a decoy. The rest of the bank leans on Kannada as a
   living language, food, books, festivals and the state beyond the city.

   level:  0 yellow (most accessible) through 3 purple (wordplay)
   domain: one per puzzle, enforced by tools/check.js

   Every puzzle also plants a decoy, a tile that obviously belongs to a category
   it is not in. SANKEY is a lake and the Raj engineer the road is named for.
   GOKAK is a waterfall and a Jnanpith laureate. TALE is an English word and the
   Kannada for head. RV is an engineering college and a metro station. */
const PUZZLES = [
  { id: 1, groups: [
    { level: 0, domain: "NATURE", name: "CITY LAKES", words: ["ULSOOR", "SANKEY", "HEBBAL", "JAKKUR"] },
    { level: 1, domain: "CITY", name: "RAJ-ERA NAMES ON THE CITY MAP", words: ["CUBBON", "HUDSON", "RICHMOND", "LAVELLE"] },
    { level: 2, domain: "FOOD", name: "ACCOMPANIMENTS", words: ["KOSAMBARI", "GOJJU", "TAMBLI", "RAITA"] },
    { level: 3, domain: "LANG", name: "KANNADA GREENGROCER WORDS", words: ["HUVU", "HANNU", "SOPPU", "TARAKARI"] }
  ]},
  { id: 2, groups: [
    { level: 0, domain: "NATURE", name: "KARNATAKA WATERFALLS", words: ["JOG", "ABBEY", "SHIVANASAMUDRA", "HEBBE"] },
    { level: 1, domain: "SHOP", name: "FLOWERS SOLD BY THE MOLE", words: ["MALLIGE", "KANAKAMBARA", "SEVANTHIGE", "TAVARE"] },
    { level: 2, domain: "PEOPLE", name: "JNANPITH LAUREATES IN KANNADA", words: ["KUVEMPU", "BENDRE", "KARANTH", "GOKAK"] },
    { level: 3, domain: "CIVIC", name: "VC SPEAK", words: ["RUNWAY", "BURN", "MOAT", "CAP TABLE"] }
  ]},
  { id: 3, groups: [
    { level: 0, domain: "NATURE", name: "TIGER RESERVES", words: ["BANDIPUR", "NAGARAHOLE", "BHADRA", "BILIGIRIRANGA"] },
    { level: 1, domain: "LANG", name: "BODY PARTS", words: ["TALE", "KAI", "KANNU", "KIVI"] },
    { level: 2, domain: "FOOD", name: "SWEET COUNTER", words: ["MYSORE PAK", "CHIROTI", "OBBATTU", "KAJJAYA"] },
    { level: 3, domain: "WORDPLAY", name: "KANNADA WORDS SPELLED LIKE ENGLISH ONES", words: ["MANE", "BALE", "HALE", "MELE"] }
  ]},
  { id: 4, groups: [
    { level: 0, domain: "NATURE", name: "SOUTH INDIAN RIVERS", words: ["KAVERI", "TUNGA", "BHADRA", "SHARAVATHI"] },
    { level: 1, domain: "EDU", name: "SPECIALTY CENTRES", words: ["NIMHANS", "JAYADEVA", "KIDWAI", "VICTORIA"] },
    { level: 2, domain: "HIST", name: "DYNASTIES THAT RULED KARNATAKA", words: ["KADAMBA", "CHALUKYA", "RASHTRAKUTA", "GANGA"] },
    { level: 3, domain: "LANG", name: "WAYS TO SAY 'A LOT'", words: ["JASTI", "TUMBA", "BAHALA", "HECHU"] }
  ]},
  { id: 5, groups: [
    { level: 0, domain: "PEOPLE", name: "KODAVA GREATS", words: ["CARIAPPA", "THIMAYYA", "BOPANNA", "NACHAPPA"] },
    { level: 1, domain: "ARTS", name: "DIRECTORS OF THE NEW WAVE", words: ["PRASHANTH NEEL", "PAWAN KUMAR", "HEMANTH RAO", "RAKSHIT SHETTY"] },
    { level: 2, domain: "LANG", name: "ANIMALS IN KANNADA", words: ["HULI", "ANE", "NAAYI", "KOLI"] },
    { level: 3, domain: "WORDPLAY", name: "PLACES NAMED FOR ANIMALS", words: ["ANEKAL", "HULIMAVU", "KUDREMUKH", "NANDI"] }
  ]},
  { id: 6, groups: [
    { level: 0, domain: "FOOD", name: "COFFEE COUNTER TALK", words: ["DECOCTION", "DAVARA", "TUMBLER", "BY TWO"] },
    { level: 1, domain: "EDU", name: "ENGINEERING COLLEGES", words: ["RV", "PES", "BMS", "MSRIT"] },
    { level: 2, domain: "NATURE", name: "RESERVOIRS", words: ["KRS", "LINGANAMAKKI", "HARANGI", "KABINI"] },
    { level: 3, domain: "WORDPLAY", name: "INITIALS IN AREA NAMES", words: ["BTM", "JP", "RT", "KR"] }
  ]},
  { id: 7, groups: [
    { level: 0, domain: "MEDIA", name: "FM STATIONS", words: ["RADIO CITY", "BIG FM", "FEVER", "INDIGO"] },
    { level: 1, domain: "FOOD", name: "ANGLO-INDIAN CHRISTMAS", words: ["PLUM CAKE", "KULKUL", "ROSE COOKIE", "MARZIPAN"] },
    { level: 2, domain: "LANG", name: "KANNADA KITCHEN STAPLES", words: ["UPPU", "MENASU", "ENNE", "SASIVE"] },
    { level: 3, domain: "WORDPLAY", name: "___ BELE", words: ["TOGARI", "HESARU", "KADALE", "UDDINA"] }
  ]},
  { id: 8, groups: [
    { level: 0, domain: "ARTS", name: "KANNADA BLOCKBUSTERS", words: ["KGF", "KANTARA", "777 CHARLIE", "TAGARU"] },
    { level: 1, domain: "TRANSPORT", name: "AUTO REFUSAL REASONS", words: ["NO CHANGE", "TOO FAR", "SHIFT CHANGE", "GAS ILLA"] },
    { level: 2, domain: "PEOPLE", name: "POET-SAINTS OF THE VACHANA AGE", words: ["BASAVANNA", "AKKA MAHADEVI", "ALLAMA", "SARVAJNA"] },
    { level: 3, domain: "WORDPLAY", name: "HOSA ___ (NEW)", words: ["KOTE", "PETE", "DURGA", "HALLI"] }
  ]},
  { id: 9, groups: [
    { level: 0, domain: "ARTS", name: "SINGLE SCREENS", words: ["SANTOSH", "URVASHI", "NARTAKI", "TRIVENI"] },
    { level: 1, domain: "SHOP", name: "HANDLOOM TOWNS", words: ["ILKAL", "MOLAKALMURU", "NAVALGUND", "GULEDGUDDA"] },
    { level: 2, domain: "HIST", name: "WODEYAR LEGACIES", words: ["KRS", "BRINDAVAN", "SILK", "SANDAL"] },
    { level: 3, domain: "LANG", name: "KANNADA NUMBERS FIVE TO EIGHT", words: ["AIDU", "ARU", "ELU", "ENTU"] }
  ]},
  { id: 10, groups: [
    { level: 0, domain: "PLACE", name: "NORTH KARNATAKA DISTRICTS", words: ["BIDAR", "KALABURAGI", "RAICHUR", "YADGIR"] },
    { level: 1, domain: "LANG", name: "SLANG FOR 'FRIEND'", words: ["MACHA", "MAGA", "ANNA", "BRO"] },
    { level: 2, domain: "ARTS", name: "MUSIC DIRECTORS", words: ["HAMSALEKHA", "RAJAN NAGENDRA", "VIJAYA BHASKAR", "AJANEESH"] },
    { level: 3, domain: "WORDPLAY", name: "___ KAYI", words: ["TENGINA", "MENASINA", "MAVINA", "SOWTHE"] }
  ]},
  { id: 11, groups: [
    { level: 0, domain: "CIVIC", name: "WATER SOURCES", words: ["CAUVERY", "BOREWELL", "TANKER", "RAINWATER"] },
    { level: 1, domain: "SHOP", name: "SOUVENIRS TO CARRY BACK", words: ["SANDAL SOAP", "MYSORE SILK", "CHANNAPATNA TOY", "COORG COFFEE"] },
    { level: 2, domain: "TRANSPORT", name: "PARKING BATTLES", words: ["NO PARKING", "TOWING", "BASEMENT", "VALET"] },
    { level: 3, domain: "PEOPLE", name: "SCIENTISTS WITH BENGALURU ADDRESSES", words: ["RAMAN", "DHAWAN", "CNR RAO", "KASTURIRANGAN"] }
  ]},
  { id: 12, groups: [
    { level: 0, domain: "LANG", name: "CROWD AND CHAOS", words: ["GALATA", "GADIBIDI", "JAAM", "RUSH"] },
    { level: 1, domain: "SHOP", name: "BOOKSHOPS ELSEWHERE", words: ["BOOKWORM", "GANGARAMS", "SELECT", "HIGGINBOTHAMS"] },
    { level: 2, domain: "FOOD", name: "FANCY BAKERIES", words: ["GLEN'S", "LAVONNE", "SMOOR", "ALBERT"] },
    { level: 3, domain: "WORDPLAY", name: "___ GATE", words: ["HALASURU", "YELAHANKA", "KENGERI", "KUDLU"] }
  ]},
  { id: 13, groups: [
    { level: 0, domain: "PEOPLE", name: "WHAT AJJI CALLS YOU", words: ["KANDA", "PUTTA", "MARI", "CHINNA"] },
    { level: 1, domain: "ARTS", name: "PARALLEL CINEMA DIRECTORS", words: ["KASARAVALLI", "KARNAD", "NAGABHARANA", "PUTTANNA"] },
    { level: 2, domain: "CITY", name: "TANKS THAT BECAME LANDMARKS", words: ["DHARMAMBUDHI", "SAMPANGI", "SIDDIKATTE", "MILLERS"] },
    { level: 3, domain: "WORDPLAY", name: "MYSORE ___", words: ["PAK", "PETA", "BONDA", "MALLIGE"] }
  ]},
  { id: 14, groups: [
    { level: 0, domain: "CIVIC", name: "BBMP CHORES", words: ["GARBAGE", "POTHOLE", "KHATA", "PROPERTY TAX"] },
    { level: 1, domain: "LANG", name: "KANNADA FAMILY WORDS", words: ["AKKA", "ANNA", "THAMMA", "THANGI"] },
    { level: 2, domain: "ARTS", name: "FESTIVALS THAT SELL TICKETS", words: ["BLF", "ECHOES OF EARTH", "COMIC CON", "ART BENGALURU"] },
    { level: 3, domain: "NATURE", name: "BENGALURU'S VALLEYS", words: ["VRISHABHAVATHI", "KORAMANGALA", "CHALLAGHATTA", "HEBBAL"] }
  ]},
  { id: 15, groups: [
    { level: 0, domain: "FOOD", name: "IYENGAR BAKERY SHELF", words: ["HONEY CAKE", "DILKUSH", "RUSK", "BENNE BISCUIT"] },
    { level: 1, domain: "NATURE", name: "CITY BIRDS", words: ["MYNA", "BULBUL", "KITE", "PARAKEET"] },
    { level: 2, domain: "PLACE", name: "THE OLD SPELLINGS", words: ["MYSORE", "HUBLI", "MANGALORE", "BELGAUM"] },
    { level: 3, domain: "PEOPLE", name: "REBELS OF KARNATAKA", words: ["KITTUR CHENNAMMA", "SANGOLLI RAYANNA", "ONAKE OBAVVA", "MADAKARI NAYAKA"] }
  ]},
  { id: 16, groups: [
    { level: 0, domain: "CIVIC", name: "PG LIFE", words: ["WARDEN", "MESS", "COT", "CURFEW"] },
    { level: 1, domain: "LANG", name: "KANNADA TIME WORDS", words: ["NINNE", "IVATTU", "NALE", "EEGA"] },
    { level: 2, domain: "FOOD", name: "THE UDUPI HOTEL LEGACY", words: ["DASAPRAKASH", "WOODLANDS", "KAMAT", "SUKH SAGAR"] },
    { level: 3, domain: "ARTS", name: "ONE-WORD KANNADA FILMS", words: ["OM", "LUCIA", "UPENDRA", "JACKIE"] }
  ]},
  { id: 17, groups: [
    { level: 0, domain: "TRANSPORT", name: "CHOKEPOINTS", words: ["SILK BOARD", "TIN FACTORY", "HEBBAL", "ANIL KUMBLE"] },
    { level: 1, domain: "LIFE", name: "SANKRANTI CUSTOMS", words: ["ELLU BELLA", "SAKKARE ACHU", "KABBU", "KICHU HAISODU"] },
    { level: 2, domain: "CITY", name: "GOVERNMENT LANDMARKS", words: ["VIDHANA SOUDHA", "VIKASA SOUDHA", "RAJ BHAVAN", "HIGH COURT"] },
    { level: 3, domain: "LANG", name: "KANNADA FOR 'FESTIVAL'", words: ["HABBA", "JATRE", "PARISHE", "UTSAVA"] }
  ]},
  { id: 18, groups: [
    { level: 0, domain: "ARTS", name: "STAGES AND AUDITORIA", words: ["RANGA SHANKARA", "CHOWDIAH", "KALAKSHETRA", "JAGRITI"] },
    { level: 1, domain: "TRANSPORT", name: "AUTO NEGOTIATION", words: ["METER", "ONE AND HALF", "NO CHANGE", "RETURN"] },
    { level: 2, domain: "SHOP", name: "MEASURES AT AN OLD SHOP", words: ["SER", "PAAV", "MOLE", "TOLA"] },
    { level: 3, domain: "LANG", name: "THE FOUR PARTS OF A MEAL", words: ["HULI", "SAARU", "PALYA", "TOVVE"] }
  ]},
  { id: 19, groups: [
    { level: 0, domain: "TRANSPORT", name: "BIKE TAXI ERA", words: ["RAPIDO", "BOUNCE", "YULU", "VOGO"] },
    { level: 1, domain: "CIVIC", name: "SPRINT LIFE", words: ["DEPLOY", "STANDUP", "BACKLOG", "ESCALATION"] },
    { level: 2, domain: "SHOP", name: "CRAFT TOWNS", words: ["CHANNAPATNA", "BIDAR", "KINNAL", "SANDUR"] },
    { level: 3, domain: "WORDPLAY", name: "___ MAADI", words: ["ADJUST", "WAIT", "CALL", "ORDER"] }
  ]},
  { id: 20, groups: [
    { level: 0, domain: "NIGHT", name: "PUB CRAWL STOPS", words: ["TOIT", "SOCIAL", "PECOS", "HARD ROCK"] },
    { level: 1, domain: "PLACE", name: "COAST AND MALNAD", words: ["UDUPI", "KARWAR", "SHIVAMOGGA", "MADIKERI"] },
    { level: 2, domain: "TRANSPORT", name: "CITY RAILWAY STATION CODES", words: ["SBC", "YPR", "KJM", "BNC"] },
    { level: 3, domain: "WORDPLAY", name: "___ BUN", words: ["CONGRESS", "MASALA", "KHARA", "BUTTER"] }
  ]},
  { id: 21, groups: [
    { level: 0, domain: "CIVIC", name: "HYPERLOCAL COMPLAINTS", words: ["DUST", "POTHOLE", "GARBAGE", "DIGGING"] },
    { level: 1, domain: "TRANSPORT", name: "MOUTHFUL STATION NAMES", words: ["BAIYAPPANAHALLI", "KRISHNARAJAPURA", "YELACHENAHALLI", "CHIKKABANAVARA"] },
    { level: 2, domain: "SPORT", name: "STARS BEYOND CRICKET", words: ["PADUKONE", "BOPANNA", "PONNAPPA", "CHHETRI"] },
    { level: 3, domain: "WORDPLAY", name: "___ BATH", words: ["KHARA", "KESARI", "CHOW CHOW", "BISI BELE"] }
  ]},
  { id: 22, groups: [
    { level: 0, domain: "FOOD", name: "CAFETERIA STAPLES", words: ["SAMBAR RICE", "CURD RICE", "FRIED RICE", "GOBI MANCHURIAN"] },
    { level: 1, domain: "CIVIC", name: "BROKER SPEAK", words: ["PRIME LOCATION", "WALKING DISTANCE", "NEGOTIABLE", "BACHELORS OK"] },
    { level: 2, domain: "NIGHT", name: "BANDS FROM THIS CITY", words: ["PARVAAZ", "KRYPTOS", "SWARATHMA", "TAAQ"] },
    { level: 3, domain: "WORDPLAY", name: "___ STAR", words: ["POWER", "ROCKING", "REAL", "CHALLENGING"] }
  ]},
  { id: 23, groups: [
    { level: 0, domain: "PLACE", name: "BEACHES AND PORTS", words: ["MALPE", "MURUDESHWARA", "KARWAR", "GOKARNA"] },
    { level: 1, domain: "FOOD", name: "COASTAL BREAKFAST", words: ["NEER DOSE", "GOLI BAJE", "KORI ROTTI", "PUNDI"] },
    { level: 2, domain: "CIVIC", name: "STORM DRAIN NEWS", words: ["RAJAKALUVE", "CULVERT", "SILT", "OVERFLOW"] },
    { level: 3, domain: "LANG", name: "COMPASS POINTS IN KANNADA", words: ["MUDA", "PADU", "BADAGA", "TENKA"] }
  ]},
  { id: 24, groups: [
    { level: 0, domain: "HIST", name: "STATE SYMBOLS", words: ["SANDALWOOD", "LOTUS", "ELEPHANT", "ROLLER"] },
    { level: 1, domain: "CIVIC", name: "AT A KANNADA WEDDING", words: ["MUHURTA", "DHARE", "ARISHINA", "BAGINA"] },
    { level: 2, domain: "FOOD", name: "NORTH KARNATAKA PLATE", words: ["ENNEGAI", "ZUNKA", "GIRMIT", "JOLADA ROTTI"] },
    { level: 3, domain: "LANG", name: "KANNADA COLOURS", words: ["KEMPU", "HASIRU", "BILI", "KARI"] }
  ]},
  { id: 25, groups: [
    { level: 0, domain: "TRANSPORT", name: "AT MAJESTIC", words: ["PLATFORM", "CONDUCTOR", "PASS", "DEPOT"] },
    { level: 1, domain: "FOOD", name: "RAMZAN NIGHTS", words: ["HALEEM", "PATHER GOSHT", "PHIRNI", "DATES"] },
    { level: 2, domain: "LANG", name: "WAYS TO REFUSE", words: ["ILLA", "BEDA", "SAAKU", "GOTHILLA"] },
    { level: 3, domain: "SHOP", name: "WORDS ON OLD SHOP BOARDS", words: ["STORES", "SILKS", "EMPORIUM", "BHANDAR"] }
  ]},
  { id: 26, groups: [
    { level: 0, domain: "LANG", name: "KANNADA WEATHER WORDS", words: ["MALE", "BISILU", "CHALI", "GALI"] },
    { level: 1, domain: "PLACE", name: "TEMPLE TOWNS", words: ["HAMPI", "AIHOLE", "BELUR", "TALAKAD"] },
    { level: 2, domain: "SCI", name: "AIRCRAFT BUILT BY HAL", words: ["TEJAS", "DHRUV", "MARUT", "KIRAN"] },
    { level: 3, domain: "WORDPLAY", name: "PETES NAMED FOR A TRADE", words: ["AKKI", "BALE", "KUMBARA", "GANIGARA"] }
  ]},
  { id: 27, groups: [
    { level: 0, domain: "CITY", name: "ON CHURCH STREET", words: ["BLOSSOM", "KOSHY'S", "MATTEO", "GOOBE'S"] },
    { level: 1, domain: "NIGHT", name: "LIVE MUSIC VENUES", words: ["FANDOM", "BFLAT", "HUMMING TREE", "COUNTERCULTURE"] },
    { level: 2, domain: "CIVIC", name: "PROPERTY PAPERWORK", words: ["KHATA", "EC", "OC", "SALE DEED"] },
    { level: 3, domain: "LANG", name: "ONE-WORD KANNADA ORDERS", words: ["BA", "HOGU", "TINNU", "NODU"] }
  ]},
  { id: 28, groups: [
    { level: 0, domain: "SCI", name: "LABS IN THE CITY", words: ["NAL", "DRDO", "LRDE", "CPRI"] },
    { level: 1, domain: "SPORT", name: "THE CHINNASWAMY CHANT", words: ["EE", "SALA", "CUP", "NAMDE"] },
    { level: 2, domain: "EDU", name: "UNIVERSITIES OF KARNATAKA", words: ["KUVEMPU", "MANGALORE", "GULBARGA", "TUMKUR"] },
    { level: 3, domain: "LANG", name: "KANNADA MENU WORDS", words: ["MEENU", "KOLI", "MOTTE", "KURI"] }
  ]},
  { id: 29, groups: [
    { level: 0, domain: "LIFE", name: "GAMES FROM THE GULLY", words: ["LAGORI", "GOLI", "KUNTE BILLE", "CHINNI DANDU"] },
    { level: 1, domain: "NATURE", name: "WESTERN GHATS PEAKS", words: ["MULLAYANAGIRI", "KUDREMUKH", "KODACHADRI", "TADIANDAMOL"] },
    { level: 2, domain: "WORDPLAY", name: "___ ROAD (CANTONMENT)", words: ["ST MARK'S", "LAVELLE", "RICHMOND", "DICKENSON"] },
    { level: 3, domain: "PEOPLE", name: "EARLY KANNADA POETS", words: ["PAMPA", "RANNA", "PONNA", "JANNA"] }
  ]},
  { id: 30, groups: [
    { level: 0, domain: "NATURE", name: "ONE-NIGHT TREKS", words: ["SKANDAGIRI", "SAVANDURGA", "ANTARGANGE", "MAKALIDURGA"] },
    { level: 1, domain: "SCI", name: "LAUNCH VEHICLES AND SATELLITES", words: ["PSLV", "GSLV", "ARYABHATA", "INSAT"] },
    { level: 2, domain: "TRANSPORT", name: "TRAINS OUT OF BENGALURU", words: ["SHATABDI", "VANDE BHARAT", "UDYAN", "TIPPU"] },
    { level: 3, domain: "WORDPLAY", name: "THE BANGALORE ___", words: ["TORPEDO", "BLUE", "ROSE ONION", "DAYS"] }
  ]},
  { id: 31, groups: [
    { level: 0, domain: "NATURE", name: "KARNATAKA HILL STATIONS", words: ["KEMMANNUGUNDI", "AGUMBE", "KODACHADRI", "MADIKERI"] },
    { level: 1, domain: "ARTS", name: "RK NARAYAN NOVELS", words: ["SWAMI AND FRIENDS", "THE GUIDE", "THE ENGLISH TEACHER", "THE VENDOR OF SWEETS"] },
    { level: 2, domain: "SCI", name: "RESEARCH INSTITUTES IN THE CITY", words: ["IISC", "NCBS", "RRI", "JNCASR"] },
    { level: 3, domain: "LANG", name: "DIRECTIONS FOR THE AUTO", words: ["MUNDE", "HINDE", "EDA", "BALA"] }
  ]},
  { id: 32, groups: [
    { level: 0, domain: "CITY", name: "IN THE OLD PETE", words: ["AVENUE ROAD", "MAMULPET", "RAJA MARKET", "BALEPET"] },
    { level: 1, domain: "FOOD", name: "FESTIVAL SPECIALS", words: ["HOLIGE", "PAYASA", "CHAKKULI", "UNDE"] },
    { level: 2, domain: "PLACE", name: "WEEKEND ESCAPES", words: ["COORG", "CHIKMAGALURU", "SAKLESHPUR", "WAYANAD"] },
    { level: 3, domain: "ARTS", name: "FOLK PERFORMANCES", words: ["DOLLU", "VEERAGASE", "KAMSALE", "YAKSHAGANA"] }
  ]},
  { id: 33, groups: [
    { level: 0, domain: "LANG", name: "QUESTION WORDS", words: ["YARU", "YENU", "ELLI", "YAAKE"] },
    { level: 1, domain: "PLACE", name: "KARNATAKA CITIES TODAY", words: ["MYSURU", "HUBBALLI", "MANGALURU", "BELAGAVI"] },
    { level: 2, domain: "FOOD", name: "MILITARY HOTEL ORDERS", words: ["RAGI MUDDE", "PEPPER CHICKEN", "NATI KOLI", "KAAL SOUP"] },
    { level: 3, domain: "WORDPLAY", name: "TOWNS INSIDE FOOD NAMES", words: ["DHARWAD", "NANJANGUD", "BYADAGI", "MADDUR"] }
  ]},
  { id: 34, groups: [
    { level: 0, domain: "TRANSPORT", name: "METRO ESSENTIALS", words: ["TOKEN", "SMART CARD", "SECURITY", "ESCALATOR"] },
    { level: 1, domain: "FOOD", name: "MANGALUREAN MENU", words: ["BUNS", "GHEE ROAST", "KANE FRY", "PATHRODE"] },
    { level: 2, domain: "CITY", name: "TEMPLES IN TOWN", words: ["RAGIGUDDA", "SOMESHWARA", "KOTE VENKATARAMANA", "GAVIPURAM"] },
    { level: 3, domain: "LANG", name: "SENTENCE ENDERS", words: ["ALVA", "ANTHE", "KANRI", "ASHTE"] }
  ]},
  { id: 35, groups: [
    { level: 0, domain: "HIST", name: "DASARA SIGHTS", words: ["JAMBOO SAVARI", "TORCHLIGHT", "HOWDAH", "CHAMUNDI"] },
    { level: 1, domain: "NATURE", name: "RIVERS AND STREAMS OF THE CITY", words: ["ARKAVATHY", "VRISHABHAVATHI", "KUMUDVATHI", "PINAKINI"] },
    { level: 2, domain: "PLACE", name: "TOWNS AROUND HAMPI", words: ["HOSAPETE", "ANEGUNDI", "KAMALAPURA", "SANAPUR"] },
    { level: 3, domain: "WORDPLAY", name: "SWALPA ___", words: ["ADJUST", "JASTI", "KAMMI", "NIDHANA"] }
  ]},
  { id: 36, groups: [
    { level: 0, domain: "ARTS", name: "MALGUDI DAYS", words: ["AGUMBE", "SHANKAR NAG", "RK NARAYAN", "SWAMI"] },
    { level: 1, domain: "HIST", name: "MYSURU LANDMARKS", words: ["AMBA VILAS", "JAGANMOHAN", "LALITHA MAHAL", "KARANJI"] },
    { level: 2, domain: "MEDIA", name: "KANNADA TV CHANNELS", words: ["SUVARNA", "COLORS", "ZEE", "PUBLIC"] },
    { level: 3, domain: "PEOPLE", name: "VIJAYANAGARA KINGS", words: ["KRISHNADEVARAYA", "HARIHARA", "BUKKA", "SADASHIVA"] }
  ]},
  { id: 37, groups: [
    { level: 0, domain: "SCI", name: "APPS BUILT HERE", words: ["DUNZO", "YULU", "BOUNCE", "RAPIDO"] },
    { level: 1, domain: "SHOP", name: "WHAT THEY SELL THERE", words: ["SAREES", "JEWELLERY", "HARDWARE", "CRACKERS"] },
    { level: 2, domain: "FOOD", name: "OLD TIFFIN ROOMS", words: ["VEENA STORES", "HALLI MANE", "NEW MODERN", "CTR"] },
    { level: 3, domain: "WORDPLAY", name: "___ VANI", words: ["PRAJA", "UDAYA", "SANJE", "AKASHA"] }
  ]},
  { id: 38, groups: [
    { level: 0, domain: "EDU", name: "BIG HOSPITALS", words: ["MANIPAL", "NARAYANA", "ST JOHN'S", "SAKRA"] },
    { level: 1, domain: "NATURE", name: "GREEN LUNGS OF THE CITY", words: ["TURAHALLI", "BANNERGHATTA", "HESARAGHATTA", "ALADA MARA"] },
    { level: 2, domain: "ARTS", name: "RAJKUMAR CLASSICS", words: ["BANGARADA MANUSHYA", "KASTURI NIVASA", "BABRUVAHANA", "SANAADI APPANNA"] },
    { level: 3, domain: "CIVIC", name: "LEASE FINE PRINT", words: ["LOCK IN", "ESCALATION", "NOTICE", "INDEMNITY"] }
  ]},
  { id: 39, groups: [
    { level: 0, domain: "FOOD", name: "GI-TAGGED PRODUCE", words: ["BYADAGI", "NANJANAGUD", "MATTU GULLA", "DEVANAHALLI"] },
    { level: 1, domain: "MEDIA", name: "ENGLISH DAILIES", words: ["DECCAN HERALD", "TIMES", "HINDU", "MIRROR"] },
    { level: 2, domain: "ARTS", name: "GIRISH KARNAD PLAYS", words: ["TUGHLAQ", "HAYAVADANA", "NAGAMANDALA", "YAYATI"] },
    { level: 3, domain: "LANG", name: "KANNADA FOR 'STREET'", words: ["BEEDI", "VEEDHI", "MARGA", "RASTE"] }
  ]},
  { id: 40, groups: [
    { level: 0, domain: "FOOD", name: "RICE DISHES", words: ["PULIYOGARE", "CHITRANNA", "MOSARANNA", "VANGIBHATH"] },
    { level: 1, domain: "SCI", name: "BRANDS BORN IN BENGALURU", words: ["HIMALAYA", "TITAN", "NANDINI", "COFFEE DAY"] },
    { level: 2, domain: "LANG", name: "KANNADA FOR WATER BODIES", words: ["KERE", "HALLA", "BAVI", "KALYANI"] },
    { level: 3, domain: "WORDPLAY", name: "___ DOSE", words: ["NEER", "SET", "BENNE", "KHALI"] }
  ]},
  { id: 41, groups: [
    { level: 0, domain: "HIST", name: "HISTORIC SITES", words: ["TIPU'S PALACE", "BANGALORE FORT", "ATTARA KACHERI", "BANGALORE PALACE"] },
    { level: 1, domain: "PLACE", name: "COFFEE COUNTRY", words: ["BABA BUDANGIRI", "KODAGU", "CHIKKAMAGALURU", "SAKLESHPUR"] },
    { level: 2, domain: "SCI", name: "ISRO CENTRES", words: ["ISTRAC", "URSC", "LEOS", "ANTRIX"] },
    { level: 3, domain: "LANG", name: "KANNADA NATURE WORDS", words: ["KERE", "MARA", "HUVU", "NEERU"] }
  ]},
  { id: 42, groups: [
    { level: 0, domain: "FOOD", name: "KEBAB STREET", words: ["SEEKH", "SHAWARMA", "ROLL", "TANGDI"] },
    { level: 1, domain: "PEOPLE", name: "HARIDASA COMPOSERS", words: ["PURANDARA", "KANAKA", "VYASARAYA", "VIJAYA"] },
    { level: 2, domain: "LANG", name: "SLANG FOR 'AWESOME'", words: ["SAKKATH", "BHARI", "SOLID", "MAST"] },
    { level: 3, domain: "WORDPLAY", name: "___ URU", words: ["BENGAL", "MANGAL", "MYS", "TUMAK"] }
  ]},
  { id: 43, groups: [
    { level: 0, domain: "SCI", name: "ISRO MISSIONS", words: ["CHANDRAYAAN", "MANGALYAAN", "GAGANYAAN", "ADITYA"] },
    { level: 1, domain: "TRANSPORT", name: "SCOOTER SEASON", words: ["HELMET", "RAINCOAT", "PETROL", "CHALLAN"] },
    { level: 2, domain: "ARTS", name: "PUTTANNA KANAGAL FILMS", words: ["NAAGARAHAAVU", "GEJJE POOJE", "SHARAPANJARA", "RANGANAYAKI"] },
    { level: 3, domain: "LANG", name: "THEATRE IN KANNADA", words: ["RANGABHOOMI", "NATAKA", "ABHINAYA", "BAYALATA"] }
  ]},
  { id: 44, groups: [
    { level: 0, domain: "FOOD", name: "KARNATAKA CROPS", words: ["RAGI", "JOLA", "SHENGA", "HATTI"] },
    { level: 1, domain: "CITY", name: "CITY FESTIVALS", words: ["KARAGA", "RAJYOTSAVA", "FLOWER SHOW", "GANESHA"] },
    { level: 2, domain: "NATURE", name: "BIRDS AT THE LAKE", words: ["PELICAN", "CORMORANT", "HERON", "IBIS"] },
    { level: 3, domain: "WORDPLAY", name: "___ CIRCLE", words: ["HUDSON", "MINERVA", "CORPORATION", "ANAND RAO"] }
  ]},
  { id: 45, groups: [
    { level: 0, domain: "SPORT", name: "RCB CAPTAINS", words: ["DRAVID", "KUMBLE", "KOHLI", "DU PLESSIS"] },
    { level: 1, domain: "FOOD", name: "TEATIME BUYS", words: ["PUFF", "SAMOSA", "CUTLET", "ROLL"] },
    { level: 2, domain: "TRANSPORT", name: "KSRTC BUS CLASSES", words: ["AIRAVAT", "RAJAHAMSA", "AMBAARI", "SARIGE"] },
    { level: 3, domain: "ARTS", name: "KANNADA NEW WAVE CLASSICS", words: ["SAMSKARA", "GHATASHRADDHA", "CHOMANA DUDI", "VAMSHA VRIKSHA"] }
  ]},
  { id: 46, groups: [
    { level: 0, domain: "EDU", name: "COLLEGES", words: ["CHRIST", "MOUNT CARMEL", "ST JOSEPH'S", "JYOTI NIVAS"] },
    { level: 1, domain: "HIST", name: "FOUNDING LORE", words: ["BENDA KALU", "PETE", "KOTE", "1537"] },
    { level: 2, domain: "MEDIA", name: "FOLK INSTRUMENTS", words: ["NAGARI", "CHENDE", "TAMATE", "KOMBU"] },
    { level: 3, domain: "FOOD", name: "BIRYANI STYLES", words: ["DONNE", "AMBUR", "THALASSERY", "HYDERABADI"] }
  ]},
  { id: 47, groups: [
    { level: 0, domain: "HIST", name: "HAMPI SIGHTS", words: ["VIRUPAKSHA", "VITTALA", "LOTUS MAHAL", "STONE CHARIOT"] },
    { level: 1, domain: "ARTS", name: "GALLERIES", words: ["NGMA", "VENKATAPPA", "SUMUKHA", "RANGOLI"] },
    { level: 2, domain: "TRANSPORT", name: "AT THE AIRPORT", words: ["BLR", "KIA", "T1", "T2"] },
    { level: 3, domain: "CIVIC", name: "OFFICE SPEAK", words: ["SYNERGY", "BANDWIDTH", "CIRCLE BACK", "ONSITE"] }
  ]},
  { id: 48, groups: [
    { level: 0, domain: "PEOPLE", name: "HINDUSTANI GREATS FROM KARNATAKA", words: ["GANGUBAI HANGAL", "BHIMSEN JOSHI", "MALLIKARJUN MANSUR", "KUMAR GANDHARVA"] },
    { level: 1, domain: "NATURE", name: "RIVERS OF KARNATAKA", words: ["TUNGABHADRA", "KRISHNA", "MALAPRABHA", "GHATAPRABHA"] },
    { level: 2, domain: "HIST", name: "THE FOUR TOWERS STAND AT", words: ["LALBAGH", "MEKHRI", "ULSOOR", "KEMPAMBUDHI"] },
    { level: 3, domain: "SCI", name: "BANKS BORN IN KARNATAKA", words: ["CANARA", "SYNDICATE", "VIJAYA", "CORPORATION"] }
  ]}
];
