const path = require('path');
const sassTrue = require('sass-true');

const sassModules = ['color', 'font', 'string', 'list', 'map', 'reg'];

const basePath = path.relative(process.cwd(), __dirname);

sassModules.map((module) => {
    const sassFile = path.join(basePath, `test-${module}.scss`);
    sassTrue.runSass({ describe, it }, sassFile, { loadPaths: ['.'] });
});
