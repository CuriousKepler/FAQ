import React, { useState } from "react";
import Card from "./CardComponent";
import user from "../assets/user.png";
import panelists from "../assets/panelists.png";
import { panelDetails } from "../shared/panelDetails";

const Panel = (props) => {
  const [data, setData] = useState(panelDetails);
  return (
    <>
      <div className="panel-container">
        <img src={panelists} className="panel-image" />
        <Card img={user} name={panelDetails[0].name} />
        {data.map((currentElement) => {
          const { id } = currentElement;
          return <Card key={id} {...currentElement} />;
        })}
      </div>
    </>
  );
};

export default Panel;
