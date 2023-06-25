import React from "react";
import "./VideoPlayer.scss";
import VideoThumbLg from "../../assets/img/placeholder_img.jpg";
import PlayButton from "../../assets/img/play_DT@2x.png";
import Slider from "infinite-react-carousel";

function VideoPlayer() {
  const settings = {
    dots: true,
  };
  return (
    <section className="videoPlayer">
      <h2 className="videoPlayer__title">Clinical trial stories</h2>
      <p className="videoPlayer__text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime sed
        minima laudantium assumenda nisi esse quo veritatis ut nostrum fugit,
        veniam cumque dolore atque temporibus ratione. Minima, voluptas, nam,
        atque dolorem asperiores.
      </p>
      <div className="videoPlayer__carousel">
        <Slider {...settings}>
          <div>
            <div className="videoPlayer__carousel__content">
              <div className="videoPlayer__carousel__content__img">
                <img src={VideoThumbLg} alt="" className="w-[100%] h-[100%]" />
                <div className="videoPlayer__carousel__content__img__playButton">
                  <img src={PlayButton} alt="" className="w-[100%] h-[100%]" />
                </div>
              </div>
              <div className="videoPlayer__carousel__content__text">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Reiciendis enim placeat cum quo culpa totam omnis deleniti nam
                  expedita maxime!
                </p>
                <p className="font-semibold">
                  Ron formal clinical trial <br /> participant
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="videoPlayer__carousel__content">
              <div className="videoPlayer__carousel__content__img">
                <img src={VideoThumbLg} alt="" className="w-[100%] h-[100%]" />
                <div className="videoPlayer__carousel__content__img__playButton">
                  <img src={PlayButton} alt="" className="w-[100%] h-[100%]" />
                </div>
              </div>
              <div className="videoPlayer__carousel__content__text">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Reiciendis enim placeat cum quo culpa totam omnis deleniti nam
                  expedita maxime!
                </p>
                <p className="font-semibold">
                  Ron formal clinical trial <br /> participant
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="videoPlayer__carousel__content">
              <div className="videoPlayer__carousel__content__img">
                <img src={VideoThumbLg} alt="" className="w-[100%] h-[100%]" />
                <div className="videoPlayer__carousel__content__img__playButton">
                  <img src={PlayButton} alt="" className="w-[100%] h-[100%]" />
                </div>
              </div>
              <div className="videoPlayer__carousel__content__text">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Reiciendis enim placeat cum quo culpa totam omnis deleniti nam
                  expedita maxime!
                </p>
                <p className="font-semibold">
                  Ron formal clinical trial <br /> participant
                </p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default VideoPlayer;
