import language from '../../assets/images/icons/language.svg';
import money from '../../assets/images/icons/money.svg';
import tool1Icon from '../../assets/images/tools/1.png';
import tool2Icon from '../../assets/images/tools/2.png';
import tool3Icon from '../../assets/images/tools/3.png';
import tool4Icon from '../../assets/images/tools/4.png'

export default [
    {
        id: 1,
        title: "ధర అస్థిరత అంచనా వేత్త",
        subTitle: "ప్రస్తుత ధోరణుల ఆధారంగా భవిష్యత్ ధరలను అంచనా వేయండి",
        output: "₹ 2250 నుండి ₹ 2500 ఒక పెద్ద డీల్",
        img: money,
        path: '/crop-price-analysis-tool',
        styles: { color: "#ffffff", backgroundImage: `url(${tool1Icon})` },
    },
    {
        id: 2,
        title: "మార్కెట్ ట్రెండ్ విశ్లేషణ సాధనం",
        subTitle: "సమగ్రమైన నిర్ణయాలు తీసుకోవడానికి మార్కెట్ ధోరణులను విశ్లేషించండి",
        output: "₹ 2250 నుండి ₹ 2500 ఒక పెద్ద డీల్",
        img: money,
        path: '/market-trend-analysis',
        styles: { color: "#ffffff", backgroundImage: `url(${tool3Icon})` },
    },
    {
        id: 3,
        title: "బఫర్ స్టాక్ ధర విశ్లేషణ",
        subTitle: "బఫర్ స్టాక్ ధరలను మరియు సరైన పంట ఉత్పత్తి వ్యూహాలను అంచనా వేయండి",
        img: language,
        newTab: false,
        path: '/buffer-stock-price-analysis',
        pathNewTab: "http://127.0.0.1:5000",
        styles: { backgroundImage: `url(${tool2Icon})` },
    },
    {
        id: 4,
        title: "నాటకానికి నుండి అమ్మకానికి డాష్‌బోర్డ్",
        subTitle: "రియల్-టైమ్ ధరలతో మీ పంట ప్రయాణాన్ని శక్తివంతం చేయడం",
        img: language,
        newTab: false,
        comingSoon: true,
        path: '/',
        styles: { backgroundImage: `url(${tool4Icon})` },
    },
    {
        id: 5,
        title: "ఆహార ధర మానిటరింగ్ సిస్టం",
        subTitle: "ట్రెండ్లను విశ్లేషించండి మరియు సమాచార ఆధారిత నిర్ణయాలు తీసుకోండి",
        img: language,
        newTab: false,
        comingSoon: true,
        path: '/',
        styles: { backgroundImage: `url(${tool4Icon})` },
    }    
];
