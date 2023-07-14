import React, { useState, useEffect } from 'react';

import axios from 'axios';

import './Translate.css';

// const axios = require('axios').default;

function Translate() {
    const [options, setOptions] = useState([]);
    const [to, setTo] = useState('en');
    const [from, setFrom] = useState('en');
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');

    const translate = () => {
        
        const params = new URLSearchParams();
        params.append('q', input);
        params.append('source', from);
        params.append('target', to);
        params.append('api_key', 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx');

        axios.post('https://libretranslate.de/translate', params, {
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        }).then(res => {
            console.log(res.data)
            setOutput(res.data.translatedText)
        })
    };

    useEffect(() => {
        axios
            .get('https://libretranslate.de/languages', {
                headers: { accept: 'application/json' },
            })
            .then((res) => {
                console.log(res.data);
                setOptions(res.data);
            });
    }, []);

    //  curl -X GET "https://libretranslate.de/languages" -H  "accept: application/json"


    return (
        <div className='translate-div translate-container'>
            <h2 style={{textAlign:'center'}}>Language Translator</h2>
            <div className='translate-div'>
                From ({from}) :
                <select onChange={(e) => setFrom(e.target.value)} className='translate-select'>
                    {options.map((opt) => (
                        <option key={opt.code} value={opt.code}>
                            {opt.name}
                        </option>
                    ))}
                </select> <span> </span>
                To ({to}) :
                <select onChange={(e) => setTo(e.target.value)} className='translate-select'>
                    {options.map((opt) => (
                        <option key={opt.code} value={opt.code}>
                            {opt.name}
                        </option>
                    ))}
                </select>
            </div>
            <div className='translate-div translate-textarea'>
                <textarea cols="50" rows="8" onInput={(e) => setInput(e.target.value)}></textarea>
                <textarea cols="50" rows="8" value={output}></textarea>
            </div>
            <button className='translate-btn' onClick={e=>translate()}>Translate</button>
        </div>
    )
}

export default Translate


