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
        <Card img={user} />
      </div>
    </>
  );
};

export default Panel;
