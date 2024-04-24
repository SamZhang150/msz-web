import React, { useEffect, useRef } from "react";
import "./Home.css";
import "../assets/fonts/fonts.css";
import sandwich from "../assets/images/peking-duck-bao.gif";
import { tempFixedScroll, rescaleScroll } from "../functions/scrollUtils";

export default function Home() {
  //create reference
  const swRef = useRef(null);

  useEffect(() => {
    //where the image starts at
    const swStart = 1200;

    //where the image will stay when fixed
    const swFixed = 300;

    //where the image will stay after scrolling past
    const swEnd = 2000;
    const handleScroll = () => {
      tempFixedScroll(swRef, swStart, swFixed, swEnd);
      rescaleScroll(swRef, swStart, swFixed, swEnd, 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div class="Home">
      <img ref={swRef} class="sw" src={sandwich} alt="awesome sandwich" />
      <body class="fade">
        <h1 class="garet-h">Home</h1>
        <p class="garet-b">This is a paragraph!</p>
        <p class="garet-b size-5">filler</p>
        <p class="garet-b size-5">filler</p>
        <p class="garet-b size-5">filler</p>
        <p class="garet-b size-5">filler</p>
        <p class="garet-b size-5">filler</p>
        <p class="garet-b size-5">filler</p>
        <p class="garet-b size-5">filler</p>
        <p class="garet-b size-5">filler</p>
        <p class="garet-b size-5">filler</p>
        <p class="garet-b size-5">filler</p>
        <p class="garet-b size-5">filler</p>
        <p class="garet-b size-5">filler</p>
        <p class="garet-b size-5">filler</p>
        <p class="garet-b size-5">filler</p>
        <p class="garet-b size-5">filler</p>
        <p class="garet-b size-5">filler</p>
        <p class="garet-b size-5">filler</p>
        <p class="garet-b size-5">filler</p>
        <p class="garet-b size-5">filler</p>
        <p class="garet-b size-5">filler</p>
        <p class="garet-b size-5">filler</p>
      </body>
    </div>
  );
}
