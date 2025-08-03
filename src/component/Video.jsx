import React, { useRef, useState } from "react";
import busvideo from "../assets/bus.mp4";
import { FaRegStopCircle } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";

export default function Video() {
  const [isplaying, setIsplaying] = useState(false);
  const [showIcon, setShoicon] = useState(false);
  const videoplay = useRef();

  const handleClick = () => {
    setIsplaying(!isplaying);

    if (isplaying) {
      videoplay.current.play();
    } else {
      videoplay.current.pause();
    }
  };

  return (
    <div>
      <h1>my Video</h1>
      {isplaying ? (
        <FaPlay
          onClick={handleClick}
          className={`text-[40px]${
            showIcon ? "block" : "hidden"
          }  text-white absolute top-[180px] left-[260px]`}
        />
      ) : (
        <FaRegStopCircle
          onClick={handleClick}
          className={`text-[40px] ${
            showIcon ? "block" : "hidden"
          } text-white absolute top-[180px] left-[260px]`}
        />
      )}
      <video
        className="w-[500px] mx-5 mt-8"
        onClick={handleClick}
        src={busvideo}
        ref={videoplay}
        onMouseOver={() => setShoicon(true)}
        onMouseLeave={() => setShoicon(false)}
        // onPlay={() => setIsplaying(true)}
        // onPause={() => setIsplaying(false)}
      ></video>
    </div>
  );
}
