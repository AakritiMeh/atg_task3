import box from "../images/page1left.png"
import p1imgleft from "../images/p1imgleft.png"
import p1imgright from "../images/p1imgright.png"
import "../styles/page1.css"
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);
const Page1 = () => {

  const leftContentRef = useRef(null);
  const rightImagesRef = useRef(null);

  useEffect(() => {
    const leftContent = leftContentRef.current;
    const rightImages = rightImagesRef.current;

    gsap.fromTo(leftContent, 
      { y: 0 },
      {
        y: -100,
        ease: "none",
        scrollTrigger: {
          trigger: leftContent,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      }
    );

    gsap.fromTo(rightImages.children, 
      { y: 0 },
      {
        y: 100,
        ease: "none",
        scrollTrigger: {
          trigger: rightImages,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      }
    );
  }, []);

  return (
    
        <div className="Page1Main">
          <div className="page1Left" ref={leftContentRef}>
           
                <div className="p1heading">
                <h1>25M+ Downloads</h1>
                <h2>on appstore & google playstore</h2>
                </div>
                <div className="p1left">
                <img src={box} alt="Award" />
                </div>
                <div className="p1leftbottom">
                <h1>ABC 123</h1>
                <p>We are the best web development <br/> company in the world</p>
                <a href="#" className="view-case-study">View Case Study →</a>
                </div>
           
          </div>
          <div className="page1Right" ref={rightImagesRef}>
            <div>
              <img src={p1imgleft} alt="App Screenshot 1" />
            </div>
            <div>
              <img src={p1imgright} alt="App Screenshot 2" />
            </div>
          </div>
          <a href="#" className="skip">SKIP</a>
        </div>
      );
  
}

export default Page1