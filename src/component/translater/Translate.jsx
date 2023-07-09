import React, { Component } from 'react'

import './Translate.css'

export default class Translate extends Component {
    render() {
        return (
            <div className='translate-div translate-container'>
                <div className='translate-div'>
                    From:
                    <select className='translate-select'>
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </select>
                    T0:
                    <select className='translate-select'>
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </select>
                </div>
                <div className='translate-div translate-textarea'>
                    <textarea cols="50" rows="8"></textarea>
                    <textarea cols="50" rows="8"></textarea>
                </div>
                <button className='translate-btn'>Translate</button>
            </div>
        )
    }
}
