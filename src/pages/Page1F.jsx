import box from "../images/page1left.png"
import p1imgleft from "../images/p1imgleft.png"
import p1imgright from "../images/p1imgright.png"
import "../styles/Page1F.css"
import { useInView } from "react-intersection-observer";
import { useEffect } from 'react';
import {motion , useAnimation} from "framer-motion"
import si1 from "../images/si1.png"
const Page1F = () => {

    const controlsLeft = useAnimation();
    const controlsRight = useAnimation();
  
    const [leftRef, inViewLeft] = useInView({ triggerOnce: true });
    const [rightRef, inViewRight] = useInView({ triggerOnce: true });
  
    useEffect(() => {
      if (inViewLeft) {
        controlsLeft.start({
          opacity: 1,
          y: 0,
          transition: { duration: 1 },
        });
      }
      if (inViewRight) {
        controlsRight.start({
          opacity: 1,
          y: 0,
          transition: { duration: 1 },
        });
      }
    }, [controlsLeft, controlsRight, inViewLeft, inViewRight]);


  return (
    
        <div className="Page1Main">
          <div className="page1Left">
                <div></div>
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
                <p className="view-case-study">View Case Study →</p>
                </div>
           
          </div>
          <div className="ScrolllImage1">
            <img src={si1}></img>
          </div>
          <div className="page1Right">
            <motion.div
                ref={leftRef}
                initial={{ opacity: 0, y: 50 }}
                animate={controlsLeft}
            >
              <img src={p1imgleft} alt="App Screenshot 1" />
            </motion.div>
            <motion.div
                ref={rightRef}
                initial={{ opacity: 0, y: 50 }}
                animate={controlsRight}
            >
              <img src={p1imgright} alt="App Screenshot 2" />
            </motion.div>
          </div>
          <a href="#" className="skip">SKIP</a>
        </div>
      );
  
}

export default Page1F