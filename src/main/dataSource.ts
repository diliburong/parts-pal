import { DataSource } from "typeorm";
import { app } from "electron";
import path from "path";

import { User} from './entity/User';

const configPath = app.getPath("userData");
const databasePath = path.join(configPath, "database.sqlite");

console.log(databasePath, 'db path');

export const AppDataSource = new DataSource({
  type: "better-sqlite3",
  database: databasePath,
  synchronize: true, // 确保每次运行应用程序时实体都将与数据库同步
  logging: ["error", "warn"], // 日志，默认在控制台中打印，数组列举错误类型枚举
  entities: [User], // 实体或模型表
});
