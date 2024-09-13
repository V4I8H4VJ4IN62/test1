import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import errorImg from '../../assets/images/icons/exclamation.svg';
import goBackTo from '../../assets/images/icons/less-than.svg';
import { useTranslation } from "react-i18next";
import axios from 'axios';
import './BufferStock.css';
import EmptyList from '../EmptyList/EmptyList'
const BufferStock = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [dataSubmitted, setDataSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        crop: null,
        monthYear: '',
        threshold: '',
        scenario: 'none',
    });
    const [error, setError] = useState('');
    const [result, setResult] = useState(null);
    const { t } = useTranslation('cropPrice');
    const [showError, setShowError] = useState(false);
    const span_styles = {
        borderRadius: "100%",
        padding: "12px 20px",
        border: "5px solid rgb(3, 99, 209)",
        textAlign: "center",
    };
    const crop_options = [
        { label: "Wheat", value: "wheat" },
        { label: "Rice", value: "rice" },
        { label: "Corn", value: "corn" },
        { label: "Soybean", value: "soybean" },
        { label: "Barley", value: "barley" },
        { label: "Oats", value: "oats" },
        { label: "Sorghum", value: "sorghum" },
        { label: "Millet", value: "millet" },
        { label: "Onion", value: "onion" }

    ];    
    const line_styles = {
        backgroundColor: "rgb(3, 99, 209)"
    };
    const handleChange = (input) => (value) => {
        setFormData({
            ...formData,
            [input]: value,
        });
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const nextStep = (event) => {
        event.preventDefault();
        if (formData.crop) {
            setShowError(false);
            setCurrentStep(2);
        } else {
            setShowError(true);
        }
    };

    const prevStep = () => {
        setShowError(false);
        setCurrentStep(1);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:5001/predict', {
                crop_type: formData.crop.label,
                month_year: formData.monthYear,
                threshold: formData.threshold,
                scenario: formData.scenario,
            });
            setResult(response.data);
            setDataSubmitted(true);
        } catch (error) {
            setError(error.response?.data?.message || 'Failed to fetch predictions. Please try again.');
        }
    };

    return (
        <section id="tools" className="section-p">
            <form className="tools-survey">
                {currentStep === 1 && (
                    <Link to="/" className="go-back-to">
                        <img src={goBackTo} alt="" className="icon" />
                        {t('form.step1.backLinkText')}
                    </Link>
                )}
                <div className="form-container">
                    <h1 className="tools-title">{t('form.step1.title')}</h1>
                    <div className="tools-menu">
                        {currentStep === 1 ? <span style={span_styles}>{t('form.step1.menuSteps.0')}</span> : <span>1</span>}
                        {currentStep === 2 ? <hr className='menu-line' style={line_styles}/> : <hr className='menu-line'/> }
                        {currentStep === 2 ? <span style={span_styles}>{t('form.step1.menuSteps.1')}</span> : <span>2</span>}
                    </div>

                    {currentStep === 1 && (
                        <div className="form-step">
                            <label>{t('form.step1.cropSelection.label')}</label>
                            {showError && (
                                <div className="tools-error">
                                    <img src={errorImg} alt="error" className="icon" />
                                    <span>{t('form.step1.cropSelection.errorMessage')}</span>
                                </div>
                            )}
                            <Select options={crop_options} onChange={handleChange('crop')} />
                            <button onClick={nextStep} className="tools-btn">
                                {t('form.step1.cropSelection.nextButtonText')}
                            </button>
                        </div>
                    )}

                    {currentStep === 2 && (
                        <div className="form-step">
                            <label>Enter the Month and Year</label>
                            <input
                                type="month"
                                id="monthYear"
                                name="monthYear"
                                value={formData.monthYear}
                                onChange={handleInputChange}
                                required
                            />

                            <label>Enter the Threshold</label>
                            <input
                                type="number"
                                id="threshold"
                                name="threshold"
                                step="0.01"
                                value={formData.threshold}
                                onChange={handleInputChange}
                                required
                            />

                            <label>Select Market Scenario</label>
                            <select
                                id="scenario"
                                name="scenario"
                                value={formData.scenario}
                                onChange={handleInputChange}
                            >
                                <option value="none">None</option>
                                <option value="price_increase">Price Increase</option>
                                <option value="price_decrease">Price Decrease</option>
                            </select>

                            <div className="tools-btn-box">
                                <button onClick={prevStep} className="tools-btn">
                                    {t('form.step2.buttons.backButtonText')}
                                </button>
                                <button type="submit" className="tools-submit-btn tools-btn" onClick={handleSubmit}>
                                    {t('form.step2.buttons.submitButtonText')}
                                </button>
                            </div>
                            {dataSubmitted && result ?  (
                                <div className="stock-result">
                                    <h2>Buffer Price Stock Analysis</h2>
                                    <p>1. Average Predicted Price: <span className='stock-result-price'>₹{result.avg_price.toFixed(5)}</span></p>
                                    {result.release_price_suggestion && (
                                        <>
                                            <p>2. Buffer Stock Price: <span className='stock-result-price'>₹{result.release_price_suggestion.toFixed(5)}</span></p>
                                            <p>3. Price Difference: <span className='difference'>₹{result.price_difference.toFixed(5)}</span></p>
                                        </>
                                    )}
                            </div>
                            )
                                :
                                <EmptyList/>
                            }
                        </div>
                    )}                    
                </div>
            </form>
        </section>
    );
};

export default BufferStock;
