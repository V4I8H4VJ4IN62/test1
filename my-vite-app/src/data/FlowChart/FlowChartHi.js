import objectiveIcon from '../../assets/images/flowchart/objective.png';
import insightsIcon from '../../assets/images/flowchart/insights.png';
import audienceIcon from '../../assets/images/flowchart/audience.png';
import actionIcon from '../../assets/images/flowchart/action.png';
import dataIcon from '../../assets/images/flowchart/data.png';
import modelsIcon from '../../assets/images/flowchart/models.png';

export default [
    {
        id: 1,
        title: "उद्देश्य",
        subTitle: "फसल की कीमतों, बाजार रुझानों और बोने/बेचने के सर्वोत्तम समय की भविष्यवाणी करें।",
        img: objectiveIcon,
        className: 'circle-1',
        alt: 'उद्देश्य आइकन छवि'

    },
    {
        id: 2,
        title: "मॉडल",
        subTitle: "मूल्य और जीवनचक्र पूर्वानुमान के लिए SARIMA, LSTM, और रिग्रेशन का उपयोग करता है।",
        img: modelsIcon,
        className: 'circle-2',
        alt: 'मॉडल आइकन छवि'
    },
    {
        id: 3,
        title: "डेटा",
        subTitle: "ऐतिहासिक कीमतों, मौसम, आपूर्ति श्रृंखला और बाजार डेटा से डेटा प्राप्त करता है।",
        img: dataIcon,
        className: 'circle-3',
        alt: 'डेटा आइकन छवि'


    },
    {
        id: 4,
        title: "अवलोकन",
        subTitle: "मूल्य अस्थिरता, बाजार रुझानों और बफर मूल्य पर भविष्यवाणियाँ प्रदान करता है।",
        img: insightsIcon,
        className: 'circle-4',
        alt: 'अवलोकन आइकन छवि'

    },
    {
        id: 5,
        title: "कार्यान्वयन योग्य",
        subTitle: "बाजार में फसल प्रदर्शन जानने में मदद करता है।",
        img: actionIcon,
        className: 'circle-5',
        alt: 'कार्यान्वयन योग्य आइकन छवि'

    },
    {
        id: 6,
        title: "लक्ष्य समूह",
        subTitle: "सरकार, सहकारी समितियों और व्यापारियों के लिए डिज़ाइन किया गया है, जिन्हें वास्तविक समय में डेटा-आधारित निर्णय लेने की आवश्यकता है।",
        img: audienceIcon,
        className: 'circle-6',
        alt: 'लक्ष्य समूह आइकन छवि'

    }
];
