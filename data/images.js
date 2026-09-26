// Placeholder photography (Unsplash). To use real CasaArt photos, drop the files
// into /public/images and swap the value, e.g. hero: "/images/hero.jpg".
const u = (id) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=80&w=2400`;

export const images = {
  hero: u("1600607687939-ce8a6c25118c"),
  introMain: u("1631679706909-1844bbd07221"),
  introDetail: u("1513694203232-719a280e022f"),

  living: u("1618221195710-dd6b41faaea6"),
  bedroom: u("1505693416388-ac5ce068fe85"),
  dining: u("1560185007-cde436f6a4d0"),
  kitchen: u("1600585152220-90363fe7e115"),
  office: u("1522708323590-d24dbb6b0267"),
  luxury: u("1616594039964-ae9021a400a0"),

  modernLiving: u("1616486338812-3dadae4b4ace"),
  contemporaryBedroom: u("1540518614846-7eded433c457"),
  minimalKitchen: u("1556911220-bff31c812dba"),
  luxuryResidence: u("1613490493576-7fde63acd811"),

  projectModern: u("1592928302636-c83cf1e1c887"),
  projectWarm: u("1583847268964-b28dc8f51f92"),
  projectUrban: u("1600121848594-d8644e57abab"),
  projectVilla: u("1512917774080-9991f1c4c750"),
  projectWorkspace: u("1497366216548-37526070297c"),
  projectCourtyard: u("1604014237800-1c9102c219da"),

  collectionLiving: u("1493809842364-78817add7ffb"),
  collectionDining: u("1617806118233-18e1de247200"),
  collectionBedroom: u("1631049307264-da0ec9d70304"),
  collectionLighting: u("1524758631624-e2822e304c36"),
  collectionDecor: u("1618220179428-22790b461013"),
  collectionFurniture: u("1555041469-a586c61ea9bc"),

  articleLiving: u("1560448204-e02f11c3d0e2"),
  articleLighting: u("1615529182904-14819c35db37"),
  articleTrends: u("1560185127-6ed189bf02f4"),

  // Indian heritage: palace, haveli and contemporary Indian luxury
  heritagePalace: u("1761472606347-bfebc5a3e546"),
  heritageDining: u("1690107751548-da27acf0b37b"),
  heritageJaali: u("1641803187045-2885879ec5a1"),
  heritageHaveli: u("1648113140562-dfd9afe14abd"),
  heritageBlueCity: u("1759065658859-9889b4dc58e4"),
  heritagePooja: u("1774301063167-66623449a95c"),
  heritageNizami: u("1669040186487-ad7a6d6d0004"),

  beforeShell: "/images/before-shell.jpg",
  beforeKitchen: "/images/before-kitchen.jpg",
  beforeBedroom: "/images/before-bedroom.jpg",

  cta: u("1600494603989-9650cf6ddd3d"),
  about: u("1567016432779-094069958ea5"),
  contact: u("1484101403633-562f891dc89a"),
};
