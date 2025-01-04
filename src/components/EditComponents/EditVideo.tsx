import React from "react";

const EditVideo: React.FC = () => {
    const videoId = "drdX7w-tLt0"; // Sabit video ID'si

    return (
        <div>
            <iframe 
                width="100%" 
                height="300" 
                src={`https://www.youtube.com/embed/${videoId}`} 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                title="Embedded YouTube video"
            ></iframe>
        </div>
    );
}

export default EditVideo;