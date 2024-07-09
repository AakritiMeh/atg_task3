import p3imgleft from "../images/p3imgleft.png";
import p3imgright from "../images/p3imgright.png";
import heading4 from "../images/page3Heading.png"
import "../styles/Page3.css";
const Page3 = () => {
  return (
    <div className="Page4Main">
      <div className="page4Left">
        <div></div>
        <div className="p4heading">
          <p>Refining</p>
          <h1>US Strategy</h1>
          <h3>and UI design</h3>
        </div>

        <div className="p4leftbottom">
          <h1>ABC 456</h1>
          <p>We are the best web development <br/> company in the world</p>
          <p className="Coming-soon">Coming Soon</p>
          <p className="skip">SKIP</p>
        </div>
      </div>
      <div className="page4Right">
        <div className="p4imgleft">
          <img src={p4imgleft} alt="App Screenshot 4" />
        </div>
        <div className="p4imgright">
          <img src={p4imgright} alt="App Screenshot 1" />
        </div>
      </div>
    </div>
  );
  
}

export default Page3