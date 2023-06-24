import { NextApiRequest, NextApiResponse } from "next";
import { exec } from "child_process";
import fs from "fs";
import axios from "axios";

export default function Git_Test(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const ID: string | string[] | undefined = req.query[`ID`];
    if (ID) res.status(200).send({ message: "ID" });
  }
}
