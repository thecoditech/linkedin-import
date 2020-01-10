import test from 'ava';
import { readFile } from 'fs';
import { resolve as resolvePath } from 'path';

import { unzipFile } from '../unzip';

let data: Buffer;
test.before(
  () =>
    new Promise((resolve, reject) => {
      readFile(
        resolvePath(__dirname, '../../../../test/ref/LinkedinDataExport.zip'),
        (err: Error, dataBuffer: Buffer) => {
          if (err) {
            return reject(err);
          }

          data = dataBuffer;

          resolve();
        }
      );
    })
);

test('Return the right list of files', async t => {
  const exportFiles = await unzipFile(data);

  t.snapshot(exportFiles);
});

test('Return the right list of files when filter argument is passed', async t => {
  const exportFiles = await unzipFile(data, ['educations', 'organizations']);

  t.snapshot(exportFiles);
});
