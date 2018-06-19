import { before, test } from 'ava';
import { readFile } from 'fs';
import { resolve as resolvePath } from 'path';
import { spy } from 'sinon';

import { linkedinImport } from '../linkedinImport';
import * as unzip from '../unzip';

let data: Buffer;
before(
  () =>
    new Promise((resolve, reject) => {
      readFile(
        resolvePath(__dirname, '../../../test/ref/LinkedinDataExport.zip'),
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

test('Should import with filters', async t => {
  const filters = ['educations', 'organizations'];
  const linkedinImportObject = await linkedinImport(data, filters);

  t.snapshot(linkedinImportObject);
});

test('Should import without filters', async t => {
  const linkedinImportObject = await linkedinImport(data);

  t.snapshot(linkedinImportObject);
});

test('Should call unzipFile once', async t => {
  const unzipFile = spy(unzip, 'unzipFile');

  const filters = ['educations', 'organizations'];
  await linkedinImport(data, filters);

  t.true(unzipFile.calledOnce);
  t.deepEqual(unzipFile.getCall(0).args, [data, filters]);
});
