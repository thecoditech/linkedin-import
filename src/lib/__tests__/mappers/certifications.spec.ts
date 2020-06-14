import test from 'ava';

import {
  Certification,
  certificationsMapper,
} from '../../mappers/certifications';

test('Should return right array of formated object', (t) => {
  const data: any[] = [
    {
      Authority: 'Microsoft',
      'End Date': 'Apr 2018',
      'License Number': '1',
      Name: 'Certification Name',
      'Start Date': 'Apr 2015',
      Url: 'url',
    },
    {
      Authority: 'Oracle',
      'End Date': '',
      'License Number': '',
      Name: 'Certification Name',
      'Start Date': 'Apr 2018',
      Url: 'url',
    },
  ];
  const expectedObject: Certification[] = [
    {
      authority: 'Microsoft',
      endDate: new Date('2018-04'),
      licenseNumber: '1',
      name: 'Certification Name',
      startDate: new Date('2015-04'),
      url: 'url',
    },
    {
      authority: 'Oracle',
      endDate: null,
      licenseNumber: null,
      name: 'Certification Name',
      startDate: new Date('2018-04'),
      url: 'url',
    },
  ];

  t.deepEqual(certificationsMapper(data), expectedObject);
});

test('Should return empty array when data array is empty', (t) => {
  const data: any[] = [];
  const expectedObject: Certification[] = [];

  t.deepEqual(certificationsMapper(data), expectedObject);
});
