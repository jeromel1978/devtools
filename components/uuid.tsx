"use client";
import { useState } from "react";
import { v4 } from "uuid";
import { TextField, Button, Box } from "@mui/material";

export const UUIDGenerator = () => {
  const [UUID, setUUID] = useState<string>(v4());
  const Regen = () => {
    setUUID(v4());
  };
  return (
    <Box>
      <TextField value={UUID} variant="outlined" helperText="UUID v4" />
      <Button onClick={Regen} variant="outlined">
        Test
      </Button>
    </Box>
  );
};
export default UUIDGenerator;
