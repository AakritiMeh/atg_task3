import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import p5t1 from "../images/p5t1.png";
import p5t2 from "../images/p5t2.png";
import p5c from "../images/p5c.png";
import p5b1 from "../images/p5b1.png";
import p5b2 from "../images/p5b2.png";
import si5 from "../images/si5.png"
import "../styles/Page5F.css";

const Page5F = () => {
  const controlsT1 = useAnimation();
  const controlsT2 = useAnimation();
  const controlsB1 = useAnimation();
  const controlsB2 = useAnimation();
  const controlsText = useAnimation();

  const [refT1, inViewT1] = useInView({ triggerOnce: false });
  const [refT2, inViewT2] = useInView({ triggerOnce: false });
  const [refB1, inViewB1] = useInView({ triggerOnce: false });
  const [refB2, inViewB2] = useInView({ triggerOnce: false });
  const [refText, inViewText] = useInView({ triggerOnce: false });

  useEffect(() => {
    if (inViewT1) {
      controlsT1.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1 },
      });
    } else {
      controlsT1.start({
        opacity: 0,
        y: -100,
        transition: { duration: 1 },
      });
    }

    if (inViewT2) {
      controlsT2.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1 },
      });
    } else {
      controlsT2.start({
        opacity: 0,
        y: -100,
        transition: { duration: 1 },
      });
    }

    if (inViewB1) {
      controlsB1.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1 },
      });
    } else {
      controlsB1.start({
        opacity: 0,
        y: 100,
        transition: { duration: 1 },
      });
    }

    if (inViewB2) {
      controlsB2.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1 },
      });
    } else {
      controlsB2.start({
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
  }, [controlsT1, controlsT2, controlsB1, controlsB2, controlsText, inViewT1, inViewT2, inViewB1, inViewB2, inViewText]);

  return (
    <div className="Page5Main">
      <div className="p5leftcomponent">
        <motion.div
          ref={refText}
          initial={{ opacity: 0, y: 50 }}
          animate={controlsText}
        >
          <div className="p4heading">
            <p>Text Headline</p>
            <h1>Text Headline</h1>
            <h3>Footer Headline</h3>
          </div>
          <div className="p4leftbottom">
            <h1>ABC 567</h1>
            <p>We are the best AR <br /> Development company <br /> in the world</p>
            <p className="Coming-soon">View Case Study</p>
            <p className="skip">SKIP</p>
          </div>
        </motion.div>
      </div>
      <div className="ScrollImage5">
            <img src={si5}></img>
      </div>
      <div className="p5rightcomponent">
        <div className="p5top">
          <motion.div
            ref={refT1}
            initial={{ opacity: 0, y: -100 }}
            animate={controlsT1}
            className="p5t1"
          >
            <img src={p5t1} alt="App Screenshot 1" />
          </motion.div>
          <motion.div
            ref={refT2}
            initial={{ opacity: 0, y: -100 }}
            animate={controlsT2}
            className="p5t2"
          >
            <img src={p5t2} alt="App Screenshot 2" />
          </motion.div>
        </div>
        <motion.div
          ref={refT1}
          initial={{ opacity: 0, y: 100 }}
          animate={controlsT1}
          className="p5center"
        >
          <img src={p5c} alt="App Screenshot Center" />
        </motion.div>
        <div className="p5bottom">
          <motion.div
            ref={refB1}
            initial={{ opacity: 0, y: 100 }}
            animate={controlsB1}
            className="p5b1"
          >
            <img src={p5b1} alt="App Screenshot 3" />
          </motion.div>
          <motion.div
            ref={refB2}
            initial={{ opacity: 0, y: 100 }}
            animate={controlsB2}
            className="p5b2"
          >
            <img src={p5b2} alt="App Screenshot 4" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Page5F;
