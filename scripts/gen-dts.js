import { execa } from 'execa';
import { Extractor, ExtractorConfig } from '@microsoft/api-extractor'
import { resolve } from 'path';
import { exists, remove } from 'fs-extra'

const cwd = process.cwd();
const configPath = resolve(cwd, 'api-extractor.json');
/**
 * d.ts 文件所在目录
 */
const tempPath = resolve(cwd, 'dist/types');

genDts();

async function genDts() {
  await execa('tsc', ['--emitDeclarationOnly']);


  if (await exists(configPath)) {
    const extractorConfig = ExtractorConfig.loadFileAndPrepare(configPath);
    const result = Extractor.invoke(extractorConfig);

    if (result.errorCount > 0) {
      process.exitCode = 1;
    }

    await remove(tempPath);
  }
}