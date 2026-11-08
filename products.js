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
    videoTitle: "She was crying over her ruined hair… then her CAT did THIS?! 😱🐱"
  },
  {
    id: "petkit",
    category: "cat",
    tag: "Smart Feeding",
    title: "PETKIT 3L WiFi Automatic Pet Feeder with Triple Fresh-Lock",
    searchTerms: "petkit automatic cat feeder 2.4g wifi app control pet food dispenser triple fresh lock",
    amazonUrl: "https://link.amazon/B0fC3FIFz",
    videoId: "mMMl6ke_Jes",
    videoTitle: "My Cat Opened A Free Buffet For Strays… Until I Did THIS! 😭🐱"
  },
  {
    id: "sony-ch720n",
    category: "tech",
    tag: "Active Noise Cancelling",
    title: "Sony WH-CH720N Wireless Noise Cancelling Over-Ear Headphones",
    searchTerms: "sony wh ch720n wireless noise cancelling over ear headphones black comfortable",
    amazonUrl: "https://link.amazon/B0fOtnGwN",
    videoId: "twG6BkAoNN0",
    videoTitle: "0% FS GIVEN: When Your Cat Trolls the Dogs with Pure Silence 🎧💀"
  },
  {
    id: "echo-spot",
    category: "tech",
    tag: "Smart Home",
    title: "Amazon Echo Spot Smart Alarm Clock with Alexa+ (Black)",
    searchTerms: "amazon echo spot smart alarm clock nightstands offices kitchens designed for alexa",
    amazonUrl: "https://link.amazon/B0dCFtTYG",
    videoId: "XTRpvGpgI2Y",
    videoTitle: "MY CAT BOUGHT 500 ALARM CLOCKS ON AMAZON... ⏰💀"
  },
  {
    id: "moving-bags",
    category: "home",
    tag: "Heavy Duty Storage",
    title: "SummitFlare 200LB Heavy Duty Moving Storage Bags (6 Pack / XL)",
    searchTerms: "light gray moving bags 200lb heavy duty 6 pack storage bags extra large summitflare",
    amazonUrl: "https://link.amazon/B03lm3MEk",
    videoId: "WcmlxQ1OhfQ",
    videoTitle: "HE PACKED HIS BAGS AND WALKED OUT IN THE SNOW... 🧳❄️"
  },
  {
    id: "heater",
    category: "home",
    tag: "Fast Heating",
    title: "WINHL 1500W Portable PTC Ceramic Space Heater (70° Oscillation / Remote)",
    searchTerms: "space heater winhl portable electric heaters indoor use 70 oscillation thermostat",
    amazonUrl: "https://link.amazon/B0ivEANQG",
    videoId: "I4AHXe0Hq3k",
    videoTitle: "Cat Stole the Heater for Shivering Dog… Owner’s Reaction is PRICELESS! 😱❄️"
  },
  {
    id: "flosser",
    category: "care",
    tag: "Oral Hygiene",
    title: "COSLUS C20 Cordless Portable indicators Water Dental Flosser (300ML / Pink)",
    searchTerms: "coslus ada accepted c20 water dental flosser pick professional set pink oral irrigator",
    amazonUrl: "https://link.amazon/B03kheoWk",
    videoId: "4llyR06ur0g",
    videoTitle: "Tiny Cat Saves a GIANT Bear With a Water Flosser?! 😱🐾"
  },
  {
    id: "stickers",
    category: "holiday",
    tag: "Holiday Fun",
    title: "300 PCS Halloween Pumpkin Waterproof Vinyl Stickers",
    searchTerms: "300 pcs halloween pumpkin stickers waterproof vinyl water bottle laptop stickers",
    amazonUrl: "https://link.amazon/B09494Vtp",
    videoId: "Dgd7WXq1Nxg",
    videoTitle: "The Most Savage Revenge in Cat History! (Instant Regret) 🐱⚡"
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
    videoTitle: "From Outcast to the Ultimate Cat Boss in 10 Seconds 😱👑"
  },
  {
    id: "fountain",
    category: "cat",
    tag: "Cat Hydration",
    title: "Ultra-Silent Stainless Steel Cat Fountain (Desert Oasis)",
    searchTerms: "stainless steel cat water fountain pet oasis ultra silent",
    amazonUrl: "https://link.amazon/B0bpXw7EQ",
    videoId: "O2khHlRJL5s",
    videoTitle: "Cat Mom Found THIS in the Middle of Nowhere… 🏜️🥺"
  },
  {
    id: "frameo-15",
    category: "tech",
    tag: "Smart Display",
    title: "BIGASUO 64GB 15.6\" Frameo WiFi Digital Picture Frame (FHD Touch Screen)",
    searchTerms: "bigasuo 64gb 15.6 inch frameo digital picture frame wifi large electronic photo frames fhd ips touch screen",
    amazonUrl: "https://link.amazon/B06ugWlej",
    videoId: "Q1bo5mLh84k",
    videoTitle: "She watched her baby leave forever... then THIS happened 💔🥺"
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
    videoTitle: "My Cat Brought Me THIS In Bed?! 🥺💡"
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
    videoTitle: "Miracle Hair Fix in 3 biological minutes"
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
    videoTitle: "The real reason George Washington chopped down that cherry tree… 🐱🪓"
  },
  {
    id: "stanley-quencher-40oz-rosequartz-v5",
    category: "home",
    tag: "Drinkware",
    title: "STANLEY Quencher H2.0 FlowState Tumbler with Handle (40 oz / Rose Quartz 2.0)",
    searchTerms: "stanley quencher h2 0 flow state tumbler handle straw 40 oz cup holder compatible stainless steel rose quartz travel cup bpa free",
    amazonUrl: "https://link.amazon/B02uRVCB4",
    videoId: "q0eutYTG-ng",
    videoTitle: "An 18th-century surveyor, his pink cup, and a confession about his mom… Guess who? 😳"
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
    category: "apparel",
    tag: "Vision Care",
    title: "JOLISU 5-Pack Men's 2.00 Blue Light Blocking Reading Glasses (Lightweight Metal Frame)",
    searchTerms: "jolisu 5 pack reading glasses men 2.00 blue light blocking readers lightweight thin metal frame computer reading",
    amazonUrl: "https://link.amazon/B07y5SqCN",
    videoId: "pUhCGpfgNcw",
    videoTitle: "Work & Read in Comfort: JOLISU Blue Light Blocking Glasses 5-Pack"
  },
  {
    id: "spacex-embroidered-hat",
    category: "apparel",
    tag: "Space Apparel",
    title: "Embroidered SpaceX Baseball Hat for Men and Women (Black)",
    searchTerms: "spacex hat embroidered baseball cap men women black adjustable space enthusiast gear",
    amazonUrl: "https://link.amazon/B0f7IqMYv",
    videoId: "QXGeOfBkrDg",
    videoTitle: "Wear The Mission: SpaceX Embroidered Baseball Cap (Black)"
  },
  {
    id: "washington-a-life",
    category: "entertainment",
    tag: "Pulitzer Winner",
    title: "Washington: A Life (Pulitzer Prize Winner by Ron Chernow)",
    searchTerms: "washington a life ron chernow pulitzer prize winner biography founding fathers george washington",
    amazonUrl: "https://link.amazon/B08bTS5y0",
    videoId: "mZ6zZq_6xzA",
    videoTitle: "The Definitive Portrait: Washington: A Life (Pulitzer Prize Winner)"
  },
  {
    id: "stanley-quencher-40oz-rosequartz-v6",
    category: "home",
    tag: "Drinkware",
    title: "STANLEY Quencher H2.0 FlowState Tumbler with Handle (40 oz / Rose Quartz 2.0)",
    searchTerms: "stanley quencher h2 0 flow state tumbler handle straw 40 oz cup holder compatible stainless steel rose quartz travel cup bpa free",
    amazonUrl: "https://link.amazon/B04wyssOr",
    videoId: "vzr575_5XJk",
    videoTitle: "Day 100 of the Cat Apocalypse… What did he just find?! 😱"
  },
  {
    id: "stanley-quencher-40oz-rosequartz-v7",
    category: "home",
    tag: "Drinkware",
    title: "STANLEY Quencher H2.0 FlowState Tumbler with Handle (40 oz / Rose Quartz 2.0)",
    searchTerms: "stanley quencher h2 0 flow state tumbler handle straw 40 oz cup holder compatible stainless steel rose quartz travel cup bpa free",
    amazonUrl: "https://link.amazon/B02XKPA4u",
    videoId: "uiEQ4xjpjnk",
    videoTitle: "She ran 26.2 miles, but this tiny supporter stole the entire show… 🥺"
  },
  {
    id: "wilson-nba-drv-basketball",
    category: "home",
    tag: "Basketball",
    title: "WILSON NBA DRV Series Outdoor Basketball",
    searchTerms: "wilson nba drv series outdoor basketball durable grip rubber streetball official size",
    amazonUrl: "https://link.amazon/B032CenH4",
    videoId: "MYobQnvYFo0",
    videoTitle: "Nobody believed this 10-pound ginger cat could dunk at Rucker Park… Watch till the end. 🏀🔥"
  },
  {
    id: "auto-pencil-sharpener",
    category: "home",
    tag: "Stationery",
    title: "Electric Pencil Sharpener for Classroom (Fully Automatic / Black)",
    searchTerms: "electric pencil sharpener classroom fully automatic heavy duty fast auto stop black office school supplies",
    amazonUrl: "https://link.amazon/B04GnTBbY",
    videoId: "Hp3BHst2TnY",
    videoTitle: "His pencil snapped mid-drawing, then his cat did THIS… ✏️⚡"
  },
  {
    id: "womens-wool-scarf-checked",
    category: "apparel",
    tag: "Winter Fashion",
    title: "Women's Wool Checked Scarf (Large Soft Thick Shawl & Wrap with Gift Box)",
    searchTerms: "womens wool scarf winter checked scarves large soft thick warm shawls wraps elegant gift box holiday gift",
    amazonUrl: "https://link.amazon/B0i0newiO",
    videoId: "WEOLqji7MrU",
    videoTitle: "Wait for what he brought her before she stepped into the snow… 😭"
  },
  {
    id: "philips-shaver-2400",
    category: "care",
    tag: "Men's Grooming",
    title: "Philips Norelco 2400 Series Electric Shaver (Wet & Dry / Pop-up Trimmer)",
    searchTerms: "philips norelco 2400 series electric shaver cordless wet dry rechargeable mens grooming pop up trimmer x3001 90",
    amazonUrl: "https://link.amazon/B07SIZZhc",
    videoId: "XqU-1WfCs5k",
    videoTitle: "She stared at him like a stranger… then THIS happened 🥺"
  },
  {
    id: "catstages-tower-of-tracks",
    category: "cat",
    tag: "Cat Toys",
    title: "Catstages Tower of Tracks Interactive Cat Toy (3 Tiers / 6 Spinning Balls)",
    searchTerms: "catstages tower of tracks interactive cat toy 3 tiers 6 spinning balls chase swat hunting instinct indoor cats kittens",
    amazonUrl: "https://link.amazon/B0bD6tyhv",
    videoId: "cLiYgk0qVAY",
    videoTitle: "Stranded on a desert island… but she only cared about THIS?! 😭🏝️"
  },
  {
    id: "lodge-cast-iron-skillet-3pc",
    category: "home",
    tag: "Kitchen & Dining",
    title: "Lodge Pre-Seasoned Cast Iron Skillet 3-Piece Set (8, 10.25 & 12 Inch)",
    searchTerms: "lodge pre seasoned cast iron skillet 3 piece set 8 10.25 12 inch naturally non stick oven stove grill campfire made in usa",
    amazonUrl: "https://link.amazon/B0f6BUOpL",
    videoId: "YANtiwghEaI",
    videoTitle: "My mom’s greatest heirloom wasn’t jewelry. It was THIS."
  },
  {
    id: "xiaobi-useless-notebook",
    category: "home",
    tag: "Novelty Notebook",
    title: "The Little White Rabbit's Useless Notebook: A Sarcastic Gag Journal for Overwhelmed Humans, Students, and Burnout Office Workers (Funny Novelty Notebook)",
    searchTerms: "little white rabbit useless notebook sarcastic gag journal overwhelmed humans students burnout office workers novelty gift",
    amazonUrl: "https://link.amazon/B0j2pgrp5",
    videoId: "JsvfqyxTWsc",
    videoTitle: "What your cat shows Mom right after you leave for college 🐱😭"
  },
  {
    id: "gigabyte-rtx-3050",
    category: "tech",
    tag: "Gaming Gear",
    title: "GIGABYTE GeForce RTX 3050 WINDFORCE OC V2 6G Graphics Card",
    searchTerms: "gigabyte geforce rtx 3050 windforce oc v2 6g graphics card 2x fans 6gb gddr6",
    amazonUrl: "https://link.amazon/B00Kc8CW6",
    videoId: "4fJuUs0t7W8",
    videoTitle: "Bro got inside the RTX 3060 box and violated his brother 💀😭"
  },
  {
    id: "folding-step-stool",
    category: "home",
    tag: "Home Essentials",
    title: "Handy Laundry Folding Step Stool 9 Inch (Non-Slip / Holds 300 lbs / Black)",
    searchTerms: "handy laundry folding step stool 9 inch black non slip lightweight foldable 300 lbs",
    amazonUrl: "https://link.amazon/B0eTvKGxS",
    videoId: "wftdoYAqCAw",
    videoTitle: "She visits this hot dog cart every week, but today the cat noticed something... 🥺💔"
  },
  {
    id: "gigabyte-rtx-5060",
    category: "tech",
    tag: "Gaming Gear",
    title: "GIGABYTE GeForce RTX 5060 WINDFORCE OC 8G Graphics Card (8GB GDDR7 / PCIe 5.0)",
    searchTerms: "gigabyte geforce rtx 5060 windforce oc 8g graphics card gddr7 pcie 5 0 gv n5060wf2oc 8gd",
    amazonUrl: "https://link.amazon/B0bWzvmly",
    videoId: "W5WyUw3gvEk",
    videoTitle: "Is this RTX 5060 box an actual GPU or a cat's throne? 😤📦"
  },
  {
    id: "gigabyte-rtx-5060-v2",
    category: "tech",
    tag: "Gaming Gear",
    title: "GIGABYTE GeForce RTX 5060 WINDFORCE OC 8G Graphics Card (8GB GDDR7 / PCIe 5.0 / GV-N5060WF2OC-8GD)",
    searchTerms: "gigabyte geforce rtx 5060 windforce oc 8g graphics card gddr7 pcie 5.0 gv n5060wf2oc 8gd video card",
    amazonUrl: "https://link.amazon/B04IU9jkq",
    videoId: "wX0SP5zbImE",
    videoTitle: "She definitely needs a new bottle of Hongdian ink now… 💀🐾"
  },
  {
    id: "mini-projector-4k",
    category: "tech",
    tag: "Home Theater",
    title: "Mini Projector 4K Support, Portable Projector Full HD 1080P Support with 270° Rotation & Keystone Correction",
    searchTerms: "mini projector 4k support portable projector full hd 1080p rotation auto keystone smart home theater",
    amazonUrl: "https://link.amazon/B0fyrfXrR",
    videoId: "z_dxmSE81rk",
    videoTitle: "He was lonely for 7 hours… until his human set THIS up 🥺📽️"
  },
  {
    id: "bella-slim-toaster",
    category: "home",
    tag: "Kitchen Appliances",
    title: "bella Fits-Anywhere™ 2-Slice Slim Toaster, Long Slot & Extra Wide, Oatmilk",
    searchTerms: "bella fits anywhere 2 slice slim toaster long slot extra wide oatmilk compact kitchen appliances",
    amazonUrl: "https://link.amazon/B05ZFOntK",
    videoId: "5_5H2_LOs2w",
    videoTitle: "Never trust an orange cat near a toaster... wait for it 😭🐱"
  },
  {
    id: "nike-dri-fit-head-tie",
    category: "apparel",
    tag: "Athletic Gear",
    title: "Nike Dri-Fit Head Tie 2.0 (Black/White)",
    searchTerms: "nike dri fit head tie 2 0 headband black white sweatband running workout training athletic gear",
    amazonUrl: "https://link.amazon/B039uCbX7",
    videoId: "TmgJ27EGj4Y",
    videoTitle: "Never Chase a Cat with Professional Gear on… ⚡️🐱"
  },
  {
    id: "nike-fury-headband",
    category: "apparel",
    tag: "Athletic Gear",
    title: "Nike Fury Headband",
    searchTerms: "nike fury headband athletic sports headband sweatband running training moisture wicking",
    amazonUrl: "https://link.amazon/B02cQCpp1",
    videoId: "K_eEYbnMCko",
    videoTitle: "They said she was too small to make the jump, until she got THIS epic power-up… 🤯👟"
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
  },
  {
    cover: "usb3.jpg",
    fallbackCover: "book_en.png",
    tag: "Paperback",
    title: "The Little White Rabbit's Useless Notebook: A Sarcastic Gag Journal for Overwhelmed Humans, Students, and Burnout Office Workers (Funny Novelty Notebook) (I held up the national flag)",
    amazonUrl: "https://link.amazon/B02qBgJPT"
  },
  {
    cover: "JRB3.jpg",
    fallbackCover: "book_jp.png",
    tag: "ペーパーバック",
    title: "小比うさぎのダメダメノート: ……ちゃんとノート書けるのか？ (皮肉たっぷりなブラックユーモア手帳・ギャグギフト)",
    amazonUrl: "https://link.amazon/B0gyvJcOW"
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

// 模組匯出支援（相容 Node.js / ES Module / 瀏覽器全域）
if (typeof module !== "undefined" && module.exports) {
  module.exports = { marketProducts, xiaobiNotebooks, authorBooks };
}
