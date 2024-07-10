import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import si7 from "../images/si7.png"
import p7box from "../images/p7LeftBox.png";
import p7imgleft from "../images/p7imgleft.png";
import p7imgright from "../images/p7imgright.png";
import "../styles/Page7F.css";

const Page7F = () => {
  const controlsLeftImage = useAnimation();
  const controlsRightImage = useAnimation();
  const controlsText = useAnimation();

  const [refLeftImage, inViewLeftImage] = useInView({ triggerOnce: false });
  const [refRightImage, inViewRightImage] = useInView({ triggerOnce: false });
  const [refText, inViewText] = useInView({ triggerOnce: false });

  useEffect(() => {
    if (inViewLeftImage) {
      controlsLeftImage.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1 },
      });
    } else {
      controlsLeftImage.start({
        opacity: 0,
        y: 100,
        transition: { duration: 1 },
      });
    }

    if (inViewRightImage) {
      controlsRightImage.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1 },
      });
    } else {
      controlsRightImage.start({
        opacity: 0,
        y: 100,
        transition: { duration: 1 },
      });
    }

    if (inViewText) {
      controlsText.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1 },
      });
    } else {
      controlsText.start({
        opacity: 0,
        y: 50,
        transition: { duration: 1 },
      });
    }
  }, [controlsLeftImage, controlsRightImage, controlsText, inViewLeftImage, inViewRightImage, inViewText]);

  return (
    <div className="Page7Main">
      <div className="page7Left">
        <motion.div
          ref={refText}
          initial={{ opacity: 0, y: 50 }}
          animate={controlsText}
        >
          <div className="p7heading">
            <p>Biggest Classfields</p>
            <h1>East Asia</h1>
            <h2>East Asia Countries</h2>
          </div>
          <div className="p7left">
            <img src={p7box} alt="Award" />
          </div>
          <div className="p7leftbottom">
            <h1>ABC 123</h1>
            <p>We are the best web development <br /> company in the world</p>
            <p className="view-case-study">Coming Soon</p>
          </div>
        </motion.div>
      </div>
      <div className="ScrollImage7">
            <img src={si7}></img>
      </div>
      <div className="p7right">
        <motion.div
          ref={refLeftImage}
          initial={{ opacity: 0, y: 100 }}
          animate={controlsLeftImage}
          className="p7imgleft"
        >
          <img src={p7imgleft} alt="Left Image" />
        </motion.div>
        <motion.div
          ref={refRightImage}
          initial={{ opacity: 0, y: 100 }}
          animate={controlsRightImage}
          className="p7imgright"
        >
          <img src={p7imgright} alt="Right Image" />
        </motion.div>
      </div>
    </div>
  );
}

export default Page7F;
