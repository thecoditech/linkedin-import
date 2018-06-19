import { test } from 'ava';

import { causesYouCareAboutFormater } from '../../formaters/causesYouCareAbout';

test('Should return right array of formated object', t => {
  const data: any[] = [
    { 'Supported Cause': 'cause 1' },
    { 'Supported Cause': 'cause 2' }
  ];
  const expectedObject: CauseYouCareAbout[] = [
    { supportedCause: 'cause 1' },
    { supportedCause: 'cause 2' }
  ];

  t.deepEqual(causesYouCareAboutFormater(data), expectedObject);
});

test('Should return empty array when data array is empty', t => {
  const data: any[] = [];
  const expectedObject: CauseYouCareAbout[] = [];

  t.deepEqual(causesYouCareAboutFormater(data), expectedObject);
});
