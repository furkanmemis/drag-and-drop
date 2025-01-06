import React, { useEffect, useState } from "react";
import { Typography, Divider } from "@mui/material";
import Grid from "@mui/material/Grid2";
import FontFamilySelector from "./FontFamilySelector";
import FontWeightSelector from "./FontWeightSelector";
import { Paragraph } from "../../Models/Paragraph";
import RowsSelector from "./RowsSelector";
import FontSizeSelector from "./FonstSizeSelector";
import Text from "./Text";

interface RSParagrapProps{
  item: Paragraph;
  index: number;
  onChangeParagraph: (newParagraph: Paragraph, index: number) => void;
}

const RSParagraph: React.FC<RSParagrapProps> = ({item, index, onChangeParagraph}) => {
  const [paragraph,setParagraph] = useState<Paragraph>();
  const [selectedIndex, setSelectedIndex] = useState<number>();

  useEffect(()=>{
    setParagraph(item);
    if(index !== -1){
      setSelectedIndex(index);
    }
  },[item, index])


  const handleParagraphChange = (field: keyof Paragraph["properties"], newValue: any) => {
    const updatedParagraph = {
      ...paragraph,
      properties: {
        ...paragraph?.properties,
        [field]: newValue,
      },
    };
    setParagraph(updatedParagraph as Paragraph);
    onChangeParagraph(updatedParagraph as Paragraph, selectedIndex ?? -1);
  };

  return (
    <Grid
      container
      sx={{ padding: "5%", justifyContent: "center", alignItems: "center" }}
      spacing={2}
    >
      <Grid size={12}>
        <Typography color="darkblue" fontWeight="bold" variant="h6">
          Text
        </Typography>
      </Grid>

      <Grid size={12}>
        <Text label="Paragraph" content={paragraph?.properties.text || ""} onText={(newText) => {handleParagraphChange("text",newText)}} />
      </Grid>

      <Grid size={12}>
        <Divider />
      </Grid>

      <Grid size={12}>
        <Typography color="darkblue" fontWeight="bold" variant="h6">
          Font
        </Typography>
      </Grid>

      <Grid size={12}>
        <FontFamilySelector font={paragraph?.properties.fontFamily || "inherit"} onFamilyChange={(newFamily) => {handleParagraphChange("fontFamily",newFamily)}} />
      </Grid>

      <Grid size={12}>
        <FontWeightSelector weight={paragraph?.properties.fontWeight || "bold"} onWeightChange={(newWeight)=>{handleParagraphChange("fontWeight",newWeight)}}/>
      </Grid>

      <Grid size={12}>
        <Typography color="darkblue" fontWeight="bold" variant="h6">
          Size
        </Typography>
      </Grid>

      <Grid size={6}>
        <FontSizeSelector size={paragraph?.properties.fontSize ?? 14} onSizeChange={(newSize) => {handleParagraphChange("fontSize", newSize)}} />
      </Grid>

      <Grid size={6}>
        <RowsSelector rows={paragraph?.properties.rowsNumber ?? 2} onRowsChange={(newRow) => {handleParagraphChange("rowsNumber",newRow)}} />
      </Grid>
    </Grid>
  );
};

export default RSParagraph;
