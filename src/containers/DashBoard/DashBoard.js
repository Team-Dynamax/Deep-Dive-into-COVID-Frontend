import React from 'react'
import './DashBoard.css';
import COVIDBG from './CORONA_VIRUS1.png';
import cloudDL from './cloud_download-24px.svg';

// TASKS
// 1. Implement State for interactive elements
// 2. Refactor code
// 3. Put Date string into a function
// 4. Pad zeros for Time
// 5. Fix BG

const DashBoard = () => {
    const cases = 14440213;
    const deaths = 111022;

    const months = [ 'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
    const update = new Date();

    return (
        <div className='bg' style = {{ backgroundImage: `url(${COVIDBG})` }}>

           <br></br>
           <br></br>

           <h1 className='title'>TRACKING COVID-19</h1>

           <h2 className='listing'>IN THE CARIBBEAN</h2>

           <br></br>
           <br></br>

           <h3 className='header'>{cases}      {deaths}</h3>
           <h4 className='header'> CASES        DEATHS</h4>

           <br></br>

           <p className='dl'><img src={cloudDL} alt=""/> {months[update.getMonth()]} {update.getDay()} {update.getFullYear()} - {update.getHours()}:{update.getMinutes()} </p>
           
           <br></br>
           <br></br>

        </div>
    )
}

export default DashBoard
