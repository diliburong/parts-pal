import { defineConfig } from 'vite';

// https://vitejs.dev/config
export default defineConfig({
  resolve: {
    // Some libs that can run in both Web and Node.js, such as `axios`, we need to tell Vite to build them in Node.js.
    browserField: false,
    mainFields: ['module', 'jsnext:main', 'jsnext'],
  },
  build: {
    rollupOptions: {
      external: ['better-sqlite3']
      // plugins: [
      //   // eslint-disable-next-line @typescript-eslint/no-var-requires
      //   require('@rollup/plugin-commonjs')({
      //     dynamicRequireTargets: [
      //       'node_modules/better-sqlite3/**/*.node'
      //     ]
      //   })
      // ]
    }
  }
});
