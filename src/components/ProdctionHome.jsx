import React from "react";
import disney from "../assets/image/disney.png";
import pixar from "../assets/image/pixar.png";
import marvel from "../assets/image/marvel.png";
import starwar from "../assets/image/starwar.png";
import national from "../assets/image/nationalG.png";
import disneyV from "../assets/videos/disney.mp4";
import marvelV from "../assets/videos/marvel.mp4";
import pixarV from "../assets/videos/pixar.mp4";
import starwarsV from "../assets/videos/star-wars.mp4";
import nationalgeographicV from "../assets/videos/national-geographic.mp4";

function ProdctionHome() {
  const prodctionHome = [
    {
      id: 1,
      image: disney,
      video: disneyV,
    },
    {
      id: 2,
      image: pixar,
      video: pixarV,
    },
    {
      id: 3,
      image: marvel,
      video: marvelV,
    },
    {
      id: 4,
      image: starwar,
      video: starwarsV,
    },
    {
      id: 5,
      image: national,
      video: nationalgeographicV,
    },
  ];
  return (
    <>
      <div className="flex gap-6 mx-10 mt-5">
        {prodctionHome.map((item) => (
          <>
            <div className="">
              <img
                src={item.image}
                alt=""
                className="w-full border-[1px] border-gray-200 rounded-md hover:scale-110 transition-all duration-300 ease-in-out z-10 shadow-lg shadow-gray-500"
              />
            </div>
          </>
        ))}
      </div>
    </>
  );
}

export default ProdctionHome;
