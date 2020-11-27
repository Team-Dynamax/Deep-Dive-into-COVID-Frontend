import React from "react";
import "./Card.css";
import { ReactComponent as Arrow } from "../../styles/icons/arrow_right_alt-24px.svg";

const Card = ({ color, title, description, list, button, link }) => {
  const List = (props) => (
    <p className="bpt">
      <li>{props.value}</li>
    </p>
  );

  return (
    <div className={color}>
      <br></br>
      <h2>{title}</h2>
      <h3>{description}</h3>

      <ul>
        {list.map((user, i) => {
          return <List key={i.toString()} value={user} />;
        })}
      </ul>

      <a className="btn" href={link}>
        {button} <Arrow className="arrow" alt="" />
      </a>

      <br></br>
      <br></br>
    </div>
  );
};

export default Card;
