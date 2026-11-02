// products.js - HAMAGM 獨立資料庫

// 1. 日常精選市集商品清單 (已新增 15.6吋 數位相框)
const marketProducts = [
  {
    id: "f75",
    category: "tech",
    tag: "Gaming Gear",
    title: "AULA F75 Pro 75% Wireless Mechanical Keyboard",
    searchTerms: "aula f75 pro wireless mechanical gaming keyboard creamy switch thocky sound",
    amazonUrl: "https://link.amazon/B0ewgi8NJ",
    videoId: "UD3FO4SysaE",
    videoTitle: "Even my cat plays better with this keyboard..."
  },
  {
    id: "gloves",
    category: "winter",
    tag: "Winter Gear",
    title: "2 Pairs Women's Touch Screen Thermal Knit Winter Gloves",
    searchTerms: "2 pairs winter gloves for women touch screen elastic thermal knit lining warm gloves",
    amazonUrl: "https://link.amazon/B0bdUBXIo",
    videoId: "6HE65tM37Wc",
    videoTitle: "Cold Hands, Warm Hearts"
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
    title: "COSLUS C20 Cordless Portable Water Dental Flosser (300ML / Pink)",
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
  }
];

// 2. 小比兔官方筆記本清單
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

// 3. 原創小說與哲學書籍清單
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
