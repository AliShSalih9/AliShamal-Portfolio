import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import "./App.css";
function Scrolling() {
  const [visible, setVisible] = useState(false);
  const [counter, setvalue] = useState(0);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      // progress in %
      const progress = (scrollTop / (fullHeight - windowHeight)) * 100;

      setVisible(scrollTop > 0);
      setvalue(progress); // <-- this becomes 0 → 100
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="scroll-div">
      {visible && (
        <div className="scroll-to-top" onClick={scrollToTop}>
          <FontAwesomeIcon
            icon={faAngleUp}
            style={{ color: "var(--bg-background)" }}
          />
        </div>
      )}
      {visible && (
        <div
          className="scroll-value"
          style={{
            width: `${counter + 3}%`,
            maxWidth: "100%",
            height: "3px",
            background: "var(--color-accent)",
          }}
        ></div>
      )}
    </div>
  );
}

export default Scrolling;
