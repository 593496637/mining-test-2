import { MineData, SummaryItem, LicenseGroup } from './types';

const PLACEHOLDER_TONS = "23432万吨";
const PLACEHOLDER_WT = "327482wt";

export const mineData: MineData[] = [
  {
    id: '1',
    name: "玉龙铜业",
    stats: [
      { label: "铜资源量", value: PLACEHOLDER_TONS },
      { label: "铁资源量", value: PLACEHOLDER_TONS },
    ],
    details: [
      { element: "Cu", grade: "2.5%", metalAmount: PLACEHOLDER_WT },
      { element: "Mo", grade: "2.5%", metalAmount: PLACEHOLDER_WT },
      { element: "TFe", grade: "2.5%", metalAmount: "-" },
      { element: "mFe", grade: "2.5%", metalAmount: "-" },
    ]
  },
  {
    id: '2',
    name: "茶亭",
    stats: [
      { label: "铜资源量", value: PLACEHOLDER_TONS },
    ],
    details: [
      { element: "Cu", grade: "2.5%", metalAmount: PLACEHOLDER_WT },
      { element: "Au", grade: "2.5g/t", metalAmount: "3274t" },
      { element: "Ag", grade: "2.5g/t", metalAmount: "32t" },
    ]
  },
  {
    id: '3',
    name: "锡铁山主矿区",
    stats: [
      { label: "铅锌资源量", value: PLACEHOLDER_TONS },
    ],
    details: [
      { element: "Pb", grade: "2.5%", metalAmount: PLACEHOLDER_WT },
      { element: "Zn", grade: "2.5%", metalAmount: PLACEHOLDER_WT },
      { element: "S", grade: "2.5%", metalAmount: PLACEHOLDER_WT },
      { element: "Au", grade: "22g/t", metalAmount: "327t" },
      { element: "Ag", grade: "22g/t", metalAmount: "32t" },
    ]
  },
  {
    id: '4',
    name: "锡铁山中间沟-断层沟",
    stats: [
      { label: "铅锌资源量", value: PLACEHOLDER_TONS },
    ],
    details: [
      { element: "Pb", grade: "2.5%", metalAmount: PLACEHOLDER_WT },
      { element: "Zn", grade: "2.5%", metalAmount: PLACEHOLDER_WT },
      { element: "S", grade: "2.5%", metalAmount: PLACEHOLDER_WT },
      { element: "Au", grade: "22g/t", metalAmount: "327t" },
      { element: "Ag", grade: "22g/t", metalAmount: "327t" },
    ]
  },
  {
    id: '5',
    name: "西部铜业",
    stats: [
      { label: "铜资源量", value: PLACEHOLDER_TONS },
      { label: "铅锌资源量", value: PLACEHOLDER_TONS },
      { label: "铁资源量", value: PLACEHOLDER_TONS },
    ],
    details: [
      { element: "Cu", grade: "2.5%", metalAmount: PLACEHOLDER_WT },
      { element: "Pb", grade: "2.5%", metalAmount: PLACEHOLDER_WT },
      { element: "Zn", grade: "2.5%", metalAmount: PLACEHOLDER_WT },
      { element: "Ag", grade: "22g/t", metalAmount: "327482wt" },
      { element: "TFe", grade: "2.5%", metalAmount: "-" },
      { element: "mFe", grade: "2.5%", metalAmount: "-" },
    ]
  },
  {
    id: '6',
    name: "双利矿业",
    stats: [
      { label: "铜资源量", value: PLACEHOLDER_TONS },
      { label: "铅锌资源量", value: PLACEHOLDER_TONS },
      { label: "铁资源量", value: PLACEHOLDER_TONS },
    ],
    details: [
      { element: "Cu", grade: "2.5%", metalAmount: PLACEHOLDER_WT },
      { element: "Pb", grade: "30%", metalAmount: PLACEHOLDER_WT },
      { element: "Zn", grade: "30%", metalAmount: PLACEHOLDER_WT },
      { element: "TFe", grade: "30%", metalAmount: "-" },
      { element: "mFe", grade: "30%", metalAmount: "-" },
    ]
  },
  {
    id: '7',
    name: "鑫源-岬村",
    stats: [
      { label: "铅锌资源量", value: PLACEHOLDER_TONS },
    ],
    details: [
      { element: "Cu", grade: "2.5%", metalAmount: PLACEHOLDER_WT },
      { element: "Pb", grade: "2.5%", metalAmount: PLACEHOLDER_WT },
      { element: "Zn", grade: "2.5%", metalAmount: PLACEHOLDER_WT },
      { element: "Ag", grade: "30g/t", metalAmount: "3274t" },
    ]
  },
  {
    id: '8',
    name: "鑫源-有热",
    stats: [
      { label: "铅锌资源量", value: PLACEHOLDER_TONS },
    ],
    details: [
      { element: "Cu", grade: "2.5%", metalAmount: PLACEHOLDER_WT },
      { element: "Pb", grade: "2.5%", metalAmount: PLACEHOLDER_WT },
      { element: "Zn", grade: "2.5%", metalAmount: PLACEHOLDER_WT },
      { element: "Ag", grade: "30g/t", metalAmount: "327t" },
    ]
  },
  {
    id: '9',
    name: "肃北博伦",
    stats: [
      { label: "铁资源量", value: PLACEHOLDER_TONS },
      { label: "钒资源量", value: PLACEHOLDER_TONS },
    ],
    details: [
      { element: "TFe", grade: "2.5%", metalAmount: "-" },
      { element: "mFe", grade: "2.5%", metalAmount: "-" },
      { element: "V2O5", grade: "2.5%", metalAmount: PLACEHOLDER_WT },
    ]
  },
  {
    id: '10',
    name: "哈密博伦",
    stats: [
      { label: "铁资源量", value: PLACEHOLDER_TONS },
    ],
    details: [
      { element: "TFe", grade: "2.5%", metalAmount: "-" },
      { element: "mFe", grade: "2.5%", metalAmount: "-" },
    ]
  },
  {
    id: '11',
    name: "新疆瑞伦",
    stats: [
      { label: "铜资源量", value: PLACEHOLDER_TONS },
    ],
    details: [
      { element: "Cu", grade: "2.5%", metalAmount: PLACEHOLDER_WT },
      { element: "Ni", grade: "2.5%", metalAmount: PLACEHOLDER_WT },
    ]
  },
  {
    id: '12',
    name: "鸿丰伟业",
    stats: [
      { label: "铁资源量", value: PLACEHOLDER_TONS },
    ],
    details: [
      { element: "Cu", grade: "2.5%", metalAmount: PLACEHOLDER_WT },
      { element: "TFe", grade: "2.5%", metalAmount: "-" },
      { element: "mFe", grade: "2.5%", metalAmount: "-" },
    ]
  },
  {
    id: '13',
    name: "大梁矿业",
    stats: [
      { label: "铅锌资源量", value: PLACEHOLDER_TONS },
    ],
    details: [
      { element: "Pb", grade: "2.5%", metalAmount: PLACEHOLDER_WT },
      { element: "Zn", grade: "2.5%", metalAmount: PLACEHOLDER_WT },
      { element: "Ag", grade: "30g/t", metalAmount: "327t" },
    ]
  },
  {
    id: '14',
    name: "它温查汗西",
    stats: [
      { label: "铁资源量", value: PLACEHOLDER_TONS },
      { label: "铜资源量", value: PLACEHOLDER_TONS },
    ],
    details: [
      { element: "Cu", grade: "2.5%", metalAmount: PLACEHOLDER_WT },
      { element: "TFe", grade: "2.5%", metalAmount: "-" },
      { element: "mFe", grade: "2.5%", metalAmount: "-" },
    ]
  },
  {
    id: '15',
    name: "它温查汗",
    stats: [
      { label: "铁资源量", value: PLACEHOLDER_TONS },
    ],
    details: [
      { element: "TFe", grade: "2.5%", metalAmount: "-" },
      { element: "mFe", grade: "2.5%", metalAmount: "-" },
    ]
  },
];

