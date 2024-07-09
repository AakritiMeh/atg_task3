import p3imgleft from "../images/p3imgleft.png";
import p3imgright from "../images/p3imgright.png";
import heading3 from "../images/page3Heading.png"
import "../styles/Page3.css";
const Page3 = () => {
  return (
    <div className="Page3Main">
      <div className="page3Left">
        <div></div>
        <div className="p3heading">
          <p>Powered By Advance</p>
          <img src={heading3}></img>
          <h3>algorithms</h3>
        </div>

        <div className="p3leftbottom">
          <h1>ABC 345</h1>
          <p>We are the best web development <br/> company in the world</p>
          <p className="Coming-soon">Coming Soon</p>
          <p className="skip">SKIP</p>
        </div>
      </div>
      <div className="page3Right">
        <div className="p3imgleft">
          <img src={p3imgleft} alt="App Screenshot 3" />
        </div>
        <div className="p3imgright">
          <img src={p3imgright} alt="App Screenshot 1" />
        </div>
      </div>
    </div>
  );
  
}

export default Page3