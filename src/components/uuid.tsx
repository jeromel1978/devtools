import { useState, useEffect } from "react";
import { v1, v4 } from "uuid";
import { TextField, Button, Box, Typography } from "@mui/material";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Dialog from "@mui/material/Dialog";

const cssContainer = { display: "flex", flexDirection: "row", paddingY: ".5rem" };
const cssDialog = { display: "flex", flexDirection: "column", padding: ".5rem" };

type Props = {
  version: number;
};

export const UUIDGenerator = ({ version }: Props) => {
  const [UUID, setUUID] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);
  const Gen = (Version: number) => {
    let Out: string = "";
    if (Version === 1) Out = v1();
    if (Version === 4) Out = v4();
    return Out;
  };
  const Regen = () => {
    setUUID(Gen(version));
  };
  useEffect(() => {
    setUUID(Gen(version));
  }, [version]);
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
      <Button onClick={Regen} variant="outlined">
        <AutorenewIcon />
      </Button>
      <TextField value={UUID} variant="outlined" label={`v${version}`} />
      <Button onClick={Copy} variant="outlined">
        <ContentCopyIcon />
      </Button>
    </Box>
  );
};
export default UUIDGenerator;
