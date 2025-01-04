import React from "react";

interface EditImageProps{
    onClickImage: (itemName: string) => void;
}

const EditImage: React.FC<EditImageProps> = ({onClickImage}) =>{
    return(
        <div onClick={()=>{onClickImage('image')}}>
            <img src="/turk.png" alt="EditImage"/>
        </div>
    )
}

export default EditImage;