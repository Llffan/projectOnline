import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/HomeView.vue"),
    },
    {
      path: "/en",
      name: "home_en",
      component: () => import("@/views_en/HomeView.vue"),
    },
    {
      path: "/company/hk",
      name: "hk",
      component: () => import("@/views/company/HK.vue"),
    },
    {
      path: "/company_en/hk",
      name: "hk_en",
      component: () => import("@/views_en/company/HK.vue"),
    },
    {
      path: "/company/jp",
      name: "jp",
      component: () => import("@/views/company/JP.vue"),
    },
    {
      path: "/company_en/jp",
      name: "jp_en",
      component: () => import("@/views_en/company/JP.vue"),
    },
    {
      path: "/company/kr",
      name: "kr",
      component: () => import("@/views/company/KR.vue"),
    },
    {
      path: "/company_en/kr",
      name: "kr_en",
      component: () => import("@/views_en/company/KR.vue"),
    },
    {
      path: "/company/mo",
      name: "mo",
      component: () => import("@/views/company/MO.vue"),
    },
    {
      path: "/company_en/mo",
      name: "mo_en",
      component: () => import("@/views_en/company/MO.vue"),
    },
    {
      path: "/company/vn",
      name: "vn",
      component: () => import("@/views/company/VN.vue"),
    },
    {
      path: "/company_en/vn",
      name: "vn_en",
      component: () => import("@/views_en/company/VN.vue"),
    },
    {
      path: "/company/th",
      name: "th",
      component: () => import("@/views/company/TH.vue"),
    },
    {
      path: "/company_en/th",
      name: "th_en",
      component: () => import("@/views_en/company/TH.vue"),
    },
    {
      path: "/company/my",
      name: "my",
      component: () => import("@/views/company/MY.vue"),
    },
    {
      path: "/company_en/my",
      name: "my_en",
      component: () => import("@/views_en/company/MY.vue"),
    },
    {
      path: "/company/id",
      name: "id",
      component: () => import("@/views/company/ID.vue"),
    },
    {
      path: "/company_en/id",
      name: "id_en",
      component: () => import("@/views_en/company/ID.vue"),
    },
    {
      path: "/company/sg",
      name: "sg",
      component: () => import("@/views/company/SG.vue"),
    },
    {
      path: "/company_en/sg",
      name: "sg_en",
      component: () => import("@/views_en/company/SG.vue"),
    },
    {
      path: "/company/us",
      name: "us",
      component: () => import("@/views/company/US.vue"),
    },
    {
      path: "/company_en/us",
      name: "us_en",
      component: () => import("@/views_en/company/US.vue"),
    },
    {
      path: "/company/ca",
      name: "ca",
      component: () => import("@/views/company/CA.vue"),
    },
    {
      path: "/company_en/ca",
      name: "ca_en",
      component: () => import("@/views_en/company/CA.vue"),
    },
    {
      path: "/company/uk",
      name: "uk",
      component: () => import("@/views/company/UK.vue"),
    },
    {
      path: "/company_en/uk",
      name: "uk_en",
      component: () => import("@/views_en/company/UK.vue"),
    },
    {
      path: "/company/de",
      name: "de",
      component: () => import("@/views/company/DE.vue"),
    },
    {
      path: "/company_en/de",
      name: "de_en",
      component: () => import("@/views_en/company/DE.vue"),
    },
    {
      path: "/company/fr",
      name: "fr",
      component: () => import("@/views/company/FR.vue"),
    },
    {
      path: "/company_en/fr",
      name: "fr_en",
      component: () => import("@/views_en/company/FR.vue"),
    },
    {
      path: "/company/bvi",
      name: "bvi",
      component: () => import("@/views/company/BVI.vue"),
    },
    {
      path: "/company_en/bvi",
      name: "bvi_en",
      component: () => import("@/views_en/company/BVI.vue"),
    },
    {
      path: "/company/ky",
      name: "ky",
      component: () => import("@/views/company/KY.vue"),
    },
    {
      path: "/company_en/ky",
      name: "ky_en",
      component: () => import("@/views_en/company/KY.vue"),
    },
    {
      path: "/company/sc",
      name: "sc",
      component: () => import("@/views/company/SC.vue"),
    },
    {
      path: "/company_en/sc",
      name: "sc_en",
      component: () => import("@/views_en/company/SC.vue"),
    },
    {
      path: "/company/mh",
      name: "mh",
      component: () => import("@/views/company/MH.vue"),
    },
    {
      path: "/company_en/mh",
      name: "mh_en",
      component: () => import("@/views_en/company/MH.vue"),
    },
    {
      path: "/company/ws",
      name: "ws",
      component: () => import("@/views/company/WS.vue"),
    },
    {
      path: "/company_en/ws",
      name: "ws_en",
      component: () => import("@/views_en/company/WS.vue"),
    },
    {
      path: "/secretary/hk-annual",
      name: "hk_an",
      component: () => import("@/views/secretary/Tax_hk.vue"),
    },
    {
      path: "/secretary_en/hk-annual",
      name: "hk_an_en",
      component: () => import("@/views_en/secretary/Tax_hk.vue"),
    },
    {
      path: "/secretary/overseas-annual",
      name: "ov_an",
      component: () => import("@/views/secretary/Tax_ov.vue"),
    },
    {
      path: "/secretary_en/overseas-annual",
      name: "ov_an_en",
      component: () => import("@/views_en/secretary/Tax_ov.vue"),
    },
    {
      path: "/secretary/change",
      name: "change",
      component: () => import("@/views/secretary/Change.vue"),
    },
    {
      path: "/secretary_en/change",
      name: "change_en",
      component: () => import("@/views_en/secretary/Change.vue"),
    },
    {
      path: "/secretary/dissolution",
      name: "dissolution",
      component: () => import("@/views/secretary/Dissolution.vue"),
    },
    {
      path: "/secretary_en/dissolution",
      name: "dissolution_en",
      component: () => import("@/views_en/secretary/Dissolution.vue"),
    },
    {
      path: "/secretary/restoration",
      name: "restoration",
      component: () => import("@/views/secretary/Restoration.vue"),
    },
    {
      path: "/secretary_en/restoration",
      name: "restoration_en",
      component: () => import("@/views_en/secretary/Restoration.vue"),
    },
    {
      path: "/secretary/tax-planning",
      name: "tax_planning",
      component: () => import("@/views/secretary/Tax_planning.vue"),
    },
    {
      path: "/secretary_en/tax-planning",
      name: "tax_planning_en",
      component: () => import("@/views_en/secretary/Tax_planning.vue"),
    },
    {
      path: "/secretary/accounting",
      name: "accounting",
      component: () => import("@/views/secretary/Accounting.vue"),
    },
    {
      path: "/secretary_en/accounting",
      name: "accounting_en",
      component: () => import("@/views_en/secretary/Accounting.vue"),
    },
    {
      path: "/secretary/tax-filing",
      name: "tax_filing",
      component: () => import("@/views/secretary/Tax_filing.vue"),
    },
    {
      path: "/secretary_en/tax-filing",
      name: "tax_filing_en",
      component: () => import("@/views_en/secretary/Tax_filing.vue"),
    },
    {
      path: "/secretary/hk-msb",
      name: "hk_msb",
      component: () => import("@/views/secretary/Hk_msb.vue"),
    },
    {
      path: "/secretary_en/hk-msb",
      name: "hk_msb_en",
      component: () => import("@/views_en/secretary/Hk_msb.vue"),
    },
    {
      path: "/secretary/barcode",
      name: "barcode",
      component: () => import("@/views/secretary/Barcode.vue"),
    },
    {
      path: "/secretary_en/barcode",
      name: "barcode_en",
      component: () => import("@/views_en/secretary/Barcode.vue"),
    },
    {
      path: "/secretary/telecom",
      name: "telecom",
      component: () => import("@/views/secretary/Telecom.vue"),
    },
    {
      path: "/secretary_en/telecom",
      name: "telecom_en",
      component: () => import("@/views_en/secretary/Telecom.vue"),
    },
    {
      path: "/secretary/hk-odi",
      name: "hk_odi",
      component: () => import("@/views/secretary/Hk_odi.vue"),
    },
    {
      path: "/secretary_en/hk-odi",
      name: "hk_odi_en",
      component: () => import("@/views_en/secretary/Hk_odi.vue"),
    },
    {
      path: "/bank/hk/constructions",
      name: "hk_constructions",
      component: () => import("@/views/bank_company/hk/Constructions.vue"),
    },
    {
      path: "/bank/hk/everbright",
      name: "hk_everbright",
      component: () => import("@/views/bank_company/hk/Everbright.vue"),
    },
    {
      path: "/bank/hk/boc",
      name: "hk_boc",
      component: () => import("@/views/bank_company/hk/Boc.vue"),
    },
    {
      path: "/bank/hk/communications",
      name: "hk_communications",
      component: () => import("@/views/bank_company/hk/Communications.vue"),
    },
    {
      path: "/bank/hk/cmb-winglung",
      name: "hk_cmb_winglung",
      component: () => import("@/views/bank_company/hk/CmbWinglung.vue"),
    },
    {
      path: "/bank/hk/citic",
      name: "hk_citic",
      component: () => import("@/views/bank_company/hk/Citic.vue"),
    },
    {
      path: "/bank/hk/dbs",
      name: "hk_dbs",
      component: () => import("@/views/bank_company/hk/Dbs.vue"),
    },
    {
      path: "/bank/hk/hsbc",
      name: "hk_hsbc",
      component: () => import("@/views/bank_company/hk/Hsbc.vue"),
    },
    {
      path: "/bank/hk/chonghing",
      name: "hk_chonghing",
      component: () => import("@/views/bank_company/hk/ChongHing.vue"),
    },
    {
      path: "/bank/hk/hangseng",
      name: "hk_hangseng",
      component: () => import("@/views/bank_company/hk/HangSeng.vue"),
    },
    {
      path: "/bank/hk/ncb",
      name: "hk_ncb",
      component: () => import("@/views/bank_company/hk/Nanyang.vue"),
    },
    {
      path: "/bank/hk/bea",
      name: "hk_bea",
      component: () => import("@/views/bank_company/hk/Bea.vue"),
    },
    {
      path: "/bank/hk/dahsing",
      name: "hk_dahsing",
      component: () => import("@/views/bank_company/hk/DahSing.vue"),
    },
    {
      path: "/bank/hk/ocbc",
      name: "hk_ocbc",
      component: () => import("@/views/bank_company/hk/Ocbc.vue"),
    },
    {
      path: "/bank/hk/citi",
      name: "hk_citi",
      component: () => import("@/views/bank_company/hk/Citi.vue"),
    },
    {
      path: "/bank/hk/sc",
      name: "hk_sc",
      component: () => import("@/views/bank_company/hk/Sc.vue"),
    },
    {
      path: "/bank/hk/icbc",
      name: "hk_icbc",
      component: () => import("@/views/bank_company/hk/Icbc.vue"),
    },
    {
      path: "/bank/hk/deutsche",
      name: "hk_deutsche",
      component: () => import("@/views/bank_company/hk/Deutsche.vue"),
    },
    {
      path: "/bank/hk/citibank-small",
      name: "hk_citibank_small",
      component: () => import("@/views/bank_company/hk/CitiSmall.vue"),
    },
    {
      path: "/bank/hk/shanghai-commercial",
      name: "hk_shanghai_commercial",
      component: () => import("@/views/bank_company/hk/Shanghai.vue"),
    },
    {
      path: "/bank/hk/za",
      name: "hk_za",
      component: () => import("@/views/bank_company/hk/Za.vue"),
    },
    {
      path: "/bank/hk/ew",
      name: "hk_ew",
      component: () => import("@/views/bank_company/hk/EastWest.vue"),
    },
    {
      path: "/bank/hk/public",
      name: "hk_public",
      component: () => import("@/views/bank_company/hk/Public.vue"),
    },
    {
      path: "/bank/hk/uob",
      name: "hk_uob",
      component: () => import("@/views/bank_company/hk/Uob.vue"),
    },
    {
      path: "/en/bank/hk/constructions",
      name: "hk_constructions_en",
      component: () => import("@/views_en/bank_company/hk/Constructions.vue"),
    },
    {
      path: "/en/bank/hk/everbright",
      name: "hk_everbright_en",
      component: () => import("@/views_en/bank_company/hk/Everbright.vue"),
    },
    {
      path: "/en/bank/hk/boc",
      name: "hk_boc_en",
      component: () => import("@/views_en/bank_company/hk/Boc.vue"),
    },
    {
      path: "/en/bank/hk/communications",
      name: "hk_communications_en",
      component: () => import("@/views_en/bank_company/hk/Communications.vue"),
    },
    {
      path: "/en/bank/hk/cmb-winglung",
      name: "hk_cmb_winglung_en",
      component: () => import("@/views_en/bank_company/hk/CmbWinglung.vue"),
    },
    {
      path: "/en/bank/hk/citic",
      name: "hk_citic_en",
      component: () => import("@/views_en/bank_company/hk/Citic.vue"),
    },
    {
      path: "/en/bank/hk/dbs",
      name: "hk_dbs_en",
      component: () => import("@/views_en/bank_company/hk/Dbs.vue"),
    },
    {
      path: "/en/bank/hk/hsbc",
      name: "hk_hsbc_en",
      component: () => import("@/views_en/bank_company/hk/Hsbc.vue"),
    },
    {
      path: "/en/bank/hk/chonghing",
      name: "hk_chonghing_en",
      component: () => import("@/views_en/bank_company/hk/Chonghing.vue"),
    },
    {
      path: "/en/bank/hk/hangseng",
      name: "hk_hangseng_en",
      component: () => import("@/views_en/bank_company/hk/HangSeng.vue"),
    },
    {
      path: "/en/bank/hk/ncb",
      name: "hk_ncb_en",
      component: () => import("@/views_en/bank_company/hk/Nanyang.vue"),
    },
    {
      path: "/en/bank/hk/bea",
      name: "hk_bea_en",
      component: () => import("@/views_en/bank_company/hk/Bea.vue"),
    },
    {
      path: "/en/bank/hk/dahSing",
      name: "hk_dahsing_en",
      component: () => import("@/views_en/bank_company/hk/DahSing.vue"),
    },
    {
      path: "/en/bank/hk/ocbc",
      name: "hk_ocbc_en",
      component: () => import("@/views_en/bank_company/hk/Ocbc.vue"),
    },
    {
      path: "/en/bank/hk/citi",
      name: "hk_citi_en",
      component: () => import("@/views_en/bank_company/hk/Citi.vue"),
    },
    {
      path: "/en/bank/hk/sc",
      name: "hk_sc_en",
      component: () => import("@/views_en/bank_company/hk/Sc.vue"),
    },
    {
      path: "/en/bank/hk/icbc",
      name: "hk_icbc_en",
      component: () => import("@/views_en/bank_company/hk/Icbc.vue"),
    },
    {
      path: "/en/bank/hk/deutsche",
      name: "hk_deutsche_en",
      component: () => import("@/views_en/bank_company/hk/Deutsche.vue"),
    },
    {
      path: "/en/bank/hk/citibank-small",
      name: "hk_citibank_small_en",
      component: () => import("@/views_en/bank_company/hk/CitiSmall.vue"),
    },
    {
      path: "/en/bank/hk/shanghai-commercial",
      name: "hk_shanghai_commercial_en",
      component: () => import("@/views_en/bank_company/hk/Shanghai.vue"),
    },
    {
      path: "/en/bank/hk/za",
      name: "hk_za_en",
      component: () => import("@/views_en/bank_company/hk/Za.vue"),
    },
    {
      path: "/en/bank/hk/ew",
      name: "hk_ew_en",
      component: () => import("@/views_en/bank_company/hk/EastWest.vue"),
    },
    {
      path: "/en/bank/hk/public",
      name: "hk_public_en",
      component: () => import("@/views_en/bank_company/hk/Public.vue"),
    },
    {
      path: "/en/bank/hk/uob",
      name: "hk_uob_en",
      component: () => import("@/views_en/bank_company/hk/Uob.vue"),
    },
    {
      path: "/bank/us/cbi",
      name: "us_cbi",
      component: () => import("@/views/bank_company/us/Cbi.vue"),
    },
    {
      path: "/bank/us/ew",
      name: "us_ew",
      component: () => import("@/views/bank_company/us/Ew.vue"),
    },
    {
      path: "/bank/us/jpm",
      name: "us_jpm",
      component: () => import("@/views/bank_company/us/Jpm.vue"),
    },
    {
      path: "/bank/us/cathay",
      name: "us_cathay",
      component: () => import("@/views/bank_company/us/Cathay.vue"),
    },
    {
      path: "/bank/us/boa",
      name: "us_boa",
      component: () => import("@/views/bank_company/us/Boa.vue"),
    },
    {
      path: "/bank/us/banc-cal",
      name: "us_banc_cal",
      component: () => import("@/views/bank_company/us/BancCal.vue"),
    },
    {
      path: "/bank/us/arival",
      name: "us_arival",
      component: () => import("@/views/bank_company/us/Arival.vue"),
    },
    {
      path: "/bank/us/mercury",
      name: "us_mercury",
      component: () => import("@/views/bank_company/us/Mercury.vue"),
    },
    {
      path: "/bank/us/axos",
      name: "us_axos",
      component: () => import("@/views/bank_company/us/Axos.vue"),
    },
    {
      path: "/bank/us/hsbc",
      name: "us_hsbc",
      component: () => import("@/views/bank_company/us/Hsbc.vue"),
    },
    {
      path: "/en/bank/us/cbi",
      name: "us_cbi_en",
      component: () => import("@/views_en/bank_company/us/Cbi.vue"),
    },
    {
      path: "/en/bank/us/ew",
      name: "us_ew_en",
      component: () => import("@/views_en/bank_company/us/Ew.vue"),
    },
    {
      path: "/en/bank/us/jpm",
      name: "us_jpm_en",
      component: () => import("@/views_en/bank_company/us/Jpm.vue"),
    },
    {
      path: "/en/bank/us/cathay",
      name: "us_cathay_en",
      component: () => import("@/views_en/bank_company/us/Cathay.vue"),
    },
    {
      path: "/en/bank/us/boa",
      name: "us_boa_en",
      component: () => import("@/views_en/bank_company/us/Boa.vue"),
    },
    {
      path: "/en/bank/us/banc-cal",
      name: "us_banc_cal_en",
      component: () => import("@/views_en/bank_company/us/BancCal.vue"),
    },
    {
      path: "/en/bank/us/arival",
      name: "us_arival_en",
      component: () => import("@/views_en/bank_company/us/Arival.vue"),
    },
    {
      path: "/en/bank/us/mercury",
      name: "us_mercury_en",
      component: () => import("@/views_en/bank_company/us/Mercury.vue"),
    },
    {
      path: "/en/bank/us/axos",
      name: "us_axos_en",
      component: () => import("@/views_en/bank_company/us/Axos.vue"),
    },
    {
      path: "/en/bank/us/hsbc",
      name: "us_hsbc_en",
      component: () => import("@/views_en/bank_company/us/Hsbc.vue"),
    },
    {
      path: "/bank/sg/ocbc",
      name: "sg_ocbc",
      component: () => import("@/views/bank_company/sg/Ocbc.vue"),
    },
    {
      path: "/bank/sg/hsbc",
      name: "sg_hsbc",
      component: () => import("@/views/bank_company/sg/Hsbc.vue"),
    },
    {
      path: "/bank/sg/maybank",
      name: "sg_maybank",
      component: () => import("@/views/bank_company/sg/Maybank.vue"),
    },
    {
      path: "/bank/sg/sc",
      name: "sg_sc",
      component: () => import("@/views/bank_company/sg/Sc.vue"),
    },
    {
      path: "/bank/sg/uob",
      name: "sg_uob",
      component: () => import("@/views/bank_company/sg/Uob.vue"),
    },
    {
      path: "/bank/sg/dbs",
      name: "sg_dbs",
      component: () => import("@/views/bank_company/sg/Dbs.vue"),
    },
    {
      path: "/bank/sg/citi",
      name: "sg_citi",
      component: () => import("@/views/bank_company/sg/Citi.vue"),
    },
    {
      path: "/bank/sg/aspire",
      name: "sg_aspire",
      component: () => import("@/views/bank_company/sg/Aspire.vue"),
    },
    {
      path: "/bank/sg/bos",
      name: "sg_bos",
      component: () => import("@/views/bank_company/sg/Bos.vue"),
    },
    {
      path: "/bank/sg/boc",
      name: "sg_boc",
      component: () => import("@/views/bank_company/sg/Boc.vue"),
    },
    {
      path: "/en/bank/sg/ocbc",
      name: "sg_ocbc_en",
      component: () => import("@/views_en/bank_company/sg/Ocbc.vue"),
    },
    {
      path: "/en/bank/sg/hsbc",
      name: "sg_hsbc_en",
      component: () => import("@/views_en/bank_company/sg/Hsbc.vue"),
    },
    {
      path: "/en/bank/sg/maybank",
      name: "sg_maybank_en",
      component: () => import("@/views_en/bank_company/sg/Maybank.vue"),
    },
    {
      path: "/en/bank/sg/sc",
      name: "sg_sc_en",
      component: () => import("@/views_en/bank_company/sg/Sc.vue"),
    },
    {
      path: "/en/bank/sg/uob",
      name: "sg_uob_en",
      component: () => import("@/views_en/bank_company/sg/Uob.vue"),
    },
    {
      path: "/en/bank/sg/dbs",
      name: "sg_dbs_en",
      component: () => import("@/views_en/bank_company/sg/Dbs.vue"),
    },
    {
      path: "/en/bank/sg/citi",
      name: "sg_citi_en",
      component: () => import("@/views_en/bank_company/sg/Citi.vue"),
    },
    {
      path: "/en/bank/sg/aspire",
      name: "sg_aspire_en",
      component: () => import("@/views_en/bank_company/sg/Aspire.vue"),
    },
    {
      path: "/en/bank/sg/bos",
      name: "sg_bos_en",
      component: () => import("@/views_en/bank_company/sg/Bos.vue"),
    },
    {
      path: "/en/bank/sg/boc",
      name: "sg_boc_en",
      component: () => import("@/views_en/bank_company/sg/Boc.vue"),
    },
    {
      path: "/bank/mo/icbc",
      name: "mo_icbc",
      component: () => import("@/views/bank_company/mo/Icbc.vue"),
    },
    {
      path: "/bank/mo/wl",
      name: "mo_wl",
      component: () => import("@/views/bank_company/mo/Wl.vue"),
    },
    {
      path: "/bank/mo/icbc-asia",
      name: "mo_icbc-asia",
      component: () => import("@/views/bank_company/mo/IcbcAsia.vue"),
    },
    {
      path: "/bank/mo/boc",
      name: "mo_boc",
      component: () => import("@/views/bank_company/mo/Boc.vue"),
    },
    {
      path: "/bank/mo/lusobank",
      name: "mo_lusobank",
      component: () => import("@/views/bank_company/mo/Lusobank.vue"),
    },{
      path: "/bank/mo/hsbc",
      name: "mo_hsbc",
      component: () => import("@/views/bank_company/mo/Hsbc.vue"),
    },{
      path: "/bank/mo/bcp",
      name: "mo_bcp",
      component: () => import("@/views/bank_company/mo/Bcp.vue"),
    },{
      path: "/bank/mo/bnu",
      name: "mo_bnu",
      component: () => import("@/views/bank_company/mo/Bnu.vue"),
    },{
      path: "/bank/mo/cgb",
      name: "mo_cgb",
      component: () => import("@/views/bank_company/mo/Cgb.vue"),
    },{
      path: "/bank/mo/ocbc",
      name: "mo_ocbc",
      component: () => import("@/views/bank_company/mo/Ocbc.vue"),
    },
    {
      path: "/en/bank/mo/icbc",
      name: "mo_icbc_en",
      component: () => import("@/views_en/bank_company/mo/Icbc.vue"),
    },
    {
      path: "/en/bank/mo/wl",
      name: "mo_wl_en",
      component: () => import("@/views_en/bank_company/mo/Wl.vue"),
    },
    {
      path: "/en/bank/mo/icbc-asia",
      name: "mo_icbc_asia_en",
      component: () => import("@/views_en/bank_company/mo/IcbcAsia.vue"),
    },
    {
      path: "/en/bank/mo/boc",
      name: "mo_boc_en",
      component: () => import("@/views_en/bank_company/mo/Boc.vue"),
    },
    {
      path: "/en/bank/mo/lusobank",
      name: "mo_lusobank_en",
      component: () => import("@/views_en/bank_company/mo/Lusobank.vue"),
    },
    {
      path: "/en/bank/mo/hsbc",
      name: "mo_hsbc_en",
      component: () => import("@/views_en/bank_company/mo/Hsbc.vue"),
    },
    {
      path: "/en/bank/mo/bcp",
      name: "mo_bcp_en",
      component: () => import("@/views_en/bank_company/mo/Bcp.vue"),
    },
    {
      path: "/en/bank/mo/bnu",
      name: "mo_bnu_en",
      component: () => import("@/views_en/bank_company/mo/Bnu.vue"),
    },
    {
      path: "/en/bank/mo/cgb",
      name: "mo_cgb_en",
      component: () => import("@/views_en/bank_company/mo/Cgb.vue"),
    },
    {
      path: "/en/bank/mo/ocbc",
      name: "mo_ocbc_en",
      component: () => import("@/views_en/bank_company/mo/Ocbc.vue"),
    },
    {
      path: "/notary/hague",
      name: "hague",
      component: () => import("@/views/notary/HagueNotary.vue"),
    },
    {
      path: "/notary/embassy",
      name: "embassy",
      component: () => import("@/views/notary/EmbassyNotary.vue"),
    },
    {
      path: "/notary/hk",
      name: "notary_hk",
      component: () => import("@/views/notary/HkNotary.vue"),
    },
    {
      path: "/notary/us",
      name: "notary_us",
      component: () => import("@/views/notary/UsNotary.vue"),
    },
    {
      path: "/notary/uk",
      name: "notary_uk",
      component: () => import("@/views/notary/UkNotary.vue"),
    },
    {
      path: "/notary/jp",
      name: "notary_jp",
      component: () => import("@/views/notary/JpNotary.vue"),
    },
    {
      path: "/notary/sg",
      name: "notary_sg",
      component: () => import("@/views/notary/SgNotary.vue"),
    },
    {
      path: "/en/notary/hague",
      name: "hague_en",
      component: () => import("@/views_en/notary/HagueNotary.vue"),
    },
    {
      path: "/en/notary/embassy",
      name: "embassy_en",
      component: () => import("@/views_en/notary/EmbassyNotary.vue"),
    },
    {
      path: "/en/notary/hk",
      name: "notary_hk_en",
      component: () => import("@/views_en/notary/HkNotary.vue"),
    },
    {
      path: "/en/notary/us",
      name: "notary_us_en",
      component: () => import("@/views_en/notary/UsNotary.vue"),
    },
    {
      path: "/en/notary/uk",
      name: "notary_uk_en",
      component: () => import("@/views_en/notary/UkNotary.vue"),
    },
    {
      path: "/en/notary/jp",
      name: "notary_jp_en",
      component: () => import("@/views_en/notary/JpNotary.vue"),
    },
    {
      path: "/en/notary/sg",
      name: "notary_sg_en",
      component: () => import("@/views_en/notary/SgNotary.vue"),
    },
    {
      path: "/ip/patent",
      name: "patent",
      component: () => import("@/views/ip/Patent.vue"),
    },
    {
      path: "/intellectual/domestic-trademark",
      name: "domestic_trademark",
      component: () => import("@/views/ip/DomesticTrademark.vue"),
    },
    {
      path: "/intellectual/international-trademark",
      name: "international_trademark",
      component: () => import("@/views/ip/IntlTrademark.vue"),
    },
    {
      path: "/en/intellectual/domestic-trademark",
      name: "domestic_trademark_en",
      component: () => import("@/views_en/ip/DomesticTrademark.vue"),
    },
    {
      path: "/en/intellectual/international-trademark",
      name: "international_trademark_en",
      component: () => import("@/views_en/ip/IntlTrademark.vue"),
    },
    {
      path: "/en/ip/patent",
      name: "patent_en",
      component: () => import("@/views_en/ip/Patent.vue"),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // 总是滚动到顶部
    return { top: 0 };
  },
});

export default router;
