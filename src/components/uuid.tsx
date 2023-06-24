import { useState } from "react";
import { v4 } from "uuid";
import { TextField, Button, Box, Typography } from "@mui/material";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Dialog from "@mui/material/Dialog";

const cssContainer = { display: "flex", flexDirection: "row" };
const cssDialog = { display: "flex", flexDirection: "column", padding: ".5rem" };

export const UUIDGenerator = () => {
  const [UUID, setUUID] = useState<string>(v4());
  const [isOpen, setIsOpen] = useState(false);
  const Regen = () => {
    setUUID(v4());
  };
  const Copy = () => {
    navigator.clipboard.writeText(UUID);
    setIsOpen(true);
    setTimeout(() => setIsOpen(false), 2000);
  };
  const CloseModal = () => {
    setIsOpen(false);
  };
  return (
    <Box sx={cssContainer}>
      <Dialog open={isOpen}>
        <Box sx={cssDialog}>
          <Typography>Copied {UUID} to Clipboard!</Typography>
          <Button onClick={CloseModal}>OK</Button>
        </Box>
      </Dialog>
      <Button onClick={Copy} variant="outlined">
        <ContentCopyIcon />
      </Button>
      <TextField value={UUID} variant="outlined" />
      <Button onClick={Regen} variant="outlined">
        <AutorenewIcon />
      </Button>
    </Box>
  );
};
export default UUIDGenerator;
