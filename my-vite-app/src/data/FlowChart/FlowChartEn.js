
import objectiveIcon from '../../assets/images/flowchart/objective.png';
import insightsIcon from '../../assets/images/flowchart/insights.png';
import audienceIcon from '../../assets/images/flowchart/audience.png';
import actionIcon from '../../assets/images/flowchart/action.png';
import dataIcon from '../../assets/images/flowchart/data.png';
import modelsIcon from '../../assets/images/flowchart/models.png';

export default [
    {
        id: 1,
        title: "Objective",
        subTitle: "Predict crop prices, market trends, and optimal sowing/selling times.",
        img: objectiveIcon,
        className: 'circle-1',
        alt: 'objective icon img'

    },
    {
        id: 2,
        title: "Models",
        subTitle: "Uses SARIMA, LSTM, and regression for price and lifecycle forecasting.",
        img: modelsIcon,
        className: 'circle-2',
        alt: 'models icon img'
    },
    {
        id: 3,
        title: "Data",
        subTitle: "Pulls from historical prices, weather, supply chain, and market data.",
        img: dataIcon,
        className: 'circle-3',
        alt: 'data icon img'


    },
    {
        id: 4,
        title: "Insights",
        subTitle: "Offers predictions on price volatility, market trends, and Buffer Price.",
        img: insightsIcon,
        className: 'circle-4',
        alt: 'insights icon img'

    },
    {
        id: 5,
        title: "Actionable",
        subTitle: "Helps to know the crop performance in the market.",
        img: actionIcon,
        className: 'circle-5',
        alt: 'actionable icon img'

    },
    {
        id: 6,
        title: "Audience",
        subTitle: "Designed for govt., cooperatives, and traders needing real-time, data-driven decisions.",
        img: audienceIcon,
        className: 'circle-6',
        alt: 'audience icon img'

    },
    
];


