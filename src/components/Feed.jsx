import { useContext, useEffect } from "react";
import { Context } from "../context/ContextApi";
import LeftNav from "./LeftNav";
import VideoCard from "./VideoCard";
import RequestVideo from "../context/RequestVideo";
import Loading from "../shared/Loading";

const Feed = () => {
  const { loading, searchResult } = useContext(Context);

  useEffect(() => {
    document.getElementById("root").classList.remove("custom-h");
    window.scrollTo(0, 0);
  }, []);

  const RequestVideos = RequestVideo('/video');

 
  return (
    <div className="flex flex-row h-[calc(100%-56px)]">
      <LeftNav />
      <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-white dark:bg-black">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5">
          {
            RequestVideos?.data?.data.map((item, index) => {
              if (item.type !== "video") return false;
              return <VideoCard key={index} video={item?.video} />;
            })
          }
        </div>
      </div>
    </div>
  );
};

export default Feed;
