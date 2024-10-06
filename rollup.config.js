import vue from '@vitejs/plugin-vue';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/markdown-renderer.cjs.js',
      format: 'cjs'
    },
    {
      file: 'dist/markdown-renderer.esm.js',
      format: 'esm'
    }
  ],
  external: ['react', 'vue'],
  plugins: [
    vue(),          // Vue support
    resolve(),      // Resolve imports
    commonjs(),     // Handle commonjs modules
    babel({
      babelHelpers: 'bundled',
      presets: ['@babel/preset-react'], // Add the React preset
      extensions: ['.js', '.jsx']       // Process .jsx files as well
    })
  ]
};
