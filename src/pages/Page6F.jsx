import p6img from "../images/p6.png";
import { motion } from "framer-motion";
import "../styles/Page6F.css";
import si6 from "../images/si6.png"
const Page6F = () => {
  return (
    <div className="p6Main">
      <div className="p6left">
        <motion.div
          className="p4heading"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p>developing EPR solution for</p>
          <h1>Text Headline</h1>
          <h3>in furniture industry</h3>
        </motion.div>
        <motion.div
          className="p6leftbottom"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>ABC 567</h1>
          <p>Best since 2017 <br /> We offer a wide range of <br /> web development and app development</p>
          <p className="Coming-soon">View Case Study</p>
          <p className="skip">SKIP</p>
        </motion.div>
      </div>
      <div className="ScrollImage6">
          <img src={si6}></img>
      </div>
      <div className="p6right">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <img src={p6img} alt="EPR Solution" />
        </motion.div>
      </div>
    </div>
  );
}

export default Page6F;
