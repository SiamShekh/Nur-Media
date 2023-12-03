import { useForm } from "react-hook-form";
import useAxios from "../../context/useAxios";

const AddVideo = () => {
    const {register, reset, handleSubmit} = useForm();
    const Axios = useAxios();
    

    const AddData = data =>{
        const {title, video_id} = data;

        const dataObj = 
        {

            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/B7dddHljxvguHawEALkHK6s3ZyzbbYD6Nmo1TGLEQn1xNG5iE-b90RL55h3kfiqX2dNp8ATagqA=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [],
                    "canonicalBaseUrl": "/@arobvootkids",
                    "channelId": "UCVaCaRzBQH1NSG6nF9-WDTA",
                    "title": "Arob Voot Kids"
                },
                "badges": [],
                "descriptionSnippet": "",
                "isLiveNow": false,
                "lengthSeconds": 640,
                "movingThumbnails": [
                    {
                        "height": 180,
                        "url": "https://i.ytimg.com/an_webp/MBz4YueiFQE/mqdefault_6s.webp?du=3000&sqp=CNyOq6sG&rs=AOn4CLBp8Nn_LGWNyfbY4Vqa5_o8PN6LyQ",
                        "width": 320
                    }
                ],
                "publishedTimeText": "3 weeks ago",
                "stats": {
                    "views": 103842
                },
                "thumbnails": [
                    {
                        "height": 270,
                        "url": `https://i.ytimg.com/vi/${video_id}/hq2.jpg`,
                        "width": 480
                    }
                ],
                "title": title,
                "videoId": video_id
            }
        }
        
        Axios.post('/new/video', dataObj)
        .then(() => {
            reset();
            alert('Data Insart.')
        })
        
    }

    return (
        <div className="flex flex-col md:flex-row w-full mx-auto">
            <div className="md:w-1/2 w-full">
                <img src="https://img.freepik.com/free-vector/video-upload-concept-illustration_114360-4358.jpg" alt="" />
            </div>
            <form className="w-full md:w-1/2 px-5 md:px-10 my-10">
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text">What is video title?</span>
                    </div>
                    <input type="text" {...register('title')} placeholder="video title" className="input input-bordered w-full" />
                </label>

                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text">What is video id?</span>
                    </div>
                    <input type="text" {...register('video_id')} placeholder="video id" className="input input-bordered w-full" />
                </label>

                <button onClick={handleSubmit(AddData)} className="btn btn-outline w-full border-0 border-b-4">Add Video</button>
            </form>
        </div>
    );
};

export default AddVideo;