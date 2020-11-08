import React from 'react';
import './noMatch.css';

// Display 404 Page not Found

export const noMatch = () => {
    return (
        <div>
            <div className='error'>
                404
                <p>Could not find the page you're looking for</p>
                </div>  
        </div>
    )
}

export default noMatch
