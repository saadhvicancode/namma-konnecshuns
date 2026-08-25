/* Namma Konnecshuns, puzzle bank.
   Difficulty per puzzle: level 0 = yellow (easiest) through level 3 = purple (trickiest).

   Design rule: every puzzle plants at least one decoy, a word that clearly
   belongs to a category it is not in. SANKEY is a lake and a Raj engineer.
   GOKAK is a waterfall and a Jnanpith laureate. TALE is an English word and
   the Kannada word for head. If a puzzle has no decoy, it is too easy. */
const PUZZLES = [
  { id: 1, name: "Raj to Runway", groups: [
    { level: 0, name: "CITY LAKES", words: ["ULSOOR", "SANKEY", "HEBBAL", "JAKKUR"] },
    { level: 1, name: "RAJ-ERA NAMES ON THE CITY MAP", words: ["CUBBON", "HUDSON", "RICHMOND", "LAVELLE"] },
    { level: 2, name: "AIRCRAFT BUILT BY HAL", words: ["TEJAS", "DHRUV", "MARUT", "KIRAN"] },
    { level: 3, name: "KANNADA COLOURS", words: ["KEMPU", "HASIRU", "BILI", "KARI"] }
  ]},
  { id: 2, name: "Falls and Laureates", groups: [
    { level: 0, name: "KARNATAKA WATERFALLS", words: ["JOG", "ABBEY", "SHIVANASAMUDRA", "HEBBE"] },
    { level: 1, name: "COFFEE COUNTRY", words: ["BABA BUDANGIRI", "KODAGU", "CHIKKAMAGALURU", "SAKLESHPUR"] },
    { level: 2, name: "JNANPITH LAUREATES IN KANNADA", words: ["KUVEMPU", "BENDRE", "KARANTH", "GOKAK"] },
    { level: 3, name: "HOSA ___ (NEW)", words: ["KOTE", "PETE", "DURGA", "HALLI"] }
  ]},
  { id: 3, name: "Orbit City", groups: [
    { level: 0, name: "ISRO MISSIONS", words: ["CHANDRAYAAN", "MANGALYAAN", "GAGANYAAN", "ADITYA"] },
    { level: 1, name: "___ NAGAR", words: ["CV RAMAN", "RAJAJI", "JAYA", "INDIRA"] },
    { level: 2, name: "RESEARCH INSTITUTES IN THE CITY", words: ["IISC", "NCBS", "RRI", "JNCASR"] },
    { level: 3, name: "BANKS BORN IN KARNATAKA", words: ["CANARA", "SYNDICATE", "VIJAYA", "CORPORATION"] }
  ]},
  { id: 4, name: "Dasara Days", groups: [
    { level: 0, name: "DASARA SIGHTS", words: ["JAMBOO SAVARI", "TORCHLIGHT", "HOWDAH", "CHAMUNDI"] },
    { level: 1, name: "MYSURU LANDMARKS", words: ["AMBA VILAS", "JAGANMOHAN", "LALITHA MAHAL", "KARANJI"] },
    { level: 2, name: "WODEYAR LEGACIES", words: ["KRS", "BRINDAVAN", "SILK", "SANDAL"] },
    { level: 3, name: "MYSORE ___", words: ["PAK", "PETA", "BONDA", "MALLIGE"] }
  ]},
  { id: 5, name: "Tanks and Trades", groups: [
    { level: 0, name: "KODAVA GREATS", words: ["CARIAPPA", "THIMAYYA", "BOPANNA", "NACHAPPA"] },
    { level: 1, name: "RIVERS AND STREAMS OF THE CITY", words: ["ARKAVATHY", "VRISHABHAVATHI", "KUMUDVATHI", "PINAKINI"] },
    { level: 2, name: "TANKS THAT BECAME LANDMARKS", words: ["DHARMAMBUDHI", "SAMPANGI", "SIDDIKATTE", "MILLERS"] },
    { level: 3, name: "PETES NAMED FOR A TRADE", words: ["AKKI", "BALE", "KUMBARA", "GANIGARA"] }
  ]},
  { id: 6, name: "Dynasty", groups: [
    { level: 0, name: "SOUTH INDIAN RIVERS", words: ["KAVERI", "TUNGA", "BHADRA", "SHARAVATHI"] },
    { level: 1, name: "TEMPLE TOWNS", words: ["HAMPI", "AIHOLE", "BELUR", "TALAKAD"] },
    { level: 2, name: "DYNASTIES THAT RULED KARNATAKA", words: ["KADAMBA", "CHALUKYA", "RASHTRAKUTA", "GANGA"] },
    { level: 3, name: "FOLK PERFORMANCES", words: ["DOLLU", "VEERAGASE", "KAMSALE", "YAKSHAGANA"] }
  ]},
  { id: 7, name: "Stage and Screen", groups: [
    { level: 0, name: "MALGUDI DAYS", words: ["AGUMBE", "SHANKAR NAG", "RK NARAYAN", "SWAMI"] },
    { level: 1, name: "KANNADA FAMILY WORDS", words: ["AKKA", "ANNA", "THAMMA", "THANGI"] },
    { level: 2, name: "GIRISH KARNAD PLAYS", words: ["TUGHLAQ", "HAYAVADANA", "NAGAMANDALA", "YAYATI"] },
    { level: 3, name: "KANNADA NEW WAVE CLASSICS", words: ["SAMSKARA", "GHATASHRADDHA", "CHOMANA DUDI", "VAMSHA VRIKSHA"] }
  ]},
  { id: 8, name: "Tagged and Woven", groups: [
    { level: 0, name: "GI-TAGGED PRODUCE", words: ["BYADAGI", "NANJANAGUD", "MATTU GULLA", "DEVANAHALLI"] },
    { level: 1, name: "HANDLOOM TOWNS", words: ["ILKAL", "MOLAKALMURU", "NAVALGUND", "GULEDGUDDA"] },
    { level: 2, name: "CRAFT TOWNS", words: ["CHANNAPATNA", "BIDAR", "KINNAL", "SANDUR"] },
    { level: 3, name: "___ URU", words: ["BENGAL", "MANGAL", "MYS", "TUMAK"] }
  ]},
  { id: 9, name: "Cantonment", groups: [
    { level: 0, name: "___ TOWN", words: ["FRAZER", "COOKE", "COX", "BENSON"] },
    { level: 1, name: "ANGLO-INDIAN CHRISTMAS", words: ["PLUM CAKE", "KULKUL", "ROSE COOKIE", "MARZIPAN"] },
    { level: 2, name: "CITY RAILWAY STATION CODES", words: ["SBC", "YPR", "KJM", "BNC"] },
    { level: 3, name: "REBELS OF KARNATAKA", words: ["KITTUR CHENNAMMA", "SANGOLLI RAYANNA", "ONAKE OBAVVA", "MADAKARI NAYAKA"] }
  ]},
  { id: 10, name: "Filter Kaapi", groups: [
    { level: 0, name: "COFFEE COUNTER TALK", words: ["DECOCTION", "DAVARA", "TUMBLER", "BY TWO"] },
    { level: 1, name: "COASTAL BREAKFAST", words: ["NEER DOSE", "GOLI BAJE", "KORI ROTTI", "PUNDI"] },
    { level: 2, name: "THE UDUPI HOTEL LEGACY", words: ["DASAPRAKASH", "WOODLANDS", "KAMAT", "SUKH SAGAR"] },
    { level: 3, name: "___ BATH", words: ["KHARA", "KESARI", "CHOW CHOW", "BISI BELE"] }
  ]},
  { id: 11, name: "Silicon Plateau", groups: [
    { level: 0, name: "APPS BUILT HERE", words: ["DUNZO", "YULU", "BOUNCE", "RAPIDO"] },
    { level: 1, name: "BRANDS BORN IN BENGALURU", words: ["HIMALAYA", "TITAN", "NANDINI", "COFFEE DAY"] },
    { level: 2, name: "ISRO CENTRES", words: ["ISTRAC", "URSC", "LEOS", "ANTRIX"] },
    { level: 3, name: "VC SPEAK", words: ["RUNWAY", "BURN", "MOAT", "CAP TABLE"] }
  ]},
  { id: 12, name: "Vachana to Vocal", groups: [
    { level: 0, name: "HINDUSTANI GREATS FROM KARNATAKA", words: ["GANGUBAI HANGAL", "BHIMSEN JOSHI", "MALLIKARJUN MANSUR", "KUMAR GANDHARVA"] },
    { level: 1, name: "HARIDASA COMPOSERS", words: ["PURANDARA", "KANAKA", "VYASARAYA", "VIJAYA"] },
    { level: 2, name: "POET-SAINTS OF THE VACHANA AGE", words: ["BASAVANNA", "AKKA MAHADEVI", "ALLAMA", "SARVAJNA"] },
    { level: 3, name: "ONE-WORD KANNADA ORDERS", words: ["BA", "HOGU", "TINNU", "NODU"] }
  ]},
  { id: 13, name: "Hills and Halts", groups: [
    { level: 0, name: "KARNATAKA HILL STATIONS", words: ["KEMMANNUGUNDI", "AGUMBE", "KODACHADRI", "MADIKERI"] },
    { level: 1, name: "METRO TERMINALS", words: ["CHALLAGHATTA", "WHITEFIELD", "SILK INSTITUTE", "MADAVARA"] },
    { level: 2, name: "TRAINS OUT OF BENGALURU", words: ["SHATABDI", "VANDE BHARAT", "UDYAN", "TIPPU"] },
    { level: 3, name: "___ PURA", words: ["DODDABALLA", "VIJAYA", "KEMPA", "SRIRAMA"] }
  ]},
  { id: 14, name: "Ee Sala Cup", groups: [
    { level: 0, name: "RCB CAPTAINS", words: ["DRAVID", "KUMBLE", "KOHLI", "DU PLESSIS"] },
    { level: 1, name: "THE CHINNASWAMY CHANT", words: ["EE", "SALA", "CUP", "NAMDE"] },
    { level: 2, name: "STARS BEYOND CRICKET", words: ["PADUKONE", "BOPANNA", "PONNAPPA", "CHHETRI"] },
    { level: 3, name: "KANNADA NUMBERS FIVE TO EIGHT", words: ["AIDU", "ARU", "ELU", "ENTU"] }
  ]},
  { id: 15, name: "Kannada Class", groups: [
    { level: 0, name: "QUESTION WORDS", words: ["YARU", "YENU", "ELLI", "YAAKE"] },
    { level: 1, name: "BODY PARTS", words: ["TALE", "KAI", "KANNU", "KIVI"] },
    { level: 2, name: "WAYS TO REFUSE", words: ["ILLA", "BEDA", "SAAKU", "GOTHILLA"] },
    { level: 3, name: "KANNADA WORDS SPELLED LIKE ENGLISH ONES", words: ["MANE", "BALE", "HALE", "MELE"] }
  ]},
  { id: 16, name: "Tiger Country", groups: [
    { level: 0, name: "TIGER RESERVES", words: ["BANDIPUR", "NAGARAHOLE", "BHADRA", "BILIGIRIRANGA"] },
    { level: 1, name: "GREEN LUNGS OF THE CITY", words: ["TURAHALLI", "BANNERGHATTA", "HESARAGHATTA", "ALADA MARA"] },
    { level: 2, name: "ANIMALS IN KANNADA", words: ["HULI", "ANE", "NAAYI", "KOLI"] },
    { level: 3, name: "PLACES NAMED FOR ANIMALS", words: ["ANEKAL", "HULIMAVU", "KUDREMUKH", "NANDI"] }
  ]},
  { id: 17, name: "Vijayanagara", groups: [
    { level: 0, name: "HAMPI SIGHTS", words: ["VIRUPAKSHA", "VITTALA", "LOTUS MAHAL", "STONE CHARIOT"] },
    { level: 1, name: "RIVERS OF KARNATAKA", words: ["TUNGABHADRA", "KRISHNA", "MALAPRABHA", "GHATAPRABHA"] },
    { level: 2, name: "TOWNS AROUND HAMPI", words: ["HOSAPETE", "ANEGUNDI", "KAMALAPURA", "SANAPUR"] },
    { level: 3, name: "VIJAYANAGARA KINGS", words: ["KRISHNADEVARAYA", "HARIHARA", "BUKKA", "SADASHIVA"] }
  ]},
  { id: 18, name: "District Roll Call", groups: [
    { level: 0, name: "NORTH KARNATAKA DISTRICTS", words: ["BIDAR", "KALABURAGI", "RAICHUR", "YADGIR"] },
    { level: 1, name: "COAST AND MALNAD", words: ["UDUPI", "KARWAR", "SHIVAMOGGA", "MADIKERI"] },
    { level: 2, name: "BEFORE THE RENAMING", words: ["GULBARGA", "BELLARY", "BIJAPUR", "HUBLI"] },
    { level: 3, name: "TOWNS INSIDE FOOD NAMES", words: ["DHARWAD", "NANJANGUD", "BYADAGI", "MADDUR"] }
  ]},
  { id: 19, name: "Gandhi Bazaar", groups: [
    { level: 0, name: "BASAVANAGUDI LANDMARKS", words: ["NATIONAL COLLEGE", "VIDYARTHI BHAVAN", "BULL TEMPLE", "RAMAKRISHNA ASHRAM"] },
    { level: 1, name: "CITY FESTIVALS", words: ["KARAGA", "RAJYOTSAVA", "FLOWER SHOW", "GANESHA"] },
    { level: 2, name: "SWEET COUNTER", words: ["MYSORE PAK", "CHIROTI", "OBBATTU", "KAJJAYA"] },
    { level: 3, name: "KANNADA FOR 'FESTIVAL'", words: ["HABBA", "JATRE", "PARISHE", "UTSAVA"] }
  ]},
  { id: 20, name: "Ten Months Advance", groups: [
    { level: 0, name: "PG LIFE", words: ["WARDEN", "MESS", "COT", "CURFEW"] },
    { level: 1, name: "BROKER SPEAK", words: ["PRIME LOCATION", "WALKING DISTANCE", "NEGOTIABLE", "BACHELORS OK"] },
    { level: 2, name: "PROPERTY PAPERWORK", words: ["KHATA", "EC", "OC", "SALE DEED"] },
    { level: 3, name: "LEASE FINE PRINT", words: ["LOCK IN", "ESCALATION", "NOTICE", "INDEMNITY"] }
  ]},
  { id: 21, name: "Deep Tech", groups: [
    { level: 0, name: "LABS IN THE CITY", words: ["NAL", "DRDO", "LRDE", "CPRI"] },
    { level: 1, name: "LAUNCH VEHICLES AND SATELLITES", words: ["PSLV", "GSLV", "ARYABHATA", "INSAT"] },
    { level: 2, name: "RESERVOIRS", words: ["KRS", "LINGANAMAKKI", "HARANGI", "KABINI"] },
    { level: 3, name: "SCIENTISTS WITH BENGALURU ADDRESSES", words: ["RAMAN", "DHAWAN", "CNR RAO", "KASTURIRANGAN"] }
  ]},
  { id: 22, name: "Signal Free", groups: [
    { level: 0, name: "CHOKEPOINTS", words: ["SILK BOARD", "TIN FACTORY", "HEBBAL", "ANIL KUMBLE"] },
    { level: 1, name: "AUTO NEGOTIATION", words: ["METER", "ONE AND HALF", "NO CHANGE", "RETURN"] },
    { level: 2, name: "ROADS NAMED FOR PEOPLE", words: ["KAMARAJ", "NRUPATHUNGA", "KASTURBA", "SESHADRI"] },
    { level: 3, name: "KANNADA FOR 'STREET'", words: ["BEEDI", "VEEDHI", "MARGA", "RASTE"] }
  ]},
  { id: 23, name: "Meals Ready", groups: [
    { level: 0, name: "RICE DISHES", words: ["PULIYOGARE", "CHITRANNA", "MOSARANNA", "VANGIBHATH"] },
    { level: 1, name: "FESTIVAL SPECIALS", words: ["HOLIGE", "PAYASA", "CHAKKULI", "UNDE"] },
    { level: 2, name: "ACCOMPANIMENTS", words: ["KOSAMBARI", "GOJJU", "TAMBLI", "RAITA"] },
    { level: 3, name: "THE FOUR PARTS OF A MEAL", words: ["HULI", "SAARU", "PALYA", "TOVVE"] }
  ]},
  { id: 24, name: "Campus Round", groups: [
    { level: 0, name: "COLLEGES", words: ["CHRIST", "MOUNT CARMEL", "ST JOSEPH'S", "JYOTI NIVAS"] },
    { level: 1, name: "ENGINEERING COLLEGES", words: ["RV", "PES", "BMS", "MSRIT"] },
    { level: 2, name: "UNIVERSITIES OF KARNATAKA", words: ["KUVEMPU", "MANGALORE", "GULBARGA", "TUMKUR"] },
    { level: 3, name: "INITIALS IN AREA NAMES", words: ["BTM", "JP", "RT", "KR"] }
  ]},
  { id: 25, name: "Sunrise Trek", groups: [
    { level: 0, name: "ONE-NIGHT TREKS", words: ["SKANDAGIRI", "SAVANDURGA", "ANTARGANGE", "MAKALIDURGA"] },
    { level: 1, name: "WESTERN GHATS PEAKS", words: ["MULLAYANAGIRI", "KUDREMUKH", "KODACHADRI", "TADIANDAMOL"] },
    { level: 2, name: "BIRDS AT THE LAKE", words: ["PELICAN", "CORMORANT", "HERON", "IBIS"] },
    { level: 3, name: "KANNADA NATURE WORDS", words: ["KERE", "MARA", "HUVU", "NEERU"] }
  ]},
  { id: 26, name: "Sandalwood", groups: [
    { level: 0, name: "KANNADA BLOCKBUSTERS", words: ["KGF", "KANTARA", "777 CHARLIE", "TAGARU"] },
    { level: 1, name: "PARALLEL CINEMA DIRECTORS", words: ["KASARAVALLI", "KARNAD", "NAGABHARANA", "PUTTANNA"] },
    { level: 2, name: "MUSIC DIRECTORS", words: ["HAMSALEKHA", "RAJAN NAGENDRA", "VIJAYA BHASKAR", "AJANEESH"] },
    { level: 3, name: "___ STAR", words: ["POWER", "ROCKING", "REAL", "CHALLENGING"] }
  ]},
  { id: 27, name: "Print and Airwaves", groups: [
    { level: 0, name: "FM STATIONS", words: ["RADIO CITY", "BIG FM", "FEVER", "INDIGO"] },
    { level: 1, name: "ENGLISH DAILIES", words: ["DECCAN HERALD", "TIMES", "HINDU", "MIRROR"] },
    { level: 2, name: "KANNADA TV CHANNELS", words: ["SUVARNA", "COLORS", "ZEE", "PUBLIC"] },
    { level: 3, name: "___ VANI", words: ["PRAJA", "UDAYA", "SANJE", "AKASHA"] }
  ]},
  { id: 28, name: "Water Wars", groups: [
    { level: 0, name: "WATER SOURCES", words: ["CAUVERY", "BOREWELL", "TANKER", "RAINWATER"] },
    { level: 1, name: "REVIVED LAKES", words: ["PUTTENAHALLI", "KAIKONDRAHALLI", "JAKKUR", "RACHENAHALLI"] },
    { level: 2, name: "KANNADA FOR WATER BODIES", words: ["KERE", "HALLA", "BAVI", "KALYANI"] },
    { level: 3, name: "___ SANDRA", words: ["JAKKA", "BYRA", "THIPPA", "CHIKKA"] }
  ]},
  { id: 29, name: "Malleswaram Morning", groups: [
    { level: 0, name: "MALLESWARAM LANDMARKS", words: ["8TH CROSS", "KADU MALLESHWARA", "SANKEY TANK", "MANTRI SQUARE"] },
    { level: 1, name: "FLOWERS SOLD BY THE MOLE", words: ["MALLIGE", "KANAKAMBARA", "SEVANTHIGE", "TAVARE"] },
    { level: 2, name: "OLD FOOD JOINTS NEARBY", words: ["VEENA STORES", "HALLI MANE", "NEW MODERN", "CTR"] },
    { level: 3, name: "KANNADA GREENGROCER WORDS", words: ["HUVU", "HANNU", "SOPPU", "TARAKARI"] }
  ]},
  { id: 30, name: "Bengaluru Nights", groups: [
    { level: 0, name: "PUB CRAWL STOPS", words: ["TOIT", "SOCIAL", "PECOS", "HARD ROCK"] },
    { level: 1, name: "LIVE MUSIC VENUES", words: ["FANDOM", "BFLAT", "HUMMING TREE", "COUNTERCULTURE"] },
    { level: 2, name: "BANDS FROM THIS CITY", words: ["PARVAAZ", "KRYPTOS", "SWARATHMA", "TAAQ"] },
    { level: 3, name: "___ ROAD", words: ["100 FEET", "OLD AIRPORT", "DOUBLE", "TANNERY"] }
  ]},
  { id: 31, name: "Coast to Ghat", groups: [
    { level: 0, name: "BEACHES AND PORTS", words: ["MALPE", "MURUDESHWARA", "KARWAR", "GOKARNA"] },
    { level: 1, name: "MANGALUREAN MENU", words: ["BUNS", "GHEE ROAST", "KANE FRY", "PATHRODE"] },
    { level: 2, name: "NORTH KARNATAKA PLATE", words: ["ENNEGAI", "ZUNKA", "GIRMIT", "JOLADA ROTTI"] },
    { level: 3, name: "KANNADA MENU WORDS", words: ["MEENU", "KOLI", "MOTTE", "KURI"] }
  ]},
  { id: 32, name: "Bus Pass", groups: [
    { level: 0, name: "AT MAJESTIC", words: ["PLATFORM", "CONDUCTOR", "PASS", "DEPOT"] },
    { level: 1, name: "SATELLITE TOWNS", words: ["HOSKOTE", "NELAMANGALA", "ANEKAL", "ATTIBELE"] },
    { level: 2, name: "KSRTC BUS CLASSES", words: ["AIRAVAT", "RAJAHAMSA", "AMBAARI", "SARIGE"] },
    { level: 3, name: "DIRECTIONS FOR THE AUTO", words: ["MUNDE", "HINDE", "EDA", "BALA"] }
  ]},
  { id: 33, name: "Kempegowda's City", groups: [
    { level: 0, name: "HISTORIC SITES", words: ["TIPU'S PALACE", "BANGALORE FORT", "ATTARA KACHERI", "BANGALORE PALACE"] },
    { level: 1, name: "FOUNDING LORE", words: ["BENDA KALU", "PETE", "KOTE", "1537"] },
    { level: 2, name: "THE FOUR TOWERS STAND AT", words: ["LALBAGH", "MEKHRI", "ULSOOR", "KEMPAMBUDHI"] },
    { level: 3, name: "___ GATE", words: ["HALASURU", "YELAHANKA", "KENGERI", "KUDLU"] }
  ]},
  { id: 34, name: "Church Street", groups: [
    { level: 0, name: "ON CHURCH STREET", words: ["BLOSSOM", "KOSHY'S", "MATTEO", "GOOBE'S"] },
    { level: 1, name: "BOOKSHOPS ELSEWHERE", words: ["BOOKWORM", "GANGARAMS", "SELECT", "HIGGINBOTHAMS"] },
    { level: 2, name: "___ ROAD", words: ["ST MARK'S", "LAVELLE", "RICHMOND", "DICKENSON"] },
    { level: 3, name: "___ CIRCLE", words: ["HUDSON", "MINERVA", "CORPORATION", "ANAND RAO"] }
  ]},
  { id: 35, name: "Onsite Dreams", groups: [
    { level: 0, name: "CAFETERIA STAPLES", words: ["SAMBAR RICE", "CURD RICE", "FRIED RICE", "GOBI MANCHURIAN"] },
    { level: 1, name: "SPRINT LIFE", words: ["DEPLOY", "STANDUP", "BACKLOG", "ESCALATION"] },
    { level: 2, name: "___ TECH PARK", words: ["PRESTIGE", "BAGMANE", "GLOBAL VILLAGE", "MANYATA"] },
    { level: 3, name: "OFFICE SPEAK", words: ["SYNERGY", "BANDWIDTH", "CIRCLE BACK", "ONSITE"] }
  ]},
  { id: 36, name: "Hospital Row", groups: [
    { level: 0, name: "BIG HOSPITALS", words: ["MANIPAL", "NARAYANA", "ST JOHN'S", "SAKRA"] },
    { level: 1, name: "SPECIALTY CENTRES", words: ["NIMHANS", "JAYADEVA", "KIDWAI", "VICTORIA"] },
    { level: 2, name: "GOVERNMENT LANDMARKS", words: ["VIDHANA SOUDHA", "VIKASA SOUDHA", "RAJ BHAVAN", "HIGH COURT"] },
    { level: 3, name: "___ ROAD", words: ["NICE", "OLD MADRAS", "TUMKUR", "KANAKAPURA"] }
  ]},
  { id: 37, name: "Cake and Bake", groups: [
    { level: 0, name: "IYENGAR BAKERY SHELF", words: ["HONEY CAKE", "DILKUSH", "RUSK", "BENNE BISCUIT"] },
    { level: 1, name: "TEATIME BUYS", words: ["PUFF", "SAMOSA", "CUTLET", "ROLL"] },
    { level: 2, name: "FANCY BAKERIES", words: ["GLEN'S", "LAVONNE", "SMOOR", "ALBERT"] },
    { level: 3, name: "___ BUN", words: ["CONGRESS", "MASALA", "KHARA", "BUTTER"] }
  ]},
  { id: 38, name: "Rajyotsava", groups: [
    { level: 0, name: "STATE SYMBOLS", words: ["SANDALWOOD", "LOTUS", "ELEPHANT", "ROLLER"] },
    { level: 1, name: "KARNATAKA CITIES TODAY", words: ["MYSURU", "HUBBALLI", "MANGALURU", "BELAGAVI"] },
    { level: 2, name: "THE OLD SPELLINGS", words: ["MYSORE", "HUBLI", "MANGALORE", "BELGAUM"] },
    { level: 3, name: "EARLY KANNADA POETS", words: ["PAMPA", "RANNA", "PONNA", "JANNA"] }
  ]},
  { id: 39, name: "End of the Line", groups: [
    { level: 0, name: "METRO ESSENTIALS", words: ["TOKEN", "SMART CARD", "SECURITY", "ESCALATOR"] },
    { level: 1, name: "MOUTHFUL STATION NAMES", words: ["BAIYAPPANAHALLI", "KRISHNARAJAPURA", "YELACHENAHALLI", "CHIKKABANAVARA"] },
    { level: 2, name: "TERMINAL STATIONS", words: ["CHALLAGHATTA", "WHITEFIELD", "SILK INSTITUTE", "MADAVARA"] },
    { level: 3, name: "___ ROAD STATION", words: ["MYSORE", "MAGADI", "RV", "SAMPIGE"] }
  ]},
  { id: 40, name: "Valley Talk", groups: [
    { level: 0, name: "BBMP CHORES", words: ["GARBAGE", "POTHOLE", "KHATA", "PROPERTY TAX"] },
    { level: 1, name: "CITY BIRDS", words: ["MYNA", "BULBUL", "KITE", "PARAKEET"] },
    { level: 2, name: "STORM DRAIN NEWS", words: ["RAJAKALUVE", "CULVERT", "SILT", "OVERFLOW"] },
    { level: 3, name: "BENGALURU'S VALLEYS", words: ["VRISHABHAVATHI", "KORAMANGALA", "CHALLAGHATTA", "HEBBAL"] }
  ]},
  { id: 41, name: "Second Show", groups: [
    { level: 0, name: "SINGLE SCREENS", words: ["SANTOSH", "URVASHI", "NARTAKI", "TRIVENI"] },
    { level: 1, name: "DIRECTORS OF THE NEW WAVE", words: ["PRASHANTH NEEL", "PAWAN KUMAR", "HEMANTH RAO", "RAKSHIT SHETTY"] },
    { level: 2, name: "PUTTANNA KANAGAL FILMS", words: ["NAAGARAHAAVU", "GEJJE POOJE", "SHARAPANJARA", "RANGANAYAKI"] },
    { level: 3, name: "ONE-WORD KANNADA FILMS", words: ["OM", "LUCIA", "UPENDRA", "JACKIE"] }
  ]},
  { id: 42, name: "Swalpa Adjust", groups: [
    { level: 0, name: "HYPERLOCAL COMPLAINTS", words: ["DUST", "POTHOLE", "GARBAGE", "DIGGING"] },
    { level: 1, name: "AUTO REFUSAL REASONS", words: ["NO CHANGE", "TOO FAR", "SHIFT CHANGE", "GAS ILLA"] },
    { level: 2, name: "WEEKEND ESCAPES", words: ["COORG", "CHIKMAGALURU", "SAKLESHPUR", "WAYANAD"] },
    { level: 3, name: "SWALPA ___", words: ["ADJUST", "JASTI", "KAMMI", "NIDHANA"] }
  ]},
  { id: 43, name: "Frazer Town Food", groups: [
    { level: 0, name: "KEBAB STREET", words: ["SEEKH", "SHAWARMA", "ROLL", "TANGDI"] },
    { level: 1, name: "RAMZAN NIGHTS", words: ["HALEEM", "PATHER GOSHT", "PHIRNI", "DATES"] },
    { level: 2, name: "MILITARY HOTEL ORDERS", words: ["RAGI MUDDE", "PEPPER CHICKEN", "NATI KOLI", "KAAL SOUP"] },
    { level: 3, name: "BIRYANI STYLES", words: ["DONNE", "AMBUR", "THALASSERY", "HYDERABADI"] }
  ]},
  { id: 44, name: "Habba Season", groups: [
    { level: 0, name: "STAGES AND AUDITORIA", words: ["RANGA SHANKARA", "CHOWDIAH", "KALAKSHETRA", "JAGRITI"] },
    { level: 1, name: "GALLERIES", words: ["NGMA", "VENKATAPPA", "SUMUKHA", "RANGOLI"] },
    { level: 2, name: "FESTIVALS THAT SELL TICKETS", words: ["BLF", "ECHOES OF EARTH", "COMIC CON", "ART BENGALURU"] },
    { level: 3, name: "THEATRE IN KANNADA", words: ["RANGABHOOMI", "NATAKA", "ABHINAYA", "BAYALATA"] }
  ]},
  { id: 45, name: "Two Wheeler Life", groups: [
    { level: 0, name: "BIKE TAXI ERA", words: ["RAPIDO", "BOUNCE", "YULU", "VOGO"] },
    { level: 1, name: "SCOOTER SEASON", words: ["HELMET", "RAINCOAT", "PETROL", "CHALLAN"] },
    { level: 2, name: "PARKING BATTLES", words: ["NO PARKING", "TOWING", "BASEMENT", "VALET"] },
    { level: 3, name: "___ RING ROAD", words: ["OUTER", "INNER", "PERIPHERAL", "NICE"] }
  ]},
  { id: 46, name: "Slang Deck", groups: [
    { level: 0, name: "CROWD AND CHAOS", words: ["GALATA", "GADIBIDI", "JAAM", "RUSH"] },
    { level: 1, name: "SLANG FOR 'FRIEND'", words: ["MACHA", "MAGA", "ANNA", "BRO"] },
    { level: 2, name: "SLANG FOR 'AWESOME'", words: ["SAKKATH", "BHARI", "SOLID", "MAST"] },
    { level: 3, name: "SENTENCE ENDERS", words: ["ALVA", "ANTHE", "KANRI", "ASHTE"] }
  ]},
  { id: 47, name: "Pete Walk", groups: [
    { level: 0, name: "IN THE OLD PETE", words: ["AVENUE ROAD", "MAMULPET", "RAJA MARKET", "BALEPET"] },
    { level: 1, name: "WHAT THEY SELL THERE", words: ["SAREES", "JEWELLERY", "HARDWARE", "CRACKERS"] },
    { level: 2, name: "TEMPLES IN TOWN", words: ["RAGIGUDDA", "SOMESHWARA", "KOTE VENKATARAMANA", "GAVIPURAM"] },
    { level: 3, name: "WORDS ON OLD SHOP BOARDS", words: ["STORES", "SILKS", "EMPORIUM", "BHANDAR"] }
  ]},
  { id: 48, name: "The Bangalore ___", groups: [
    { level: 0, name: "WHAT THE CITY IS CALLED", words: ["BENDAKALURU", "GARDEN CITY", "SILICON VALLEY", "PUB CITY"] },
    { level: 1, name: "SOUVENIRS TO CARRY BACK", words: ["SANDAL SOAP", "MYSORE SILK", "CHANNAPATNA TOY", "COORG COFFEE"] },
    { level: 2, name: "AT THE AIRPORT", words: ["BLR", "KIA", "T1", "T2"] },
    { level: 3, name: "THE BANGALORE ___", words: ["TORPEDO", "BLUE", "ROSE ONION", "DAYS"] }
  ]}
];
