import { test } from 'ava';

import { GeoPosition, positionsFormater } from '../../formaters/positions';

test('Should return right array of formated object', t => {
  const data: any[] = [
    {
      'Company Name': 'Self-Employed',
      Description: '',
      'Finished On': '',
      Location: 'Paris Area, France',
      'Started On': 'Jan 2018',
      Title: 'FullStack Developer Freelance'
    },
    {
      'Company Name': 'Google',
      Description: 'Kubernetes is awesome',
      'Finished On': 'Oct 2012',
      Location: 'Dublin Area, Ireland',
      'Started On': 'Feb 2007',
      Title: 'Devops'
    }
  ];
  const expectedObject: GeoPosition[] = [
    {
      companyName: 'Self-Employed',
      description: '',
      finishedOn: null,
      location: 'Paris Area, France',
      startedOn: new Date('2018-01'),
      title: 'FullStack Developer Freelance'
    },
    {
      companyName: 'Google',
      description: 'Kubernetes is awesome',
      finishedOn: new Date('2012-10'),
      location: 'Dublin Area, Ireland',
      startedOn: new Date('2007-02'),
      title: 'Devops'
    }
  ];

  t.deepEqual(positionsFormater(data), expectedObject);
});

test('Should return empty array when data array is empty', t => {
  const data: any[] = [];
  const expectedObject: GeoPosition[] = [];

  t.deepEqual(positionsFormater(data), expectedObject);
});
