"use client";
import dynamic from "next/dynamic";
import { Box, Tabs, Tab } from "@mui/material";
import UUIDOptions from "./uuidoptions";
import UUIDGen from "./uuid";
import JSONConverter from "./jsonconverter";
import { useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import ThemeLight from "../themes/light";
import ThemeDark from "../themes/dark";
import PageHeader from "./header";

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
  const [DarkMode, setDarkMode] = useState<string>("");
  const [value, setValue] = useState(0);
  const [UUIDCount, setUUIDCount] = useState<number>(1);
  const [UUIDArray, setUUIDArray] = useState<any[]>(["1"]);
  const [UUIDVersion, setUUIDVersion] = useState<number>(4);
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setDarkMode("dark");
      } else setDarkMode("light");
    }
    return;
  }, [setDarkMode]);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const UpdateUUIDCount = (Num: number) => {
    setUUIDCount(Num);
    let U: number[] = [];
    for (let i = 0; i < Num; i++) U.push(i);
    setUUIDArray(U);
  };
  const UpdateUUIDVersion = (Num: number) => {
    setUUIDVersion(Num);
  };
  return (
    <>
      {!!DarkMode && (
        <ThemeProvider theme={DarkMode === "dark" ? ThemeDark : ThemeLight}>
          <CssBaseline />
          <header>
            <PageHeader />
          </header>
          <main className="flex flex-col">
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="UUID Generator" />
              <Tab label="JSON Reader" />
              <Tab label="JSON Converter" />
            </Tabs>
            <TabPanel value={value} index={0}>
              <UUIDOptions
                InitialCount={UUIDCount}
                onCountChange={UpdateUUIDCount}
                onVersionChange={UpdateUUIDVersion}
              />
              <Box sx={cssUUIDList}>
                {UUIDArray.map((a, index) => (
                  <UUIDGen key={index} version={UUIDVersion} />
                ))}
              </Box>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <JSONConverter />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <JSONConverter />
            </TabPanel>
          </main>
        </ThemeProvider>
      )}
    </>
  );
}
