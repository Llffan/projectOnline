const images = {
  'bank/hk/construction.png': new URL('../../../assets/img/bank/hk/construction.png', import.meta.url).href,
  'bank/hk/china.jpg': new URL('../../../assets/img/bank/hk/china.jpg', import.meta.url).href,
  'bank/hk/communications.jpg': new URL('../../../assets/img/bank/hk/communications.jpg', import.meta.url).href,
  'bank/hk/merchants_wing_lung.jpg': new URL('../../../assets/img/bank/hk/merchants_wing_lung.jpg', import.meta.url).href,
  'bank/hk/china_citic.jpg': new URL('../../../assets/img/bank/hk/china_citic.jpg', import.meta.url).href,
  'bank/hk/HSBC.jpg': new URL('../../../assets/img/bank/hk/HSBC.jpg', import.meta.url).href,
  'bank/hk/chong_xing.jpg': new URL('../../../assets/img/bank/hk/chong_xing.jpg', import.meta.url).href,
  'bank/hk/DBS.jpg': new URL('../../../assets/img/bank/hk/DBS.jpg', import.meta.url).href,
  'bank/hk/hang_seng.jpg': new URL('../../../assets/img/bank/hk/hang_seng.jpg', import.meta.url).href,
  'bank/hk/NCB.jpg': new URL('../../../assets/img/bank/hk/NCB.jpg', import.meta.url).href,
  'bank/hk/east_asia.jpg': new URL('../../../assets/img/bank/hk/east_asia.jpg', import.meta.url).href,
  'bank/hk/dah_sing.jpg': new URL('../../../assets/img/bank/hk/dah_sing.jpg', import.meta.url).href,
  'bank/hk/OCBC.jpg': new URL('../../../assets/img/bank/hk/OCBC.jpg', import.meta.url).href,
  'bank/hk/citibank.jpg': new URL('../../../assets/img/bank/hk/citibank.jpg', import.meta.url).href,
  'bank/hk/Standard_Chartered.jpg': new URL('../../../assets/img/bank/hk/Standard_Chartered.jpg', import.meta.url).href,
  'bank/hk/ICBC.jpg': new URL('../../../assets/img/bank/hk/ICBC.jpg', import.meta.url).href,
  'bank/hk/ShangHai.png': new URL('../../../assets/img/bank/hk/ShangHai.png', import.meta.url).href,
  'company/hk/HK.jpg': new URL('../../../assets/img/company/hk/HK.jpg', import.meta.url).href,
  'account/香港.png': new URL('../../../assets/img/account/香港.png', import.meta.url).href,
  'company/sg/SG.jpg': new URL('../../../assets/img/company/sg/SG.jpg', import.meta.url).href,
  'account/新加坡.png': new URL('../../../assets/img/account/新加坡.png', import.meta.url).href,
  'bank/sg/华侨银行.png': new URL('../../../assets/img/bank/sg/华侨银行.png', import.meta.url).href,
  'bank/sg/汇丰银行.png': new URL('../../../assets/img/bank/sg/汇丰银行.png', import.meta.url).href,
  'bank/sg/马来西亚.png': new URL('../../../assets/img/bank/sg/马来西亚.png', import.meta.url).href,
  'bank/sg/渣打银行.png': new URL('../../../assets/img/bank/sg/渣打银行.png', import.meta.url).href,
  'bank/sg/大华银行.png': new URL('../../../assets/img/bank/sg/大华银行.png', import.meta.url).href,
  'bank/sg/星展银行.png': new URL('../../../assets/img/bank/sg/星展银行.png', import.meta.url).href,
  'bank/sg/花旗银行.png': new URL('../../../assets/img/bank/sg/花旗银行.png', import.meta.url).href,
  'bank/sg/新加披银行.png': new URL('../../../assets/img/bank/sg/新加披银行.png', import.meta.url).href,
  'bank/sg/中国银行.png': new URL('../../../assets/img/bank/sg/中国银行.png', import.meta.url).href,
  'company/mo/MO.jpg': new URL('../../../assets/img/company/mo/MO.jpg', import.meta.url).href,
  'account/澳门.png': new URL('../../../assets/img/account/澳门.png', import.meta.url).href,
  'bank/mo/立桥银行.png': new URL('../../../assets/img/bank/mo/立桥银行.png', import.meta.url).href,
  'bank/mo/工银亚洲银行.png': new URL('../../../assets/img/bank/mo/工银亚洲银行.png', import.meta.url).href,
  'bank/mo/中国银行.png': new URL('../../../assets/img/bank/mo/中国银行.png', import.meta.url).href,
  'bank/mo/国际银行.png': new URL('../../../assets/img/bank/mo/国际银行.png', import.meta.url).href,
  'bank/mo/汇丰银行.png': new URL('../../../assets/img/bank/mo/汇丰银行.png', import.meta.url).href,
  'bank/mo/广发银行.png': new URL('../../../assets/img/bank/mo/广发银行.png', import.meta.url).href,
  'bank/mo/华侨银行.png': new URL('../../../assets/img/bank/mo/华侨银行.png', import.meta.url).href,
  'company/us/US.jpg': new URL('../../../assets/img/company/us/US.jpg', import.meta.url).href,
  'account/美国.png': new URL('../../../assets/img/account/美国.png', import.meta.url).href,
  'bank/us/富港银行.png': new URL('../../../assets/img/bank/us/富港银行.png', import.meta.url).href,
  'bank/us/华美银行.png': new URL('../../../assets/img/bank/us/华美银行.png', import.meta.url).href,
  'bank/us/国泰银行.png': new URL('../../../assets/img/bank/us/国泰银行.png', import.meta.url).href,
  'bank/us/美国银行.png': new URL('../../../assets/img/bank/us/美国银行.png', import.meta.url).href,
  'bank/us/arival银行.png': new URL('../../../assets/img/bank/us/arival银行.png', import.meta.url).href,
  'bank/us/axos.png': new URL('../../../assets/img/bank/us/axos.png', import.meta.url).href,
  'bank/us/汇丰银行.png': new URL('../../../assets/img/bank/us/汇丰银行.png', import.meta.url).href
}
const asset = path => images[path]
const bank = (name, nameEn, slug, image) => ({ name, nameEn, slug, img: asset(image) })

