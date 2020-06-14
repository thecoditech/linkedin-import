import test from 'ava';

import { Education, educationsMapper } from '../../mappers/educations';

test('Should return right array of formated object', (t) => {
  const data: any[] = [
    {
      Activities: 'Awesome activities',
      'Degree Name':
        'The mission of MIT is to advance knowledge and educate students in science',
      'End Date': '2007',
      Notes: 'Massachusetts Institute of Technology',
      'School Name': 'MIT',
      'Start Date': '2002',
    },
    {
      Activities: '',
      'Degree Name': 'Developer',
      'End Date': '',
      Notes: '',
      'School Name': 'Developer Life',
      'Start Date': '2007',
    },
  ];
  const expectedObject: Education[] = [
    {
      activities: 'Awesome activities',
      degreeName:
        'The mission of MIT is to advance knowledge and educate students in science',
      endDate: new Date('2007-01'),
      notes: 'Massachusetts Institute of Technology',
      schoolName: 'MIT',
      startDate: new Date('2002-01'),
    },
    {
      activities: null,
      degreeName: 'Developer',
      endDate: null,
      notes: null,
      schoolName: 'Developer Life',
      startDate: new Date('2007-01'),
    },
  ];

  t.deepEqual(educationsMapper(data), expectedObject);
});

test('Should return empty array when data array is empty', (t) => {
  const data: any[] = [];
  const expectedObject: Education[] = [];

  t.deepEqual(educationsMapper(data), expectedObject);
});
