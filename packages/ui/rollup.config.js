import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import cssOnly from 'rollup-plugin-css-only';
import postcss from 'rollup-plugin-postcss';
import styles from 'rollup-plugin-styles';
import packageJson from './package.json' assert { type: 'json' };
import path from 'path';
import { libStylePlugin } from 'rollup-plugin-lib-style';

export default {
	input: 'src/index.tsx',
	output: [
		{
			file: packageJson.main,
			format: 'cjs',
			sourcemap: true,
			name: 'react-lib',
		},
		{
			file: packageJson.module,
			format: 'esm',
			sourcemap: true,
		},
	],
	plugins: [
		libStylePlugin(),
		resolve(),
		commonjs(),
		peerDepsExternal(),
		typescript({ tsconfig: './tsconfig.json' }),
		// postcss({ modules: true, extract: true, minimize: true }),
	],
};
