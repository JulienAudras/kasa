import React, { useState, useRef, useEffect } from "react";
import arrow from "../assets/arrow_up-24px.png";
import arrow_mobile from "../assets/arrow_up_mobile.png"

const Collapse = ({ title, content, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    const contentHeight = contentRef.current.scrollHeight;
    contentRef.current.style.height = isOpen ? `${contentHeight}px` : "0px";
  }, [isOpen]);


  return (
    <div className={`accordeon-item ${className}`}>
      <div className="accordeon-item__title">
        <span className="accordeon-item__title--text">{title}</span>
        <img
          className={`accordeon-item__title--arrow ${isOpen ? "open" : "closed"}`}
          src={arrow}
          alt="Flèche"
          onClick={toggleCollapse}
        />
        <img
          className={`accordeon-item__title--arrow_mobile ${isOpen ? "open" : "closed"}`}
          src={arrow_mobile}
          alt="Flèche"
          onClick={toggleCollapse}
        />
      </div>
      <div
        className={`accordeon-item__content`}
        ref={contentRef}
        style={{
        height: isOpen ? contentRef.current.scrollHeight + "px" : "0px",
        transition: "height 0.5s ease"
        }}
      >
        <div className="accordeon-item__content--text">
          {content}
        </div>
        </div>
    </div>
  );
};

export default Collapse;