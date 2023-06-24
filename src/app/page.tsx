"use client";
import dynamic from "next/dynamic";
import { Box, Tabs, Tab, Typography } from "@mui/material";
import UUIDGenCount from "../components/uuidcounter";
import UUIDGen from "../components/uuid";
import JSONReader from "../components/jsonreader";
import { useState } from "react";

const cssUUIDList = { maxHeight: "50vh", overflow: "auto", width: "fit-content" };

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

// const UUIDGenCount = dynamic(() => import("../components/uuidcounter"), {
//   loading: () => <p>Loading...</p>,
// });
// const UUIDGen = dynamic(() => import("../components/uuid"), {
//   loading: () => <p>Loading...</p>,
// });
// const JSONReader = dynamic(() => import("../components/jsonreader"), {
//   loading: () => <p>Loading...</p>,
// });

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};
export default function Home() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const [UUIDArray, setUUIDArray] = useState<any[]>(["1"]);

  const UpdateUUDCount = (Num: number) => {
    let U: number[] = [];
    for (let i = 0; i < Num; i++) U.push(i);
    setUUIDArray(U);
  };
  return (
    <main className="flex">
      <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
        <Tab label="UUID Generator" />
        <Tab label="JSON Reader" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <UUIDGenCount onChange={UpdateUUDCount} />
        <Box sx={cssUUIDList}>
          {UUIDArray.map((a, index) => (
            <UUIDGen key={index} />
          ))}
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <JSONReader />
      </TabPanel>
    </main>
  );
}
