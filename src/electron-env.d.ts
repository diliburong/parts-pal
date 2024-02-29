// Used in Renderer process, expose in `preload.ts`

// import { sqlite } from './main/preload';
interface IElectronAPI {
  loadPreferences: () => Promise<void>,
}

declare global {
  interface Window {
    ipcRenderer: import("electron").IpcRenderer;
    versions: any;
    sqlite: {
      readAll: () => Promise<{id: number; name: string}[]>;
    };
  }
}

export {}