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
    { level: 2, domain: "VERB", name: "THINGS THAT CAN BE TURNED", words: ["PAGE", "TABLES", "HEAD", "CORNER"] },
    { level: 3, domain: "WORDPLAY", name: "___ CENTRE", words: ["CALL", "SHOPPING", "HEALTH", "EPI"] }
  ]},
  { id: 2, groups: [
    { level: 0, domain: "NATURE", name: "KARNATAKA WATERFALLS", words: ["JOG", "ABBEY", "SHIVANASAMUDRA", "HEBBE"] },
    { level: 1, domain: "LIFE", name: "THINGS THAT COME UNSOLICITED", words: ["ADVICE", "SPAM", "OPINION", "FEEDBACK"] },
    { level: 2, domain: "PEOPLE", name: "JNANPITH LAUREATES IN KANNADA", words: ["KUVEMPU", "BENDRE", "KARANTH", "GOKAK"] },
    { level: 3, domain: "WORDPLAY", name: "___ TRACK", words: ["RACE", "FAST", "SOUND", "BACK"] }
  ]},
  { id: 3, groups: [
    { level: 0, domain: "VERB", name: "THINGS THAT BURN", words: ["CANDLE", "CHILLI", "SUN", "TOAST"] },
    { level: 1, domain: "LANG", name: "BODY PARTS", words: ["TALE", "KAI", "KANNU", "KIVI"] },
    { level: 2, domain: "HOME", name: "THINGS THAT COME IN PAIRS", words: ["SOCKS", "DICE", "LUNGS", "EARRINGS"] },
    { level: 3, domain: "WORDPLAY", name: "KANNADA WORDS SPELLED LIKE ENGLISH ONES", words: ["MANE", "BALE", "HALE", "MELE"] }
  ]},
  { id: 4, groups: [
    { level: 0, domain: "NATURE", name: "SOUTH INDIAN RIVERS", words: ["KAVERI", "TUNGA", "BHADRA", "SHARAVATHI"] },
    { level: 1, domain: "MEDIA", name: "NEWSPAPER SECTIONS", words: ["CLASSIFIEDS", "MATRIMONIAL", "OBITUARY", "SPORTS"] },
    { level: 2, domain: "HIST", name: "DYNASTIES THAT RULED KARNATAKA", words: ["KADAMBA", "CHALUKYA", "RASHTRAKUTA", "GANGA"] },
    { level: 3, domain: "WORDPLAY", name: "___ BACK", words: ["PAY", "FEED", "SET", "HORSE"] }
  ]},
  { id: 5, groups: [
    { level: 0, domain: "FOOD", name: "AT THE CINEMA", words: ["INTERVAL", "POPCORN", "ANTHEM", "RECLINER"] },
    { level: 1, domain: "CITY", name: "THINGS THAT NEED APPROVAL", words: ["LOAN", "LEAVE", "PLAN", "VISA"] },
    { level: 2, domain: "LANG", name: "ANIMALS IN KANNADA", words: ["HULI", "ANE", "NAAYI", "KOLI"] },
    { level: 3, domain: "WORDPLAY", name: "PLACES NAMED FOR ANIMALS", words: ["ANEKAL", "HULIMAVU", "KUDREMUKH", "NANDI"] }
  ]},
  { id: 6, groups: [
    { level: 0, domain: "WORK", name: "CAB APP WORDS", words: ["OTP", "RATING", "CANCEL", "ETA"] },
    { level: 1, domain: "EDU", name: "ENGINEERING COLLEGES", words: ["RV", "PES", "BMS", "MSRIT"] },
    { level: 2, domain: "LANG", name: "WAYS TO REFUSE", words: ["ILLA", "BEDA", "SAAKU", "GOTHILLA"] },
    { level: 3, domain: "WORDPLAY", name: "INITIALS IN AREA NAMES", words: ["BTM", "JP", "RT", "KR"] }
  ]},
  { id: 7, groups: [
    { level: 0, domain: "CITY", name: "ON CHURCH STREET", words: ["BLOSSOM", "KOSHY'S", "MATTEO", "GOOBE'S"] },
    { level: 1, domain: "FOOD", name: "STREET CART SOUNDS", words: ["BELL", "STEAM", "SIZZLE", "HORN"] },
    { level: 2, domain: "ARTS", name: "MUSIC DIRECTORS", words: ["HAMSALEKHA", "RAJAN NAGENDRA", "VIJAYA BHASKAR", "AJANEESH"] },
    { level: 3, domain: "WORDPLAY", name: "___ STREET", words: ["CHURCH", "COMMERCIAL", "WALL", "EASY"] }
  ]},
  { id: 8, groups: [
    { level: 0, domain: "TRANSPORT", name: "CHOKEPOINTS", words: ["SILK BOARD", "TIN FACTORY", "HEBBAL", "ANIL KUMBLE"] },
    { level: 1, domain: "CITY", name: "WHAT THE SOCIETY GROUP FIGHTS ABOUT", words: ["PARKING", "PETS", "NOISE", "MAINTENANCE"] },
    { level: 2, domain: "SCI", name: "___ SIGNAL", words: ["TRAFFIC", "SMOKE", "MIXED", "BUSY"] },
    { level: 3, domain: "WORDPLAY", name: "___ BOARD", words: ["SILK", "KEY", "SURF", "CARD"] }
  ]},
  { id: 9, groups: [
    { level: 0, domain: "TRAVEL", name: "IN AN AUTO", words: ["METER", "MIRROR", "HORN", "GOD PHOTO"] },
    { level: 1, domain: "VERB", name: "THINGS THAT CAN BE BROKEN", words: ["PROMISE", "RECORD", "SILENCE", "ICE"] },
    { level: 2, domain: "WORDPLAY", name: "___ WALL", words: ["FIRE", "SEA", "GREAT", "STONE"] },
    { level: 3, domain: "CITY", name: "THINGS WITH A METER", words: ["AUTO", "ELECTRICITY", "PARKING", "POETRY"] }
  ]},
  { id: 10, groups: [
    { level: 0, domain: "CITY", name: "THINGS THAT NEED RECHARGING", words: ["PHONE", "METRO CARD", "FASTAG", "PATIENCE"] },
    { level: 1, domain: "LIFE", name: "WHAT A HOUSE WARMING HAS", words: ["MILK", "RANGOLI", "POOJA", "LUNCH"] },
    { level: 2, domain: "NATURE", name: "___ POINT", words: ["VIEW", "BOILING", "POWER", "SUNRISE"] },
    { level: 3, domain: "WORDPLAY", name: "___ CARD", words: ["RATION", "POST", "WILD", "REPORT"] }
  ]},
  { id: 11, groups: [
    { level: 0, domain: "WORK", name: "FIRST DAY AT WORK", words: ["ID CARD", "INDUCTION", "LAPTOP", "BUDDY"] },
    { level: 1, domain: "ARTS", name: "PARALLEL CINEMA DIRECTORS", words: ["KASARAVALLI", "KARNAD", "NAGABHARANA", "PUTTANNA"] },
    { level: 2, domain: "WORDPLAY", name: "___ WAVE", words: ["MICRO", "HEAT", "SHOCK", "TIDAL"] },
    { level: 3, domain: "LANG", name: "THE FOUR PARTS OF A MEAL", words: ["HULI", "SAARU", "PALYA", "TOVVE"] }
  ]},
  { id: 12, groups: [
    { level: 0, domain: "ARTS", name: "SINGLE SCREENS", words: ["SANTOSH", "URVASHI", "NARTAKI", "TRIVENI"] },
    { level: 1, domain: "FOOD", name: "FESTIVAL SPECIALS", words: ["HOLIGE", "PAYASA", "CHAKKULI", "UNDE"] },
    { level: 2, domain: "WORDPLAY", name: "___ NECK", words: ["BOTTLE", "ROLL", "RED", "BREAK"] },
    { level: 3, domain: "LANG", name: "KANNADA COLOURS", words: ["KEMPU", "HASIRU", "BILI", "KARI"] }
  ]},
  { id: 13, groups: [
    { level: 0, domain: "FOOD", name: "ON A THALI", words: ["RICE", "DAL", "SABZI", "PAPAD"] },
    { level: 1, domain: "CIVIC", name: "SPRINT LIFE", words: ["DEPLOY", "STANDUP", "BACKLOG", "ESCALATION"] },
    { level: 2, domain: "VERB", name: "THINGS THAT CAN BE CLEARED", words: ["THROAT", "AIR", "DOUBT", "TABLE"] },
    { level: 3, domain: "WORDPLAY", name: "___ HAND", words: ["SECOND", "UPPER", "FARM", "SHORT"] }
  ]},
  { id: 14, groups: [
    { level: 0, domain: "TRANSPORT", name: "AT MAJESTIC", words: ["PLATFORM", "CONDUCTOR", "PASS", "DEPOT"] },
    { level: 1, domain: "HIST", name: "FOUNDING LORE", words: ["BENDA KALU", "PETE", "KOTE", "1537"] },
    { level: 2, domain: "VERB", name: "THINGS THAT CAN BE PASSED", words: ["TIME", "EXAM", "BUCK", "JUDGEMENT"] },
    { level: 3, domain: "WORDPLAY", name: "___ CLASS", words: ["FIRST", "MIDDLE", "MASTER", "WORKING"] }
  ]},
  { id: 15, groups: [
    { level: 0, domain: "HOME", name: "IN AN INDIAN BATHROOM", words: ["BUCKET", "MUG", "GEYSER", "SOAP"] },
    { level: 1, domain: "SHOP", name: "TEA STALL ORDERS", words: ["CUTTING", "GINGER", "BLACK", "ICED"] },
    { level: 2, domain: "MEDIA", name: "WHAT GETS FORWARDED", words: ["MEME", "GOOD MORNING", "RUMOUR", "RESUME"] },
    { level: 3, domain: "WORDPLAY", name: "___ IN", words: ["CHECK", "PLUG", "DRIVE", "WALK"] }
  ]},
  { id: 16, groups: [
    { level: 0, domain: "CIVIC", name: "PG LIFE", words: ["WARDEN", "MESS", "COT", "CURFEW"] },
    { level: 1, domain: "WORK", name: "NOTICE PERIOD", words: ["HANDOVER", "EXIT", "KT", "FAREWELL"] },
    { level: 2, domain: "LANG", name: "KANNADA FOR WATER BODIES", words: ["KERE", "HALLA", "BAVI", "KALYANI"] },
    { level: 3, domain: "WORDPLAY", name: "___ DOWN", words: ["MELT", "SUN", "COUNT", "LET"] }
  ]},
  { id: 17, groups: [
    { level: 0, domain: "SCHOOL", name: "SCHOOL ASSEMBLY", words: ["ANTHEM", "PLEDGE", "LINE", "NEWS"] },
    { level: 1, domain: "SHOP", name: "WHAT THEY SELL THERE", words: ["SAREES", "JEWELLERY", "HARDWARE", "CRACKERS"] },
    { level: 2, domain: "CIVIC", name: "WHAT GETS DELAYED", words: ["FLIGHT", "SALARY", "MONSOON", "VERDICT"] },
    { level: 3, domain: "LANG", name: "THINGS THAT ARE DOUBLE", words: ["DECKER", "MEANING", "STANDARD", "TROUBLE"] }
  ]},
  { id: 18, groups: [
    { level: 0, domain: "NATURE", name: "KARNATAKA HILL STATIONS", words: ["KEMMANNUGUNDI", "AGUMBE", "KODACHADRI", "MADIKERI"] },
    { level: 1, domain: "LIFE", name: "FIRST WEEK IN A NEW CITY", words: ["BROKER", "SIM CARD", "ADDRESS PROOF", "MAPS"] },
    { level: 2, domain: "TRAVEL", name: "WHAT A ROAD TRIP NEEDS", words: ["MAP", "FUEL", "SNACKS", "PATIENCE"] },
    { level: 3, domain: "WORDPLAY", name: "___ HOUSE", words: ["CORNER", "GLASS", "OPERA", "FULL"] }
  ]},
  { id: 19, groups: [
    { level: 0, domain: "MONEY", name: "WHAT A LANDLORD KEEPS", words: ["DEPOSIT", "KEYS", "AGREEMENT", "METER READING"] },
    { level: 1, domain: "VERB", name: "THINGS THAT CAN BE TAKEN", words: ["BATH", "SEAT", "CHANCE", "OFFENCE"] },
    { level: 2, domain: "WORDPLAY", name: "___ SWITCH", words: ["LIGHT", "MAIN", "KILL", "BAIT"] },
    { level: 3, domain: "SCI", name: "BANKS BORN IN KARNATAKA", words: ["CANARA", "SYNDICATE", "VIJAYA", "CORPORATION"] }
  ]},
  { id: 20, groups: [
    { level: 0, domain: "SHOP", name: "IN A HANDBAG", words: ["KEYS", "WALLET", "SANITIZER", "EARPHONES"] },
    { level: 1, domain: "WORK", name: "THINGS THAT GET ESCALATED", words: ["TICKET", "ISSUE", "MATTER", "VOICE"] },
    { level: 2, domain: "SCHOOL", name: "WHAT A SCHOOL TRIP HAS", words: ["BUS", "HEADCOUNT", "LUNCH", "SOUVENIR"] },
    { level: 3, domain: "WORDPLAY", name: "___ MASTER", words: ["HEAD", "TASK", "POST", "QUIZ"] }
  ]},
  { id: 21, groups: [
    { level: 0, domain: "ARTS", name: "STAGES AND AUDITORIA", words: ["RANGA SHANKARA", "CHOWDIAH", "KALAKSHETRA", "JAGRITI"] },
    { level: 1, domain: "TRAVEL", name: "THINGS THAT GET MISSED", words: ["TRAIN", "CALL", "POINT", "DEADLINE"] },
    { level: 2, domain: "SHOP", name: "WHAT A SALE SIGN SAYS", words: ["FLAT", "UPTO", "CLEARANCE", "FINAL"] },
    { level: 3, domain: "WORDPLAY", name: "___ TABLE", words: ["TIME", "TURN", "ROUND", "VEGE"] }
  ]},
  { id: 22, groups: [
    { level: 0, domain: "WORK", name: "IN THE OFFICE PANTRY", words: ["KETTLE", "BISCUITS", "PAPER CUP", "GOSSIP"] },
    { level: 1, domain: "TRAVEL", name: "LONG DRIVE ESSENTIALS", words: ["PLAYLIST", "SNACKS", "FUEL", "DHABA"] },
    { level: 2, domain: "VERB", name: "THINGS THAT CAN BE CRACKED", words: ["CODE", "JOKE", "EGG", "WHIP"] },
    { level: 3, domain: "SPORT", name: "THINGS THAT HAVE A PITCH", words: ["CRICKET", "SALES", "SOUND", "ROOF"] }
  ]},
  { id: 23, groups: [
    { level: 0, domain: "VERB", name: "THINGS THAT BOIL", words: ["WATER", "MILK", "BLOOD", "KETTLE"] },
    { level: 1, domain: "SHOP", name: "SOUVENIRS TO CARRY BACK", words: ["SANDAL SOAP", "MYSORE SILK", "CHANNAPATNA TOY", "COORG COFFEE"] },
    { level: 2, domain: "FOOD", name: "EATEN WITH THE HANDS", words: ["BIRYANI", "BURGER", "CORN", "BANANA"] },
    { level: 3, domain: "WORDPLAY", name: "___ MAADI", words: ["ADJUST", "WAIT", "CALL", "ORDER"] }
  ]},
  { id: 24, groups: [
    { level: 0, domain: "PEOPLE", name: "WHAT AJJI CALLS YOU", words: ["KANDA", "PUTTA", "MARI", "CHINNA"] },
    { level: 1, domain: "CITY", name: "AT THE RTO", words: ["FORM", "TEST", "LICENCE", "AGENT"] },
    { level: 2, domain: "WORDPLAY", name: "___ NOTE", words: ["FOOT", "BANK", "KEY", "SIDE"] },
    { level: 3, domain: "CIVIC", name: "LEASE FINE PRINT", words: ["LOCK IN", "ESCALATION", "NOTICE", "INDEMNITY"] }
  ]},
  { id: 25, groups: [
    { level: 0, domain: "CIVIC", name: "BBMP CHORES", words: ["GARBAGE", "POTHOLE", "KHATA", "PROPERTY TAX"] },
    { level: 1, domain: "EDU", name: "SPECIALTY CENTRES", words: ["NIMHANS", "JAYADEVA", "KIDWAI", "VICTORIA"] },
    { level: 2, domain: "CITY", name: "WHAT A NEW LAYOUT PROMISES", words: ["PARK", "CLUBHOUSE", "APPROVAL", "GREENERY"] },
    { level: 3, domain: "WORDPLAY", name: "___ FALL", words: ["WATER", "RAIN", "FREE", "NIGHT"] }
  ]},
  { id: 26, groups: [
    { level: 0, domain: "LIFE", name: "WHAT PARENTS ASK ON CALLS", words: ["EATEN?", "SALARY", "MARRIAGE", "WHEN COMING"] },
    { level: 1, domain: "SPORT", name: "CRICKET COMMENTARY CLICHES", words: ["EARLY DAYS", "BUILDING", "CLASSIC", "PRESSURE"] },
    { level: 2, domain: "MEDIA", name: "KANNADA TV CHANNELS", words: ["SUVARNA", "COLORS", "ZEE", "PUBLIC"] },
    { level: 3, domain: "WORDPLAY", name: "___ WATCH", words: ["STOP", "NIGHT", "WRIST", "BIRD"] }
  ]},
  { id: 27, groups: [
    { level: 0, domain: "SCHOOL", name: "IN A PENCIL BOX", words: ["ERASER", "SHARPENER", "SCALE", "COMPASS"] },
    { level: 1, domain: "FOOD", name: "EATEN STANDING UP", words: ["CHAAT", "BHEL", "VADA PAV", "SUGARCANE JUICE"] },
    { level: 2, domain: "WORDPLAY", name: "___ RICKSHAW", words: ["AUTO", "CYCLE", "SHARE", "TUK"] },
    { level: 3, domain: "NATURE", name: "THINGS WITH A MOUTH", words: ["RIVER", "CAVE", "BOTTLE", "VOLCANO"] }
  ]},
  { id: 28, groups: [
    { level: 0, domain: "SCI", name: "ISRO MISSIONS", words: ["CHANDRAYAAN", "MANGALYAAN", "GAGANYAAN", "ADITYA"] },
    { level: 1, domain: "SPORT", name: "THE CHINNASWAMY CHANT", words: ["EE", "SALA", "CUP", "NAMDE"] },
    { level: 2, domain: "PEOPLE", name: "THINGS PEOPLE QUEUE FOR", words: ["DARSHAN", "PETROL", "TICKETS", "VOTING"] },
    { level: 3, domain: "WORDPLAY", name: "___ FIRE", words: ["CAMP", "CROSS", "BON", "MIS"] }
  ]},
  { id: 29, groups: [
    { level: 0, domain: "HOME", name: "IN THE FRIDGE DOOR", words: ["KETCHUP", "PICKLE", "EGGS", "BOTTLE"] },
    { level: 1, domain: "LANG", name: "KANNADA TIME WORDS", words: ["NINNE", "IVATTU", "NALE", "EEGA"] },
    { level: 2, domain: "TRANSPORT", name: "CITY RAILWAY STATION CODES", words: ["SBC", "YPR", "KJM", "BNC"] },
    { level: 3, domain: "WORDPLAY", name: "___ RUN", words: ["HOME", "DRY", "TRIAL", "SCHOOL"] }
  ]},
  { id: 30, groups: [
    { level: 0, domain: "ARTS", name: "KANNADA BLOCKBUSTERS", words: ["KGF", "KANTARA", "777 CHARLIE", "TAGARU"] },
    { level: 1, domain: "WORDPLAY", name: "___ TICKET", words: ["BUS", "SEASON", "PARKING", "GOLDEN"] },
    { level: 2, domain: "CITY", name: "GOVERNMENT LANDMARKS", words: ["VIDHANA SOUDHA", "VIKASA SOUDHA", "RAJ BHAVAN", "HIGH COURT"] },
    { level: 3, domain: "FOOD", name: "BIRYANI STYLES", words: ["DONNE", "AMBUR", "THALASSERY", "HYDERABADI"] }
  ]},
  { id: 31, groups: [
    { level: 0, domain: "LANG", name: "QUESTION WORDS", words: ["YARU", "YENU", "ELLI", "YAAKE"] },
    { level: 1, domain: "VERB", name: "THINGS THAT CAN BE CAUGHT", words: ["COLD", "TRAIN", "FIRE", "EYE"] },
    { level: 2, domain: "SHOP", name: "WHAT THE TAILOR SAYS", words: ["FITTING", "ALTER", "LOOSE", "MEASURE"] },
    { level: 3, domain: "WORDPLAY", name: "___ BATH", words: ["KHARA", "KESARI", "CHOW CHOW", "BISI BELE"] }
  ]},
  { id: 32, groups: [
    { level: 0, domain: "SPORT", name: "RCB CAPTAINS", words: ["DRAVID", "KUMBLE", "KOHLI", "DU PLESSIS"] },
    { level: 1, domain: "NATURE", name: "THINGS THAT NEED WATERING", words: ["PLANT", "LAWN", "IDEA", "GARDEN"] },
    { level: 2, domain: "HIST", name: "WODEYAR LEGACIES", words: ["KRS", "BRINDAVAN", "SILK", "SANDAL"] },
    { level: 3, domain: "WORDPLAY", name: "___ CIRCLE", words: ["TRAFFIC", "VICIOUS", "ARCTIC", "INNER"] }
  ]},
  { id: 33, groups: [
    { level: 0, domain: "HOME", name: "IN A WALLET", words: ["CASH", "CARD", "PHOTO", "RECEIPT"] },
    { level: 1, domain: "VERB", name: "THINGS THAT CAN BE HELD", words: ["BREATH", "GRUDGE", "MEETING", "HANDS"] },
    { level: 2, domain: "WORDPLAY", name: "___ STONE", words: ["MILE", "LIME", "KIDNEY", "CORNER"] },
    { level: 3, domain: "LANG", name: "KANNADA NATURE WORDS", words: ["KERE", "MARA", "HUVU", "NEERU"] }
  ]},
  { id: 34, groups: [
    { level: 0, domain: "VERB", name: "THINGS THAT STICK", words: ["GLUE", "TAPE", "RICE", "NAME"] },
    { level: 1, domain: "MEDIA", name: "WHAT ADS PROMISE", words: ["INSTANT", "FREE", "LIMITED", "GUARANTEED"] },
    { level: 2, domain: "SCI", name: "AIRCRAFT BUILT BY HAL", words: ["TEJAS", "DHRUV", "MARUT", "KIRAN"] },
    { level: 3, domain: "WORDPLAY", name: "___ WORK", words: ["HOME", "NET", "FIRE", "PAPER"] }
  ]},
  { id: 35, groups: [
    { level: 0, domain: "NATURE", name: "ONE-NIGHT TREKS", words: ["SKANDAGIRI", "SAVANDURGA", "ANTARGANGE", "MAKALIDURGA"] },
    { level: 1, domain: "CIVIC", name: "AT A KANNADA WEDDING", words: ["MUHURTA", "DHARE", "ARISHINA", "BAGINA"] },
    { level: 2, domain: "VERB", name: "THINGS THAT CAN BE HIT", words: ["ROAD", "NERVE", "SNOOZE", "CENTURY"] },
    { level: 3, domain: "WORDPLAY", name: "TOWNS INSIDE FOOD NAMES", words: ["DHARWAD", "NANJANGUD", "BYADAGI", "MADDUR"] }
  ]},
  { id: 36, groups: [
    { level: 0, domain: "TRANSPORT", name: "RAILWAY TICKET CLASSES", words: ["SLEEPER", "GENERAL", "TATKAL", "AC"] },
    { level: 1, domain: "CIVIC", name: "WHAT THE MONSOON RUINS", words: ["LEAK", "MOULD", "POTHOLE", "DELAY"] },
    { level: 2, domain: "MONEY", name: "THINGS THAT CAN BE FROZEN", words: ["ACCOUNT", "PEAS", "SALARY", "MOMENT"] },
    { level: 3, domain: "WORDPLAY", name: "___ UP", words: ["MAKE", "CATCH", "START", "BREAK"] }
  ]},
  { id: 37, groups: [
    { level: 0, domain: "LANG", name: "KANNADA WEATHER WORDS", words: ["MALE", "BISILU", "CHALI", "GALI"] },
    { level: 1, domain: "VERB", name: "THINGS THAT CAN BE RAISED", words: ["HAND", "EYEBROW", "CHILD", "ALARM"] },
    { level: 2, domain: "FOOD", name: "MILITARY HOTEL ORDERS", words: ["RAGI MUDDE", "PEPPER CHICKEN", "NATI KOLI", "KAAL SOUP"] },
    { level: 3, domain: "WORDPLAY", name: "FULL ___", words: ["MOON", "STOP", "HOUSE", "TIGHT"] }
  ]},
  { id: 38, groups: [
    { level: 0, domain: "FOOD", name: "CAFETERIA STAPLES", words: ["SAMBAR RICE", "CURD RICE", "FRIED RICE", "GOBI MANCHURIAN"] },
    { level: 1, domain: "LIFE", name: "WHAT AN OLD ALBUM HAS", words: ["SCHOOL TRIP", "WEDDING", "BLACK AND WHITE", "STUDIO"] },
    { level: 2, domain: "WORDPLAY", name: "___ GROUND", words: ["PLAY", "BACK", "UNDER", "FAIR"] },
    { level: 3, domain: "LANG", name: "KANNADA FOR 'FESTIVAL'", words: ["HABBA", "JATRE", "PARISHE", "UTSAVA"] }
  ]},
  { id: 39, groups: [
    { level: 0, domain: "SCI", name: "APPS BUILT HERE", words: ["DUNZO", "YULU", "BOUNCE", "RAPIDO"] },
    { level: 1, domain: "VERB", name: "THINGS THAT CAN BE KEPT", words: ["SECRET", "TIME", "HOUSE", "QUIET"] },
    { level: 2, domain: "WORDPLAY", name: "___ MARKET", words: ["RUSSELL", "BLACK", "FLEA", "STOCK"] },
    { level: 3, domain: "FOOD", name: "___ CITY", words: ["GARDEN", "INNER", "CAPACITY", "ELECTRONIC"] }
  ]},
  { id: 40, groups: [
    { level: 0, domain: "LIFE", name: "AJJI'S REMEDIES", words: ["TURMERIC MILK", "AJWAIN", "HOT OIL", "BALM"] },
    { level: 1, domain: "MONEY", name: "WHAT GETS DEDUCTED", words: ["TAX", "PF", "TDS", "LATE FEE"] },
    { level: 2, domain: "FOOD", name: "THINGS THAT ARE FERMENTED", words: ["BATTER", "CURD", "BEER", "IDEA"] },
    { level: 3, domain: "WORDPLAY", name: "___ DOSE", words: ["NEER", "SET", "BENNE", "KHALI"] }
  ]},
  { id: 41, groups: [
    { level: 0, domain: "FOOD", name: "RICE DISHES", words: ["PULIYOGARE", "CHITRANNA", "MOSARANNA", "VANGIBHATH"] },
    { level: 1, domain: "HOME", name: "WHAT GETS SUN-DRIED", words: ["PAPAD", "CLOTHES", "CHILLI", "MATTRESS"] },
    { level: 2, domain: "VERB", name: "THINGS THAT CAN BE BLOWN", words: ["WHISTLE", "FUSE", "BUDGET", "COVER"] },
    { level: 3, domain: "WORDPLAY", name: "___ OUT", words: ["BLACK", "HANG", "TAKE", "WORK"] }
  ]},
  { id: 42, groups: [
    { level: 0, domain: "HIST", name: "STATE SYMBOLS", words: ["SANDALWOOD", "LOTUS", "ELEPHANT", "ROLLER"] },
    { level: 1, domain: "FOOD", name: "TEATIME BUYS", words: ["PUFF", "SAMOSA", "CUTLET", "ROLL"] },
    { level: 2, domain: "WORK", name: "THINGS THAT GET FLAGGED", words: ["EMAIL", "RISK", "POST", "TAXI"] },
    { level: 3, domain: "WORDPLAY", name: "___ OFF", words: ["TAKE", "KICK", "RIP", "LAY"] }
  ]},
  { id: 43, groups: [
    { level: 0, domain: "SPORT", name: "IPL TEAMS", words: ["RCB", "CSK", "MI", "KKR"] },
    { level: 1, domain: "TRAVEL", name: "WHAT A PETROL PUMP HAS", words: ["NOZZLE", "AIR", "ZERO", "RECEIPT"] },
    { level: 2, domain: "FOOD", name: "THINGS THAT ARE ROLLED", words: ["CHAPATI", "DICE", "CIGARETTE", "EYES"] },
    { level: 3, domain: "WORDPLAY", name: "___ FOOT", words: ["BARE", "UNDER", "BIG", "TENDER"] }
  ]},
  { id: 44, groups: [
    { level: 0, domain: "NIGHT", name: "PUB CRAWL STOPS", words: ["TOIT", "SOCIAL", "PECOS", "HARD ROCK"] },
    { level: 1, domain: "SHOP", name: "BARGAINING WORDS", words: ["FINAL", "DISCOUNT", "BULK", "WALK AWAY"] },
    { level: 2, domain: "TRAVEL", name: "THINGS WITH A WAITING LIST", words: ["TRAIN", "SCHOOL", "TRANSPLANT", "CLUB"] },
    { level: 3, domain: "WORDPLAY", name: "___ ROOM", words: ["WAITING", "LIVING", "DARK", "LEG"] }
  ]},
  { id: 45, groups: [
    { level: 0, domain: "CIVIC", name: "WATER SOURCES", words: ["CAUVERY", "BOREWELL", "TANKER", "RAINWATER"] },
    { level: 1, domain: "SHOP", name: "WHAT A MALL HAS", words: ["FOOD COURT", "ESCALATOR", "PARKING", "SALE"] },
    { level: 2, domain: "WORK", name: "THINGS THAT GET PARKED", words: ["CAR", "IDEA", "ISSUE", "FUNDS"] },
    { level: 3, domain: "WORDPLAY", name: "___ TIME", words: ["OVER", "PASS", "LUNCH", "PRIME"] }
  ]},
  { id: 46, groups: [
    { level: 0, domain: "TRAVEL", name: "IN THE DEPARTURE HALL", words: ["BOARDING PASS", "SECURITY", "GATE", "DELAY"] },
    { level: 1, domain: "WORDPLAY", name: "___ STAND", words: ["BUS", "AUTO", "HAND", "GRAND"] },
    { level: 2, domain: "TRANSPORT", name: "TRAINS OUT OF BENGALURU", words: ["SHATABDI", "VANDE BHARAT", "UDYAN", "TIPPU"] },
    { level: 3, domain: "CIVIC", name: "VC SPEAK", words: ["RUNWAY", "BURN", "MOAT", "CAP TABLE"] }
  ]},
  { id: 47, groups: [
    { level: 0, domain: "VERB", name: "THINGS THAT LEAK", words: ["TAP", "ROOF", "BOAT", "SECRET"] },
    { level: 1, domain: "TRAVEL", name: "AT A TOLL", words: ["FASTAG", "QUEUE", "RECEIPT", "BOOM BARRIER"] },
    { level: 2, domain: "ARTS", name: "FESTIVALS THAT SELL TICKETS", words: ["BLF", "ECHOES OF EARTH", "COMIC CON", "ART BENGALURU"] },
    { level: 3, domain: "WORDPLAY", name: "___ EYE", words: ["BULL", "PRIVATE", "RED", "SHUT"] }
  ]},
  { id: 48, groups: [
    { level: 0, domain: "ARTS", name: "MALGUDI DAYS", words: ["AGUMBE", "SHANKAR NAG", "RK NARAYAN", "SWAMI"] },
    { level: 1, domain: "PEOPLE", name: "THINGS THAT RUN OUT", words: ["PATIENCE", "BATTERY", "MILK", "TIME"] },
    { level: 2, domain: "FOOD", name: "FANCY BAKERIES", words: ["GLEN'S", "LAVONNE", "SMOOR", "ALBERT"] },
    { level: 3, domain: "WORDPLAY", name: "___ POST", words: ["LAMP", "OUT", "BLOG", "GOAL"] }
  ]},
  { id: 49, groups: [
    { level: 0, domain: "WORK", name: "ON A VIDEO CALL", words: ["MUTE", "AGENDA", "SCREEN SHARE", "RECAP"] },
    { level: 1, domain: "ARTS", name: "GALLERIES", words: ["NGMA", "VENKATAPPA", "SUMUKHA", "RANGOLI"] },
    { level: 2, domain: "LIFE", name: "THINGS THAT ARE ARRANGED", words: ["MARRIAGE", "FLOWERS", "MEETING", "FURNITURE"] },
    { level: 3, domain: "WORDPLAY", name: "___ CUT", words: ["SHORT", "HAIR", "POWER", "PAPER"] }
  ]},
  { id: 50, groups: [
    { level: 0, domain: "SHOP", name: "AT THE TAILOR", words: ["FITTING", "ALTER", "LOOSE", "TAPE"] },
    { level: 1, domain: "MEDIA", name: "REALITY SHOW STAPLES", words: ["JUDGE", "BACKSTORY", "ELIMINATION", "VOTE"] },
    { level: 2, domain: "CIVIC", name: "PROPERTY PAPERWORK", words: ["KHATA", "EC", "OC", "SALE DEED"] },
    { level: 3, domain: "WORDPLAY", name: "___ ROAD", words: ["RING", "SILK", "HIGH", "ABBEY"] }
  ]},
  { id: 51, groups: [
    { level: 0, domain: "PEOPLE", name: "OFFICE SMALL TALK", words: ["WEATHER", "TRAFFIC", "WEEKEND", "CRICKET"] },
    { level: 1, domain: "TRANSPORT", name: "AUTO NEGOTIATION", words: ["METER", "ONE AND HALF", "NO CHANGE", "RETURN"] },
    { level: 2, domain: "HOME", name: "THINGS KEPT FOR GUESTS", words: ["CROCKERY", "SOAP", "BEDSHEET", "SILENCE"] },
    { level: 3, domain: "WORDPLAY", name: "___ POWER", words: ["HORSE", "MAN", "SOLAR", "WILL"] }
  ]},
  { id: 52, groups: [
    { level: 0, domain: "HOME", name: "ON THE TERRACE", words: ["WATER TANK", "CLOTHESLINE", "ANTENNA", "PICKLE JAR"] },
    { level: 1, domain: "TRANSPORT", name: "AUTO REFUSAL REASONS", words: ["NO CHANGE", "TOO FAR", "SHIFT CHANGE", "GAS ILLA"] },
    { level: 2, domain: "ARTS", name: "GIRISH KARNAD PLAYS", words: ["TUGHLAQ", "HAYAVADANA", "NAGAMANDALA", "YAYATI"] },
    { level: 3, domain: "WORDPLAY", name: "___ LIGHT", words: ["TRAFFIC", "DAY", "HIGH", "SPOT"] }
  ]},
  { id: 53, groups: [
    { level: 0, domain: "HOME", name: "WHAT THE WATCHMAN HAS", words: ["REGISTER", "TORCH", "WHISTLE", "CHAIR"] },
    { level: 1, domain: "LANG", name: "SLANG FOR 'FRIEND'", words: ["MACHA", "MAGA", "ANNA", "BRO"] },
    { level: 2, domain: "FOOD", name: "THINGS WITH LAYERS", words: ["PARATHA", "ONION", "CAKE", "SECURITY"] },
    { level: 3, domain: "WORDPLAY", name: "THE BANGALORE ___", words: ["TORPEDO", "BLUE", "ROSE ONION", "DAYS"] }
  ]},
  { id: 54, groups: [
    { level: 0, domain: "MONEY", name: "THINGS THAT COME MONTHLY", words: ["RENT", "SALARY", "BILL", "EMI"] },
    { level: 1, domain: "HIST", name: "STREET FOOD ANYWHERE", words: ["PANI PURI", "VADA PAV", "MOMO", "CHAAT"] },
    { level: 2, domain: "HOME", name: "WHAT A POWER CUT REVEALS", words: ["INVERTER", "CANDLE", "SILENCE", "STARS"] },
    { level: 3, domain: "WORDPLAY", name: "___ MONEY", words: ["POCKET", "BLOOD", "HUSH", "SMART"] }
  ]},
  { id: 55, groups: [
    { level: 0, domain: "TRANSPORT", name: "BIKE TAXI ERA", words: ["RAPIDO", "BOUNCE", "YULU", "VOGO"] },
    { level: 1, domain: "CITY", name: "CITY FESTIVALS", words: ["KARAGA", "RAJYOTSAVA", "FLOWER SHOW", "GANESHA"] },
    { level: 2, domain: "WORK", name: "WHAT A DEADLINE DOES", words: ["LOOMS", "SLIPS", "MOVES", "PASSES"] },
    { level: 3, domain: "WORDPLAY", name: "___ URU", words: ["BENGAL", "MANGAL", "MYS", "TUMAK"] }
  ]},
  { id: 56, groups: [
    { level: 0, domain: "FOOD", name: "WHAT A KIRANA SELLS", words: ["RICE", "SOAP", "MATCHBOX", "CHIPS"] },
    { level: 1, domain: "ARTS", name: "RK NARAYAN NOVELS", words: ["SWAMI AND FRIENDS", "THE GUIDE", "THE ENGLISH TEACHER", "THE VENDOR OF SWEETS"] },
    { level: 2, domain: "TRANSPORT", name: "THINGS THAT RUN", words: ["NOSE", "TAP", "TRAIN", "RIVER"] },
    { level: 3, domain: "WORDPLAY", name: "___ PAPER", words: ["NEWS", "WALL", "SAND", "QUESTION"] }
  ]},
  { id: 57, groups: [
    { level: 0, domain: "VERB", name: "THINGS THAT SPIN", words: ["TOP", "WHEEL", "HEAD", "FAN"] },
    { level: 1, domain: "FOOD", name: "ANGLO-INDIAN CHRISTMAS", words: ["PLUM CAKE", "KULKUL", "ROSE COOKIE", "MARZIPAN"] },
    { level: 2, domain: "ARTS", name: "___ FILTER", words: ["COFFEE", "AIR", "WATER", "SPAM"] },
    { level: 3, domain: "WORDPLAY", name: "___ SCHOOL", words: ["HIGH", "OLD", "SUNDAY", "LAW"] }
  ]},
  { id: 58, groups: [
    { level: 0, domain: "CITY", name: "AT A TEMPLE", words: ["BELL", "PRASAD", "QUEUE", "SHOES OUTSIDE"] },
    { level: 1, domain: "SCHOOL", name: "WHAT A REPORT CARD HAS", words: ["MARKS", "RANK", "REMARKS", "SIGNATURE"] },
    { level: 2, domain: "FOOD", name: "SWEET COUNTER", words: ["MYSORE PAK", "CHIROTI", "OBBATTU", "KAJJAYA"] },
    { level: 3, domain: "WORDPLAY", name: "___ BUN", words: ["CONGRESS", "MASALA", "KHARA", "BUTTER"] }
  ]},
  { id: 59, groups: [
    { level: 0, domain: "NATURE", name: "TIGER RESERVES", words: ["BANDIPUR", "NAGARAHOLE", "BHADRA", "BILIGIRIRANGA"] },
    { level: 1, domain: "ARTS", name: "DIRECTORS OF THE NEW WAVE", words: ["PRASHANTH NEEL", "PAWAN KUMAR", "HEMANTH RAO", "RAKSHIT SHETTY"] },
    { level: 2, domain: "CITY", name: "THINGS THAT GET ENCROACHED", words: ["FOOTPATH", "LAKE", "MARGIN", "TIME"] },
    { level: 3, domain: "TRAVEL", name: "THINGS WITH WINGS", words: ["PLANE", "BUILDING", "CHICKEN", "CRICKET TEAM"] }
  ]},
  { id: 60, groups: [
    { level: 0, domain: "MEDIA", name: "ON A REMOTE", words: ["MUTE", "VOLUME", "CHANNEL", "POWER"] },
    { level: 1, domain: "NATURE", name: "SIGNS OF RAIN COMING", words: ["SMELL", "BREEZE", "DARK SKY", "ANTS"] },
    { level: 2, domain: "WORDPLAY", name: "___ PLATE", words: ["NUMBER", "HOT", "HOME", "NAME"] },
    { level: 3, domain: "LANG", name: "SENTENCE ENDERS", words: ["ALVA", "ANTHE", "KANRI", "ASHTE"] }
  ]},
  { id: 61, groups: [
    { level: 0, domain: "HIST", name: "DASARA SIGHTS", words: ["JAMBOO SAVARI", "TORCHLIGHT", "HOWDAH", "CHAMUNDI"] },
    { level: 1, domain: "FOOD", name: "WHAT GOES COLD", words: ["COFFEE", "DINNER", "FEET", "WAR"] },
    { level: 2, domain: "LANG", name: "KANNADA KITCHEN STAPLES", words: ["UPPU", "MENASU", "ENNE", "SASIVE"] },
    { level: 3, domain: "CIVIC", name: "THINGS THAT CAN BE CHARGED", words: ["PHONE", "BULL", "CUSTOMER", "CRIME"] }
  ]},
  { id: 62, groups: [
    { level: 0, domain: "WORK", name: "WHAT THE DELIVERY GUY SAYS", words: ["OTP", "DOWNSTAIRS", "GATE", "CALL"] },
    { level: 1, domain: "NATURE", name: "A BENGALURU WINTER", words: ["MIST", "SWEATER", "DEW", "SHORT DAYS"] },
    { level: 2, domain: "WORDPLAY", name: "___ SIDE", words: ["ROAD", "SEA", "OUT", "COUNTRY"] },
    { level: 3, domain: "ARTS", name: "FOLK PERFORMANCES", words: ["DOLLU", "VEERAGASE", "KAMSALE", "YAKSHAGANA"] }
  ]},
  { id: 63, groups: [
    { level: 0, domain: "NATURE", name: "WAYS RAIN ARRIVES", words: ["DRIZZLE", "SHOWER", "POUR", "SPIT"] },
    { level: 1, domain: "PLACE", name: "CITY NICKNAMES", words: ["GARDEN CITY", "PINK CITY", "WINDY CITY", "MOTOR CITY"] },
    { level: 2, domain: "MEDIA", name: "THINGS THAT ARE STREAMED", words: ["FILM", "MUSIC", "MATCH", "CONSCIOUSNESS"] },
    { level: 3, domain: "WORDPLAY", name: "___ LINE", words: ["PURPLE", "PUNCH", "FINISH", "CLOTHES"] }
  ]},
  { id: 64, groups: [
    { level: 0, domain: "LIFE", name: "BREAKFAST SOMEWHERE IN INDIA", words: ["IDLI", "POHA", "PARATHA", "UPMA"] },
    { level: 1, domain: "WORDPLAY", name: "___ SEAT", words: ["WINDOW", "HOT", "BACK", "DRIVER"] },
    { level: 2, domain: "NATURE", name: "THINGS WITH RINGS", words: ["TREE", "SATURN", "BATHTUB", "PHONE"] },
    { level: 3, domain: "LANG", name: "ONE-WORD KANNADA ORDERS", words: ["BA", "HOGU", "TINNU", "NODU"] }
  ]},
  { id: 65, groups: [
    { level: 0, domain: "LIFE", name: "IN A SUITCASE HOME", words: ["CLOTHES", "MEDICINES", "PICKLE", "CHARGER"] },
    { level: 1, domain: "SCHOOL", name: "SPORTS DAY", words: ["MARCH PAST", "RELAY", "HOUSE", "MEDAL"] },
    { level: 2, domain: "WORDPLAY", name: "___ WINDOW", words: ["SHOP", "BAY", "TIME", "REAR"] },
    { level: 3, domain: "FOOD", name: "THINGS THAT COME IN A LEAF", words: ["BIRYANI", "PAAN", "IDLI", "MONEY"] }
  ]},
  { id: 66, groups: [
    { level: 0, domain: "CITY", name: "IN A GOVERNMENT OFFICE", words: ["FILE", "STAMP", "QUEUE", "FORM"] },
    { level: 1, domain: "WORDPLAY", name: "___ DOOR", words: ["NEXT", "TRAP", "BACK", "OUT"] },
    { level: 2, domain: "LIFE", name: "WHAT A CHAI TAPRI SELLS", words: ["CIGARETTE", "BISCUIT", "CHAI", "GOSSIP"] },
    { level: 3, domain: "NATURE", name: "BENGALURU'S VALLEYS", words: ["VRISHABHAVATHI", "KORAMANGALA", "CHALLAGHATTA", "HEBBAL"] }
  ]},
  { id: 67, groups: [
    { level: 0, domain: "VERB", name: "THINGS THAT CRACK", words: ["EGG", "GLASS", "JOKE", "VOICE"] },
    { level: 1, domain: "TRANSPORT", name: "AUTO RIDE REALITIES", words: ["METER", "CHANGE", "SHARING", "SURGE"] },
    { level: 2, domain: "LIFE", name: "WHAT A RUMOUR DOES", words: ["SPREADS", "GROWS", "DIES", "STICKS"] },
    { level: 3, domain: "WORDPLAY", name: "___ MARK", words: ["BOOK", "LAND", "QUESTION", "TRADE"] }
  ]},
  { id: 68, groups: [
    { level: 0, domain: "CITY", name: "STREET SOUNDS", words: ["HORN", "HAWKER", "DOG", "DRILL"] },
    { level: 1, domain: "FOOD", name: "COASTAL BREAKFAST", words: ["NEER DOSE", "GOLI BAJE", "KORI ROTTI", "PUNDI"] },
    { level: 2, domain: "VERB", name: "THINGS THAT CAN BE CUT", words: ["CORNERS", "CLASS", "DEAL", "LOSSES"] },
    { level: 3, domain: "WORDPLAY", name: "___ TANK", words: ["SANKEY", "THINK", "WATER", "FISH"] }
  ]},
  { id: 69, groups: [
    { level: 0, domain: "NATURE", name: "THINGS THAT FADE", words: ["COLOUR", "MEMORY", "JEANS", "LIGHT"] },
    { level: 1, domain: "CIVIC", name: "BROKER SPEAK", words: ["PRIME LOCATION", "WALKING DISTANCE", "NEGOTIABLE", "BACHELORS OK"] },
    { level: 2, domain: "PLACE", name: "___ TRAFFIC", words: ["AIR", "FOOT", "DRUG", "HEAVY"] },
    { level: 3, domain: "WORDPLAY", name: "___ VANI", words: ["PRAJA", "UDAYA", "SANJE", "AKASHA"] }
  ]},
  { id: 70, groups: [
    { level: 0, domain: "VERB", name: "THINGS THAT RING", words: ["BELL", "PHONE", "EARS", "ALARM"] },
    { level: 1, domain: "SCI", name: "LAUNCH VEHICLES AND SATELLITES", words: ["PSLV", "GSLV", "ARYABHATA", "INSAT"] },
    { level: 2, domain: "TRANSPORT", name: "PARKING BATTLES", words: ["NO PARKING", "TOWING", "BASEMENT", "VALET"] },
    { level: 3, domain: "WORDPLAY", name: "___ CHARGE", words: ["SUR", "DIS", "RE", "OVER"] }
  ]},
  { id: 71, groups: [
    { level: 0, domain: "EDU", name: "BIG HOSPITALS", words: ["MANIPAL", "NARAYANA", "ST JOHN'S", "SAKRA"] },
    { level: 1, domain: "TRANSPORT", name: "SCOOTER SEASON", words: ["HELMET", "RAINCOAT", "PETROL", "CHALLAN"] },
    { level: 2, domain: "VERB", name: "THINGS THAT CAN BE STRUCK", words: ["DEAL", "MATCH", "GOLD", "POSE"] },
    { level: 3, domain: "WORDPLAY", name: "___ SHOT", words: ["SNAP", "MUG", "LONG", "GUN"] }
  ]},
  { id: 72, groups: [
    { level: 0, domain: "LIFE", name: "GAMES FROM THE GULLY", words: ["LAGORI", "GOLI", "KUNTE BILLE", "CHINNI DANDU"] },
    { level: 1, domain: "SHOP", name: "WHAT A SHOPKEEPER SAYS", words: ["NO CHANGE", "LAST PIECE", "FIXED RATE", "COMING SOON"] },
    { level: 2, domain: "SPORT", name: "THINGS THAT NEED A REVIEW", words: ["DECISION", "FILM", "PERFORMANCE", "MENU"] },
    { level: 3, domain: "WORDPLAY", name: "___ JAM", words: ["TRAFFIC", "LOG", "FRUIT", "SESSION"] }
  ]},
  { id: 73, groups: [
    { level: 0, domain: "TRAVEL", name: "MONSOON GEAR", words: ["UMBRELLA", "RAINCOAT", "GUMBOOTS", "PLASTIC COVER"] },
    { level: 1, domain: "LIFE", name: "WHAT NEIGHBOURS BORROW", words: ["SUGAR", "LADDER", "IRON", "OPINION"] },
    { level: 2, domain: "FOOD", name: "NORTH KARNATAKA PLATE", words: ["ENNEGAI", "ZUNKA", "GIRMIT", "JOLADA ROTTI"] },
    { level: 3, domain: "WORDPLAY", name: "___ BREAK", words: ["COFFEE", "TEA", "HEART", "DAY"] }
  ]},
  { id: 74, groups: [
    { level: 0, domain: "SHOP", name: "IN EVERY INDIAN KITCHEN", words: ["PRESSURE COOKER", "STEEL DABBA", "MIXIE", "BUCKET"] },
    { level: 1, domain: "WORDPLAY", name: "___ CUP", words: ["TEA", "WORLD", "EGG", "BUTTER"] },
    { level: 2, domain: "VERB", name: "THINGS THAT CAN BE CROSSED", words: ["ROAD", "FINGERS", "LINE", "BRIDGE"] },
    { level: 3, domain: "LANG", name: "KANNADA FOR 'STREET'", words: ["BEEDI", "VEEDHI", "MARGA", "RASTE"] }
  ]},
  { id: 75, groups: [
    { level: 0, domain: "FOOD", name: "SUMMER IN INDIA", words: ["MANGO", "COOLER", "WATERMELON", "LASSI"] },
    { level: 1, domain: "MONEY", name: "AT AN ATM", words: ["PIN", "BALANCE", "RECEIPT", "QUEUE"] },
    { level: 2, domain: "VERB", name: "THINGS THAT CAN BE PULLED", words: ["STRINGS", "MUSCLE", "WEIGHT", "PLUG"] },
    { level: 3, domain: "WORDPLAY", name: "HOSA ___ (NEW)", words: ["KOTE", "PETE", "DURGA", "HALLI"] }
  ]},
  { id: 76, groups: [
    { level: 0, domain: "HOME", name: "IN A BISCUIT TIN AT HOME", words: ["THREAD", "BUTTONS", "COINS", "MEDICINE"] },
    { level: 1, domain: "WORDPLAY", name: "___ FAN", words: ["CEILING", "TABLE", "EXHAUST", "DIE-HARD"] },
    { level: 2, domain: "FOOD", name: "THE UDUPI HOTEL LEGACY", words: ["DASAPRAKASH", "WOODLANDS", "KAMAT", "SUKH SAGAR"] },
    { level: 3, domain: "CIVIC", name: "OFFICE SPEAK", words: ["SYNERGY", "BANDWIDTH", "CIRCLE BACK", "ONSITE"] }
  ]},
  { id: 77, groups: [
    { level: 0, domain: "LIFE", name: "AT A WEDDING", words: ["BUFFET", "PHOTOS", "GOSSIP", "RETURN GIFT"] },
    { level: 1, domain: "MEDIA", name: "ENGLISH DAILIES", words: ["DECCAN HERALD", "TIMES", "HINDU", "MIRROR"] },
    { level: 2, domain: "PLACE", name: "WEEKEND ESCAPES", words: ["COORG", "CHIKMAGALURU", "SAKLESHPUR", "WAYANAD"] },
    { level: 3, domain: "WORDPLAY", name: "___ WATER", words: ["MINERAL", "SALT", "FIRE", "BACK"] }
  ]},
  { id: 78, groups: [
    { level: 0, domain: "EDU", name: "COLLEGES", words: ["CHRIST", "MOUNT CARMEL", "ST JOSEPH'S", "JYOTI NIVAS"] },
    { level: 1, domain: "MONEY", name: "THINGS THAT COMPOUND", words: ["INTEREST", "PROBLEM", "DELAY", "STRESS"] },
    { level: 2, domain: "FOOD", name: "ACCOMPANIMENTS", words: ["KOSAMBARI", "GOJJU", "TAMBLI", "RAITA"] },
    { level: 3, domain: "WORDPLAY", name: "___ CHECK", words: ["SPELL", "REALITY", "HEALTH", "RAIN"] }
  ]},
  { id: 79, groups: [
    { level: 0, domain: "VERB", name: "THINGS THAT MELT", words: ["ICE", "BUTTER", "HEART", "CANDLE"] },
    { level: 1, domain: "NIGHT", name: "LIVE MUSIC VENUES", words: ["FANDOM", "BFLAT", "HUMMING TREE", "COUNTERCULTURE"] },
    { level: 2, domain: "SHOP", name: "THINGS THAT COME WITH A WARRANTY", words: ["FRIDGE", "PHONE", "TYRE", "PROMISE"] },
    { level: 3, domain: "WORDPLAY", name: "___ PLAY", words: ["FAIR", "HORSE", "DIS", "FORE"] }
  ]},
  { id: 80, groups: [
    { level: 0, domain: "NATURE", name: "THINGS THAT BUZZ", words: ["BEE", "PHONE", "DOORBELL", "CROWD"] },
    { level: 1, domain: "FOOD", name: "THINGS SERVED ON A BANANA LEAF", words: ["RICE", "PAYASA", "SALT", "PICKLE"] },
    { level: 2, domain: "SHOP", name: "THINGS SOLD IN STRIPS", words: ["TABLETS", "SHAMPOO", "GUTKA", "STICKERS"] },
    { level: 3, domain: "WORDPLAY", name: "SWALPA ___", words: ["ADJUST", "JASTI", "KAMMI", "NIDHANA"] }
  ]},
  { id: 81, groups: [
    { level: 0, domain: "CIVIC", name: "WHAT A LANDLORD ASKS FOR", words: ["DEPOSIT", "ADVANCE", "REFERENCE", "ID"] },
    { level: 1, domain: "SPORT", name: "WHAT A CAPTAIN DOES", words: ["TOSS", "FIELD", "DECLARE", "REVIEW"] },
    { level: 2, domain: "LANG", name: "SLANG FOR 'AWESOME'", words: ["SAKKATH", "BHARI", "SOLID", "MAST"] },
    { level: 3, domain: "WORDPLAY", name: "___ COURT", words: ["HIGH", "TENNIS", "FOOD", "SUPREME"] }
  ]},
  { id: 82, groups: [
    { level: 0, domain: "FOOD", name: "COFFEE COUNTER TALK", words: ["DECOCTION", "DAVARA", "TUMBLER", "BY TWO"] },
    { level: 1, domain: "MEDIA", name: "WHAT A GROUP CHAT HAS", words: ["ADMIN", "MUTE", "FORWARD", "EXIT"] },
    { level: 2, domain: "EDU", name: "THINGS THAT GET BOOKED", words: ["CAB", "TICKET", "TABLE", "CULPRIT"] },
    { level: 3, domain: "WORDPLAY", name: "___ BAG", words: ["HAND", "TEA", "SLEEPING", "AIR"] }
  ]},
  { id: 83, groups: [
    { level: 0, domain: "SPORT", name: "GALLI CRICKET RULES", words: ["TENNIS BALL", "ONE PITCH CATCH", "WINDOW", "LAST BALL"] },
    { level: 1, domain: "VERB", name: "THINGS THAT CAN BE LOST", words: ["TEMPER", "TOUCH", "PLOT", "TRACK"] },
    { level: 2, domain: "HIST", name: "ON A WEDDING BUFFET", words: ["PAYASA", "PULAO", "GULAB JAMUN", "PAAN"] },
    { level: 3, domain: "WORDPLAY", name: "___ BAND", words: ["RUBBER", "ARM", "BROAD", "WAIST"] }
  ]},
  { id: 84, groups: [
    { level: 0, domain: "MONEY", name: "IN A KIRANA BILL", words: ["TOTAL", "GST", "ROUNDING", "CREDIT"] },
    { level: 1, domain: "WORDPLAY", name: "___ STEP", words: ["FOOT", "DOOR", "SIDE", "TWO"] },
    { level: 2, domain: "NIGHT", name: "BANDS FROM THIS CITY", words: ["PARVAAZ", "KRYPTOS", "SWARATHMA", "TAAQ"] },
    { level: 3, domain: "LANG", name: "KANNADA NUMBERS FIVE TO EIGHT", words: ["AIDU", "ARU", "ELU", "ENTU"] }
  ]},
  { id: 85, groups: [
    { level: 0, domain: "VERB", name: "THINGS THAT DRIP", words: ["TAP", "CANDLE", "SWEAT", "SAUCE"] },
    { level: 1, domain: "WORDPLAY", name: "___ PASS", words: ["BUS", "BOARDING", "MOUNTAIN", "FREE"] },
    { level: 2, domain: "MEDIA", name: "THINGS THAT GO VIRAL", words: ["VIDEO", "RUMOUR", "INFECTION", "SONG"] },
    { level: 3, domain: "MONEY", name: "THINGS THAT CAN BE BOUNCED", words: ["CHEQUE", "BALL", "EMAIL", "IDEA"] }
  ]},
  { id: 86, groups: [
    { level: 0, domain: "MEDIA", name: "FM STATIONS", words: ["RADIO CITY", "BIG FM", "FEVER", "INDIGO"] },
    { level: 1, domain: "CITY", name: "WHAT A NEW FLAT NEEDS", words: ["CURTAINS", "GEYSER", "WIFI", "CYLINDER"] },
    { level: 2, domain: "VERB", name: "THINGS THAT CAN BE FILLED", words: ["FORM", "TANK", "GAP", "TOOTH"] },
    { level: 3, domain: "WORDPLAY", name: "___ PARK", words: ["CUBBON", "BALL", "THEME", "TRAILER"] }
  ]},
  { id: 87, groups: [
    { level: 0, domain: "FOOD", name: "KEBAB STREET", words: ["SEEKH", "SHAWARMA", "ROLL", "TANGDI"] },
    { level: 1, domain: "SCHOOL", name: "SCHOOL BUS", words: ["SEAT", "ROUTE", "AUNTY", "MORNING"] },
    { level: 2, domain: "CITY", name: "TEMPLES IN TOWN", words: ["RAGIGUDDA", "SOMESHWARA", "KOTE VENKATARAMANA", "GAVIPURAM"] },
    { level: 3, domain: "LANG", name: "DIRECTIONS FOR THE AUTO", words: ["MUNDE", "HINDE", "EDA", "BALA"] }
  ]},
  { id: 88, groups: [
    { level: 0, domain: "FOOD", name: "GI-TAGGED PRODUCE", words: ["BYADAGI", "NANJANAGUD", "MATTU GULLA", "DEVANAHALLI"] },
    { level: 1, domain: "NATURE", name: "RIVERS OF KARNATAKA", words: ["TUNGABHADRA", "KRISHNA", "MALAPRABHA", "GHATAPRABHA"] },
    { level: 2, domain: "TRANSPORT", name: "AT THE AIRPORT", words: ["BLR", "KIA", "T1", "T2"] },
    { level: 3, domain: "WORDPLAY", name: "___ HEART", words: ["SWEET", "BROKEN", "LION", "HALF"] }
  ]},
  { id: 89, groups: [
    { level: 0, domain: "LIFE", name: "SUNDAY THINGS", words: ["LAUNDRY", "NAP", "OIL BATH", "MOVIE"] },
    { level: 1, domain: "FOOD", name: "IN THE LUNCH DABBA", words: ["RICE", "CURD", "PICKLE", "SWEET"] },
    { level: 2, domain: "VERB", name: "THINGS THAT CAN BE THROWN", words: ["PARTY", "PUNCH", "SHADE", "TANTRUM"] },
    { level: 3, domain: "WORDPLAY", name: "___ OFFICE", words: ["POST", "BOX", "HEAD", "HOME"] }
  ]},
  { id: 90, groups: [
    { level: 0, domain: "FOOD", name: "DOSA VARIETIES", words: ["MASALA", "PAPER", "BUTTER", "ONION"] },
    { level: 1, domain: "HOME", name: "THINGS REUSED AT HOME", words: ["GHEE TIN", "JAM JAR", "SHOEBOX", "NEWSPAPER"] },
    { level: 2, domain: "WORDPLAY", name: "___ FACE", words: ["POKER", "BOLD", "TWO", "BABY"] },
    { level: 3, domain: "ARTS", name: "KANNADA NEW WAVE CLASSICS", words: ["SAMSKARA", "GHATASHRADDHA", "CHOMANA DUDI", "VAMSHA VRIKSHA"] }
  ]},
  { id: 91, groups: [
    { level: 0, domain: "FOOD", name: "IYENGAR BAKERY SHELF", words: ["HONEY CAKE", "DILKUSH", "RUSK", "BENNE BISCUIT"] },
    { level: 1, domain: "SCI", name: "BRANDS BORN IN BENGALURU", words: ["HIMALAYA", "TITAN", "NANDINI", "COFFEE DAY"] },
    { level: 2, domain: "MONEY", name: "THINGS THAT GET SPLIT", words: ["BILL", "HAIR", "VOTE", "SECOND"] },
    { level: 3, domain: "WORDPLAY", name: "___ PRINT", words: ["FOOT", "BLUE", "NEWS", "FINGER"] }
  ]},
  { id: 92, groups: [
    { level: 0, domain: "SPORT", name: "AT THE GYM", words: ["REPS", "SETS", "TRAINER", "LEG DAY"] },
    { level: 1, domain: "FOOD", name: "MANGALUREAN MENU", words: ["BUNS", "GHEE ROAST", "KANE FRY", "PATHRODE"] },
    { level: 2, domain: "NATURE", name: "RESERVOIRS", words: ["KRS", "LINGANAMAKKI", "HARANGI", "KABINI"] },
    { level: 3, domain: "LANG", name: "___ GATE", words: ["FLOOD", "TOLL", "TAIL", "WATER"] }
  ]},
  { id: 93, groups: [
    { level: 0, domain: "SPORT", name: "CRICKET BASICS", words: ["BAT", "STUMPS", "PITCH", "CREASE"] },
    { level: 1, domain: "NATURE", name: "THINGS ON A BALCONY", words: ["TULSI", "CLOTHES", "CHAIR", "PIGEON"] },
    { level: 2, domain: "CIVIC", name: "STORM DRAIN NEWS", words: ["RAJAKALUVE", "CULVERT", "SILT", "OVERFLOW"] },
    { level: 3, domain: "WORDPLAY", name: "___ GAME", words: ["BOARD", "END", "FAIR", "BALL"] }
  ]},
  { id: 94, groups: [
    { level: 0, domain: "VERB", name: "THINGS THAT FLY", words: ["KITE", "CROW", "TIME", "FLAG"] },
    { level: 1, domain: "SPORT", name: "CRICKET COMMENTARY WORDS", words: ["MAIDEN", "DUCK", "COVER", "SLIP"] },
    { level: 2, domain: "EDU", name: "UNIVERSITIES OF KARNATAKA", words: ["KUVEMPU", "MANGALORE", "GULBARGA", "TUMKUR"] },
    { level: 3, domain: "SHOP", name: "WORDS ON OLD SHOP BOARDS", words: ["STORES", "SILKS", "EMPORIUM", "BHANDAR"] }
  ]},
  { id: 95, groups: [
    { level: 0, domain: "FOOD", name: "ON A DOSA", words: ["BUTTER", "PODI", "CHUTNEY", "OIL"] },
    { level: 1, domain: "NATURE", name: "CITY BIRDS", words: ["MYNA", "BULBUL", "KITE", "PARAKEET"] },
    { level: 2, domain: "LIFE", name: "THINGS THAT RUN IN FAMILIES", words: ["NOSE", "TEMPER", "BUSINESS", "DIABETES"] },
    { level: 3, domain: "WORDPLAY", name: "___ STATION", words: ["BUS", "RAILWAY", "POLICE", "PETROL"] }
  ]},
  { id: 96, groups: [
    { level: 0, domain: "TRAVEL", name: "WHAT THE CONDUCTOR SAYS", words: ["TICKET", "CHANGE", "MOVE BACK", "NEXT STOP"] },
    { level: 1, domain: "VERB", name: "THINGS THAT CAN BE MADE", words: ["BED", "PEACE", "SENSE", "WAY"] },
    { level: 2, domain: "PLACE", name: "THE OLD SPELLINGS", words: ["MYSORE", "HUBLI", "MANGALORE", "BELGAUM"] },
    { level: 3, domain: "WORDPLAY", name: "___ WAY", words: ["HIGH", "RAIL", "SUB", "DRIVE"] }
  ]},
  { id: 97, groups: [
    { level: 0, domain: "TRANSPORT", name: "METRO ESSENTIALS", words: ["TOKEN", "SMART CARD", "SECURITY", "ESCALATOR"] },
    { level: 1, domain: "LANG", name: "KANNADA FAMILY WORDS", words: ["AKKA", "ANNA", "THAMMA", "THANGI"] },
    { level: 2, domain: "SPORT", name: "STARS BEYOND CRICKET", words: ["PADUKONE", "BOPANNA", "PONNAPPA", "CHHETRI"] },
    { level: 3, domain: "WORDPLAY", name: "SILICON ___", words: ["VALLEY", "CHIP", "CARBIDE", "PLATEAU"] }
  ]},
  { id: 98, groups: [
    { level: 0, domain: "LIFE", name: "FESTIVE SHOPPING", words: ["CLOTHES", "SWEETS", "LIGHTS", "CRACKERS"] },
    { level: 1, domain: "WORK", name: "APPRAISAL SEASON", words: ["RATING", "BELL CURVE", "HIKE", "FEEDBACK"] },
    { level: 2, domain: "VERB", name: "THINGS THAT CAN BE SETTLED", words: ["SCORE", "DUST", "BILL", "ARGUMENT"] },
    { level: 3, domain: "WORDPLAY", name: "___ SHOP", words: ["TEA", "WORK", "SWEET", "BARBER"] }
  ]},
  { id: 99, groups: [
    { level: 0, domain: "HIST", name: "HISTORIC SITES", words: ["TIPU'S PALACE", "BANGALORE FORT", "ATTARA KACHERI", "BANGALORE PALACE"] },
    { level: 1, domain: "WORDPLAY", name: "___ FLOOR", words: ["GROUND", "DANCE", "SEA", "FIRST"] },
    { level: 2, domain: "VERB", name: "THINGS THAT CAN BE SPILLED", words: ["BEANS", "MILK", "TEA", "INK"] },
    { level: 3, domain: "MEDIA", name: "THINGS THAT HAVE A PLOT", words: ["FILM", "GARDEN", "GRAPH", "MURDER"] }
  ]},
  { id: 100, groups: [
    { level: 0, domain: "SCHOOL", name: "WHAT THE TEACHER SAYS", words: ["SILENCE", "STAND UP", "HOMEWORK", "LAST BENCH"] },
    { level: 1, domain: "HOME", name: "WHAT THE ELECTRICIAN SAYS", words: ["SHORT", "FUSE", "EARTHING", "LOAD"] },
    { level: 2, domain: "SPORT", name: "WHAT A MATCH CAN BE", words: ["DRAWN", "FIXED", "FRIENDLY", "PERFECT"] },
    { level: 3, domain: "WORDPLAY", name: "___ BOX", words: ["LUNCH", "POST", "IDIOT", "GEAR"] }
  ]},
  { id: 101, groups: [
    { level: 0, domain: "CIVIC", name: "HYPERLOCAL COMPLAINTS", words: ["DUST", "POTHOLE", "GARBAGE", "DIGGING"] },
    { level: 1, domain: "HIST", name: "MYSURU LANDMARKS", words: ["AMBA VILAS", "JAGANMOHAN", "LALITHA MAHAL", "KARANJI"] },
    { level: 2, domain: "VERB", name: "THINGS THAT CAN BE DRAWN", words: ["BLANK", "CONCLUSION", "CURTAIN", "BATH"] },
    { level: 3, domain: "WORDPLAY", name: "___ STAR", words: ["POWER", "ROCKING", "REAL", "CHALLENGING"] }
  ]},
  { id: 102, groups: [
    { level: 0, domain: "HOME", name: "ON THE DINING TABLE", words: ["WATER JUG", "NEWSPAPER", "MEDICINE", "KEYS"] },
    { level: 1, domain: "SHOP", name: "THINGS SOLD BY WEIGHT", words: ["VEGETABLES", "GOLD", "SCRAP", "SWEETS"] },
    { level: 2, domain: "TRAVEL", name: "THINGS THAT GET CANCELLED", words: ["TRAIN", "PLAN", "CHEQUE", "SUBSCRIPTION"] },
    { level: 3, domain: "WORDPLAY", name: "___ RATE", words: ["HEART", "EXCHANGE", "INTEREST", "FIRST"] }
  ]},
  { id: 103, groups: [
    { level: 0, domain: "MEDIA", name: "WHAT GETS SKIPPED", words: ["ADS", "INTRO", "TERMS", "CREDITS"] },
    { level: 1, domain: "FOOD", name: "RAMZAN NIGHTS", words: ["HALEEM", "PATHER GOSHT", "PHIRNI", "DATES"] },
    { level: 2, domain: "NATURE", name: "BIRDS AT THE LAKE", words: ["PELICAN", "CORMORANT", "HERON", "IBIS"] },
    { level: 3, domain: "WORDPLAY", name: "___ BALL", words: ["FOOT", "EYE", "ODD", "SNOW"] }
  ]},
  { id: 104, groups: [
    { level: 0, domain: "TRAVEL", name: "ON A TRAIN JOURNEY", words: ["SIDE UPPER", "PANTRY", "TT", "CHAIN"] },
    { level: 1, domain: "PLACE", name: "TEMPLE TOWNS", words: ["HAMPI", "AIHOLE", "BELUR", "TALAKAD"] },
    { level: 2, domain: "VERB", name: "THINGS THAT CAN BE SERVED", words: ["TIME", "DINNER", "NOTICE", "ACE"] },
    { level: 3, domain: "WORDPLAY", name: "___ HOLE", words: ["POT", "MAN", "KEY", "LOOP"] }
  ]},
  { id: 105, groups: [
    { level: 0, domain: "SCHOOL", name: "STOLEN FROM A HOSTEL", words: ["BUCKET", "SLIPPERS", "CHARGER", "TOWEL"] },
    { level: 1, domain: "HOME", name: "WHAT EVERY HOUSE HAS", words: ["CEILING FAN", "ALMIRAH", "DOORMAT", "INVERTER"] },
    { level: 2, domain: "NATURE", name: "THINGS THAT SHED", words: ["SNAKE", "TREE", "DOG", "TEARS"] },
    { level: 3, domain: "ARTS", name: "ONE-WORD KANNADA FILMS", words: ["OM", "LUCIA", "UPENDRA", "JACKIE"] }
  ]},
  { id: 106, groups: [
    { level: 0, domain: "SCHOOL", name: "CHILDHOOD PUNISHMENTS", words: ["LINES", "STAND OUTSIDE", "PINCH", "NO TV"] },
    { level: 1, domain: "VERB", name: "THINGS THAT CAN BE DROPPED", words: ["HINT", "CALL", "CATCH", "BEAT"] },
    { level: 2, domain: "CITY", name: "THINGS A CITY OUTGROWS", words: ["ROADS", "PIPES", "MAPS", "NAMES"] },
    { level: 3, domain: "WORDPLAY", name: "MYSORE ___", words: ["PAK", "PETA", "BONDA", "MALLIGE"] }
  ]},
  { id: 107, groups: [
    { level: 0, domain: "CITY", name: "THINGS THAT GET DUG UP", words: ["ROAD", "CABLE", "PIPE", "PAST"] },
    { level: 1, domain: "SCHOOL", name: "EXAM HALL", words: ["HALL TICKET", "INVIGILATOR", "ANSWER SHEET", "BELL"] },
    { level: 2, domain: "MONEY", name: "THINGS THAT MATURE", words: ["DEPOSIT", "CHEESE", "POLICY", "MIND"] },
    { level: 3, domain: "LIFE", name: "THINGS THAT ARE ARRANGED IN ROWS", words: ["SEATS", "TEETH", "CROPS", "SUMS"] }
  ]},
  { id: 108, groups: [
    { level: 0, domain: "LANG", name: "CROWD AND CHAOS", words: ["GALATA", "GADIBIDI", "JAAM", "RUSH"] },
    { level: 1, domain: "WORK", name: "WHAT HR SENDS", words: ["POLICY", "SURVEY", "REMINDER", "HOLIDAY LIST"] },
    { level: 2, domain: "SCHOOL", name: "THINGS COPIED IN SCHOOL", words: ["HOMEWORK", "ANSWERS", "HANDWRITING", "SLANG"] },
    { level: 3, domain: "WORDPLAY", name: "___ HEAD", words: ["OVER", "EGG", "FORE", "MAST"] }
  ]}
];
