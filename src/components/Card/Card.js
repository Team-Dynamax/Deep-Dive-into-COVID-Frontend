import React from 'react';
import './Card.css';
import checkCircle from './check_circle-24px.svg';
// import rightArrow from './arrow_right_alt-24px.svg';


// TASKS: VERIFY JS AND CSS

// 1. figure out a better way to place the checkboxes
// 2. place arrow image to the right to text
// 3. Figure out how to make scalable button size
// 4. Place an image on the right of the list
// 5. Scale svgs to suit
// 6. Fix Padding and Margins


const Card = ( {
    color,
    title, 
    description,
    list,
    button,
    link,
    image } ) => {

    const List = (props) => <p><img src={checkCircle} alt=""/><li>{props.value}</li></p>

    return (

        <div className={color}>

            <br></br>
            <h2>{title}</h2>
            <h3>{description}</h3>

            <img src={image} align='right' alt=""></img>
            <ul>
            {
            list.map((user, i) => {
                return ( 
                   <List key={i.toString()}
                        value={user} />
                    )
                }
            )
            }
            </ul>

            <br></br>
            <div className='btn'>
               
             <a className='link' href={link}>{button}</a>

                {/*  
                <img src={rightArrow} float='right' height='35' width='50'/> 
                */}
            </div>

            <br></br>
            
        </div>

    )

}

export default Card;