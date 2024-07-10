import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import p3imgleft from "../images/p3imgleft.png";
import p3imgright from "../images/p3imgright.png";
import heading3 from "../images/page3Heading.png";
import "../styles/Page3F.css";
import si3 from "../images/si3.png"
const Page3F = () => {
  const controlsRightImage = useAnimation();
  const controlsLeftImage = useAnimation();
  const controlsLeftText = useAnimation();

  const [rightImageRef, inViewRightImage] = useInView({ triggerOnce: false });
  const [leftImageRef, inViewLeftImage] = useInView({ triggerOnce: false });
  const [leftTextRef, inViewLeftText] = useInView({ triggerOnce: false });

  useEffect(() => {
    if (inViewRightImage) {
      controlsRightImage.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1 },
      });
    } else {
      controlsRightImage.start({
        opacity: 0,
        y: -50,
        transition: { duration: 1 },
      });
    }

    if (inViewLeftImage) {
      controlsLeftImage.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1 },
      });
    } else {
      controlsLeftImage.start({
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
  }, [controlsRightImage, controlsLeftImage, controlsLeftText, inViewRightImage, inViewLeftImage, inViewLeftText]);

  return (
    <div className="Page3Main">
      <div className="page3Left">
        <motion.div
          ref={leftTextRef}
          initial={{ opacity: 0, y: 50 }}
          animate={controlsLeftText}
        >
          <div className="p3heading">
            <p>Powered By Advance</p>
            <img src={heading3} alt="Heading" />
            <h3>algorithms</h3>
          </div>
          <div className="p3leftbottom">
            <h1>ABC 345</h1>
            <p>We are the best web development <br /> company in the world</p>
            <p className="Coming-soon">Coming Soon</p>
            <p className="skip">SKIP</p>
          </div>
        </motion.div>
      </div>
      <div className="ScrollImage3">
          <img src={si3}></img>
      </div>
      <div className="page3Right">
        <motion.div
          ref={leftImageRef}
          initial={{ opacity: 0, y: 50 }}
          animate={controlsLeftImage}
          className="p3imgleft"
        >
          <img src={p3imgleft} alt="App Screenshot 3" />
        </motion.div>
        <motion.div
          ref={rightImageRef}
          initial={{ opacity: 0, y: -50 }}
          animate={controlsRightImage}
          className="p3imgright"
        >
          <img src={p3imgright} alt="App Screenshot 1" />
        </motion.div>
      </div>
    </div>
  );
}

export default Page3F;
