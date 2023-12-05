import { useParams } from "react-router-dom";
import LeftNav from "./LeftNav";
import SearchResultVideoCard from "./SearchResultVideoCard";
import RequestVideo from "../context/RequestVideo";
import Loading from "../shared/Loading";
import NoVideo from "../shared/NoVideo";
function SearchResult() {
  const { searchQuery } = useParams();

  const SearchData = RequestVideo(`/search/${searchQuery}`);

  if (SearchData?.isPending) {
    return <Loading />
  }
  return (
    <div className="flex flex-row  h-[calc(100%-56px)]">
      <LeftNav />
      <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-white dark:bg-black">
        <div className="grid grid-cols-1 gap-2 p-5">
          {
            SearchData?.data?.data?.length ?
              SearchData?.data?.data?.map((item) => {
                if (item.type !== "video") return false;
                return (
                  <SearchResultVideoCard
                    key={item?.video?.videoId}
                    video={item?.video}
                  />
                );
              }) :
              <NoVideo />
          }
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
