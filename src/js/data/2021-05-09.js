dataSetVersion = "2021-05-09"; // Change this when creating a new data set version. YYYY-MM-DD format.
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
      { name: "Mobile Suit Gundam: The 08th MS Team", tooltip: "08th MS Team", key: "08MS" },
      { name: "Gundam Wing: Endless Waltz", tooltip: "Endless Waltz", key: "GWEW" },
      { name: "Mobile Suit Gundam MS IGLOO", tooltip: "MS IGLOO", key: "IGLOO" },
      { name: "Mobile Suit Gundam SEED C.E. 73: Stargazer", tooltip: "SEED Stargazer", key: "CE73" },
      { name: "Ring of Gundam", tooltip: "Ring of Gundam", key: "RING" },
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
    tooltip: "Check this to remove anything that isn't strictly a Mobile Suit; Mobile Armor, Pod, Horses, etc.",
    checked: false,
  },
  {
    name: "Remove Non-Mainline Entries",
    key: "SPIN",
    tooltip: "Check this to remove Mobile Suits that do not appear in any mainline anime series.",
    checked: false,
  },
  {
    name: "Remove Variants & Redesigns",
    key: "PAINT",
    tooltip: "Check this to remove Mobile Suits that are heavily derivative variants of other suits. Includes redesigns of the same mobile suit featured in different works. does not include character specific paint jobs.",
    checked: false,
  },
  {
    name: "Remove Kit-less",
    key: "NOKIT",
    tooltip: "Check this to remove Mobile Suits that do not have an official Model Kit.",
    checked: false,
  },
];

