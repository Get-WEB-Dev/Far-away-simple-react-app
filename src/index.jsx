import { useState } from "react";
import React from "react";

const faqs = [
  {
    title: "where are these chaires assembled",
    text: "Lorem ipsum dolor sit anet consectetur,adipscing elite.Lorem ipsum dolor sit anet consectetur,adipscing elite.Lorem ipsum dolor sit anet consectetur,adipscing elite.",
  },
  {
    title: "where are these chaires assembled",
    text: "Lorem ipsum dolor sit anet consectetur,adipscing elite.Lorem ipsum dolor sit anet consectetur,adipscing elite.Lorem ipsum dolor sit anet consectetur,adipscing elite.",
  },
  {
    title: "where are these chaires assembled",
    text: "Lorem ipsum dolor sit anet consectetur,adipscing elite.Lorem ipsum dolor sit anet consectetur,adipscing elite.Lorem ipsum dolor sit anet consectetur,adipscing elite.",
  },
  {
    title: "where are these chaires assembled",
    text: "Lorem ipsum dolor sit anet consectetur,adipscing elite.Lorem ipsum dolor sit anet consectetur,adipscing elite.Lorem ipsum dolor sit anet consectetur,adipscing elite.",
  },
];

export default function App() {
  return (
    <div>
      <Accordian data={faqs} />
    </div>
  );
}
function Accordian({ data }) {
  const [isOpen, setIsopen] = useState(null);

  return (
    <div className="accord">
      {data.map((el, i) => (
        <AccordianItem
          curOpen={isOpen}
          onOpen={setIsopen}
          title={el.title}
          text={el.text}
          num={i}
          key={i}
        />
      ))}
    </div>
  );
}

function AccordianItem({ num, title, text, curOpen, onOpen }) {
  const isOpen = num === curOpen;
  function handleIsopen() {
    // setIsopen(!isOpen);
    onOpen(isOpen ? null : num);
  }

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleIsopen}>
      <p className="num">{num < 9 ? `0${num + 1}` : `${num + 1}`}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="text-box">{text}</div>}
    </div>
  );
}
