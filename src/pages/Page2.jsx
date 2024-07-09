// import  { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

import p2imgup from "../images/page2ImageUp.png";
import p2imgdown from "../images/page2ImageDown.png";
import "../styles/Page2.css";

// gsap.registerPlugin(ScrollTrigger);

const Page2 = () => {
//   const componentRef2 = useRef(null);
//   const headingRef2 = useRef(null);
//   const bottomContentRef2 = useRef(null);
//   const topImageRef2 = useRef(null);
//   const bottomImageRef2 = useRef(null);

//   useEffect(() => {
//     const component2 = componentRef2.current;
//     const heading2 = headingRef2.current;
//     const bottomContent2 = bottomContentRef2.current;
//     const topImage2 = topImageRef2.current;
//     const bottomImage2= bottomImageRef2.current;

//     gsap.to(component2, {
//       scrollTrigger: {
//         trigger: component2,
//         start: "top top",
//         end: "bottom top",
//         scrub: true,
//         pin: true,
//       }
//     });

//     gsap.fromTo(heading2, 
//       { y: 50, opacity: 0 },
//       {
//         y: -50,
//         opacity: 1,
//         duration: 1,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: component2,
//           start: "top center",
//           end: "center center",
//           scrub: true
//         }
//       }
//     );

//     gsap.fromTo(bottomContent2, 
//       { y: 50, opacity: 0 },
//       {
//         y: -50,
//         opacity: 1,
//         duration: 1,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: component2,
//           start: "top center",
//           end: "center center",
//           scrub: true
//         }
//       }
//     );

//     gsap.fromTo(topImage2,
//         {
//             opacity: 0,
//             y: -200,
//           },
//           {
//             opacity: 1,
//             y: 0,
//             duration: 2,
//             ease: 'power2.out',
//             scrollTrigger: {
//               trigger: component2,
//               start: 'top top',
//               end: 'center center',  
//               scrub: true,

//             },
//           }
//     );

//     gsap.fromTo(bottomImage2,
//       { y: '100%', opacity: 0 },
//       {
//         y: 0,
//         opacity: 1,
//         duration: 2,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: component2,
//           start: "top 70%",
//           end: "top center",
//           scrub: true
//         }
//       }
//     );
//   }, []);

  return (
    <div className="Page2Main">
      <div className="page2Left">
        <div></div>
        <div className="p2heading">
          <p>The Next Big</p>
          <h1>Blockchain</h1>
          <h2>revolution</h2>
        </div>

        <div className="p2leftbottom">
          <h1>ABC 234</h1>
          <p>We are the best web development <br/> company in the world</p>
          <p className="Coming-soon">Coming Soon</p>
          <p className="skip">SKIP</p>
        </div>
      </div>
      <div className="page2Right">
        <div className="imgDown2">
          <img src={p2imgdown} alt="App Screenshot 2" />
        </div>
        <div className="imgTop2">
          <img src={p2imgup} alt="App Screenshot 1" />
        </div>
      </div>
    </div>
  );
  
}

export default Page2;