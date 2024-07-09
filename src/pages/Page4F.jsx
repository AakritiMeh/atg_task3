import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import p4c from "../images/p4c.png";
import p4br from "../images/p4br.png";
import p4bl from "../images/p4bl.png";
import p4tl from "../images/p4tl.png";
import p4tr from "../images/p4tr.png";
import "../styles/Page4F.css";

const Page4F = () => {
  const controlsTL = useAnimation();
  const controlsTR = useAnimation();
  const controlsBR = useAnimation();
  const controlsCenter = useAnimation();
  const controlsBL = useAnimation();
  const controlsText = useAnimation();

  const [refTL, inViewTL] = useInView({ triggerOnce: false });
  const [refTR, inViewTR] = useInView({ triggerOnce: false });
  const [refBR, inViewBR] = useInView({ triggerOnce: false });
  const [refCenter, inViewCenter] = useInView({ triggerOnce: false });
  const [refBL, inViewBL] = useInView({ triggerOnce: false });
  const [refText, inViewText] = useInView({ triggerOnce: false });

  useEffect(() => {
    if (inViewTL) {
      controlsTL.start({
        opacity: 1,
        x: 0,
        y: 0,
        transition: { duration: 1 },
      });
    } else {
      controlsTL.start({
        opacity: 0,
        x: -100,
        y: -100,
        transition: { duration: 1 },
      });
    }

    if (inViewTR) {
      controlsTR.start({
        opacity: 1,
        x: 0,
        y: 0,
        transition: { duration: 1 },
      });
    } else {
      controlsTR.start({
        opacity: 0,
        x: 100,
        y: -100,
        transition: { duration: 1 },
      });
    }

    if (inViewBR) {
      controlsBR.start({
        opacity: 1,
        x: 0,
        y: 0,
        transition: { duration: 1 },
      });
    } else {
      controlsBR.start({
        opacity: 0,
        x: 100,
        y: 100,
        transition: { duration: 1 },
      });
    }

    if (inViewCenter) {
      controlsCenter.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1 },
      });
    } else {
      controlsCenter.start({
        opacity: 0,
        y: 100,
        transition: { duration: 1 },
      });
    }

    if (inViewBL) {
      controlsBL.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1 },
      });
    } else {
      controlsBL.start({
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
  }, [controlsTL, controlsTR, controlsBR, controlsCenter, controlsBL, controlsText, inViewTL, inViewTR, inViewBR, inViewCenter, inViewBL, inViewText]);

  return (
    <div className="Page4Main">
      <div className="page4Left">
        <motion.div
          ref={refText}
          initial={{ opacity: 0, y: 50 }}
          animate={controlsText}
        >
          <div className="p4heading">
            <p>Refining</p>
            <h1>US Strategy</h1>
            <h3>and UI design</h3>
          </div>
          <div className="p4leftbottom">
            <h1>ABC 456</h1>
            <p>We are the best web development <br /> company in the world</p>
            <p className="Coming-soon">Coming Soon</p>
            <p className="skip">SKIP</p>
          </div>
        </motion.div>
      </div>
      <div className="page4Right">
        <motion.div
          ref={refTL}
          initial={{ opacity: 0, x: -100, y: -100 }}
          animate={controlsTL}
          className="p4tl"
        >
          <img src={p4tl} alt="App Screenshot 4" />
        </motion.div>
        <motion.div
          ref={refTR}
          initial={{ opacity: 0, x: 100, y: -100 }}
          animate={controlsTR}
          className="p4tr"
        >
          <img src={p4tr} alt="App Screenshot 4" />
        </motion.div>
        <motion.div
          ref={refCenter}
          initial={{ opacity: 0, y: 100 }}
          animate={controlsCenter}
          className="p4center"
        >
          <img src={p4c} alt="App Screenshot 4" />
        </motion.div>
        <motion.div
          ref={refBL}
          initial={{ opacity: 0, y: 100 }}
          animate={controlsBL}
          className="p4bl"
        >
          <img src={p4bl} alt="App Screenshot 4" />
        </motion.div>
        <motion.div
          ref={refBR}
          initial={{ opacity: 0, x: 100, y: 100 }}
          animate={controlsBR}
          className="p4br"
        >
          <img src={p4br} alt="App Screenshot 4" />
        </motion.div>
      </div>
    </div>
  );
}

export default Page4F;
