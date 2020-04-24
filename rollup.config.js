import pkg from './package.json'
import { terser } from 'rollup-plugin-terser'
export default {
  input: 'src/index.js', // our source file
  output: [
    {
      file: pkg.main,
      format: 'cjs',
    },
    {
      file: pkg.module,
      format: 'es', // the preferred format
    },
    {
      file: pkg.browser,
      format: 'iife',
      name: 'DateMath', // the global which can be used in a browser
    },
  ],
  external: [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})],
  plugins: [
    terser(), // minifies generated bundles
  ],
}
