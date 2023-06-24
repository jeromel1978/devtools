import { useState } from "react";
import { TextField, Box } from "@mui/material";
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
    <TextField
      value={UUID}
      variant="outlined"
      type="number"
      helperText="Counts"
      onChange={(e) => Update(parseInt(e.target.value))}
    />
  );
};
export default UUIDGenerator;
