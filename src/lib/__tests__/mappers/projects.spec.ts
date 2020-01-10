import test from 'ava';

import { Project, projectsMapper } from '../../mappers/projects';

test('Should return right array of formated object', t => {
  const data: any[] = [
    {
      Description: 'Know me and hire me',
      'End Date': '',
      'Start Date': 'Apr 2018',
      Title: 'Knohime',
      Url: 'https://www.knohime.com'
    },
    {
      Description: '',
      'End Date': 'Apr 2018',
      'Start Date': 'Apr 2017',
      Title: 'Archived Open Source',
      Url: ''
    }
  ];
  const expectedObject: Project[] = [
    {
      description: 'Know me and hire me',
      endDate: null,
      startDate: new Date('2018-04'),
      title: 'Knohime',
      url: 'https://www.knohime.com'
    },
    {
      description: '',
      endDate: new Date('2018-04'),
      startDate: new Date('2017-04'),
      title: 'Archived Open Source',
      url: null
    }
  ];

  t.deepEqual(projectsMapper(data), expectedObject);
});

test('Should return empty array when data array is empty', t => {
  const data: any[] = [];
  const expectedObject: Project[] = [];

  t.deepEqual(projectsMapper(data), expectedObject);
});