const makeCopy = (name, nameEn) => ({
  zh: {
    heroTitle: `${name}个人银行账户开户`,
    heroSubtitle: '银行选择、资料准备、预约核验、合规审核及账户维护',
    heroDescription: `根据申请人的身份、资金用途和银行政策匹配${name}个人开户方案，协助准备资料并完成银行要求的开户流程。`,
    introTitle: `${name}个人银行账户简介`,
    introText: `${name}个人银行账户适合留学、置业、投资、移民及跨境生活支出等合规场景。账户服务、开户条件、最低结余和审批结果因银行及申请人情况而异，以银行最终审核为准。`,
    advantagesTitle: `${name}个人账户开户优势`,
    advantages: [
      { iconId: '#icon-finance', title: '多币种管理', description: '按银行及账户类型管理当地货币、人民币、美元等常用币种。' },
      { iconId: '#icon-bank-line', title: '跨境收支', description: '便于处理留学、置业、保险及日常跨境生活支出。' },
      { iconId: '#icon-airplane', title: '全球使用', description: '通过网上银行、银行卡及汇款服务管理个人资金。' },
      { iconId: '#icon-folder-success-one', title: '财富管理', description: '为符合合规要求的个人提供海外资产配置基础。' }
    ],
    requirementsTitle: '个人开户常用资料',
    requirements: ['有效身份证明文件', '有效护照及适用的出入境证件', '住址证明或有效通讯地址资料', '税务居民身份及自我证明', '职业、收入及资金来源证明', '开户目的及预期交易说明'],
    processTitle: `${name}个人账户开户流程`,
    processes: [
      { iconId: '#icon-agreement', title: '初步咨询', description: '了解身份、开户用途、资金来源和银行偏好。' },
      { iconId: '#icon-notes', title: '资料预审', description: '按目标银行要求整理并补充个人开户资料。' },
      { iconId: '#icon-city', title: '预约核验', description: '预约银行要求的网点面签或远程身份核验。' },
      { iconId: '#icon-audit', title: '银行审核', description: '银行完成身份核验、尽职调查及合规审批。' },
      { iconId: '#icon-award-line', title: '收取资料', description: '审批通过后按银行安排收取账户及银行卡资料。' },
      { iconId: '#icon-folder-success-one', title: '激活账户', description: '启用网上银行并按银行要求维护账户。' }
    ],
    banksTitle: `${name}个人银行选择与资格说明`,
    faqTitle: `${name}个人开户常见问题`,
    faqs: [
      { question: `内地居民可以申请${name}个人银行账户吗？`, answer: '部分银行接受符合条件的非本地居民申请，是否受理及所需资料由银行按客户情况和最新政策审核。' },
      { question: '是否必须本人前往当地办理？', answer: '不同银行的身份核验方式不同，可能要求本人到网点面签，也可能提供远程见证或线上流程，以目标银行要求为准。' },
      { question: '个人开户需要多长时间？', answer: '预约和审批时间取决于银行、申请人情况及资料完整度，提交后仍需经过银行合规审核，不能保证固定时限。' },
      { question: '个人账户开立后需要注意什么？', answer: '建议保持合理的账户活动，及时回复银行调查，维护有效联系方式，并保留资金来源和交易用途证明。' }
    ]
  },
  en: {
    heroTitle: `${nameEn} Personal Bank Account Opening`,
    heroSubtitle: 'Bank selection, document preparation, identity verification, compliance review and account maintenance',
    heroDescription: `We help applicants match suitable ${nameEn} banks, prepare documents and complete the account-opening process required by the bank.`,
    introTitle: `${nameEn} Personal Bank Accounts`,
    introText: `${nameEn} personal bank accounts can support compliant overseas study, property purchases, investment, immigration and cross-border living expenses. Services, eligibility, minimum balances and approval vary by bank and applicant profile.`,
    advantagesTitle: `Benefits of a ${nameEn} Personal Account`,
    advantages: [
      { iconId: '#icon-finance', title: 'Multi-currency banking', description: 'Manage local currency, RMB, USD and other currencies according to the bank and account type.' },
      { iconId: '#icon-bank-line', title: 'Cross-border payments', description: 'Support compliant tuition, property, insurance and personal living expenses.' },
      { iconId: '#icon-airplane', title: 'International access', description: 'Manage funds through online banking, cards and remittance services.' },
      { iconId: '#icon-folder-success-one', title: 'Wealth planning', description: 'Build a compliant banking foundation for personal wealth management.' }
    ],
    requirementsTitle: 'Common Documents for Personal Account Opening',
    requirements: ['Valid identity document', 'Valid passport and applicable travel documents', 'Proof of address or valid correspondence details', 'Tax residency self-certification', 'Occupation, income and source-of-funds evidence', 'Account purpose and expected transaction profile'],
    processTitle: `${nameEn} Personal Account Opening Process`,
    processes: [
      { iconId: '#icon-agreement', title: 'Consultation', description: 'Review identity, purpose, source of funds and bank preferences.' },
      { iconId: '#icon-notes', title: 'Document review', description: 'Prepare and supplement documents required by the selected bank.' },
      { iconId: '#icon-city', title: 'Verification', description: 'Book an in-person appointment or remote identity verification as required.' },
      { iconId: '#icon-audit', title: 'Bank review', description: 'The bank completes identity checks, due diligence and approval.' },
      { iconId: '#icon-award-line', title: 'Account materials', description: 'Receive account and card materials according to bank arrangements.' },
      { iconId: '#icon-folder-success-one', title: 'Account activation', description: 'Activate online banking and maintain the account as required.' }
    ],
    banksTitle: `${nameEn} Personal Bank Options and Eligibility`,
    faqTitle: `${nameEn} Personal Account FAQs`,
    faqs: [
      { question: `Can Mainland residents apply for a ${nameEn} personal account?`, answer: 'Some banks accept eligible non-resident applicants. Acceptance and documents depend on the bank, customer profile and current policy.' },
      { question: 'Is an in-person visit required?', answer: 'Identity verification varies by bank and may require a branch visit, remote witnessing or an online process.' },
      { question: 'How long does account opening take?', answer: 'Appointment availability and compliance review times vary by bank and document completeness. No fixed approval time can be guaranteed.' },
      { question: 'How should the account be maintained?', answer: 'Keep reasonable activity, respond to bank reviews promptly, maintain valid contact details and retain evidence of source of funds and transaction purpose.' }
    ]
  }
})

