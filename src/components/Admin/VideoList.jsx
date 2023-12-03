import axios from "axios";
import RequestVideo from "../../context/RequestVideo";
import useAxios from "../../context/useAxios";
import { Link } from "react-router-dom";

const VideoList = () => {
    const VideoList = RequestVideo('/video');
    const Axios = useAxios();

    const DeleteVideo = id => {
        Axios.delete(`/video/delete/${id}`)
            .then(() => {
                VideoList?.refetch();
            })
    }
    return (
        <>
            <div className="flex justify-between px-10 items-center">
                <p>Total Video: {VideoList?.data?.data?.length}</p>
                <Link className="btn btn-outline border-0 border-b-4" to={'/addvideo'}>Add Video</Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5">
                {
                    VideoList?.data?.data.map((item, index) => {
                        if (item.type !== "video") return false;
                        return <div key={index}>
                            <div className="rounded-lg bg-slate-200" >
                                <img src={item?.video?.thumbnails[0]?.url} className="w-full rounded-t-lg object-cover" />
                                <p className="font-bold mt-2 p-5">{item?.video?.title}</p>
                                <div className="mt-5 flex justify-between p-5">
                                    <button onClick={() => DeleteVideo(item?._id)} className="btn btn-outline border-0 border-b-4">Delete</button>
                                </div>
                            </div>
                        </div>;
                    })
                }
            </div >
        </>
    );
};

export default VideoList;