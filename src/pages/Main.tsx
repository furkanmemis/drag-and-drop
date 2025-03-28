import React, { useState } from "react";
import { Box } from "@mui/material";
import Sidebar from "../components/Sidebar";
import RightSidebar from "../components/RightSidebar";
import Content from "../components/Content";

import { StyleItem } from "../Models/StyleItem";
import { Paragraph } from "../Models/Paragraph";
import { Video } from "../Models/Video";
import { Image } from "../Models/Image";
import { Heading } from "../Models/Heading";

interface MainProps{
  onChangeList: (list: StyleItem[]) => void;
}

const Main: React.FC<MainProps> = ({onChangeList}) => {
  const [selectedItem, setSelectedItem] = useState<string>("");
  const [selectedItemIndex, setSelectedItemIndex] = useState<number>(0);
  const [add, setAdd] = useState<string>("");
  const [styleList, setStyleList] = useState<StyleItem[]>([]);
  const [deletedIndex, setDeletedIndex] = useState<number>(-1);

  const handleDrop = (itemId: string) => {
    setAdd(itemId);
    addStyle(itemId);
  };

  const addStyle = (type: string) => {
    const newStyleItem: StyleItem = (() => {
      switch (type) {
        case "image":
          return {
            type: "image",
            properties: {
              src: "",
              width: 550,
              height: 300,
            },
          } as Image;
        case "video":
          return {
            type: "video",
            properties: {
              src: "",
              width: 550,
              height: 300,
            },
          } as Video;
        case "paragraph":
          return {
            type: "paragraph",
            properties: {
              fontFamily: "inherit",
              fontWeight: "medium",
              text: "",
              rowsNumber: 3,
              fontSize: 14
            },
          } as Paragraph;
        case "heading":
          return {
            type: "heading",
            properties: {
              fontFamily: "inherit",
              fontWeight: "bold",
              text: "",
              rowsNumber: 1,
              fontSize: 18
            },
          } as Heading;
        default:
          throw new Error(`Unknown type: ${type}`);
      }
    })();
  
    setStyleList((prevStyleList) => {
      const newList = [...prevStyleList, newStyleItem];
      onChangeList(newList);
      return newList;
    });
  };

  const deleteItem = (approve: boolean, index: number) => {
    if(approve && index !== -1){
      const newStyleList = styleList.filter((_,ind) => ind !== index);
      setStyleList(newStyleList);
      onChangeList(newStyleList);
      setDeletedIndex(index);
    }

    setTimeout(()=>{
      setDeletedIndex(-1);
    },500)
  }

  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <Sidebar newItem={add} onChangeDelete={(approve,index) => {deleteItem(approve,index)}} />
      <Content
        onDrop={handleDrop}
        onClickSelectedItem={(itemName,selectedIndex) => {
          setSelectedItem(itemName);
          setSelectedItemIndex(selectedIndex);
        }}
        list={styleList}
        onChangeList={(newList) => {setStyleList(newList); onChangeList(newList);}}
        deletedIndex={deletedIndex}
      />
      <RightSidebar selectedItem={selectedItem} index={selectedItemIndex} list={styleList} onListChange={(list) => {setStyleList(list); onChangeList(list);}} />
    </Box>
  );
};

export default Main;
