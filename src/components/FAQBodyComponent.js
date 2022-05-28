import React, { useState } from "react";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

const Body = ({ question, answer }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="main-body">
        <div className="questions">
          <p>
            {question}
            <span onClick={() => setShow(!show)}>
              {" "}
              {show ? (
                <AiOutlineArrowUp className="arrow" />
              ) : (
                <AiOutlineArrowDown className="arrow" />
              )}{" "}
            </span>
          </p>
        </div>
        <div className="answers">{show && <p>{answer}</p>}</div>
      </div>
      <div></div>
    </>
  );
};

export default Body;
