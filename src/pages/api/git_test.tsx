import { NextApiRequest, NextApiResponse } from "next";
import { exec } from "child_process";
import fs from "fs";

export default function Git_Test(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.status(405).send({ message: "Only POST requests allowed" });
  }
  if (req.method === "POST") {
    fs.writeFile("saved.txt", JSON.stringify(req), (err) => {
      if (err) {
        console.error(err);
      }
    });
  }
}
