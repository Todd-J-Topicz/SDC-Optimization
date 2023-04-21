import React, { useState, useEffect } from 'react';
import Header from './header';
import SecondHeader from './secondHeader';


// const OnScrollTrigger = () => {

  // const [headerIndex, setHeaderIndex] = useState(0);// state variable

  // const handleScroll = () => {
  //   const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  //   // divide the scroll position by 5 and take the floor to get the index of the current header
  //   const index = Math.floor(scrollPosition / 5);
  //   // set the index of the current header
  //   setHeaderIndex(index % 3);
  // };


  // window.addEventListener('scroll', handleScroll);

  function ScrollHeader() {
    const [isScrolled, setIsScrolled] = useState(false);
    //const [scrollClass, setScrollClass] = useState('class1');

    useEffect(() => {
      function handleScroll() {
        if (window.scrollY > 720) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      }
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    /* Handles purple scroll bar */
    // useEffect(() => {
    //   function handleScroll() {
    //     const scrolledClass = getScrolledClass(window.scrollY);
    //     setScrollClass(scrolledClass);
    //   }
    //   window.addEventListener("scroll", handleScroll);
    //   return () => window.removeEventListener("scroll", handleScroll);
    // }, []);
//   to do change class names and setup CSS for each class. Set Numeric values to correct for scroll position
    // function getScrolledClass(scrollY) {
    //   if (scrollY >= 0 && scrollY < 500) {
    //     return 'class1';
    //   } else if (scrollY >= 500 && scrollY < 1000) {
    //     return 'class2';
    //   } else if (scrollY >= 1000 && scrollY < 1500) {
    //     return 'class3';
    //   } else {
    //     return 'class4';
    //   }
    // }
  
    return isScrolled ? <SecondHeader /> : <Header/>;


};


export default ScrollHeader;