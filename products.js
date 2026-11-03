// 1. 日常精選市集商品清單
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
  }
];