dataSet[dataSetVersion].characterData = [
  {
    name: "RX-78-2 Gundam",
    img: "KIeLyqu.jpg",
    opts: { series: ["0079", "ORIGIN"]}
  },
  {
    name: "RX-77-2 Guncannon",
    img: "ngG4QeH.jpg",
    opts: { series: ["0079", "ORIGIN", "MSGT"]}
  },
  {
    name: "RX-75-4 Guntank",
    img: "Hw1kd3q.jpg",
    opts: { series: ["0079", "ORIGIN", "MSGT"]}
  },
  {
    name: "RGM-79 GM",
    img: "80R8Jnt.jpg",
    opts: { series: ["0079", "ORIGIN", "MSGT", "MSGRV"]}
  },
  {
    name: "RB-79 Ball",
    img: "Y5bJH9G.jpg",
    opts: { series: ["0079", "08MS", "MSGT", "0083", "ARMOR"]}
  },
  {
    name: "MS-05B Zaku I",
    img: "cT5MXsi.jpg",
    opts: { series: ["0079", "08MS", "MSGT", "0083"]}
  },
  {
    name: "MS-06F Zaku II",
    img: "rg0RyoP.jpg",
    opts: { series: ["0079", "08MS", "MSGT", "0083", "MSGZZ"]}
  },
  {
    name: "Char's MS-06S Zaku II Commander Type",
    img: "X7yNMG7.jpg",
    opts: { series: ["0079", "08MS", "MSGT", "0083"]}
  },
  {
    name: "MS-07B Gouf",
    img: "870ooec.jpg",
    opts: { series: ["0079", "08MS", "MSGT", "0083"]}
  },
  {
    name: "MS-09B Dom",
    img: "3dBvjgz.jpg",
    opts: { series: ["0079", "08MS", "MSGT", "0083", "MSGZZ"]}
  },
  {
    name: "MS-14A Gelgoog",
    img: "iHlI48m.jpg",
    opts: { series: ["0079", "08MS", "MSGT", "0083"]}
  },
  {
    name: "Char's MS-14S Gelgoog Commander Type",
    img: "Ofn0rRo.jpg",
    opts: { series: ["0079", "08MS", "MSGT", "0083"]}
  },
  {
    name: "MSM-03 Gogg",
    img: "d4W0Z7o.jpg",
    opts: { series: ["0079", "08MS", "MSGT", "0083"]}
  },
  {
    name: "MSM-04 Acguy",
    img: "C8o1lo9.jpg",
    opts: { series: ["0079", "08MS", "MSGT", "0083"]}
  },
  {
    name: "MSM-07 Z'Gok",
    img: "GjH41yB.jpg",
    opts: { series: ["0079", "08MS", "MSGT", "0083"]}
  },
  {
    name: "Char's MSM-07 Z'Gok",
    img: "cBCkiKR.jpg",
    opts: { series: ["0079", "08MS", "MSGT", "0083"]}
  },
  {
    name: "MSM-10 Zock",
    img: "38GIADl.jpg",
    opts: { series: ["0079", "08MS", "MSGT", "0083"]}
  },
  {
    name: "YMS-15 Gyan",
    img: "1HZCrLu.jpg",
    opts: { series: ["0079", "08MS", "MSGT", "0083"]}
  },
  {
    name: "MSN-02 Zeong",
    img: "f2EvqS0.jpg",
    opts: { series: ["0079"]}
  },
  {
    name: "MA-08 Big Zam",
    img: "lsi8FPz.jpg",
    opts: { series: ["0079", "ARMOR"]}
  },
  {
    name: "MA-04X Zakrello",
    img: "siUKpKj.jpg",
    opts: { series: ["0079", "ARMOR"]}
  },
  {
    name: "MA-05 Bigro",
    img: "Q69B8WR.jpg",
    opts: { series: ["0079", "ARMOR"]}
  },
  {
    name: "MAM-07 Grublo",
    img: "rqo7R5m.jpg",
    opts: { series: ["0079", "ARMOR"]}
  },
  {
    name: "MAN-03 Braw Bro",
    img: "5yaT3FE.jpg",
    opts: { series: ["0079", "ARMOR"]}
  },
  {
    name: "MAN-08 Elmeth",
    img: "VYCun8X.jpg",
    opts: { series: ["0079", "ARMOR"]}
  },
  {
    name: "MAX-03 Adzam",
    img: "EUsDrTQ.jpg",
    opts: { series: ["0079", "ARMOR"]}
  },
  
  
  
  {
    name: "MSZ-006 Zeta Gundam",
    img: "VqQA5dy.jpg",
    opts: { series: ["MSZG", "MSGZZ"]}
  },
  {
    name: "RX-178 Gundam Mk-II (AEUG)",
    img: "L5drnlU.jpg",
    opts: { series: ["MSZG", "MSGZZ"]}
  },
  {
    name: "RX-178 Gundam Mk-II (Titans)",
    img: "jjVJY2o.jpg",
    opts: { series: ["MSZG", "PAINT"]}
  },
  {
    name: "MSN-00100 Hyaku Shiki",
    img: "wfgYZJQ.jpg",
    opts: { series: ["MSZG", "MSGZZ"]}
  },
  {
    name: "Petite-Mobile",
    img: "NX33g1t.jpg",
    opts: { series: ["MSZG"]}
  },
  {
    name: "RMS-099 Rick Dias",
    img: "IgT6zeR.jpg",
    opts: { series: ["MSZG"]}
  },
  {
    name: "MSA-005 Methuss",
    img: "fks1XXP.jpg",
    opts: { series: ["MSZG", "MSGZZ"]}
  },
  {
    name: "MSA-003 Nemo",
    img: "VxB4htD.jpg",
    opts: { series: ["MSZG"]}
  },
  {
    name: "MSK-008 Dijeh",
    img: "1M5wWpS.jpg",
    opts: { series: ["MSZG"]}
  },
  {
    name: "RMS-179 GM II (EFF)",
    img: "w4UTXrk.jpg",
    opts: { series: ["MSZG"]}
  },
  {
    name: "RMS-179 GM II (AEUG)",
    img: "JZsOE85.jpg",
    opts: { series: ["MSZG", "PAINT"]}
  },
  {
    name: "MRX-009 Psycho Gundam",
    img: "Q1uwnj1.jpg",
    opts: { series: ["MSZG"]}
  },
  {
    name: "MRX-010 Psycho Gundam Mk-II",
    img: "HZrn2hA.jpg",
    opts: { series: ["MSZG", "MSGZZ"]}
  },
  {
    name: "PMX-003 The O",
    img: "vDW4EEj.jpg",
    opts: { series: ["MSZG"]}
  },
  {
    name: "PMX-001 Palace Athene",
    img: "FUGGIQ0.jpg",
    opts: { series: ["MSZG"]}
  },
  {
    name: "PMX-002 Bolinoak Sammahn",
    img: "Kop8zyF.jpg",
    opts: { series: ["MSZG"]}
  },
  {
    name: "RGC-80 GM Cannon (Jaburo)",
    img: "7PUinAf.jpg",
    opts: { series: ["MSZG"]}
  },
  {
    name: "MS-06V Zaku Tank",
    img: "BTnzsfK.jpg",
    opts: { series: ["MSZG", "MSGZZ"]}
  },
  {
    name: "MS-06E Zaku Recon Type (EFF)",
    img: "mzAPpdW.jpg",
    opts: { series: ["MSZG"]}
  },
  {
    name: "MS-06M Marine Hizack (EFF)",
    img: "6wXF6gN.jpg",
    opts: { series: ["MSZG"]}
  },
  {
    name: "MS-07H Gouf Flight Test Type (EFF)",
    img: "FP1CbpI.jpg",
    opts: { series: ["MSZG"]}
  },
  {
    name: "MS-11 Act Zaku",
    img: "lFcqK23.jpg",
    opts: { series: ["MSZG"]}
  },
  {
    name: "NRX-044 Asshimar",
    img: "S9gZc0o.jpg",
    opts: { series: ["MSZG"]}
  },
  {
    name: "NRX-055 Baund Doc",
    img: "6MVSCFL.jpg",
    opts: { series: ["MSZG"]}
  },
  {
    name: "NRX-055-1 Baund Doc",
    img: "fxvHvOl.jpg",
    opts: { series: ["MSZG", "PAINT"]}
  },
  {
    name: "ORX-005 Gaplant",
    img: "7pHolzn.jpg",
    opts: { series: ["MSZG"]}
  },
  {
    name: "PMX-000 Messala",
    img: "HujB9Kq.jpg",
    opts: { series: ["MSZG"]}
  },
  {
    name: "RGM-79SC GM Sniper Custom",
    img: "ybWeOnw.jpg",
    opts: { series: ["MSZG"]}
  },
  {
    name: "RMS-106 Hizack (Titans)",
    img: "39Siuus.jpg",
    opts: { series: ["MSZG"]}
  },
  {
    name: "RMS-106 Hizack (EFF)",
    img: "f0LRKMd.jpg",
    opts: { series: ["MSZG", "PAINT"]}
  },
  {
    name: "RMS-106CS Hizack Custom",
    img: "nd4THmT.jpg",
    opts: { series: ["MSZG", "PAINT"]}
  },
  {
    name: "RMS-108 Marasai",
    img: "vn6XUA2.jpg",
    opts: { series: ["MSZG"]}
  },
  {
    name: "RMS-117 Galbaldy β",
    img: "zR6Sdr0.jpg",
    opts: { series: ["MSZG"]}
  },
  {
    name: "RMS-154 Barzam",
    img: "g6nV6x9.jpg",
    opts: { series: ["MSZG"]}
  },
  {
    name: "RMV-1 Guntank II",
    img: "HjP7zBx.jpg",
    opts: { series: ["MSZG"]}
  },
  {
    name: "RX-77-3 Guncannon Heavy Custom",
    img: "w8Kpmrg.jpg",
    opts: { series: ["MSZG", "PAINT"]}
  },
  {
    name: "RX-110 Gabthley",
    img: "23ltYDK.jpg",
    opts: { series: ["MSZG"]}
  },
  {
    name: "RX-139 Hambrabi",
    img: "sYgN9OA.jpg",
    opts: { series: ["MSZG"]}
  },
  {
    name: "RX-160 Byarlant",
    img: "ZK2O1NS.jpg",
    opts: { series: ["MSZG"]}
  },
  {
    name: "AMX-003 Gaza-C",
    img: "WZLsyxc.jpg",
    opts: { series: ["MSZG", "MSGZZ"]}
  },
  {
    name: "AMX-004 Qubeley",
    img: "r36t2xr.jpg",
    opts: { series: ["MSZG", "MSGZZ"]}
  },
];
