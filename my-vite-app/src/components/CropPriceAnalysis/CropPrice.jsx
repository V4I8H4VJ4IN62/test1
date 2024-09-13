import React from 'react';
import './CropPrice.css';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import errorImg from '../../assets/images/icons/exclamation.svg';
import goBackTo from '../../assets/images/icons/less-than.svg';
import { useTranslation } from "react-i18next";
import district_options from '../../data/priceDistrictOptions';
import axios from 'axios';
import state_options from '../../data/stateOptions';
import 'chartjs-adapter-date-fns';
import { Line, Bar } from 'react-chartjs-2';
import EmptyList from '../EmptyList/EmptyList';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';
import crop_options from '../../data/cropOptions'
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const CropPrice = () => {
    const [currentStep, setCurrentStep] = React.useState(1);
    const [dataSubmitted, setDataSubmitted] = React.useState(false);
    const [showError, setShowError] = React.useState(false);
    const [formData, setFormData] = React.useState({
        crop: null,
        state: null,
        district: null,
    });
    const [predictions, setPredictions] = React.useState([]);
    const [error, setError] = React.useState('');
    const { t } = useTranslation('cropPrice');

    const nextStep = (event) => {
        event.preventDefault();
        if (formData.crop) {
            setShowError(false);
            setCurrentStep((prev) => prev + 1);
        } else {
            setShowError(true);
        }
    };

    const prevStep = () => {
        setShowError(false);
        setDataSubmitted(false);
        setFormData({ ...formData, crop: '', state: '', district: '' });
        setCurrentStep((prev) => prev - 1);
    };

    const handleChange = (input) => (value) => {
        if (input === 'state') {
            setFormData({
                ...formData,
                state: value,
                district: null,  
                area: null,
            });
        } else {
            setFormData({
                ...formData,
                [input]: input === 'area' ? (/^\d*\.?\d*$/.test(value) ? value : formData.area) : value,
            });
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const cropValue = formData.crop?.label;
        const stateValue = formData.state?.label;
        const districtValue = formData.district?.label;
        if (formData.district) {
            setShowError(false);
            setDataSubmitted(true);
            if (cropValue && stateValue && districtValue) {
                try {
                    const response = await axios.post('http://localhost:5000/', {
                        crop: cropValue,
                        state: stateValue,
                        district: districtValue
                    }, {
                        headers: {
                            'Content-Type': 'application/json',
                        }
                    });

                    if (response.status === 200) {
                        setPredictions(response.data.predictions || []);
                    }
                } catch (error) {
                    console.error('Error sending data:', error);
                    setError(error.response?.data?.error || 'Failed to fetch predictions. Please check your inputs.');
                }
            }
        } else {
            setShowError(true);
        }
    };
    
    const prepareBarChartData = () => {
        const dates = predictions.map(p => p.date);
        const prices = predictions.map(p => p.predictedPrice);
    
        const maxPrice = Math.max(...prices);
        const minPrice = Math.min(...prices);
    
        return {
            labels: dates,  // X-axis (dates)
            datasets: [
                {
                    label: `Predicted Price for ${formData.crop.label}`,
                    data: prices,  // Y-axis (prices)
                    backgroundColor: prices.map((price) => {
                        if (price === maxPrice) {
                            return 'rgba(255, 99, 132, 0.8)';  // Red for highest price
                        } else if (price === minPrice) {
                            return 'violet';  
                        }
                        return 'rgba(75, 192, 192, 0.6)';  // Default color for other bars
                    }),
                    borderColor: prices.map((price) => {
                        if (price === maxPrice) {
                            return 'rgba(255, 99, 132, 1)';
                        } else if (price === minPrice) {
                            return 'rgba(54, 162, 235, 1)';
                        }
                        return 'rgba(75, 192, 192, 1)';
                    }),
                    borderWidth: 2,
                }
            ]
        };
    };
    
    const barChartOptions = {
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Date',
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Price',
                },
                beginAtZero: true,
            }
        },
        responsive: true,
        plugins: {
            legend: {
                display: true,
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        return `Price: ${context.raw}`;
                    }
                }
            }
        }
    };

    const prepareChartData = () => {
        const dates = predictions.map(p => p.date);
        const prices = predictions.map(p => p.predictedPrice);

        return {
            labels: dates,
            datasets: [
                {
                    label: `Predicted Price for ${formData.crop.value}`,
                    data: prices,
                    borderColor: 'rgb(3, 99, 209)',
                    backgroundColor: 'rgba(3, 99, 209, 0.2)',
                    borderWidth: 2,
                    fill: true,
                }
            ]
        };
    };

    const span_styles = {
        borderRadius: "100%",
        padding: "12px 20px",
        border: "5px solid rgb(3, 99, 209)",
        textAlign: "center",
    };

    const line_styles = {
        backgroundColor: "rgb(3, 99, 209)"
    };

    return (
        <section id="tools" className="section-p">
            <form className='tools-survey'>
                {currentStep === 1 && (
                    <Link to="/" className="go-back-to">
                        <img src={goBackTo} alt="" className="icon" />
                        {t('form.step1.backLinkText')}
                    </Link>
                )}
                <div className="form-container">
                    <h1 className='tools-title'>{t('form.step1.title')}</h1>
                    <div className="tools-menu">
                        {currentStep === 1 ? <span style={span_styles}>{t('form.step1.menuSteps.0')}</span> : <span>1</span>}
                        {currentStep === 2 ? <hr className='menu-line' style={line_styles}/> : <hr className='menu-line'/> }
                        {currentStep === 2 ? <span style={span_styles}>{t('form.step1.menuSteps.1')}</span> : <span>2</span>}
                    </div>
                    {currentStep === 1 && (
                        <div className="form-step">
                            <label>{t('form.step1.cropSelection.label')}</label>
                            {showError && (
                                <div className='tools-error'>
                                    <img src={errorImg} alt="error" className='icon'/>
                                    <span>{t('form.step1.cropSelection.errorMessage')}</span>
                                </div>
                            )}
                            <Select options={crop_options} onChange={handleChange('crop')} />
                            <button onClick={nextStep} className="tools-btn">{t('form.step1.cropSelection.nextButtonText')}</button>
                        </div>
                    )}
                    {currentStep === 2 && (
                        <div className="form-step">
                            <label>{t('form.step2.stateSelection.label')}</label>
                            {showError && (
                                <div className='tools-error'>
                                    <img src={errorImg} alt="error" className='icon'/>
                                    <span>{t('form.step2.stateSelection.errorMessage')}</span>
                                </div>
                            )}
                            <Select options={state_options} onChange={handleChange('state')} />
                            
                            {formData.state && (
                                <>
                                    <label>{t('form.step2.districtSelection.label')}</label>
                                    {showError && (
                                        <div className='tools-error'>
                                            <img src={errorImg} alt="error" className='icon'/>
                                            <span>{t('form.step2.stateSelection.errorMessage')}</span>
                                        </div>
                                    )}
                                    <Select
                                        options={district_options[formData.state.value] || []}
                                        onChange={handleChange('district')}
                                    />
                                </>
                            )}
                            <div className="tools-btn-box">
                                <button onClick={prevStep} className="tools-btn">{t('form.step2.buttons.backButtonText')}</button>
                                <button type="submit" className='tools-submit-btn tools-btn' onClick={handleSubmit}>{t('form.step2.buttons.submitButtonText')}</button>
                            </div>
                            
                            {dataSubmitted && predictions.length > 0  ? (

                                <div className='result'>
                                    <h2>Price Prediction for the next 75 days</h2>
                                    <Line data={prepareChartData()} options={{ responsive: true }} />
                                    <h2>Comparison of Prices</h2>
                                    <Bar data={prepareBarChartData()} options={barChartOptions} />
                                </div>
                            ) :
                                <EmptyList/>
                            }
                        </div>
                    )}
                </div>
            </form>
        </section>
    );
}

export default CropPrice;
