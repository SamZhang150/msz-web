import React, { Component, useEffect, useState, useRef } from 'react';
import './Home.css';
import '../assets/fonts/fonts.css';
import sandwich from '../assets/images/peking-duck-bao.gif';

export default function Home() {

  //create reference
  const swRef = useRef(null);

  //where the image starts at
  const [swStart, setSwStart] = useState(1200);

  //where the image will stay when fixed
  const [swFixed, setSwFixed] = useState(300);

  //where the image will stay after scrolling past
  const [swEnd, setSwEnd] = useState(2000);

  /* element follows page when scrolling, but once
  the page has scrolled down until "scrollEnd" the
  element */
  function tempFixedScroll(ref, start, mid, end) {
    const scrollStart = start - mid; //when to fix when scrolling
    const scrollEnd = end - mid; //when to unfix when scrolling

    if(window.scrollY < scrollStart) {
      ref.current.style.position = "absolute";
      ref.current.style.top = start + "px";
    } else
    if(window.scrollY > scrollStart && window.scrollY < scrollEnd) {
      ref.current.style.position = "fixed";
      ref.current.style.top = mid + "px";
    } else {
      ref.current.style.position = "absolute";
      ref.current.style.top = end + "px";
    }
  }

  function rescaleScroll(ref, start, mid, end, scale) {
    
    const scrollStart = start - mid; //when to fix when scrolling
    const scrollEnd = end - mid; //when to unfix when scrolling

    if(window.scrollY < scrollStart) {
      ref.current.style.width = (start/6) + "px";
    } else
    if(window.scrollY > scrollStart && window.scrollY < scrollEnd) {
      ref.current.style.width = (scale*((window.scrollY-scrollStart)/800)+(start/6)) + "px";
    } else {
      ref.current.style.width = (scale+(start/6)) + "px";
    }
  }

  const handleScroll = () => {
    tempFixedScroll(swRef, swStart, swFixed, swEnd);
    rescaleScroll(swRef, swStart, swFixed, swEnd, 300)
  };

  useEffect(() => {

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
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