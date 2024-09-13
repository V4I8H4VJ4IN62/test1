import React from "react"
import "./Hero.css"
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useTranslation } from "react-i18next";
import heroBg from '../../assets/images/background/hero.jpg'
export default function Hero({isAuth}) {
    React.useEffect(
        () => {
            AOS.init({duration: 900, once: false})
        }, []
    ) 
    const { t } = useTranslation('hero');
    const languages = [
        'Balancing Markets, Securing Futures — Powered by Data.', // English
        'बाजारों का संतुलन, सुरक्षित भविष्य — डेटा द्वारा संचालित।', // Hindi
        'বাজারগুলির ভারসাম্য রক্ষা, ভবিষ্যৎ সুরক্ষা — ডেটা দ্বারা চালিত।', // Bengali
        'சந்தைகளை சமநிலைசெய்தல், எதிர்காலத்தை பாதுகாக்குதல் — தரவால் இயக்கப்படுகிறது.', // Tamil
        'మార్కెట్లను సమతుల్యం చేస్తూ, భవిష్యత్తులను సురక్షితం చేస్తూ — డేటా శక్తితో.', // Telugu
        'ಮಾರುಕಟ್ಟೆಗಳನ್ನು ಸಮತೋಲನಗೊಳಿಸುವುದು, ಭವಿಷ್ಯಗಳನ್ನು ಸುರಕ್ಷಿತಗೊಳಿಸುವುದು — ಡೇಟಾದಿಂದ ಶಕ್ತಿ.', // Kannada
        'બજારોનું સંતુલન, ભવિષ્યની સુરક્ષા — ડેટા દ્વારા સંચાલિત.', // Gujarati
        'വിപണികളുടെ സ്തിരീകരണം, ഭാവികളുടെ സുരക്ഷ — ഡേറ്റായാൽ സജീവമാക്കുന്നു.' // Malayalam
      ];
    
      const [currentText, setCurrentText] = React.useState(languages[0]);
      const [fade, setFade] = React.useState(true);
    
      React.useEffect(() => {
        const intervalId = setInterval(() => {
          setFade(false);
          setTimeout(() => {
            const currentIndex = languages.indexOf(currentText);
            const nextIndex = (currentIndex + 1) % languages.length;
            setCurrentText(languages[nextIndex]);
            setFade(true);
          }, 500); 
    
        }, 6000);
    
        return () => clearInterval(intervalId);
      }, [currentText, languages]);
      
    return(
        <section id="hero" className="section-p" data-aos="fade-in" data-aos-delay="520">
            <div className="hero-title">
                
                <h1 className={`fade-up ${fade ? 'fade-in' : 'fade-out'}`}> {currentText}</h1>
                <h1>
                    <p className="hero--slogan">{t('subTitle')}</p>
                    {isAuth && <p>Welcome {JSON.parse(localStorage.getItem('UserRegisterData')).name}</p>}
                </h1>
            </div>
            <div className="hero-grid">
                <img src={heroBg} alt="" />
            </div>
        </section>

    )
 }