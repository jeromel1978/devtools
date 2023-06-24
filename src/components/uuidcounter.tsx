"use client";
import { useState, useEffect } from "react";
import { v4 } from "uuid";
import { TextField, Button, Box } from "@mui/material";
type Props = {
  onChange: Function;
};
export const UUIDGenerator = ({ onChange }: Props) => {
  const [UUID, setUUID] = useState<number>(1);

  const Update = (Num: number) => {
    setUUID(Num);
    onChange(Num);
  };
  return (
    <Box>
      <TextField
        value={UUID}
        variant="outlined"
        type="number"
        helperText="Counts"
        onChange={(e) => Update(parseInt(e.target.value))}
      />
    </Box>
  );
};
export default UUIDGenerator;
