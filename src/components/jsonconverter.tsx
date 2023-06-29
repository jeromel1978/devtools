import { useState } from "react";
import { Box } from "@mui/material";
import { TextField } from "@mui/material";
import Parse from "papaparse";

export const JSONConverter = () => {
  const [Original, setOriginal] = useState<string>("");
  const [Converted, setConverted] = useState<string>("");
  const [Invalid, setInvalid] = useState<boolean>(false);

  const ConvertToCSV = (Text: string) => {
    setOriginal(Text);
    try {
      setConverted(JSON.stringify(Parse.unparse(JSON.parse(Original)), null, 2));
      setInvalid(false);
    } catch (e) {
      setInvalid(true);
    }
  };
  const ConvertToJSON = (Text: string) => {
    setOriginal(Text);
    try {
      setConverted(JSON.stringify(Parse.unparse(JSON.parse(Original)), null, 2));
      setInvalid(false);
    } catch (e) {
      setInvalid(true);
    }
  };

  const cssOriginal = { color: Invalid ? "red" : "blue" };
  const cssConverted = {
    whiteSpace: "nowrap",
  };
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: ".5rem" }}>
      <TextField
        fullWidth
        value={Original}
        variant="outlined"
        label="Original"
        minRows="5"
        multiline
        onChange={(e) => ConvertToCSV(e.target.value)}
        maxRows="15"
        sx={cssOriginal}
      />
      <TextField
        value={Converted}
        variant="outlined"
        label="Converted"
        minRows="5"
        maxRows="15"
        className="w-fill"
        multiline
        fullWidth
        sx={cssConverted}
      />
    </Box>
  );
};
export default JSONConverter;
