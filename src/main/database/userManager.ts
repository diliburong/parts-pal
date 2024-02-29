import { db } from "./dbManager";

import Database from "better-sqlite3";

import path from "path";
import fs from "fs";

export function connect() {
  const dbPath =
    process.env.NODE_ENV === "development"
      ? path.resolve('./src/main/database','./test.db')
      : path.join(process.resourcesPath, "./test.db");

  console.log(fs.existsSync(dbPath), 'db path');

  return Database(dbPath, { verbose: console.log, fileMustExist: true });
}

const readAll = () => {
  try {
    // const db = connect();
    const query = `SELECT * FROM user`;
    const readQuery = db.prepare(query);

    return readQuery.all() as { id: number; name: string }[];
  } catch (e) {
    console.error(e);
  }
};

export {
  readAll
}