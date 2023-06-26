"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function main() {
    const area = await prisma.area.createMany({
        data: [
            {
                area: "新界",
            },
            {
                area: "九龍",
            },
            {
                area: "港島",
            },
        ],
    });
    const existArea = await prisma.area.findMany();
    const district = await prisma.district.createMany({
        data: [
            {
                area_id: existArea[0].id,
                district: "荃灣區",
            },
            {
                area_id: existArea[0].id,
                district: "葵青區",
            },
            {
                area_id: existArea[0].id,
                district: "屯門區",
            },
            {
                area_id: existArea[0].id,
                district: "元朗區",
            },
            {
                area_id: existArea[0].id,
                district: "北區",
            },
            {
                area_id: existArea[0].id,
                district: "大埔區",
            },
            {
                area_id: existArea[0].id,
                district: "沙田區",
            },
            {
                area_id: existArea[0].id,
                district: "西貢區",
            },
            {
                area_id: existArea[0].id,
                district: "離島區",
            },
            {
                area_id: existArea[1].id,
                district: "深水埗區",
            },
            {
                area_id: existArea[1].id,
                district: "九龍城區",
            },
            {
                area_id: existArea[1].id,
                district: "黃大仙區",
            },
            {
                area_id: existArea[1].id,
                district: "觀塘區",
            },
            {
                area_id: existArea[1].id,
                district: "油尖旺區",
            },
            {
                area_id: existArea[2].id,
                district: "中西區",
            },
            {
                area_id: existArea[2].id,
                district: "灣仔區",
            },
            {
                area_id: existArea[2].id,
                district: "東區",
            },
            {
                area_id: existArea[2].id,
                district: "西區",
            },
        ],
    });
    const existDistrict = await prisma.district.findMany();
    const bank = await prisma.bank.createMany({
        data: [
            {
                bank_code: "012",
                bank_name: "BANK OF CHINA (HONG KONG) LIMITED",
            },
            {
                bank_code: "003",
                bank_name: "STANDARD CHARTERED BANK (HONG KONG) LIMITED",
            },
            {
                bank_code: "004",
                bank_name: "THE HONGKONG AND SHANGHAI BANKIN CORPORATION LIMITED",
            },
            {
                bank_code: "005",
                bank_name: "CREDIT AGRICOLE CORPORATE AND INVESTMENT BANK",
            },
            {
                bank_code: "006",
                bank_name: "CITIBANK, N.A.",
            },
            {
                bank_code: "007",
                bank_name: "JPMORGAN CHASE BANK, N.A.",
            },
            {
                bank_code: "008",
                bank_name: "NATWEST MARKETS PLC",
            },
            {
                bank_code: "009",
                bank_name: "CHINA CONSTRUCTION BANK (ASIA CORPORATION LIMITED",
            },
            {
                bank_code: "015",
                bank_name: "THE BANK OF EAST ASIA, LIMITED",
            },
            {
                bank_code: "016",
                bank_name: "DBS BANK (HONG KONG) LIMITED",
            },
            {
                bank_code: "018",
                bank_name: "CHINA CITIC BANK INTERNATIONAL LIMITED",
            },
            {
                bank_code: "020",
                bank_name: "CMB WING LUNG BANK LIMITED",
            },
            {
                bank_code: "022",
                bank_name: "OVERSEA-CHINESE BANKING CORPORATION LTD.",
            },
            {
                bank_code: "024",
                bank_name: "HANG SENG BANK LTD.",
            },
            {
                bank_code: "025",
                bank_name: "SHANGHAI COMMERCIAL BANK LTD.",
            },
            {
                bank_code: "027",
                bank_name: "BANK OF COMMUNICATIONS CO., LTD",
            },
            {
                bank_code: "028",
                bank_name: "PUBLIC BANK (HONG KONG) LIMITED",
            },
            {
                bank_code: "035",
                bank_name: "OCBC WING HANG BANK LIMITED",
            },
            {
                bank_code: "038",
                bank_name: "TAI YAU BANK LTD",
            },
            {
                bank_code: "039",
                bank_name: "CHIYU BANKING CORPORATION LTD.",
            },
            {
                bank_code: "040",
                bank_name: "DAH SING BANK, LTD.",
            },
            {
                bank_code: "041",
                bank_name: "CHONG HING BANK LIMITED",
            },
            {
                bank_code: "043",
                bank_name: "NANYANG COMMERCIAL BANK, LTD.",
            },
            {
                bank_code: "045",
                bank_name: "UCO BANK",
            },
            {
                bank_code: "046",
                bank_name: "KEB HANA BANK",
            },
            {
                bank_code: "047",
                bank_name: "MUFG BANK, LTD.",
            },
            {
                bank_code: "049",
                bank_name: "BANGKOK BANK PUBLIC COMPANY LIMITED",
            },
            {
                bank_code: "050",
                bank_name: "INDIAN OVERSEAS BANK",
            },
            {
                bank_code: "054",
                bank_name: "DEUTSCHE BANK AG",
            },
            {
                bank_code: "055",
                bank_name: "BANK OF AMERICA, NATIONA ASSOCIATION",
            },
            {
                bank_code: "056",
                bank_name: "BNP PARIBAS",
            },
            {
                bank_code: "058",
                bank_name: "BANK OF INDIA",
            },
            {
                bank_code: "060",
                bank_name: "NATIONAL BANK OF PAKISTAN",
            },
            {
                bank_code: "061",
                bank_name: "TAI SANG BANK LIMITED",
            },
            {
                bank_code: "063",
                bank_name: "MALAYAN BANKING BERHAD (MAYBANK)",
            },
            {
                bank_code: "065",
                bank_name: "SUMITOMO MITSUI BANKIN CORPORATION",
            },
            {
                bank_code: "066",
                bank_name: "PT. BANK NEGARA INDONESIA (PERSERO)",
            },
            {
                bank_code: "067",
                bank_name: "BDO UNIBANK, INC.",
            },
            {
                bank_code: "071",
                bank_name: "UNITED OVERSEAS BANK LTD.",
            },
            {
                bank_code: "072",
                bank_name: "INDUSTRIAL AND COMMERCIAL BANK OF CHINA (ASIA) LIMITED",
            },
            {
                bank_code: "074",
                bank_name: "BARCLAYS BANK PLC.",
            },
            {
                bank_code: "076",
                bank_name: "THE BANK OF NOVA SCOTIA",
            },
            {
                bank_code: "080",
                bank_name: "ROYAL BANK OF CANADA",
            },
            {
                bank_code: "081",
                bank_name: "SOCIETE GENERALE",
            },
            {
                bank_code: "082",
                bank_name: "STATE BANK OF INDIA",
            },
            {
                bank_code: "085",
                bank_name: "THE TORONTO-DOMINION BANK",
            },
            {
                bank_code: "086",
                bank_name: "BANK OF MONTREAL",
            },
            {
                bank_code: "092",
                bank_name: "CANADIAN IMPERIAL BANK OF COMMERCE 加拿大帝國商業銀行",
            },
            {
                bank_code: "097",
                bank_name: "COMMERZBANK AG",
            },
            {
                bank_code: "103",
                bank_name: "UBS AG, HONG KONG",
            },
            {
                bank_code: "106",
                bank_name: "HSBC BANK USA, NATIONAL ASSOCIATION",
            },
            {
                bank_code: "109",
                bank_name: "MIZUHO BANK, LTD.",
            },
            {
                bank_code: "113",
                bank_name: "DZ BANK AG DEUTSCHE ZENTRAL-GENOSSENSCHAFTSBANK",
            },
            {
                bank_code: "118",
                bank_name: "WOORI BANK",
            },
            {
                bank_code: "119",
                bank_name: "PHILIPPINE NATIONAL BANK",
            },
            {
                bank_code: "128",
                bank_name: "FUBON BANK (HONG KONG) LIMITED",
            },
            {
                bank_code: "138",
                bank_name: "MITSUBISHI UFJ TRUST AND BANKING CORPORATION",
            },
            {
                bank_code: "139",
                bank_name: "THE BANK OF NEW YORK MELLON",
            },
            {
                bank_code: "145",
                bank_name: "ING BANK N.V.",
            },
            {
                bank_code: "147",
                bank_name: "BANCO BILBAO VIZCAYA ARGENTARIA,",
            },
            {
                bank_code: "150",
                bank_name: "NATIONAL AUSTRALIA BANK LIMITED",
            },
            {
                bank_code: "151",
                bank_name: "WESTPAC BANKING CORPORATION",
            },
            {
                bank_code: "152",
                bank_name: "AUSTRALIA AND NEW ZEALAND BANKING GROUP LTD.",
            },
            {
                bank_code: "153",
                bank_name: "COMMONWEALTH BANK OF AUSTRALIA",
            },
            {
                bank_code: "161",
                bank_name: "INTESA SANPAOLO S.P.A.",
            },
            {
                bank_code: "164",
                bank_name: "UNICREDIT BANK AG",
            },
            {
                bank_code: "170",
                bank_name: "THE CHIBA BANK LTD",
            },
            {
                bank_code: "178",
                bank_name: "KBC BANK N.V.",
            },
            {
                bank_code: "180",
                bank_name: "WELLS FARGO BANK, N.A.",
            },
            {
                bank_code: "183",
                bank_name: "COÖPERATIEVE RABOBANK U.A.",
            },
            {
                bank_code: "185",
                bank_name: "DBS BANK LTD, HONG KONG BRANCH",
            },
            {
                bank_code: "186",
                bank_name: "THE SHIZUOKA BANK LTD.",
            },
            {
                bank_code: "188",
                bank_name: "THE HACHIJUNI BANK LTD.",
            },
            {
                bank_code: "198",
                bank_name: "HUA NAN COMMERCIAL BANK LTD.",
            },
            {
                bank_code: "199",
                bank_name: "THE SHIGA BANK, LTD.",
            },
            {
                bank_code: "201",
                bank_name: "BANK OF TAIWAN",
            },
            {
                bank_code: "202",
                bank_name: "THE CHUGOKU BANK LIMITED",
            },
            {
                bank_code: "203",
                bank_name: "FIRST COMMERCIAL BANK",
            },
            {
                bank_code: "206",
                bank_name: "CHANG HWA COMMERCIAL BANK LTD.",
            },
            {
                bank_code: "210",
                bank_name: "NATIXIS",
            },
            {
                bank_code: "214",
                bank_name: "INDUSTRIAL AND COMMERCIAL BANK OF CHINA LIMITED",
            },
            {
                bank_code: "220",
                bank_name: "STATE STREET BANK AND TRUST COMPANY",
            },
            {
                bank_code: "221",
                bank_name: "CHINA CONSTRUCTION BAN CORPORATION",
            },
            {
                bank_code: "222",
                bank_name: "AGRICULTURAL BANK OF CHINA LIMITED",
            },
            {
                bank_code: "227",
                bank_name: "ERSTE GROUP BANK AG",
            },
            {
                bank_code: "229",
                bank_name: "CTBC BANK CO., LTD.",
            },
            {
                bank_code: "230",
                bank_name: "TAIWAN BUSINESS BANK, LTD.",
            },
            {
                bank_code: "233",
                bank_name: "CREDIT SUISSE AG",
            },
            {
                bank_code: "236",
                bank_name: "CATHAY UNITED BANK COMPANY, LIMITED 國泰世華商業銀行股份有限公司",
            },
            {
                bank_code: "237",
                bank_name: "EFG BANK AG",
            },
            {
                bank_code: "238",
                bank_name: "CHINA MERCHANTS BANK CO., LTD.",
            },
            {
                bank_code: "239",
                bank_name: "TAIPEI FUBON COMMERCIAL BANK CO., LTD.",
            },
            {
                bank_code: "241",
                bank_name: "BANK SINOPAC",
            },
            {
                bank_code: "242",
                bank_name: "MEGA INTERNATIONAL COMMERCIAL BANK CO., LTD.",
            },
            {
                bank_code: "243",
                bank_name: "E.SUN COMMERCIAL BANK, LTD.",
            },
            {
                bank_code: "245",
                bank_name: "TAISHIN INTERNATIONAL BANK CO., LTD.",
            },
            {
                bank_code: "248",
                bank_name: "HONG LEONG BANK BERHAD",
            },
            {
                bank_code: "249",
                bank_name: "STANDARD CHARTERED BANK HONG KONG BRANCH",
            },
            {
                bank_code: "250",
                bank_name: "CITIBANK (HONG KONG) LIMITED",
            },
            {
                bank_code: "251",
                bank_name: "ICICI BANK LIMITED",
            },
            {
                bank_code: "254",
                bank_name: "MELLI BANK PLC",
            },
            {
                bank_code: "258",
                bank_name: "EAST WEST BANK",
            },
            {
                bank_code: "260",
                bank_name: "FAR EASTERN INTERNATIONAL BANK",
            },
            {
                bank_code: "263",
                bank_name: "CATHAY BANK",
            },
            {
                bank_code: "264",
                bank_name: "LAND BANK OF TAIWAN CO., LTD.",
            },
            {
                bank_code: "265",
                bank_name: "TAIWAN COOPERATIVE BANK, LTD.",
            },
            {
                bank_code: "266",
                bank_name: "PUNJAB NATIONAL BANK",
            },
            {
                bank_code: "267",
                bank_name: "BANCO SANTANDER S.A.",
            },
            {
                bank_code: "268",
                bank_name: "UNION BANK OF INDIA",
            },
            {
                bank_code: "269",
                bank_name: "THE SHANGHAI COMMERCIAL & SAVING BANK LTD.",
            },
            {
                bank_code: "271",
                bank_name: "INDUSTRIAL BANK OF KOREA",
            },
            {
                bank_code: "272",
                bank_name: "BANK OF SINGAPORE LIMITED",
            },
            {
                bank_code: "273",
                bank_name: "SHINHAN BANK",
            },
            {
                bank_code: "274",
                bank_name: "O-BANK CO., LTD",
            },
            {
                bank_code: "275",
                bank_name: "BNP PARIBAS SECURITIES SERVICES",
            },
            {
                bank_code: "276",
                bank_name: "CHINA DEVELOPMENT BANK",
            },
            {
                bank_code: "277",
                bank_name: "FIRST ABU DHABI BANK PJSC",
            },
            {
                bank_code: "278",
                bank_name: "BANK J. SAFRA SARASIN LTD.",
            },
            {
                bank_code: "307",
                bank_name: "ABN AMRO BANK N.V.",
            },
            {
                bank_code: "308",
                bank_name: "HDFC BANK LIMITED",
            },
            {
                bank_code: "309",
                bank_name: "UNION BANCAIRE PRIVEE, UBP SA",
            },
            {
                bank_code: "316",
                bank_name: "SKANDINAVISKA ENSKILDA BANKEN AB",
            },
            {
                bank_code: "320",
                bank_name: "BANK JULIUS BAER & CO. LTD.",
            },
            {
                bank_code: "324",
                bank_name: "CREDIT INDUSTRIEL ET COMMERCIAL",
            },
            {
                bank_code: "337",
                bank_name: "TAIWAN SHIN KONG COMMERCIAL BAN CO., LTD.",
            },
            {
                bank_code: "338",
                bank_name: "BANK OF CHINA LIMITED, HONG KONG BRANCH",
            },
            {
                bank_code: "339",
                bank_name: "CA INDOSUEZ (SWITZERLAND) SA",
            },
            {
                bank_code: "342",
                bank_name: "LGT BANK AG",
            },
            {
                bank_code: "344",
                bank_name: "MACQUARIE BANK LIMITED",
            },
            {
                bank_code: "345",
                bank_name: "SHANGHAI PUDONG DEVELOPMENT BAN CO., LTD.",
            },
            {
                bank_code: "353",
                bank_name: "CHINA MINSHENG BANKING CORP., LTD.",
            },
            {
                bank_code: "357",
                bank_name: "PICTET & CIE (EUROPE) S.A.",
            },
            {
                bank_code: "359",
                bank_name: "CHINA GUANGFA BANK CO., LTD.",
            },
            {
                bank_code: "361",
                bank_name: "CHINA BOHAI BANK CO., LTD.",
            },
            {
                bank_code: "365",
                bank_name: "BANK OF DONGGUAN CO., LTD",
            },
            {
                bank_code: "368",
                bank_name: "CHINA EVERBRIGHT BANK CO., LTD.",
            },
            {
                bank_code: "371",
                bank_name: "SUMITOMO MITSUI TRUST BANK, LIMITED",
            },
            {
                bank_code: "372",
                bank_name: "BANK OF SHANGHAI (HONG KONG) LIMITED",
            },
            {
                bank_code: "374",
                bank_name: "CIMB BANK BERHAD",
            },
            {
                bank_code: "376",
                bank_name: "NONGHYUP BANK",
            },
            {
                bank_code: "377",
                bank_name: "INDUSTRIAL BANK CO., LTD",
            },
            {
                bank_code: "378",
                bank_name: "YUANTA COMMERCIAL BANK CO., LTD.",
            },
            {
                bank_code: "379",
                bank_name: "MASHREQ BANK - PUBLIC SHAREHOLDING COMPANY",
            },
            {
                bank_code: "381",
                bank_name: "KOOKMIN BANK",
            },
            {
                bank_code: "382",
                bank_name: "BANK OF COMMUNICATIONS (HONG KONG) LIMITED",
            },
            {
                bank_code: "383",
                bank_name: "CHINA ZHESHANG BANK CO., LTD.",
            },
            {
                bank_code: "384",
                bank_name: "MORGAN STANLEY BANK ASIA LIMITED",
            },
            {
                bank_code: "385",
                bank_name: "PING AN BANK CO., LTD.",
            },
            {
                bank_code: "386",
                bank_name: "HUA XIA BANK CO., LIMITED",
            },
            {
                bank_code: "387",
                bank_name: "ZA BANK LIMITED",
            },
            {
                bank_code: "388",
                bank_name: "LIVI BANK LIMITED",
            },
            {
                bank_code: "389",
                bank_name: "MOX BANK LIMITED",
            },
            {
                bank_code: "390",
                bank_name: "WELAB BANK LIMITED",
            },
            {
                bank_code: "391",
                bank_name: "FUSION BANK LIMITED",
            },
            {
                bank_code: "392",
                bank_name: "PING AN ONECONNECT BANK (HONG KONG LIMITED",
            },
            {
                bank_code: "393",
                bank_name: "ANT BANK (HONG KONG) LIMITED",
            },
            {
                bank_code: "394",
                bank_name: "QATAR NATIONAL BANK (Q.P.S.C.)",
            },
            {
                bank_code: "395",
                bank_name: "AIRSTAR BANK LIMITED",
            },
            {
                bank_code: "802",
                bank_name: "HONG KONG SECURITIES CLEARING COMPANY LIMITED",
            },
            {
                bank_code: "868",
                bank_name: "CONTINUOUS LINKED SETTLEMENT BANK INTERNATIONAL",
            },
        ],
    });
    const existBank = await prisma.bank.findMany();
    const branch = await prisma.branch.createMany({
        data: [
            {
                bank_id: existBank[0].id,
                branch_code: "577",
                branch_name: "Humphrey's Avenue Branch",
            },
            { bank_id: existBank[0].id, branch_code: "576", branch_name: "Caine Road Branch" },
            {
                bank_id: existBank[0].id,
                branch_code: "578",
                branch_name: "North Point (Hang Ying Building) Branch",
            },
            {
                bank_id: existBank[0].id,
                branch_code: "579",
                branch_name: "Ma On Shan Plaza Branch",
            },
            { bank_id: existBank[0].id, branch_code: "580", branch_name: "Sham Tseng Branch" },
            { bank_id: existBank[0].id, branch_code: "581", branch_name: "Jordan Road Branch" },
            { bank_id: existBank[0].id, branch_code: "582", branch_name: "Sau Mau Ping Branch" },
            { bank_id: existBank[0].id, branch_code: "583", branch_name: "Happy Valley Branch" },
            { bank_id: existBank[0].id, branch_code: "584", branch_name: "Flora Plaza Branch" },
            { bank_id: existBank[0].id, branch_code: "585", branch_name: "Fu Shin Estate Branch" },
            {
                bank_id: existBank[0].id,
                branch_code: "349",
                branch_name: "Central District Branch",
            },
            {
                bank_id: existBank[0].id,
                branch_code: "350",
                branch_name: "409 Hennessy Road Branch",
            },
            { bank_id: existBank[0].id, branch_code: "351", branch_name: "Prince Edward Branch" },
            {
                bank_id: existBank[0].id,
                branch_code: "352",
                branch_name: "194 Cheung Sha Wan Road Branch",
            },
            { bank_id: existBank[0].id, branch_code: "353", branch_name: "Ma Tau Wai Road Branch" },
            { bank_id: existBank[0].id, branch_code: "354", branch_name: "Pak Tai Street Branch" },
            { bank_id: existBank[0].id, branch_code: "355", branch_name: "Tsuen Wan Branch" },
            { bank_id: existBank[0].id, branch_code: "356", branch_name: "Kwai Chung Road Branch" },
            { bank_id: existBank[0].id, branch_code: "357", branch_name: "Citywalk Branch" },
            {
                bank_id: existBank[0].id,
                branch_code: "358",
                branch_name: "Sheung Kwai Chung Branch",
            },
            { bank_id: existBank[0].id, branch_code: "359", branch_name: "Texaco Road Branch" },
            {
                bank_id: existBank[0].id,
                branch_code: "360",
                branch_name: "Castle Peak Road (Tsuen Wan) Branch",
            },
            { bank_id: existBank[0].id, branch_code: "361", branch_name: "Ha Kwai Chung Branch" },
            { bank_id: existBank[0].id, branch_code: "362", branch_name: "Mong Kok Branch" },
            { bank_id: existBank[0].id, branch_code: "363", branch_name: "Fuk Tsun Street Branch" },
            { bank_id: existBank[0].id, branch_code: "364", branch_name: "Kwong Fuk Road Branch" },
        ],
    });
    const existBranch = await prisma.branch.findMany();
    const tag = await prisma.tag.createMany({
        data: [
            {
                tag: "角色扮演",
            },
            {
                tag: "動作冒險",
            },
            {
                tag: "射擊",
            },
            {
                tag: "競技",
            },
            {
                tag: "劇情",
            },
            {
                tag: "合作",
            },
            {
                tag: "體育",
            },
            {
                tag: "策略",
            },
            {
                tag: "格鬥",
            },
            {
                tag: "音樂",
            },
            {
                tag: "解謎",
            },
            {
                tag: "卡牌",
            },
            {
                tag: "家庭",
            },
            {
                tag: "育成",
            },
            {
                tag: "生存",
            },
            {
                tag: "工藝",
            },
            {
                tag: "恐怖",
            },
        ],
    });
    const existTag = await prisma.tag.findMany();
    const platform = await prisma.platform.createMany({
        data: [
            {
                platform: "PlayStation",
            },
            {
                platform: "Switch",
            },
            {
                platform: "XBOX",
            },
        ],
    });
    const existPlatform = await prisma.platform.findMany();
    const product = await prisma.product.createMany({
        data: [
            {
                product_status: true,
                product_name: "寶可夢朱紫",
                product_image: "PKM朱紫.jpeg",
                release_date: "2022-11-18",
                product_intro: "pokemon",
                view: 0,
                platform_id: 2,
                hot: true,
            },
            {
                product_status: true,
                product_name: "薩爾達傳說王國之淚",
                product_image: "薩爾達傳說王國之淚.jpeg",
                release_date: "2023-05-12",
                product_intro: "zelda",
                view: 0,
                platform_id: 2,
                hot: true,
            },
            {
                product_status: true,
                product_name: "NBA 2K23",
                product_image: "2K23.jpeg",
                release_date: "2023-06-06",
                product_intro: "NBA",
                view: 0,
                platform_id: 1,
                hot: false,
            },
            {
                product_status: true,
                product_name: "星之卡比 探索發現",
                product_image: "星之卡比.jpeg",
                release_date: "2022-10-23",
                product_intro: "Hi",
                view: 0,
                platform_id: 2,
                hot: false,
            },
            {
                product_status: true,
                product_name: "Grand Theft Auto V",
                product_image: "GTA5.jpeg",
                release_date: "2016-05-18",
                product_intro: "GTA 5",
                view: 0,
                platform_id: 3,
                hot: false,
            },
            {
                product_status: true,
                product_name: "Call of Duty: Black Ops II",
                product_image: "Call_Duty.jpeg",
                release_date: "2012-11-12",
                product_intro: "Call of Duty",
                view: 0,
                platform_id: 3,
                hot: false,
            },
            {
                product_status: true,
                product_name: "Spider Man 2 Miles",
                product_image: "Spider_Man_Miles_ps5.jpeg",
                release_date: "2020-11-12",
                product_intro: "Spider-Man",
                view: 0,
                platform_id: 1,
                hot: false,
            },
            {
                product_status: true,
                product_name: "Nintendo Switch 運動",
                product_image: "Switch_Sport.jpeg",
                release_date: "2023-10-29",
                product_intro: "Sport",
                view: 0,
                platform_id: 2,
                hot: false,
            },
            {
                product_status: true,
                product_name: "霍格華茲的傳承",
                product_image: "哈利波特_ps.jpeg",
                release_date: "2023-10-07",
                product_intro: "哈利波特",
                view: 0,
                platform_id: 1,
                hot: true,
            },
            {
                product_status: true,
                product_name: "THE KING OF FIGHTERS XV",
                product_image: "THE_KING_OF_FIGHTERS_XV_XBOX.jpeg",
                release_date: "2023-10-14",
                product_intro: "格鬥天王",
                view: 0,
                platform_id: 3,
                hot: false,
            },
        ],
    });
    const existProduct = await prisma.product.findMany();
    const version = await prisma.version.createMany({
        data: [
            {
                product_id: existProduct[0].id,
                version: "朱版",
                version_image: "PKM朱.jpeg",
            },
            {
                product_id: existProduct[0].id,
                version: "紫版",
                version_image: "PKM紫.jpeg",
            },
            {
                product_id: existProduct[0].id,
                version: "朱紫雙版本",
                version_image: "朱紫雙版.jpeg",
            },
            {
                product_id: existProduct[1].id,
                version: "標準版",
                version_image: "薩爾達傳說王國之淚_普通.jpeg",
            },
            {
                product_id: existProduct[1].id,
                version: "特典",
                version_image: "薩爾達傳說王國之淚_特典.jpeg",
            },
            {
                product_id: existProduct[2].id,
                version: "標準版",
                version_image: "2K23.jpeg",
            },
            {
                product_id: existProduct[2].id,
                version: "豪華版",
                version_image: "2K23_豪華版.jpeg",
            },
            {
                product_id: existProduct[3].id,
                version: "標準版",
                version_image: "星之卡比_標準版.jpeg",
            },
            {
                product_id: existProduct[4].id,
                version: "標準版",
                version_image: "GTA5.jpeg.jpeg",
            },
            {
                product_id: existProduct[4].id,
                version: "豪華版",
                version_image: "GTA5.jpeg.jpeg",
            },
            {
                product_id: existProduct[5].id,
                version: "標準版",
                version_image: "Call_Duty.jpeg",
            },
            {
                product_id: existProduct[5].id,
                version: "豪華版",
                version_image: "Call_Duty.jpeg",
            },
            {
                product_id: existProduct[6].id,
                version: "標準版",
                version_image: "SPIDER_MAN2普通.jpeg",
            },
            {
                product_id: existProduct[6].id,
                version: "豪華版",
                version_image: "Spider_Man_Miles_豪華.webp",
            },
            {
                product_id: existProduct[7].id,
                version: "標準版",
                version_image: "Switch_Sport_普通.jpeg",
            },
            {
                product_id: existProduct[8].id,
                version: "標準版",
                version_image: "哈利波特_標準.jpeg",
            },
            {
                product_id: existProduct[8].id,
                version: "豪華版",
                version_image: "哈利波特_豪華.jpeg",
            },
            {
                product_id: existProduct[9].id,
                version: "標準版",
                version_image: "THE_KING_OF_FIGHTERS_XV_標準.jpeg",
            },
            {
                product_id: existProduct[9].id,
                version: "豪華版",
                version_image: "THE_KING_OF_FIGHTERS_XV_標準.jpeg",
            },
        ],
    });
    const existVersion = await prisma.version.findMany();
    const product_tag = await prisma.product_tag.createMany({
        data: [
            {
                product_id: existProduct[0].id,
                tag_id: 1,
            },
            {
                product_id: existProduct[0].id,
                tag_id: 2,
            },
            {
                product_id: existProduct[0].id,
                tag_id: 4,
            },
            {
                product_id: existProduct[0].id,
                tag_id: 6,
            },
            {
                product_id: existProduct[0].id,
                tag_id: 14,
            },
            {
                product_id: existProduct[1].id,
                tag_id: 1,
            },
            {
                product_id: existProduct[1].id,
                tag_id: 2,
            },
            {
                product_id: existProduct[1].id,
                tag_id: 5,
            },
            {
                product_id: existProduct[1].id,
                tag_id: 11,
            },
            {
                product_id: existProduct[2].id,
                tag_id: 4,
            },
            {
                product_id: existProduct[2].id,
                tag_id: 6,
            },
            {
                product_id: existProduct[2].id,
                tag_id: 7,
            },
            {
                product_id: existProduct[3].id,
                tag_id: 1,
            },
            {
                product_id: existProduct[3].id,
                tag_id: 2,
            },
            {
                product_id: existProduct[3].id,
                tag_id: 13,
            },
            {
                product_id: existProduct[4].id,
                tag_id: 1,
            },
            {
                product_id: existProduct[4].id,
                tag_id: 2,
            },
            {
                product_id: existProduct[4].id,
                tag_id: 3,
            },
            {
                product_id: existProduct[5].id,
                tag_id: 1,
            },
            {
                product_id: existProduct[5].id,
                tag_id: 3,
            },
            {
                product_id: existProduct[5].id,
                tag_id: 4,
            },
            {
                product_id: existProduct[5].id,
                tag_id: 5,
            },
            {
                product_id: existProduct[6].id,
                tag_id: 1,
            },
            {
                product_id: existProduct[6].id,
                tag_id: 2,
            },
            {
                product_id: existProduct[6].id,
                tag_id: 5,
            },
            {
                product_id: existProduct[7].id,
                tag_id: 7,
            },
            {
                product_id: existProduct[7].id,
                tag_id: 4,
            },
            {
                product_id: existProduct[7].id,
                tag_id: 13,
            },
            {
                product_id: existProduct[8].id,
                tag_id: 1,
            },
            {
                product_id: existProduct[8].id,
                tag_id: 2,
            },
            {
                product_id: existProduct[8].id,
                tag_id: 5,
            },
            {
                product_id: existProduct[9].id,
                tag_id: 4,
            },
            {
                product_id: existProduct[9].id,
                tag_id: 9,
            },
        ],
    });
    console.log({
        district,
        area,
        tag,
        platform,
        branch,
        bank,
        product,
        product_tag,
        version,
    });
}
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=insertSeed.js.map