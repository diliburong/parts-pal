import Database from "better-sqlite3";
import path from "path";
import { app } from "electron";

// one
const dbPath =
  process.env.NODE_ENV === "development"
    ? path.resolve('./src/main/database','./test.db')
    : path.join(process.resourcesPath, "./test.db");

export const db = new Database(dbPath);

db.pragma("journal_mode = WAL");


// two
let database: Database.Database;
export function getDB(
  filename = path.join(app.getPath("userData"), "better-sqlite3.sqlite3")
) {
  return (database ??= new Database(filename, {
    // https://github.com/WiseLibs/better-sqlite3/blob/v8.5.2/lib/database.js#L36
    // https://github.com/WiseLibs/better-sqlite3/blob/v8.5.2/lib/database.js#L50
    // nativeBinding: path.join(root, import.meta.env.VITE_BETTER_SQLITE3_BINDING),
  }));
}


