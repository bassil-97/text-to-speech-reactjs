import React, { useEffect, useRef } from 'react';
import "./TextToSpeech.css";

export default function TextToSpeech() {
    const textToSpeechRef = useRef();
    let synth, voiceSelect, voices;

    useEffect(() => {
        synth = window.speechSynthesis;
        voiceSelect = document.querySelector('select');
        voices = [];

        function populateVoiceList() {
            voices = synth.getVoices();
          
            for (const voice of voices) {
              const option = document.createElement('option');
              option.textContent = `${voice.name} (${voice.lang})`;
          
              if (voice.default) {
                option.textContent += ' — DEFAULT';
              }
          
              option.setAttribute('data-lang', voice.lang);
              option.setAttribute('data-name', voice.name);
              voiceSelect.appendChild(option);
            }
        }

        populateVoiceList();
        if (speechSynthesis.onvoiceschanged !== undefined) {
            speechSynthesis.onvoiceschanged = populateVoiceList;
        }
    }, []);

    const handlePlaySound = () => {
        const utterThis = new SpeechSynthesisUtterance(textToSpeechRef.current.value);
        const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');

        for (const voice of voices) {
            if (voice.name === selectedOption) {
              utterThis.voice = voice;
            }
        }
        
        synth.speak(utterThis);
    };
  
    return (
    <div className='text-to-speech__container'>
        <div className='container center flex-column gap-4'>
            <h4 className='mb-5 fw-bold'>Enter some text in the input below and press on the play button to hear it</h4>
            <div className="form-group w-100">
                <label htmlFor="entered-text" className='fw-bold mb-2'>Enter Text</label>
                <textarea className='form-control' id='entered-text' ref={textToSpeechRef} />
            </div>
            <div className="form-group w-100">
                <label htmlFor="languages-select" className='fw-bold mb-2'>Select Language</label>
                <select className='form-control' name="languages-select" id='languages-select'></select>
            </div>
            <button className='btn btn-primary' onClick={handlePlaySound}>Play Sound</button>
        </div>
    </div>
  )
}
