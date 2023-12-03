import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { abbreviateNumber } from "js-abbreviation-number";

import SuggestionVideoCard from "./SuggestionVideoCard";
import RequestVideo from "../context/RequestVideo";
import Loading from "../shared/Loading";

function VideoDetail(video) {
  const { id } = useParams();


  const RequestVideosByID = RequestVideo(`/video/${id}`);
  const RequestVideos = RequestVideo(`/video`);

  if (RequestVideosByID?.isPending || RequestVideos?.isPending) {
    return <Loading />
  }

  console.log();
  
  return (
    <div className="flex justify-center flex-row  bg-white dark:bg-black lg:mx-10">
      <div className="w-full max-w-[1280px] flex flex-col lg:flex-row">
        <div className="flex flex-col lg:w-[calc(100%-350px)] xl:w-[calc(100%-400px)] px-4 py-3 lg:py-6 overflow-y-auto">
          <div className="h-[200px] md:h-[400px] lg:h-[400px] xl:h-[550px] ml-[-16px] lg:ml-0 mr-[-16px] lg:mr-0">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              controls
              width="100%"
              height="100%"
              style={{ backgroundColor: "#00000" }}
              playing={true}
              onProgress={true}
            />
          </div>
          <div className="text-black dark:text-white font-semibold text-sm md:text-xl mt-4 line-clamp-2">
            {RequestVideosByID?.data?.data?.video?.title}
          </div>
          <div className="flex justify-between flex-row mt-4">
            <div className="flex">
              <div className="flex items-start ">
                <div className="flex h-11 w-11 rounded-full overflow-hidden">
                  <img
                    src={RequestVideosByID?.data?.data?.video?.author?.avatar[0]?.url}
                    alt="avatar"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-col ml-3 ">
                <div className="text-black dark:text-white text-md font-semibold flex items-center">
                  {RequestVideosByID?.data?.data?.video?.author?.title}
                  {RequestVideosByID?.data?.data?.video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                    <BsFillCheckCircleFill className="text-black/[0.5] dark:text-white/[0.5] text-[12px] ml-1" />
                  )}
                </div>
                <div className="text-black/[0.7] dark:text-white/[0.7] text-sm">
                  405M
                </div>
              </div>
            </div>
            <div className="flex text-black dark:text-white mt-4 md:mt-0">

            </div>
          </div>
        </div>
        <div className="flex flex-col py-6 px-4 overflow-y-auto lg:w-[350px] xl:w-[400px] hide">
          {RequestVideos?.data?.data.map((item, index) => {
            if (item?.type !== "video") return false;
            return <SuggestionVideoCard key={index} video={item?.video} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default VideoDetail;
