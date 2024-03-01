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
      // 不要将一下内容build
      // 1. better-sqlite3与roll build不兼容
      // 2. typeorm重新build会导致执行插入的时候Error: Cannot find module './InsertQueryBuilder
      external: ['better-sqlite3', 'typeorm']
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
