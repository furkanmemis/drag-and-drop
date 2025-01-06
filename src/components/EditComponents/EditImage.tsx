import React from "react";
import { Image } from "../../Models/Image";

interface EditImageProps {
    onClickImage: (itemName: string) => void;
    image: Image | null | undefined;
}

const EditImage: React.FC<EditImageProps> = ({ onClickImage, image }) => {
    const imageSrc = image?.properties?.src || "/turk.png";
    const imageWidth = image?.properties?.width || "100%";
    const imageHeight = image?.properties?.height || "100%";

    return (
        <div onClick={() => { onClickImage('image') }} style={{ padding: "5%" }}>
            <img src={imageSrc} alt="EditImage" style={{ width: imageWidth, height: imageHeight }} />
        </div>
    );
}

export default EditImage;