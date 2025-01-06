import React from "react";
import { Video } from "../../Models/Video";

interface EditVideoProps{
    onClickVideo: (itemName: string) => void;
    video: Video;
}

const EditVideo: React.FC<EditVideoProps> = ({onClickVideo, video}) => {
    const url = video?.properties?.src ? video?.properties?.src.split("/") : [];
    const videoId = url.length > 0 ? url[url.length - 1] : "-lcfABgHKfs";
    const height = video?.properties?.height || 300;
    const width = video?.properties?.width || 400;


    return (
        <div onClick={()=>{onClickVideo('video')}} style={{padding: "3%", backgroundColor: "white"}}>
            <iframe 
                width={width} 
                height={height} 
                src={`https://www.youtube.com/embed/${videoId}`} 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                title="Embedded YouTube video"
                onClick={()=>{onClickVideo('video')}}
            ></iframe>
        </div>
    );
}

export default EditVideo;