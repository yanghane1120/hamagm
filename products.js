// products.js - HAMAGM 獨立資料庫

// ==========================================
// 1. 日常精選市集商品清單 (marketProducts)
// ==========================================
const marketProducts = [
  {
    id: "f75",
    category: "tech",
    tag: "Gaming Gear",
    title: "AULA F75 Pro 75% Wireless Mechanical Keyboard",
    searchTerms: "aula f75 pro wireless mechanical gaming keyboard creamy switch thocky sound",
    amazonUrl: "https://link.amazon/B0ewgi8NJ",
    videoId: "weBkKhh-wEA",
    videoTitle: "Even my cat plays better with this mechanical keyboard! ⚡🔥"
  },
  {
    id: "hair-mask",
    category: "care",
    tag: "Hair Treatment",
    title: "L'Oreal Paris EverPure Glossing Lamination Hair Mask (5.1 Fl Oz)",
    searchTerms: "loreal paris sulfate free glossing lamination hair mask 5 minute rinse off treatment",
    amazonUrl: "https://link.amazon/B0eojpQ1t",
    videoId: "904BvVq7QlM",
    videoTitle: "The Secret Lamination Glow"
  },
  {
    id: "petkit",
    category: "cat",
    tag: "Smart Feeding",
    title: "PETKIT 3L WiFi Automatic Pet Feeder with Triple Fresh-Lock",
    searchTerms: "petkit automatic cat feeder 2.4g wifi app control pet food dispenser triple fresh lock",
    amazonUrl: "https://link.amazon/B0fC3FIFz",
    videoId: "mMMl6ke_Jes",
    videoTitle: "My Cat Opened A Free Buffet For Strays..."
  },
  {
    id: "sony-ch720n",
    category: "tech",
    tag: "Active Noise Cancelling",
    title: "Sony WH-CH720N Wireless Noise Cancelling Over-Ear Headphones",
    searchTerms: "sony wh ch720n wireless noise cancelling over ear headphones black comfortable",
    amazonUrl: "https://link.amazon/B0fOtnGwN",
    videoId: "twG6BkAoNN0",
    videoTitle: "Focus Mode: Noise Cancelling On"
  },
  {
    id: "echo-spot",
    category: "tech",
    tag: "Smart Home",
    title: "Amazon Echo Spot Smart Alarm Clock with Alexa+ (Black)",
    searchTerms: "amazon echo spot smart alarm clock nightstands offices kitchens designed for alexa",
    amazonUrl: "https://link.amazon/B0dCFtTYG",
    videoId: "XTRpvGpgI2Y",
    videoTitle: "Waking Up The Smart Way"
  },
  {
    id: "moving-bags",
    category: "home",
    tag: "Heavy Duty Storage",
    title: "SummitFlare 200LB Heavy Duty Moving Storage Bags (6 Pack / XL)",
    searchTerms: "light gray moving bags 200lb heavy duty 6 pack storage bags extra large summitflare",
    amazonUrl: "https://link.amazon/B03lm3MEk",
    videoId: "WcmlxQ1OhfQ",
    videoTitle: "Heavy Duty Moving & Storage Solution"
  },
  {
    id: "heater",
    category: "home",
    tag: "Fast Heating",
    title: "WINHL 1500W Portable PTC Ceramic Space Heater (70° Oscillation / Remote)",
    searchTerms: "space heater winhl portable electric heaters indoor use 70 oscillation thermostat",
    amazonUrl: "https://link.amazon/B0ivEANQG",
    videoId: "I4AHXe0Hq3k",
    videoTitle: "Cozy Warmth In Cold Winter"
  },
  {
    id: "flosser",
    category: "care",
    tag: "Oral Hygiene",
    title: "COSLUS C20 Cordless Portable indicators Water Dental Flosser (300ML / Pink)",
    searchTerms: "coslus ada accepted c20 water dental flosser pick professional set pink oral irrigator",
    amazonUrl: "https://link.amazon/B03kheoWk",
    videoId: "4llyR06ur0g",
    videoTitle: "Clean & Fresh Daily Dental Routine"
  },
  {
    id: "stickers",
    category: "holiday",
    tag: "Holiday Fun",
    title: "300 PCS Halloween Pumpkin Waterproof Vinyl Stickers",
    searchTerms: "300 pcs halloween pumpkin stickers waterproof vinyl water bottle laptop stickers",
    amazonUrl: "https://link.amazon/B09494Vtp",
    videoId: "Dgd7WXq1Nxg",
    videoTitle: "The Most Savage Revenge in Cat History..."
  },
  {
    id: "hersheys",
    category: "snacks",
    tag: "Sweet Treats",
    title: "HERSHEY'S SPECIAL DARK Mildly Sweet Chocolate Bars (36 Count)",
    searchTerms: "hersheys special dark mildly sweet chocolate candy bars 36 count pack bulk sweetside",
    amazonUrl: "https://link.amazon/B0i8ZJnSE",
    videoId: "8dCRthWkjJQ",
    videoTitle: "Sweet Delight & Dark Chocolate Moments"
  },
  {
    id: "candy-mix",
    category: "snacks",
    tag: "Party Treats",
    title: "Classic Bulk Assorted Party Candy Mix (5 lbs Mega Bag)",
    searchTerms: "bulk assorted party candy mix 5lb sweetside halloween",
    amazonUrl: "https://link.amazon/B0jlfLH63",
    videoId: "hLE1yC90Egk",
    videoTitle: "Ultimate Sweet Treats Party Mix"
  },
  {
    id: "fountain",
    category: "cat",
    tag: "Cat Hydration",
    title: "Ultra-Silent Stainless Steel Cat Fountain (Desert Oasis)",
    searchTerms: "stainless steel cat water fountain pet oasis ultra silent",
    amazonUrl: "https://link.amazon/B0bpXw7EQ",
    videoId: "O2khHlRJL5s",
    videoTitle: "Cat Mom Found THIS in the Middle of..."
  },
  {
    id: "frameo-15",
    category: "tech",
    tag: "Smart Display",
    title: "BIGASUO 64GB 15.6\" Frameo WiFi Digital Picture Frame (FHD Touch Screen)",
    searchTerms: "bigasuo 64gb 15.6 inch frameo digital picture frame wifi large electronic photo frames fhd ips touch screen",
    amazonUrl: "https://link.amazon/B06ugWlej",
    videoId: "Q1bo5mLh84k",
    videoTitle: "Memories on Display: Frameo WiFi Digital Frame"
  },
  {
    id: "ninja-blender",
    category: "home",
    tag: "Kitchen & Dining",
    title: "Ninja Professional Plus Blender with Auto-iQ (1400W / 72oz / BN701)",
    searchTerms: "ninja professional plus blender bn701 auto iq 1400w 72oz pitcher smoothie frozen drink ice crusher",
    amazonUrl: "https://link.amazon/B0dJjEt8Z",
    videoId: "DML7hc5Uo5o",
    videoTitle: "Crush Ice In Seconds: Ninja Auto-iQ Power"
  },
  {
    id: "gritin-book-light",
    category: "home",
    tag: "Reading Light",
    title: "Gritin 9 LED Rechargeable Clip On Book Light (80 Hrs Runtime)",
    searchTerms: "gritin 9 led rechargeable book light reading in bed eye caring 3 color stepless dimming lightweight clip on",
    amazonUrl: "https://link.amazon/B00aA9YjN",
    videoId: "CjYn7HgQrbg",
    videoTitle: "The Ultimate Cozy Bedtime Reading Light"
  },
  {
    id: "petbusy-cat-toy",
    category: "cat",
    tag: "Cat Toys",
    title: "PetBusy Soft Chew Kicker Cat Toy with Catnip & Silvervine",
    searchTerms: "petbusy cat toys natural catnip silvervine soft chew kicker crinkle bell fish sound indoor cats kittens",
    amazonUrl: "https://link.amazon/B06Lhb3RV",
    videoId: "N3OIgIOwC_E",
    videoTitle: "Interactive Catnip Kicker Fish Toy"
  },
  {
    id: "aussie-miracle-hair",
    category: "care",
    tag: "Hair Treatment",
    title: "Aussie Total Miracle Shampoo, Conditioner & 3-Min Deep Treatment Bundle",
    searchTerms: "aussie total miracle shampoo conditioner 3 minute deep treatment apricot macadamia oil damaged hair bundle",
    amazonUrl: "https://link.amazon/B03LPJYi3",
    videoId: "A3RDqr8fYdQ",
    videoTitle: "Miracle Hair Fix in 3 Minutes"
  },
  {
    id: "bissell-cleanview",
    category: "home",
    tag: "Floor Care",
    title: "Bissell CleanView Swivel Upright Vacuum (Triple Action Brush Roll / 3836)",
    searchTerms: "bissell cleanview swivel upright vacuum triple action brush roll multi cyclonic suction 3836",
    amazonUrl: "https://link.amazon/B02tG5lqh",
    videoId: "oqTMz8-80nM",
    videoTitle: "Effortless Cleaning: Bissell CleanView Swivel Power"
  },
  {
    id: "spacex-starship",
    category: "tech",
    tag: "Space Collectibles",
    title: "1:144 SpaceX Starship Model with Sturdy Bracket (13.43in)",
    searchTerms: "1 144 spacex starship model rocket sturdy bracket durable plastic space enthusiasts gift collection",
    amazonUrl: "https://link.amazon/B0imKdLHn",
    videoId: "QXGeOfBkrDg",
    videoTitle: "SpaceX Starship 1:144 Scale Desktop Model"
  },
  {
    id: "stanley-quencher-30oz",
    category: "home",
    tag: "Drinkware",
    title: "STANLEY Quencher H2.0 FlowState Tumbler with Handle (30 oz / Rose Quartz 2.0)",
    searchTerms: "stanley quencher h2 0 flowstate tumbler handle straw 30 oz cup holder compatible stainless steel rose quartz",
    amazonUrl: "https://link.amazon/B08TWhkGb",
    videoId: "31SNNPtm-Og",
    videoTitle: "Stay Hydrated in Style: Stanley Quencher H2.0 30oz"
  },
  {
    id: "umite-dutch-oven",
    category: "home",
    tag: "Kitchen & Dining",
    title: "Umite Chef 5QT Enameled Cast Iron Dutch Oven with Lid & Potholders (Cream White)",
    searchTerms: "enameled cast iron dutch oven umite chef 5qt heavy duty cookware bread baking braising roasting cream white",
    amazonUrl: "https://link.amazon/B01LL1DOR",
    videoId: "_E46WYDnwgQ",
    videoTitle: "The Ultimate Sourdough & Stew Companion: Umite Chef 5QT"
  },
  {
    id: "stanley-quencher-30oz-ash",
    category: "home",
    tag: "Drinkware",
    title: "STANLEY Quencher H2.0 FlowState Tumbler with Handle (30 oz / Ash)",
    searchTerms: "stanley quencher h2 0 flow state tumbler handle straw 30 oz cup holder compatible stainless steel ash",
    amazonUrl: "https://link.amazon/B05ln23HR",
    videoId: "T6xCDCKXAio",
    videoTitle: "Everyday Hydration: Stanley Quencher H2.0 30oz (Ash)"
  },
  {
    id: "stanley-quencher-40oz-rosequartz",
    category: "home",
    tag: "Drinkware",
    title: "STANLEY Quencher H2.0 FlowState Tumbler with Handle (40 oz / Rose Quartz 2.0)",
    searchTerms: "stanley quencher h2 0 flow state tumbler handle straw 40 oz cup holder compatible stainless steel rose quartz",
    amazonUrl: "https://link.amazon/B04rN2f5B",
    videoId: "sqmnr6m_ZaA",
    videoTitle: "Hydration Upgrade: Stanley Quencher H2.0 40oz (Rose Quartz)"
  },
  {
    id: "stanley-quencher-40oz-rosequartz-alt",
    category: "home",
    tag: "Drinkware",
    title: "STANLEY Quencher H2.0 FlowState Tumbler with Handle (40 oz / Rose Quartz 2.0)",
    searchTerms: "stanley quencher h2 0 flow state tumbler handle straw 40 oz cup holder compatible stainless steel rose quartz",
    amazonUrl: "https://link.amazon/B05WuWGoi",
    videoId: "JiCKSuh7jCE",
    videoTitle: "Ultimate Hydration: Stanley Quencher H2.0 40oz (Rose Quartz 2.0)"
  },
  {
    id: "stanley-quencher-40oz-rosequartz-v3",
    category: "home",
    tag: "Drinkware",
    title: "STANLEY Quencher H2.0 FlowState Tumbler with Handle (40 oz / Rose Quartz 2.0)",
    searchTerms: "stanley quencher h2 0 flow state tumbler handle straw 40 oz cup holder compatible stainless steel rose quartz",
    amazonUrl: "https://link.amazon/B07wXHHx9",
    videoId: "FNDsbmky52U",
    videoTitle: "All-Day Hydration: Stanley Quencher H2.0 40oz (Rose Quartz 2.0)"
  },
  {
    id: "stanley-quencher-40oz-rosequartz-v4",
    category: "home",
    tag: "Drinkware",
    title: "STANLEY Quencher H2.0 FlowState Tumbler with Handle (40 oz / Rose Quartz 2.0)",
    searchTerms: "stanley quencher h2 0 flow state tumbler handle straw 40 oz cup holder compatible stainless steel rose quartz",
    amazonUrl: "https://link.amazon/B00wmIHE9",
    videoId: "VbTL98rMSVY",
    videoTitle: "Stay Cool All Day: Stanley Quencher H2.0 40oz (Rose Quartz 2.0)"
  },
  {
    id: "young-washington",
    category: "entertainment",
    tag: "Historical Drama",
    title: "Young Washington (Directed by Jon Erwin / Starring Kelsey Grammer & Mary-Louise Parker)",
    searchTerms: "young washington movie jon erwin kelsey grammer mary louise parker william franklyn miller historical drama",
    amazonUrl: "https://link.amazon/B0dJGdQkd",
    videoId: "QHKzHzaBlPE",
    videoTitle: "Before He Led A Nation: The Untold Story of Young Washington"
  },
  {
    id: "stanley-quencher-40oz-rosequartz-v5",
    category: "home",
    tag: "Drinkware",
    title: "STANLEY Quencher H2.0 FlowState Tumbler with Handle (40 oz / Rose Quartz 2.0)",
    searchTerms: "stanley quencher h2 0 flow state tumbler handle straw 40 oz cup holder compatible stainless steel rose quartz travel cup bpa free",
    amazonUrl: "https://link.amazon/B02uRVCB4",
    videoId: "q0eutYTG-ng",
    videoTitle: "The Viral Stanley Quencher H2.0 40oz (Rose Quartz 2.0)"
  },
  {
    id: "stanley-quencher-30oz-ash-v2",
    category: "home",
    tag: "Drinkware",
    title: "STANLEY Quencher H2.0 FlowState Tumbler with Handle (30 oz / Ash)",
    searchTerms: "stanley quencher h2 0 flow state tumbler handle straw 30 oz cup holder compatible stainless steel ash travel cup bpa free",
    amazonUrl: "https://link.amazon/B0b5ipRIY",
    videoId: "eeFrYm8x1cU",
    videoTitle: "Aesthetic Daily Hydration: Stanley Quencher H2.0 30oz (Ash)"
  },
  {
    id: "jolisu-reading-glasses-5pack",
    category: "care",
    tag: "Vision Care",
    title: "JOLISU 5-Pack Men's 2.00 Blue Light Blocking Reading Glasses (Lightweight Metal Frame)",
    searchTerms: "jolisu 5 pack reading glasses men 2.00 blue light blocking readers lightweight thin metal frame computer reading",
    amazonUrl: "https://link.amazon/B07y5SqCN",
    videoId: "pUhCGpfgNcw",
    videoTitle: "Work & Read in Comfort: JOLISU Blue Light Blocking Glasses 5-Pack"
  }
];

