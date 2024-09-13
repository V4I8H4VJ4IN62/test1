import language from '../../assets/images/icons/language.svg';
import money from '../../assets/images/icons/money.svg';
import tool1Icon from '../../assets/images/tools/1.png';
import tool2Icon from '../../assets/images/tools/2.png';
import tool3Icon from '../../assets/images/tools/3.png';
import tool4Icon from '../../assets/images/tools/4.png'

export default [
    {
        id: 1,
        title: "किंमत अस्थिरता भविष्यवक्ता",
        subTitle: "सध्याच्या प्रवाहावर आधारित भविष्यातील किंमतींची भविष्यवाणी करा",
        output: "₹ 2250 ते ₹ 2500 हा एक मोठा करार आहे",
        img: money,
        path: '/crop-price-analysis-tool',
        styles: { color: "#ffffff", backgroundImage: `url(${tool1Icon})` },
    },
    {
        id: 2,
        title: "बाजार प्रवृत्ती विश्लेषण साधन",
        subTitle: "माहितीपूर्ण निर्णय घेण्यासाठी बाजारातील प्रवृत्तीचे विश्लेषण करा",
        output: "₹ 2250 ते ₹ 2500 हा एक मोठा करार आहे",
        img: money,
        path: '/market-trend-analysis',
        styles: { color: "#ffffff", backgroundImage: `url(${tool3Icon})` },
    },
    {
        id: 3,
        title: "बफर स्टॉक किंमत विश्लेषण",
        subTitle: "बफर स्टॉकच्या किंमती आणि योग्य कापणी धोरणांचे मूल्यमापन करा",
        img: language,
        newTab: false,
        path: '/buffer-stock-price-analysis',
        pathNewTab: "http://127.0.0.1:5000",
        styles: { backgroundImage: `url(${tool2Icon})` },
    },
    {
        id: 4,
        title: "पेरणी ते विक्री डॅशबोर्ड",
        subTitle: "तत्कालीन किमतीसह आपल्या पिकांच्या प्रवासास सशक्त करा",
        img: language,
        newTab: false,
        comingSoon: true,
        path: '/',
        styles: { backgroundImage: `url(${tool4Icon})` },
    },
    {
        id: 5,
        title: "अन्न किंमत देखरेख प्रणाली",
        subTitle: "ट्रेंड्सचा विश्लेषण करा आणि माहितीपूर्ण निर्णय घ्या",
        img: language,
        newTab: false,
        comingSoon: true,
        path: '/',
        styles: { backgroundImage: `url(${tool4Icon})` },
    }
    
];

