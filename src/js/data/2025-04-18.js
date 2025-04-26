dataSetVersion = "2025-04-18"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Series Entry",
    key: "series",
    tooltip: "Check this to restrict to certain series.",
    checked: false,
    sub: [
      { name: "Novels and Manga", key: "book" },
      { name: "Mobile Suit Gundam (1979)", tooltip: "0079", key: "0079" },
      { name: "Mobile Suit Zeta Gundam", tooltip: "Zeta", key: "MSZG" },
      { name: "Mobile Suit Gundam ZZ", tooltip: "Double Zeta", key: "MSGZZ" },
      { name: "Mobile Suit Victory Gundam", tooltip: "Victory Gundam", key: "MSVG" },
      { name: "Mobile Suit G Gundam", tooltip: "G Gundam", key: "MSGG" },
      { name: "Mobile Suit Gundam Wing", tooltip: "Gundam Wing", key: "MSGW" },
      { name: "Mobile Suit Gundam: The 08th MS Team", tooltip: "08th MS Team", key: "08MS" },
      { name: "After War Gundam X", tooltip: "After War Gundam X", key: "AWGX" },
      { name: "Turn A Gundam", tooltip: "∀ Gundam", key: "TAG" },
      { name: "Mobile Suit Gundam SEED", tooltip: "Gundam SEED", key: "MSGS" },
      { name: "Mobile Suit Gundam SEED Destiny", tooltip: "SEED Destiny", key: "MSGSD" },
      { name: "Mobile Suit Gundam 00", tooltip: "Gundam 00", key: "00" },
      { name: "Mobile Suit Gundam AGE", tooltip: "Gundam AGE", key: "AGE" },
      { name: "Gundam Reconguista in G", tooltip: "Reconguista in G", key: "GRIG" },
      { name: "Mobile Suit Gundam: Iron-Blooded Orphans", tooltip: "Iron-Blooded Orphans", key: "IBO" },
      { name: "Mobile Suit Gundam: The Witch from Mercury", tooltip: "G-WITCH", key: "GWITCH" },
      { name: "Mobile Suit Gundam GQuuuuuuX", tooltip: "GQuuuuuuX", key: "GQX" },
      { name: "Mobile Suit Gundam: Char's Counterattack", tooltip: "Char's Counterattack", key: "CCA" },
      { name: "Mobile Suit Gundam 0080: War in the Pocket", tooltip: "War in the Pocket", key: "0080" },
      { name: "Mobile Suit Gundam F91", tooltip: "F91", key: "F91" },
      { name: "Mobile Suit Gundam 0083: Stardust Memory", tooltip: "Stardust Memory", key: "0083" },
      { name: "Gundam Wing: Endless Waltz", tooltip: "Endless Waltz", key: "GWEW" },
      { name: "Mobile Suit Gundam MS IGLOO", tooltip: "MS IGLOO", key: "IGLOO" },
      { name: "Mobile Suit Gundam SEED C.E. 73: Stargazer", tooltip: "SEED Stargazer", key: "CE73" },
      { name: "Ring of Gundam", tooltip: "Ring of Gundam", key: "Ring" },
      { name: "Mobile Suit Gundam Unicorn", tooltip: "Gundam Unicorn", key: "MSGU" },
      { name: "Mobile Suit Gundam 00 the Movie: A Wakening of the Trailblazer", tooltip: "00 Trailblazer", key: "00T" },
      { name: "Mobile Suit Gundam: The Origin", tooltip: "Origin", key: "ORIGIN" },
      { name: "Mobile Suit Gundam Thunderbolt", tooltip: "Thunderbolt", key: "MSGT" },
      { name: "Mobile Suit Gundam: Twilight AXIS", tooltip: "Twilight AXIS", key: "AXIS" },
      { name: "Mobile Suit Gundam Narrative", tooltip: "Narrative", key: "MSGN" },
      { name: "Mobile Suit Gundam: Hathaway's Flash", tooltip: "Hathaway's Flash", key: "MSGHF" },
      { name: "Mobile Suit Gundam SEED Freedom", tooltip: "SEED FREEDOM", key: "MSGSF" },
      { name: "Mobile Suit Gundam: Requiem for Vengeance", tooltip: "Requiem for Vengeance", key: "MSGRV" },
      { name: "Build Series", tooltip: "Build", key: "BUILD" },
      { name: "Video Games", tooltip: "GAMES", key: "GAME" },
      { name: "Everything Else", tooltip: "OTHER", key: "OTHER" },
    ]
  },
  {
    name: "Remove Non-Suits",
    key: "ARMOR",
    tooltip: "Check this to remove anything that isn't strictly a Mobile Suit; Mobile Armor, Pod, Horses, etc."
  },
  {
    name: "Remove Non-Mainline Entries",
    key: "SPIN",
    tooltip: "Check this to remove Mobile Suits that do not appear in any mainline anime series."
  },
  {
    name: "Remove Variants & Redesigns",
    key: "PAINT",
    tooltip: "Check this to remove Mobile Suits that are heavily derivative variants of other suits. Includes redesigns of the same mobile suit featured in different works. does not include character specific paint jobs."
  },
  {
    name: "Remove Kit-less",
    key: "NOKIT",
    tooltip: "Check this to remove Mobile Suits that do not have an official Model Kit."
  },
];

dataSet[dataSetVersion].characterData = [
  {
    name: "RX-78-2 Gundam",
    img: "LKEwRhK.jpg",
    opts: { series: ["0079", "ORIGIN"]
    },
  {
    name: "RX-77-2 Guncannon",
    img: "LKEwRhK.jpg",
    opts: { series: ["0079"]}
  },
  {
    name: "RX-75 Guntank",
    img: "LKEwRhK.jpg",
    opts: { series: ["0079"]}
  },
  {
    name: "RGM-79 GM",
    img: "LKEwRhK.jpg",
    opts: { series: ["0079", "ORIGIN", "0083", "MSGT", "08MS"}
  },
   {
    name: "RB-79 Ball",
    img: "LKEwRhK.jpg",
    opts: { series: ["0079", "08MS", "0083"}
    },
  }
