import React from 'react';
import './Flowchart.css'; 
import FlowChartEn from '../../data/FlowChart/FlowChartEn';
import FlowChartHi from '../../data/FlowChart/FlowChartHi';

const Flowchart = ({languages}) => {
  let FlowChartData;
  if(languages === 'hi'){
    FlowChartData = FlowChartHi;
  }
  else{
    FlowChartData = FlowChartEn;
  }
  const FlowChartElements = FlowChartData.map((item, id)=>{
    return (
      <div className="circle-item" key={id}>
          <div className={`circle ${item.className}`}>
            <img src={item.img} alt={item.alt} />
          </div>
          <h3>{item.title}</h3>
          <p>{item.subTitle}</p>
      </div>
    )
  })
  return (
    <div className="flowchart-container section-p">
      <div className="circle-section">
        {FlowChartElements}
      </div>
    </div>
  );
};

export default Flowchart;