// ==========================================
// 2. 小比兔官方筆記本清單 (xiaobiNotebooks)
// ==========================================
const xiaobiNotebooks = [
  {
    cover: "book_en.png",
    fallbackCover: "image_439ef6.png",
    tag: "Paperback",
    title: "Little Rabbit's Notes (English Edition 1)",
    amazonUrl: "https://link.amazon/B09m4WMbS"
  },
  {
    cover: "XBR3A.jpg",
    fallbackCover: "book_en.png",
    tag: "Paperback",
    title: "Little Rabbit's Notes: I Held Up the National Flag",
    amazonUrl: "https://link.amazon/B072n2eaF"
  },
  {
    cover: "book_jp.png",
    fallbackCover: "image_439ec1.png",
    tag: "ペーパーバック",
    title: "小比うさぎのダメダメノート (日本語版 1)",
    amazonUrl: "https://link.amazon/B00kvYWNj"
  },
  {
    cover: "XBR3j.jpg",
    fallbackCover: "book_jp.png",
    tag: "ペーパーバック",
    title: "小比うさぎのダメダメノート (日本語版 2)",
    amazonUrl: "https://link.amazon/B02imVg9a"
  },
  {
    cover: "book_fr.jpg",
    fallbackCover: "FRE.jpg",
    tag: "Livre Broché",
    title: "Le carnet inutile du petit lapin (Français)",
    amazonUrl: "https://link.amazon/B0dTmtta4"
  },
  {
    cover: "book_de.jpg",
    fallbackCover: "der.jpg",
    tag: "Taschenbuch",
    title: "Der Notizblock des kleinen Hasen (Deutsch)",
    amazonUrl: "https://link.amazon/B029TO94d"
  }
];

