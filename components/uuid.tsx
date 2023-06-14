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
      <TextField value={UUID} />
      <Button onClick={Regen}>Test</Button>
    </Box>
  );
};
export default UUIDGenerator;
