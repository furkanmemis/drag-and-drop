import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Page from "./Page";
import { StyleItem } from "../Models/StyleItem";

interface DropTargetProps {
  onDrop: (itemId: string) => void;
  onClickSelectedItem: (itemName: string,selectedIndex: number) => void;
  list: StyleItem[];
  onChangeList: (newList: StyleItem[]) => void;
  deletedIndex: number;
}

const Content: React.FC<DropTargetProps> = ({onDrop, onClickSelectedItem, list, onChangeList, deletedIndex}) => {

  const [allList, setAllList] = useState<StyleItem[]>([]);
  const [deletIndex, setDeleteIndex] = useState<number>(-1);

  useEffect(()=>{
    setAllList(list);
  },[list])

  useEffect(()=>{
    if(deletedIndex !== -1){
      const newList = allList.filter((_,ind) => ind !== deletedIndex);
      setAllList(newList);
      setDeleteIndex(deletedIndex);
    }
  },[deletedIndex, allList])

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#FFFFF6",
        minWidth: "60vw",
        borderRight: "2px solid rgba(0, 0, 0, 0.2)",
        height: "100vh",
      }}
    >
      <Page onDrop={onDrop} onClickSelectedItem={(itemName,selectedIndex)=>{onClickSelectedItem(itemName,selectedIndex)}} list={allList} onChangeList={(newList) => {onChangeList(newList)}} deletedIndex={deletIndex}/>
    </Box>
  );
};

export default Content;