// ==========================================
// 3. 原創小說與哲學書籍清單 (authorBooks)
// ==========================================
const authorBooks = [
  {
    cover: "Smarter.jfif",
    fallbackCover: "Smarter.jpg",
    tag: "Kindle Edition",
    title: "Read Smarter: A Novelist’s Field Guide",
    amazonUrl: "https://link.amazon/B043rKAkO"
  },
  {
    cover: "Abejundio.jfif",
    fallbackCover: "Abejundio.jpg",
    tag: "Kindle Edition",
    title: "The non-existent Spanish philosopher Abejundio",
    amazonUrl: "https://link.amazon/B0eFr2u8i"
  },
  {
    cover: "Liebesleid.jfif",
    fallbackCover: "Liebesleid.jpg",
    tag: "Kindle Edition",
    title: "Liebesleid: A Symphony for the Broken",
    amazonUrl: "https://link.amazon/B0gJg1Q4R"
  },
  {
    cover: "Recipe.jfif",
    fallbackCover: "Recipe.jpg",
    tag: "Kindle Edition",
    title: "The Recipe for a Second Chance: Beef Noodle & Memory",
    amazonUrl: "https://link.amazon/B0hjzbFOV"
  },
  {
    cover: "Kitchen.jfif",
    fallbackCover: "Kitchen.jpg",
    tag: "Kindle Edition",
    title: "Papa’s Kitchen",
    amazonUrl: "https://link.amazon/B00B19Hu5"
  }
];
