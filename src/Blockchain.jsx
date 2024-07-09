// App.jsx
import  { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CircularProgress from "./CircularProgress";
import "./blockchain.css";


gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const appRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 7;

  const content = [
    {
      title: "The Next Big",
      subtitle: "Blockchain",
      description: "Revolution",
      image: "path_to_blockchain_image.jpg",
    },
    // Add more content objects for other pages
  ];

  useEffect(() => {
    const sections = gsap.utils.toArray(".page");

    const scrollTween = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".app",
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + appRef.current.offsetWidth,
        onUpdate: (self) => {
          const newPage = Math.round(self.progress * (totalPages - 1)) + 1;
          setCurrentPage(newPage);
        },
      },
    });

    sections.forEach((section, index) => {
      const textSection = section.querySelector(".text-section");
      const imageSection = section.querySelector(".image-section");

      gsap.fromTo(
        textSection,
        { x: "-100%", opacity: 0 },
        {
          x: "0%",
          opacity: 1,
          scrollTrigger: {
            trigger: section,
            containerAnimation: scrollTween,
            start: "left center",
            end: "right center",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        imageSection,
        { x: "100%", opacity: 0 },
        {
          x: "0%",
          opacity: 1,
          scrollTrigger: {
            trigger: section,
            containerAnimation: scrollTween,
            start: "left center",
            end: "right center",
            scrub: true,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="app" ref={appRef}>
      <CircularProgress currentPage={currentPage} totalPages={totalPages} />
      {content.map((page, index) => (
        <div key={index} className="page">
          <div className="content">
            <div className="text-section">
              <h1>{page.title}</h1>
              <h2>{page.subtitle}</h2>
              <p>{page.description}</p>
              {index === 0 && (
                <>
                  <h3>ABC 234</h3>
                  <p>We are the best web development company in the world</p>
                  <p>Coming Soon</p>
                  <button>SKIP</button>
                </>
              )}
            </div>
            <div className="image-section">
              <img src={page.image} alt={`${page.title} ${page.subtitle}`} />
              {index === 0 && (
                <div className="mobile-app">
                  <img src="path_to_mobile_app_image.jpg" alt="Mobile App" />
                  <p>Remix your Reality</p>
                  <p>
                    With a social media platform for video memes that reveals
                    your creativity
                  </p>
                  <div className="sign-up-form">
                    <h4>You need a VEME account to continue</h4>
                    <input type="text" placeholder="Swati Soni" />
                    <input type="email" placeholder="contact.swatisoni@gm" />
                    <input type="text" placeholder="Set Username" />
                    <input type="password" placeholder="Set Password" />
                    <p>
                      Password should be at least 8 characters long and contain
                      a special character.
                    </p>
                    <button>Sign Up</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
