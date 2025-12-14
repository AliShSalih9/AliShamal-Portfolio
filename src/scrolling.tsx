import './App.css';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
 function Scrolling() {
  const isMobile = (): boolean => {
  return window.innerWidth <= 768 || 
         /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};
  const [visible, setVisible] = useState(false);
  const [counter,setvalue] = useState(0);

   const scrollToTop = () => {
    
  const speed = isMobile() ?10000000:50; // speed of animation (bigger = faster herself)

  const animate = () => {
    if (window.scrollY > 0) {
      window.scrollTo(0, window.scrollY - speed);
      requestAnimationFrame(animate);
      
    }
  };

  animate();
};

    
   useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      // progress in %
      const progress = (scrollTop / (fullHeight - windowHeight)) * 100;

      setVisible(scrollTop > 0);
      setvalue(progress);  // <-- this becomes 0 → 100
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

 
    return <div className="scroll-div">
      {visible && <div className="scroll-to-top" onClick={scrollToTop}>
        <FontAwesomeIcon icon={faAngleUp} style={{color: "#ffffff",}} />
         </div>
         }
         {
            visible && <div className="scroll-value" style={
                {
                    width:`${counter+3}%`,
                    maxWidth:"100%",
                    height:"5px",
                    background:"#ff7a00",
                    

                }
            }>
                
                </div>
         }

    </div>
}



export default Scrolling;