export const regionPersonalConfigs = {
  hk: {
    region: 'hk', boxClass: 'constructions_box', content1Class: 'constructions_content1', content2Class: 'constructions_content2', bankClass: 'HK_Cooperative_Bank',
    heroImage: asset('company/hk/HK.jpg'), accountImage: asset('account/香港.png'), copy: makeCopy('香港', 'Hong Kong'),
    banks: [
      bank('香港建设银行（亚洲）','CCB Asia','constructions','bank/hk/construction.png'),
      bank('香港中国银行','Bank of China Hong Kong','boc','bank/hk/china.jpg'),
      bank('香港交通银行','Bank of Communications Hong Kong','communications','bank/hk/communications.jpg'),
      bank('香港招商永隆银行','CMB Wing Lung Bank','cmb-winglung','bank/hk/merchants_wing_lung.jpg'),
      bank('香港中信银行（国际）','CNCBI','citic','bank/hk/china_citic.jpg'),
      bank('香港汇丰银行','HSBC Hong Kong','hsbc','bank/hk/HSBC.jpg'),
      bank('香港创兴银行','Chong Hing Bank','chonghing','bank/hk/chong_xing.jpg'),
      bank('香港星展银行','DBS Hong Kong','dbs','bank/hk/DBS.jpg'),
      bank('香港恒生银行','Hang Seng Bank','hangseng','bank/hk/hang_seng.jpg'),
      bank('南洋商业银行','Nanyang Commercial Bank','ncb','bank/hk/NCB.jpg'),
      bank('香港东亚银行','Bank of East Asia','bea','bank/hk/east_asia.jpg'),
      bank('香港大新银行','Dah Sing Bank','dahsing','bank/hk/dah_sing.jpg'),
      bank('华侨银行（香港）','OCBC Hong Kong','ocbc','bank/hk/OCBC.jpg'),
      bank('香港花旗银行','Citibank Hong Kong','citi','bank/hk/citibank.jpg'),
      bank('香港渣打银行','Standard Chartered Hong Kong','sc','bank/hk/Standard_Chartered.jpg'),
      bank('工银亚洲银行','ICBC Asia','icbc','bank/hk/ICBC.jpg'),
      bank('上海商业银行（香港）','Shanghai Commercial Bank','shanghai-commercial','bank/hk/ShangHai.png')
    ]
  },
  sg: {
    region: 'sg', boxClass: 'sg_ocbc_box', content1Class: 'sg_ocbc_content1', content2Class: 'sg_ocbc_content2', bankClass: 'SG_Cooperative_Bank',
    heroImage: asset('company/sg/SG.jpg'), accountImage: asset('account/新加坡.png'), copy: makeCopy('新加坡', 'Singapore'),
    banks: [
      bank('新加坡华侨银行','OCBC Bank','ocbc','bank/sg/华侨银行.png'), bank('新加坡汇丰银行','HSBC Singapore','hsbc','bank/sg/汇丰银行.png'), bank('新加坡马来亚银行','Maybank Singapore','maybank','bank/sg/马来西亚.png'),
      bank('新加坡渣打银行','Standard Chartered Singapore','sc','bank/sg/渣打银行.png'), bank('新加坡大华银行','UOB','uob','bank/sg/大华银行.png'), bank('新加坡星展银行','DBS Bank','dbs','bank/sg/星展银行.png'),
      bank('新加坡花旗银行','Citibank Singapore','citi','bank/sg/花旗银行.png'), bank('新加坡银行','Bank of Singapore','bos','bank/sg/新加披银行.png'), bank('新加坡中国银行','Bank of China Singapore','boc','bank/sg/中国银行.png')
    ]
  },
  mo: {
    region: 'mo', boxClass: 'mo_icbc_box', content1Class: 'mo_icbc_content1', content2Class: 'mo_icbc_content2', bankClass: 'MO_Cooperative_Bank',
    heroImage: asset('company/mo/MO.jpg'), accountImage: asset('account/澳门.png'), copy: makeCopy('澳门', 'Macao'),
    banks: [
      bank('澳门立桥银行','Well Link Bank','wl','bank/mo/立桥银行.png'), bank('澳门工银亚洲银行','ICBC Asia (Macao)','icbc-asia','bank/mo/工银亚洲银行.png'), bank('澳门中国银行','Bank of China (Macao)','boc','bank/mo/中国银行.png'),
      bank('澳门国际银行','Luso International Banking','lusobank','bank/mo/国际银行.png'), bank('澳门汇丰银行','HSBC Macao','hsbc','bank/mo/汇丰银行.png'), bank('澳门广发银行','CGB Macao','cgb','bank/mo/广发银行.png'), bank('澳门华侨银行','OCBC Macao','ocbc','bank/mo/华侨银行.png')
    ]
  },
  us: {
    region: 'us', boxClass: 'cbi_box', content1Class: 'cbi_content1', content2Class: 'cbi_content2', bankClass: 'US_Cooperative_Bank',
    heroImage: asset('company/us/US.jpg'), accountImage: asset('account/美国.png'), copy: makeCopy('美国', 'United States'),
    banks: [
      bank('美国富港银行','CBI Bank','cbi','bank/us/富港银行.png'), bank('美国华美银行','East West Bank','ew','bank/us/华美银行.png'), bank('美国国泰银行','Cathay Bank','cathay','bank/us/国泰银行.png'),
      bank('美国银行','Bank of America','boa','bank/us/美国银行.png'), bank('美国Arival银行','Arival Bank','arival','bank/us/arival银行.png'), bank('美国Axos银行','Axos Bank','axos','bank/us/axos.png'), bank('美国汇丰银行','HSBC USA','hsbc','bank/us/汇丰银行.png')
    ]
  }
}
