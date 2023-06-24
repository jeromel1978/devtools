"use client";
// import dynamic from "next/dynamic";
import { Box, TextField } from "@mui/material";
import UUIDGenCount from "../../components/uuidcounter";
import UUIDGen from "../../components/uuid";
import JSONReader from "../../components/jsonreader";
import { useState } from "react";

const cssMain = {
  display: "flex",
  "flex-direction": "column",
  "min-height": "100%",
  width: "100%",
  gap: ".5rem",
};
const cssUUIDList = { "max-height": "50vh", overflow: "auto" };
const cssContainer = { border: 1, borderRadius: "1rem", padding: ".5rem" };

export default function Home() {
  // const [UUIDs, setUUIDs] = useState<number>(1);
  const [UUIDArray, setUUIDArray] = useState<any[]>(["1"]);

  const UpdateUUDCount = (Num: number) => {
    // setUUIDs(Num);
    let U: number[] = [];
    for (let i = 0; i < Num; i++) U.push(i);
    setUUIDArray(U);
  };
  return (
    <main style={cssMain} className="flex min-h-screen flex-col items-center justify-between p-24 gap-2">
      <Box sx={cssContainer}>
        UUID v4
        <UUIDGenCount onChange={UpdateUUDCount} />
        <Box sx={cssUUIDList}>
          {UUIDArray.map((a, index) => (
            <UUIDGen key={index} />
          ))}
        </Box>
      </Box>
      <Box sx={cssContainer}>
        JSON Reader
        <JSONReader />
      </Box>
    </main>
  );
}
