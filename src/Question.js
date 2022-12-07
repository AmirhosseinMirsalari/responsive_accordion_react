import React, { useState, useRef } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  const [accordionHeight, setAccordionHeight] = useState("0px");
  const contentRef = useRef();

  const click = () => {
    setShowInfo(showInfo=>!showInfo);
    setAccordionHeight(
      showInfo ? "0px" : `${contentRef.current.scrollHeight}px`
    );
  };

  return (
    <div className="tes">
      <article className="question">
        <header className="header-faq">
          <h4>{title}</h4>
          <button className="btn" onClick={click}>
            {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </button>
        </header>
        <div
          ref={contentRef}
          className="test"
          style={{maxHeight: `${accordionHeight}`}}

        >
          <p>{info}</p>
        </div>
      </article>
    </div>
  );
};

export default Question;
