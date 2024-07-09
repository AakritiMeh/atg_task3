

// import p2imgup from "../images/page2ImageUp.png";
// import p2imgdown from "../images/page2ImageDown.png";
// import "../styles/Page2F.css";



// const Page2 = () => {


//   return (
//     <div className="Page2Main">
//       <div className="page2Left">
//         <div></div>
//         <div className="p2heading">
//           <p>The Next Big</p>
//           <h1>Blockchain</h1>
//           <h2>revolution</h2>
//         </div>

//         <div className="p2leftbottom">
//           <h1>ABC 234</h1>
//           <p>We are the best web development <br/> company in the world</p>
//           <p className="Coming-soon">Coming Soon</p>
//           <p className="skip">SKIP</p>
//         </div>
//       </div>
//       <div className="page2Right">
//         <div className="imgDown2">
//           <img src={p2imgdown} alt="App Screenshot 2" />
//         </div>
//         <div className="imgTop2">
//           <img src={p2imgup} alt="App Screenshot 1" />
//         </div>
//       </div>
//     </div>
//   );
  
// }

// export default Page2;

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import p2imgup from "../images/page2ImageUp.png";
import p2imgdown from "../images/page2ImageDown.png";
import "../styles/Page2F.css";

gsap.registerPlugin(ScrollTrigger);

const Page2 = () => {
  const controlsTopImage = useAnimation();
  const controlsBottomImage = useAnimation();
  const controlsLeftText = useAnimation();

  const [topImageRef, inViewTopImage] = useInView({ triggerOnce: false });
  const [bottomImageRef, inViewBottomImage] = useInView({ triggerOnce: false });
  const [leftTextRef, inViewLeftText] = useInView({ triggerOnce: false });

  useEffect(() => {
    if (inViewTopImage) {
      controlsTopImage.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1 },
      });
    } else {
      controlsTopImage.start({
        opacity: 0,
        y: -50,
        transition: { duration: 1 },
      });
    }

    if (inViewBottomImage) {
      controlsBottomImage.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1 },
      });
    } else {
      controlsBottomImage.start({
        opacity: 0,
        y: 50,
        transition: { duration: 1 },
      });
    }

    if (inViewLeftText) {
      controlsLeftText.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1 },
      });
    } else {
      controlsLeftText.start({
        opacity: 0,
        y: 50,
        transition: { duration: 1 },
      });
    }
  }, [controlsTopImage, controlsBottomImage, controlsLeftText, inViewTopImage, inViewBottomImage, inViewLeftText]);

  return (
    <div className="Page2Main">
      <div className="page2Left">
        <motion.div
          ref={leftTextRef}
          initial={{ opacity: 0, y: 50 }}
          animate={controlsLeftText}
        >
          <div className="p2heading">
            <p>The Next Big</p>
            <h1>Blockchain</h1>
            <h2>revolution</h2>
          </div>
          <div className="p2leftbottom">
            <h1>ABC 234</h1>
            <p>We are the best web development <br /> company in the world</p>
            <p className="Coming-soon">Coming Soon</p>
            <p className="skip">SKIP</p>
          </div>
        </motion.div>
      </div>
      <div className="page2Right">
        <motion.div
          ref={topImageRef}
          initial={{ opacity: 0, y: -50 }}
          animate={controlsTopImage}
          className="imgTop2"
        >
          <img src={p2imgup} alt="App Screenshot 1" />
        </motion.div>
        <motion.div
          ref={bottomImageRef}
          initial={{ opacity: 0, y: 50 }}
          animate={controlsBottomImage}
          className="imgDown2"
        >
          <img src={p2imgdown} alt="App Screenshot 2" />
        </motion.div>
      </div>
    </div>
  );
}

export default Page2;

