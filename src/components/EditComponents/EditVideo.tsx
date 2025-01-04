import React from "react";

interface EditVideoProps{
    onClickVideo: (itemName: string) => void;
}

const EditVideo: React.FC<EditVideoProps> = ({onClickVideo}) => {
    const videoId = "drdX7w-tLt0";

    return (
        <div onClick={()=>{onClickVideo('video')}} style={{padding: "3%", backgroundColor: "white"}}>
            <iframe 
                width="100%" 
                height="300" 
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