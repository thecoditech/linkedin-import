import test from 'ava';

import { Profile, profileMapper } from '../../mappers/profile';

test('Should return formated object', t => {
  const data: any[] = [
    {
      Address: 'Street 1st',
      'Birth Date': 'Jan 1, 1970',
      'Contact Instructions': 'Hey, contact me',
      Country: 'France',
      'First Name': 'Jean',
      'Geo Location': 'France',
      Headline: 'Full Stack Developer',
      Industry: 'Computer Software',
      'Instant Messengers': 'SKYPE:knohime',
      'Last Name': 'Dupont',
      'Maiden Name': 'Dupond',
      Summary: 'FOSS lover. Open Source is Great',
      'Twitter Handles': 'knohime',
      Websites:
        'PERSONAL:https://www.knohime.com, BLOG:https://blog.knohime.com, RSS:https://blog.knohime.com/atom.xml',
      'Zip Code': '75000'
    }
  ];
  const expectedObject: Profile = {
    address: 'Street 1st',
    birthDate: new Date('1970-01-01'),
    contactInstructions: 'Hey, contact me',
    country: 'France',
    firstName: 'Jean',
    geoLocation: 'France',
    headline: 'Full Stack Developer',
    industry: 'Computer Software',
    instantMessengers: [{ type: 'skype', username: 'knohime' }],
    lastName: 'Dupont',
    maidenName: 'Dupond',
    summary: 'FOSS lover. Open Source is Great',
    twitterHandles: 'knohime',
    websites: [
      { type: 'personal', url: 'https://www.knohime.com' },
      { type: 'blog', url: 'https://blog.knohime.com' },
      { type: 'rss', url: 'https://blog.knohime.com/atom.xml' }
    ],
    zipCode: '75000'
  };

  t.deepEqual(profileMapper(data), expectedObject);
});

test('Should return formated object when some informating is missing', t => {
  const data: any[] = [
    {
      Address: '',
      'Birth Date': 'Jan 1, 1970',
      'Contact Instructions': '',
      Country: '',
      'First Name': 'Jean',
      'Geo Location': '',
      Headline: 'Full Stack Developer',
      Industry: 'Computer Software',
      'Instant Messengers': '',
      'Last Name': 'Dupont',
      'Maiden Name': '',
      Summary: 'FOSS lover. Open Source is Great',
      'Twitter Handles': '',
      Websites: '',
      'Zip Code': ''
    }
  ];
  const expectedObject: Profile = {
    address: null,
    birthDate: new Date('1970-01-01'),
    contactInstructions: null,
    country: null,
    firstName: 'Jean',
    geoLocation: null,
    headline: 'Full Stack Developer',
    industry: 'Computer Software',
    instantMessengers: [],
    lastName: 'Dupont',
    maidenName: null,
    summary: 'FOSS lover. Open Source is Great',
    twitterHandles: null,
    websites: [],
    zipCode: null
  };

  t.deepEqual(profileMapper(data), expectedObject);
});
