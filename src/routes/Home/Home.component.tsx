import "./Home.styles.sass";
import { useEffect, useRef, useState } from "react";
import supraImg from "../../assets/HomeSlides/supra.jpg";
import mobile_supraImg from "../../assets/HomeSlides/supra_mobile.jpg";

const Home = () => {
  const [img, setImg] = useState(window.innerWidth > 700 ? supraImg : mobile_supraImg);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const imgElement = imageRef.current;
    if (!imgElement) return;

    const observer = new ResizeObserver(() => {
      if (img === supraImg && window.innerWidth < 700) setImg(mobile_supraImg);
      if (img === mobile_supraImg && window.innerWidth >= 700) setImg(supraImg);
    });

    observer.observe(imgElement);

    return () => {
      observer.disconnect();
    };
  }, [imageRef, img]);

  return (
    <div className="home">
      <h1 className="home__title">Wyporzyczalnia Aut</h1>
      <div className="home__contact"></div>
      <img ref={imageRef} src={img} alt="" className="home__image"></img>
      <div className="home__textContainer">
        <div className="home__textBox">
          <h1 className="home__text-title">O autach wiemy wszystko</h1>
          <p className="home__text">Najszersza oferta samochodów w niskich cenach</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
