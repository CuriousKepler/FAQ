import React, { useState } from "react";
import { faq } from "../shared/faq";
import image from "../assets/image.png";
import Body from "./FAQBodyComponent";

const Accordion = () => {
  const [data, setData] = useState(faq);
  return (
    <>
      <section>
        <img src={image} className="image" />
        {data.map((currentElement) => {
          const { id } = currentElement;
          return <Body key={id} {...currentElement} />;
        })}
      </section>
    </>
  );
};

export default Accordion;
