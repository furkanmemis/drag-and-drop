import React, { useEffect, useState } from "react";
import { Typography, Divider } from "@mui/material";
import Grid from "@mui/material/Grid2";
import FontFamilySelector from "./FontFamilySelector";
import FontWeightSelector from "./FontWeightSelector";
import { Heading } from "../../Models/Heading";
import RowsSelector from "./RowsSelector";
import FontSizeSelector from "./FonstSizeSelector";
import Text from "./Text";

interface RSHeadingProps{
  item: Heading;
  index: number;
  onChangeHeading: (newHeading: Heading, index: number) => void;
}

const RSHeading: React.FC<RSHeadingProps> = ({item, index, onChangeHeading}) => {

  const [heading,setHeading] = useState<Heading>();
  const [selectedIndex, setSelectedIndex] = useState<number>();

  useEffect(()=>{
    setHeading(item);
    if(index !== -1){
      setSelectedIndex(index);
    }
  },[item,index])


    const handleHeadingChange = (field: keyof Heading["properties"], newValue: any) => {
      const updatedHeading = {
        ...heading,
        properties: {
          ...heading?.properties,
          [field]: newValue,
        },
      };
      setHeading(updatedHeading as Heading);
      onChangeHeading(updatedHeading as Heading, selectedIndex ?? -1);
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
        <Text label="Heading" content={heading?.properties.text || ""} onText={(newText) => {handleHeadingChange("text",newText)}} />
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
        <FontFamilySelector font={heading?.properties.fontFamily || "italic"} onFamilyChange={(newFamily)=>{handleHeadingChange("fontFamily",newFamily)}} />
      </Grid>

      <Grid size={12}>
        <FontWeightSelector weight={heading?.properties.fontWeight || "semibold"} onWeightChange={(newWeight)=>{handleHeadingChange("fontWeight",newWeight)}} />
      </Grid>

      <Grid size={12}>
        <Typography color="darkblue" fontWeight="bold" variant="h6">
          Size
        </Typography>
      </Grid>

      <Grid size={6}>
        <FontSizeSelector size={heading?.properties.fontSize ?? 18} onSizeChange={(newSize) => {handleHeadingChange("fontSize",newSize)}} />
      </Grid>

      <Grid size={6}>
        <RowsSelector rows={heading?.properties.rowsNumber ?? 1} onRowsChange={(newRow) => {handleHeadingChange("rowsNumber",newRow)}} />
      </Grid>
    </Grid>
  );
};

export default RSHeading;
