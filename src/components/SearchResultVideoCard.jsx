/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { abbreviateNumber } from "js-abbreviation-number";

import VideoLength from "../shared/VideoLength";
function SearchResultVideoCard({ video }) {
  return (
    <Link to={`/video/${video?.videoId}`}>
      <div className="flex flex-col md:flex-row  md:mb-3 dark:lg:hover:bg-white/[0.1]  lg:hover:bg-black/[0.1] rounded-xl md:p-4">
        <div className="relative flex shrink-0 h-40 md:h-28 lg:h-40 xl:h-48 w-full md:w-48 lg:w-64 xl:w-80 rounded-xl bg-slate-800 overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src={video?.thumbnails[0]?.url}
          />
          {video?.lengthSeconds && <VideoLength time={video?.lengthSeconds} />}
        </div>
        <div className="flex  flex-col  md:ml-6 md:mt-0 overflow-hidden">
          <span className=" md:text-xl font-semibold line-clamp-2 text-black dark:text-white">
            {video?.title}
          </span>
     
          <div className="flex items-center">
            <div className="flex items-start mr-3">
              <div className="flex h-9 w-9 rounded-full overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src={video?.author?.avatar[0]?.url}
                />
              </div>
            </div>
            <div className="flex flex-col">
              
              <div className="flex text-sm font-semibold text-black/[0.7] dark:text-white/[0.7] truncate overflow-hidden">
                <span>{`${abbreviateNumber(
                  video?.stats?.views,
                )} views`}</span>
                <span className="flex text-[24px] leading-none font-bold text-black/[0.7] dark:text-white/[0.7] relative top-[-10px] mx-1">
                  .
                </span>
                <span className="truncate">{video?.publishedTimeText}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default SearchResultVideoCard;
