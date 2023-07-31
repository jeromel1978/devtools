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
      setConverted(Parse.unparse(JSON.parse(Original)));
      setInvalid(false);
    } catch (e) {
      setInvalid(true);
    }
  };
  const ConvertToJSON = (Text: string) => {
    setOriginal(Text);
    try {
      Parse.parse(Original, CSVOptions);
      setInvalid(false);
    } catch (e) {
      setInvalid(true);
    }
  };

  const CSVOptions = {
    delimiter: ",",
    quoteChar: '"',
    header: true,
    dynamicTyping: true,
    delimitersToGuess: [",", "\t", "|", ";", Parse.RECORD_SEP, Parse.UNIT_SEP],
    step: (results: any, parser: any) => {
      console.log("Row data:", results.data);
      console.log("Row errors:", results.errors);
    },
    complete: (results: any) => {
      setOriginal(JSON.stringify(results));
    },
  };

  const cssOriginal = { color: Invalid ? "red" : "blue" };
  const cssConverted = {
    whiteSpace: "nowrap",
  };
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: ".5rem" }}>
      <TextField
        fullWidth
        value={Original ?? ""}
        variant="outlined"
        label="JSON"
        minRows="5"
        multiline
        onChange={(e) => ConvertToCSV(e.target.value)}
        maxRows="15"
        sx={cssOriginal}
      />
      <TextField
        fullWidth
        value={Converted ?? ""}
        variant="outlined"
        label="CSV"
        minRows="5"
        multiline
        onChange={(e) => ConvertToJSON(e.target.value)}
        maxRows="15"
        sx={cssConverted}
      />
    </Box>
  );
};
export default JSONConverter;
