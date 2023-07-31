import { useState } from "react";
import { Box } from "@mui/material";
import { TextField } from "@mui/material";

export const UUIDGenerator = () => {
  const [Original, setOriginal] = useState<string>("");
  const [Converted, setConverted] = useState<string>("");
  const [Invalid, setInvalid] = useState<boolean>(false);

  const InvalidColor = "#ff0000";
  const Convert = (Text: string) => {
    setOriginal(Text);
    try {
      setConverted(JSON.stringify(JSON.parse(Text), null, 2));
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
      <div>{Invalid ? "True" : "False"}</div>
      <TextField
        fullWidth
        value={Original ?? ""}
        variant="outlined"
        label="Original"
        minRows="5"
        multiline
        onChange={(e) => Convert(e.target.value)}
        maxRows="15"
        sx={cssOriginal}
      />
      <TextField
        value={Converted ?? ""}
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
export default UUIDGenerator;
