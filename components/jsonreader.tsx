"use client";
import { useState } from "react";
import { v4 } from "uuid";
import { Button, Box } from "@mui/material";
import { TextField } from "@mui/material";

export const UUIDGenerator = () => {
  const [Original, setOriginal] = useState<string>("");
  const [Converted, setConverted] = useState<string>("");
  const Convert = (Text: string) => {
    setOriginal(Text);
    try {
      setConverted(JSON.stringify(JSON.parse(Text), null, 2));
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <Box className="w-full" sx={{ display: "flex" }}>
      <Box sx={{ width: "50vw" }}>
        <TextField
          fullWidth
          value={Original}
          variant="outlined"
          helperText="Original"
          minRows="5"
          multiline
          onChange={(e) => Convert(e.target.value)}
          maxRows="15"
        />
      </Box>
      <Box sx={{ width: "50vw" }}>
        <TextField
          value={Converted}
          variant="outlined"
          helperText="Converted"
          minRows="5"
          maxRows="15"
          className="w-fill"
          multiline
          fullWidth
          sx={{
            "white-space": "nowrap",
            overflow: "hidden",
          }}
        />
      </Box>
    </Box>
  );
};
export default UUIDGenerator;
