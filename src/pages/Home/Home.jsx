import React from 'react';
import "./Home.css";

import { useNavigate } from 'react-router-dom';

import Feature from '../../components/Feature/Feature';

export default function Home() {
    const navigate = useNavigate();

    const appFeatures = [
        {
            key: 1,
            title: "free to use app",
            text: "you can use TTS app for unlimited time for free",
            icon: <lottie-player src="https://assets5.lottiefiles.com/packages/lf20_4dornvi8.json"  background="transparent"  speed="1"  style={{width: "100px", height: "100px"}} autoplay></lottie-player>
        },
        {
            key: 2,
            title: "Support Several languages",
            text: "you can choose any language from the supported ones to convert your text to it",
            icon: <lottie-player src="https://assets3.lottiefiles.com/packages/lf20_cmefnu1y.json"  background="transparent"  speed="1"  style={{width: "100px", height: "100px"}} autoplay></lottie-player>
        },
        {
            key: 3,
            title: "Download the sound clip after converting",
            text: "you can download the converted text as an audio clip",
            icon: <lottie-player src="https://assets7.lottiefiles.com/packages/lf20_nikmvucu.json"  background="transparent"  speed="1"  style={{width: "100px", height: "100px"}} autoplay></lottie-player>
        }
    ];

    const handleNavigateToApp = () => navigate("/text-to-speech");

  return (
    <div className='home-page__container'>
        <div className="container">
            <div className="row w-100">
                <div className="col-lg-6">
                    <h1 className='text-capitalize fw-bold mb-5'>best app for you to convert text to speech</h1>
                    <h5 className='text-muted mb-4'>Using TTS app you can convert any text to sound and play it with several accents.</h5>
                    <button className='btn btn-primary fw-bold' onClick={handleNavigateToApp}>Try Text to Speech Converter</button>
                </div>
                <div className="col-lg-6 center app-icon__wrapper">
                    <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_zpawb8cy.json"  background="transparent"  speed="1"  style={{width: "300px", height: "300px"}}  loop autoplay></lottie-player>
                </div>
            </div>
            <div className='app-features'>
                {appFeatures?.map(feature => <Feature key={feature.id} title={feature.title} text={feature.text} icon={feature.icon} />)}
            </div>
        </div>
    </div>
  )
}
