"use client";
// import dynamic from "next/dynamic";
import { Box, TextField } from "@mui/material";
import UUIDGenCount from "../components/uuidcounter";
import UUIDGen from "../components/uuid";
import JSONReader from "../components/jsonreader";
import { useState } from "react";
import Layout from "../app/layout";

const cssMain = {
  display: "flex",
  flexDirection: "column",
  minHeight: "100%",
  width: "100%",
  gap: ".5rem",
};
const cssUUIDList = { maxHeight: "50vh", overflow: "auto", width: "fit-content" };
const cssContainer = (Width: string, MinWidth: string, MaxWidth: string) => {
  return { border: 1, borderRadius: "1rem", padding: ".5rem", width: Width, minWidth: MinWidth, maxWidth: MaxWidth };
};

export default function Home() {
  const [UUIDArray, setUUIDArray] = useState<any[]>(["1"]);

  const UpdateUUDCount = (Num: number) => {
    let U: number[] = [];
    for (let i = 0; i < Num; i++) U.push(i);
    setUUIDArray(U);
  };
  return (
    // <Layout>
    <main className="flex">
      <Box sx={cssContainer("fit-content", "", "100%")}>
        UUID v4
        <UUIDGenCount onChange={UpdateUUDCount} />
        <Box sx={cssUUIDList}>
          {UUIDArray.map((a, index) => (
            <UUIDGen key={index} />
          ))}
        </Box>
      </Box>
      <Box sx={cssContainer("50%", "30rem", "100%")}>
        JSON Reader
        <JSONReader />
      </Box>
    </main>
    //</Layout>
  );
}
