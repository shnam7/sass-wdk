import path from 'path';
import sassTrue from 'sass-true';
import { describe, it } from 'vitest';
import fs from 'fs';

const getFiles = (dir: string, recurrsive: boolean = true): string[] => {
    let files: string[] = [];

    const fileList = fs.readdirSync(dir);
    for (const file of fileList) {
        const name = `${dir}/${file}`;
        if (fs.statSync(name).isDirectory()) {
            if (recurrsive) files = files.concat(getFiles(name, recurrsive));
        } else {
            files.push(name);
        }
    }
    return files;
};

const basePath = path.relative(process.cwd(), __dirname);
const sassTestFiles = getFiles(path.join(basePath, 'scss'));

sassTestFiles
    .filter((s) => s.endsWith('.test.scss') || s.endsWith('.test.sass'))
    .map((sassFile) => {
        sassTrue.runSass({ describe, it }, sassFile, { loadPaths: ['.'] });
    });
