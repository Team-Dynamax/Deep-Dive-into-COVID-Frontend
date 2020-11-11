import React from 'react';
import './Product.css';
import team from "../DashBoard/rawpixel-669610-unsplash-1.webp";


export const Product = () => {
    return (
        <div>
            <div className='Details'style = {{ backgroundImage: `url(${team})` }}>
                
                <p><div className='Coviz'>Coviz built by Team Dynamax</div> </p> 
                <br></br>
                <p><div className='Managers'>Managers<p>.</p><p>.</p><p>.</p></div>
                <br></br>
                <div className ='Frontend'>The Frontend team<p>.</p><p>.</p><p>.</p></div>
                <br></br>
                <div   className='Backend'>The Backend team<p>.</p><p>.</p><p>.</p></div>
                <br></br>
                <div  className='Testing'>The Testing team<p>.</p><p>.</p><p>.</p></div>
                </p> 
                   
        </div>
        </div>
    )
}
export default Product
