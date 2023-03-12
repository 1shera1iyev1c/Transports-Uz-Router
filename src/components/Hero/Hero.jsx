import "./Hero.css";
import Intro from "../Intro/Intro";

export function Hero({children}) {
  return (
    <>
      <div className="hero_area">
        {children}
        <Intro />
      </div>
    </>
  );
}
