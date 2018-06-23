import { test } from 'ava';

import {
  Organization,
  organizationsFormater
} from '../../formaters/organizations';

test('Should return right array of formated object', t => {
  const data: any[] = [
    {
      Description: 'We do a lot of things, to much with this small description',
      'End Date': 'Mar 2017',
      Name: 'Organization',
      Position: 'Position',
      'Start Date': 'Jan 2000'
    },
    {
      Description: 'We do a lot of things, to much with this small description',
      'End Date': '',
      Name: 'Organization Two',
      Position: 'Position',
      'Start Date': 'Jan 2016'
    }
  ];
  const expectedObject: Organization[] = [
    {
      description: 'We do a lot of things, to much with this small description',
      endDate: new Date('2017-03'),
      name: 'Organization',
      position: 'Position',
      startDate: new Date('2000-01')
    },
    {
      description: 'We do a lot of things, to much with this small description',
      endDate: null,
      name: 'Organization Two',
      position: 'Position',
      startDate: new Date('2016-01')
    }
  ];

  t.deepEqual(organizationsFormater(data), expectedObject);
});

test('Should return empty array when data array is empty', t => {
  const data: any[] = [];
  const expectedObject: Organization[] = [];

  t.deepEqual(organizationsFormater(data), expectedObject);
});
