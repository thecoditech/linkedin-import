import { test } from 'ava';

import { TestScore, testScoresFormater } from '../../formaters/testScores';

test('Should return right array of formated object', t => {
  const data: any[] = [
    {
      Description: 'Graduation description',
      Name: 'Test name',
      Score: 'Graduated',
      'Test Date': 'Jul 2012'
    },
    {
      Description: 'Another graduation description',
      Name: 'Test name 2',
      Score: 'Graduated',
      'Test Date': 'Apr 2016'
    }
  ];
  const expectedObject: TestScore[] = [
    {
      description: 'Graduation description',
      name: 'Test name',
      score: 'Graduated',
      testDate: new Date('2012-07')
    },
    {
      description: 'Another graduation description',
      name: 'Test name 2',
      score: 'Graduated',
      testDate: new Date('2016-04')
    }
  ];

  t.deepEqual(testScoresFormater(data), expectedObject);
});

test('Should return empty array when data array is empty', t => {
  const data: any[] = [];
  const expectedObject: TestScore[] = [];

  t.deepEqual(testScoresFormater(data), expectedObject);
});
