import language from '../../assets/images/icons/language.svg';
import money from '../../assets/images/icons/money.svg';
import tool1Icon from '../../assets/images/tools/1.png';
import tool2Icon from '../../assets/images/tools/2.png';
import tool3Icon from '../../assets/images/tools/3.png';
import tool4Icon from '../../assets/images/tools/4.png'
export default [
    {
        id: 1,
        title: "Price Volatility Predictor",
        subTitle: "Predict future prices based on current trends",
        output: "₹ 2250 to ₹ 2500 is a big deal",
        img: money,
        path: '/crop-price-analysis-tool',
        styles: { color: "#ffffff", backgroundImage: `url(${tool1Icon})` },
    },
    {
        id: 2,
        title: "Market Trend Analysis Tool",
        subTitle: "Analyze market trends to make informed decisions",
        img: money,
        path: '/market-trend-analysis',
        styles: { color: "#ffffff", backgroundImage: `url(${tool3Icon})` },
    },
    {
        id: 3,
        title: "Buffer Stock Price Analysis",
        subTitle: "Evaluate buffer stock prices and optimal harvesting strategies",
        img: language,
        newTab: false,
        path: '/buffer-stock-price-analysis',
        styles: { backgroundImage: `url(${tool2Icon})` },
    },
    {
        id: 4,
        title: "Sowing to Selling Dashboard",
        subTitle: "Empowering Your Crop's Journey with Real-Time Pricing",
        img: language,
        newTab: false,
        comingSoon: true,
        path: '/',
        styles: { backgroundImage: `url(${tool4Icon})` },
    },
    {
        id: 5,
        title: "Food Price Monitoring System",
        subTitle: "Analyze Trends and Make Informed Decisions",
        img: language,
        newTab: false,
        comingSoon: true,
        path: '/',
        styles: { backgroundImage: `url(${tool4Icon})` },
    },
];
