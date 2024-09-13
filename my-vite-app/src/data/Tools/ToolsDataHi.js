import language from '../../assets/images/icons/language.svg';
import money from '../../assets/images/icons/money.svg';
import tool1Icon from '../../assets/images/tools/1.png';
import tool2Icon from '../../assets/images/tools/2.png';
import tool3Icon from '../../assets/images/tools/3.png';
import tool4Icon from '../../assets/images/tools/4.png'

export default [
    {
      id: 1,
      title: "मूल्य अस्थिरता पूर्वानुमान",
      subTitle: "वर्तमान प्रवृत्तींवर आधारित भविष्य मूल्यांचा अंदाज लावा",
      output: "₹ 2250 ते ₹ 2500 मोठा सौदा आहे",
      img: money,
      path: '/crop-price-analysis-tool',
      styles: {
        color: "#ffffff",
        backgroundImage: `url(${tool1Icon})`
      },
    },
    {
      id: 2,
      title: "बाजार प्रवृत्ती विश्लेषण टूल",
      subTitle: "माहितीपूर्ण निर्णय घेण्यासाठी बाजार प्रवृत्तींचा विश्लेषण करा",
      output: "₹ 2250 ते ₹ 2500 मोठा सौदा आहे",
      img: money,
      path: '/market-trend-analysis',
      styles: {
        color: "#ffffff",
        backgroundImage: `url(${tool3Icon})`
      },
    },
    {
      id: 3,
      title: "बफर स्टॉक मूल्य विश्लेषण",
      subTitle: "बफर स्टॉक मूल्यांचा आणि अनुकूलतम कापणी रणनीतींचा मूल्यांकन करा",
      img: language,
      newTab: false,
      path: '/buffer-stock-price-analysis',
      pathNewTab: "(link unavailable)",
      styles: {
        backgroundImage: `url(${tool2Icon})`
      },
    },
    {
      id: 4,
      title: "बुआई से बिक्री डैशबोर्ड",
      subTitle: "रियल-टाइम प्राइसिंग के साथ आपके फसल की यात्रा को सशक्त बनाना",
      img: language,
      newTab: false,
      comingSoon: true,
      path: '/',
      styles: { backgroundImage: `url(${tool4Icon})` },
  },
  {
      id: 5,
      title: "खाद्य मूल्य निगरानी प्रणाली",
      subTitle: "प्रवृत्तियों का विश्लेषण करें और सूचित निर्णय लें",
      img: language,
      newTab: false,
      comingSoon: true,
      path: '/',
      styles: { backgroundImage: `url(${tool4Icon})` },
  }  
  ];
  