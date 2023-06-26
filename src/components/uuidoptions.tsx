import { useState } from "react";
import { TextField, Box, Select, MenuItem, InputLabel, FormControl } from "@mui/material";
type Props = {
  InitialCount: number;
  onCountChange: Function;
  onVersionChange: Function;
};
export const UUIDOptions = ({ InitialCount, onCountChange, onVersionChange }: Props) => {
  const [Count, setCount] = useState<number>(InitialCount ?? 1);
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
        label="Count"
        onChange={(e) => UpdateCount(parseInt(e.target.value))}
        className="w-16"
      />
      <FormControl>
        <InputLabel id="uuid-version-label">Ver</InputLabel>
        <Select
          labelId="uuid-version-label"
          variant="outlined"
          value={Version}
          label="Ver"
          onChange={(e) => UpdateVersion(e.target.value as number)}
        >
          <MenuItem value={1}>v1</MenuItem>
          <MenuItem value={4}>v4</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
export default UUIDOptions;
