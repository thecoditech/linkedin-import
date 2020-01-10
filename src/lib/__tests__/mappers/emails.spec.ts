import test from 'ava';

import { Email, emailsMapper } from '../../mappers/emails';

test('Should return right array of formated object', t => {
  const data: any[] = [
    {
      Confirmed: 'Yes',
      'Email Address': 'one@example.com',
      Primary: 'Yes',
      'Updated On': '12/4/14, 5:25 AM'
    },
    {
      Confirmed: 'No',
      'Email Address': 'two@example.com',
      Primary: 'No',
      'Updated On': '1/14/16, 12:34 PM'
    }
  ];
  const expectedObject: Email[] = [
    {
      confirmed: true,
      emailAddress: 'one@example.com',
      primary: true,
      updatedOn: new Date('2014-12-04 05:25:00 UTC')
    },
    {
      confirmed: false,
      emailAddress: 'two@example.com',
      primary: false,
      updatedOn: new Date('2016-01-14, 12:34:00 UTC')
    }
  ];

  t.deepEqual(emailsMapper(data), expectedObject);
});

test('Should return empty array when data array is empty', t => {
  const data: any[] = [];
  const expectedObject: Email[] = [];

  t.deepEqual(emailsMapper(data), expectedObject);
});
