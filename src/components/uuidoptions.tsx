import { useState } from "react";
import { TextField, Box, Select, MenuItem, InputLabel, FormControl } from "@mui/material";
type Props = {
  onCountChange: Function;
  onVersionChange: Function;
};
export const UUIDOptions = ({ onCountChange, onVersionChange }: Props) => {
  const [Count, setCount] = useState<number>(1);
  const [Version, setVersion] = useState<number>(4);

  const UpdateCount = (Num: number) => {
    setCount(Num);
    onCountChange(Num);
  };
  const UpdateVersion = (Num: number) => {
    setVersion(Num);
    onVersionChange(Num);
  };
  return (
    <Box>
      <TextField
        value={Count}
        variant="outlined"
        type="number"
        label="UUID Count"
        onChange={(e) => UpdateCount(parseInt(e.target.value))}
      />
      <Select
        id="demo-simple-select"
        variant="outlined"
        value={Version}
        label="Version"
        onChange={(e) => UpdateVersion(e.target.value as number)}
      >
        <MenuItem value={1}>v1</MenuItem>
        <MenuItem value={4}>v4</MenuItem>
      </Select>
    </Box>
  );
};
export default UUIDOptions;