export const mineralSummary: SummaryItem[] = [
  { label: "铜", value: "23432", subValue: "万吨" },
  { label: "铅", value: "23432", subValue: "万吨" },
  { label: "锌", value: "23432", subValue: "万吨" },
  { label: "镍", value: "23432", subValue: "万吨" },
  { label: "钼", value: "23432", subValue: "万吨" },
  { label: "金", value: "32", subValue: "吨" },
  { label: "银", value: "432", subValue: "吨" },
  { label: "五氧化二钒", value: "23432", subValue: "万吨" },
  { label: "铁", value: "23432", subValue: "万吨" },
];

export const saltLakeSummary: SummaryItem[] = [
  { label: "柯柯", value: "23432", subValue: "万吨", color: "NaCl" },
  { label: "茶卡", value: "23432", subValue: "万吨", color: "NaCl" },
  { label: "镁业", value: "23432", subValue: "万吨", color: "MgCl2" },
  { label: "东台", value: "23432", subValue: "万吨", color: "Li" },
];

export const miningLicenses: LicenseGroup = {
  title: "采矿证",
  count: 15,
  items: [
    { company: "西藏玉龙铜业股份有限公司", scale: "450万吨/年", depth: "4340-3700米", validity: "2024-11-14 至 2031-11-29" },
    { company: "西部矿业股份有限公司锡铁山分公司", scale: "150万吨/年", depth: "4340-3700米", validity: "2024-11-14 至 2031-11-29" },
    { company: "西部矿业股份有限公司锡铁山分公司", scale: "20万吨/年", depth: "4340-3700米", validity: "2024-11-14 至 2031-11-29" },
    { company: "巴彦淖尔西部铜业有限公司", scale: "450万吨/年", depth: "4340-3700米", validity: "2024-11-14 至 2031-11-29" },
    { company: "内蒙古双利矿业有限公司", scale: "450万吨/年", depth: "4340-3700米", validity: "2024-11-14 至 2031-11-29" },
    { company: "四川鑫源矿业有限责任公司", scale: "450万吨/年", depth: "4340-3700米", validity: "2024-11-14 至 2031-11-29" },
    { company: "四川鑫源矿业有限责任公司", scale: "450万吨/年", depth: "4340-3700米", validity: "2024-11-14 至 2031-11-29" },
    { company: "四川会东大梁矿业有限公司", scale: "450万吨/年", depth: "4340-3700米", validity: "2024-11-14 至 2031-11-29" },
    { company: "肃北县博伦矿业开发有限责任公司", scale: "450万吨/年", depth: "4340-3700米", validity: "2024-11-14 至 2031-11-29" },
    { company: "哈密博伦矿业有限责任公司", scale: "450万吨/年", depth: "4340-3700米", validity: "2024-11-14 至 2031-11-29" },
    { company: "新疆瑞伦矿业有限责任公司", scale: "450万吨/年", depth: "4340-3700米", validity: "2024-11-14 至 2031-11-29" },
    { company: "青海鸿丰伟业矿产投资有限公司", scale: "450万吨/年", depth: "4340-3700米", validity: "2024-11-14 至 2031-11-29" },
    { company: "青海茶卡盐业有限公司", scale: "450万吨/年", depth: "4340-3700米", validity: "2024-11-14 至 2031-11-29" },
    { company: "青海柯柯制盐有限公司", scale: "450万吨/年", depth: "4340-3700米", validity: "2024-11-14 至 2031-11-29" },
  ]
};

export const explorationLicenses: LicenseGroup = {
  title: "探矿证",
  count: 7,
  items: [
    { company: "西部矿业股份有限公司锡铁山分公司", area: "4.3平方千米", validity: "2024-11-14 至 2031-11-29" },
    { company: "格尔木西矿资源开发有限公司", area: "3.9平方千米", validity: "2024-11-14 至 2034-10-12" },
    { company: "格尔木西矿资源开发有限公司", area: "4.3平方千米", validity: "2024-11-14 至 2031-11-29" },
    { company: "青海淦鑫矿业开发有限公司", area: "4.3平方千米", validity: "2024-11-14 至 2031-11-29" },
  ]
};