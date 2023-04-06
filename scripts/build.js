import { build } from 'esbuild';
import { resolve } from 'path';

const cwd = process.cwd();

const isProd = process.env.NODE_ENV === 'production';

build({
  entryPoints: [ resolve(cwd, `src/index.ts`)],
  outfile: `dist/index${isProd ? '.min' : ''}.cjs`,
  bundle: true,
  format: 'cjs',
  platform: 'node',
  minify: isProd
});

build({
  entryPoints: [ resolve(cwd, `src/index.ts`)],
  outfile: `dist/index${isProd ? '.min' : ''}.mjs`,
  bundle: true,
  format: 'esm',
  platform: 'node',
  minify: isProd,
});