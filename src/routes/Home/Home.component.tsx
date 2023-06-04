import "./Home.styles.sass";
import { useEffect, useState } from "react";
import Slider from "../../components/Slider/Slider.component";
import firstImg from "../../assets/HomeSlides/aston.jpg";
import secondImg from "../../assets/HomeSlides/senna.jpg";
import thirdImg from "../../assets/HomeSlides/supra.jpg";

const images = [firstImg, secondImg, thirdImg];
const slideTime = 20000;

const Home = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const changeIndex = () => {
      if (index + 1 > images.length - 1) setIndex(0);
      else setIndex(index + 1);
    };

    setTimeout(() => changeIndex(), slideTime);
  }, [index]);

  return (
    <div className="home">
      <h1 className="home__title">Wyporzyczalnia Aut</h1>
      <div className="home__sliderContainer">
        <Slider imageUrl={images[index]} />
      </div>
    </div>
  );
};

export default Home;
