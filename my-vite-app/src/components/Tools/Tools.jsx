import React from 'react';
import './Tools.css'
import ToolsDataEn from '../../data/Tools/ToolsDataEn'
import ToolsDataHi from '../../data/Tools/ToolsDataHi'
import ToolsDataBe from '../../data/Tools/ToolsDataBe'
import ToolsDataTe from '../../data/Tools/ToolsDataTe'
import ToolsDataMa from '../../data/Tools/ToolsDataMa'

import { useNavigate } from 'react-router-dom';
import arrowRight from '../../assets/images/icons/arrow-right.svg'
const Tools = ({languages}) => {

    const navigate = useNavigate();
    const handleNavigate = (path) => {
        navigate(path);
    };
    let ToolsData;
    if(languages === 'hi'){
        ToolsData = ToolsDataHi;
    }
    else if(languages === 'te'){
        ToolsData = ToolsDataTe;
    }
    else if(languages === 'ma'){
        ToolsData = ToolsDataMa;
    }
    else if(languages === 'be'){
        ToolsData = ToolsDataBe;
    }
    else{
        ToolsData = ToolsDataEn;
    }
    const ToolBoxes = ToolsData.map((data, id)=>{
        return (
                <div className="tools-box" key={id} onClick={() => handleNavigate(data.path)} style={data.styles}>
                    {data.comingSoon && (
                    <div className='tools-error'>
                        Coming Soon
                    </div>
                    )}
                    <h2 className="title">{data.title}</h2>
                    <small className='sub-title'>{data.subTitle}</small>
                    {data.output && <span className='output'>{data.output}</span>}
                    {data.newTab ? <a href={data.pathNewTab} className='new-tab-link' target="_blank" rel="noopener noreferrer">
                        Open the model in new tab 
                        <img src={arrowRight} alt="arrow right" className="icon" />
                        </a> : ""}
                </div>
        )
    })
    return (
        <section id='tools-container' className='section-m1'>
            {ToolBoxes}
        </section>
    );
}

export default Tools;
