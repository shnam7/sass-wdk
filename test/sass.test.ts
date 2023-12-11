import path from 'path';
import sassTrue from 'sass-true';
import { describe, it } from 'vitest';

const sassModules = ['color', 'font', 'string', 'list', 'map', 'reg'];

const basePath = path.relative(process.cwd(), __dirname);

sassModules.map((module) => {
    const sassFile = path.join(basePath, `test-${module}.scss`);
    sassTrue.runSass({ describe, it }, sassFile, { loadPaths: ['.'] });
});
