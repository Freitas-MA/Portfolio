import homeGif from '../../assets/programer.gif'
import { isElementVisible } from '../../components/functions'
import { useState, useEffect, useRef } from 'react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);

  const handleScroll = () => {
    const elements = document.querySelectorAll('.popRight, .popLeft, .animate, .popUp');
    let allVisible = true;
    elements.forEach((element) => {
      if (!isElementVisible(element, document.body)) {
        allVisible = false;
      }
    });
    if (allVisible) {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    const handleLoad = () => {
      const elements = document.querySelectorAll('.popRight, .popLeft, .animate, .popUp');
      let allVisible = true;
      elements.forEach((element) => {
        if (!isElementVisible(element, document.body)) {
          allVisible = false;
        }
      });
      if (allVisible) {
        setIsVisible(true);
      }
    };
  
    handleLoad();
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id='hero' ref={heroRef}>
      <section className={`header-container`}>
        <div className='hero-profile'>
          <div className={`profile ${isVisible ? 'popRight' : ''}`}>
          <img src={homeGif} alt="" />
          </div>

          <div className={`content-text ${isVisible ? 'popLeft' : ''}`}>
            <h2>Hi, I&apos;m Marcos Freitas - Frontend Developer</h2>
            <h3>I&apos;m able to deal with your projects and deliver a very good result in a short time!</h3>
            <p>
              Skilled and passionate web developer, I possess a solid foundation in HTML, CSS, and JavaScript, and excel at
              problem-solving, clear communication, and collaboration with stakeholders.
            </p>
        </div>
        </div>
        <a id='connect-btn' href="#contact" className={`btn btn-secondary ${isVisible ? 'popUp' : ''}`}>Connect With Me</a>
      </section>

      <div className={`techIcons`}>
        <div>
          <i className="devicon devicon-html5-plain"></i>
        </div>
        <div>
          <i className="devicon devicon-css3-plain"></i>
        </div>
        <div>
          <i className="devicon devicon-bootstrap-plain"></i>
        </div>
        <div>
          <i className="devicon devicon-javascript-plain"></i>
        </div>
        <div>
          <i className="devicon devicon-react-original"></i>
        </div>
        <div>
          <i className="devicon devicon-nextjs-original"></i>
        </div>
      </div>
    </div>
  )
}
