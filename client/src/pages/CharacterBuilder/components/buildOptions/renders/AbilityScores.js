import React from 'react';

export default function AbilityScores() {

    return (
        <div>
            <div name='str' className='abs_div'>
                <input for='str' className='abs_input'></input>
            </div>
            <div name='dex' className='abs_div'>
                <input for='dex' className='abs_input'></input>
            </div>
            <div name='con' className='abs_div'>
                <input for='con' className='abs_input'></input>
            </div>
            <div name='int' className='abs_div'>
                <input for='int' className='abs_input'></input>
            </div>
            <div name='wis' className='abs_div'>
                <input for='wis' className='abs_input'></input>
            </div>
            <div name='cha' className='abs_div'>
                <input for='cha' className='abs_input'></input>
            </div>
        </div>
    )
}