import React from 'react';
import './Product.css';
import team from "../DashBoard/rawpixel-669610-unsplash-1.webp";


export const Product = () => {
    return (
        <div>
            <div className='Details'style = {{ backgroundImage: `url(${team})` }}>
                
                <div><div className='Coviz'>Coviz built by Team Dynamax</div> </div> 
                <div><div className='Managers'>Managers<div>. </div><div>. </div><div>. </div></div>
                <div className ='Frontend'>The Frontend team<div>. Joshua</div><div>. Lee</div><div>. Ruth</div></div>
                <div className='Backend'>The Backend team<div>. </div><div>. </div><div>. </div></div>
                <div className='Testing'>The Testing team<div>. </div><div>. </div><div>. </div></div>
                </div> 
                   
        </div>
        </div>
    )
}
export default Product
