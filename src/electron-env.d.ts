// Used in Renderer process, expose in `preload.ts`

import { User } from "./main/entity/User";
import type { SqliteApi } from "./main/preload";

declare global {
  interface Window {
    ipcRenderer: import("electron").IpcRenderer;
    versions: any;
    sqlite: SqliteApi;
  }
}

export {};
