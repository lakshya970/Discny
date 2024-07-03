import React, { useEffect, useRef, useState } from "react";
import Globalapi from "../services/Globalapi";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";

const IMAGE_URL = "https://image.tmdb.org/t/p/original/";
// const screenWidth = window.innerWidth;

function Slider() {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef();

  // const sliderRight = (e) => {
  //   console.log("click");
  //   e.scrollLeft += screenWidth - 65;
  // };

  // const sliderLeft = (e) => {
  //   console.log("click");
  //   e.scrollLeft -= screenWidth - 65;
  // };
  useEffect(() => {
    getTrendingMovies();
  }, []);

  const getTrendingMovies = () => {
    Globalapi.getTrendingVideos.then((resp) => {
      console.log(resp.data.results);
      setMovieList(resp.data.results);
    });
  };

  return (
    <>
      <div>
        {/* <FaAngleLeft
          className="hidden md:block text-3xl text-white absolute mx-3 mt-[180px] hover:text-opacity-45 "
          onClick={() => sliderLeft(elementRef.current)}
        />
        <FaAngleRight
          className="hidden md:block text-3xl text-white absolute mx-4 mt-[180px] right-0 hover:text-opacity-45 "
          onClick={() => sliderRight(elementRef.current)}
        /> */}
        <div
          className="flex overflow-x-auto px-10 py-4 scrollbar-hide gap-3 scroll-smooth  "
          ref={elementRef}
        >
          <Swiper
            slidesPerView={1}
            // pagination={true}

            navigation={true}
            modules={[Navigation]}
          >
            {movieList.map((item, index) => (
              <SwiperSlide key={item.id}>
                <img
                  src={IMAGE_URL + item.backdrop_path}
                  alt="image"
                  className="min-w-full md:h-[350px] object-cover object-center  rounded-md hover:border-[3px] border-gray-200 transition-all duration-100 ease-in "
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default Slider;
