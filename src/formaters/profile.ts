export interface Website {
  type: string;
  url: string;
}

export interface InstantMessenger {
  type: string;
  username: string;
}

export interface Profile {
  firstName: string;
  lastName: string;
  maidenName: string | null;
  address: string | null;
  birthDate: Date;
  contactInstructions: string | null;
  headline: string;
  summary: string;
  industry: string;
  country: string | null;
  zipCode: string | null;
  geoLocation: string | null;
  twitterHandles: string | null;
  websites: Website[];
  instantMessengers: InstantMessenger[];
}

function formatType(type: string): string {
  return type.trimLeft().toLowerCase();
}

export function profileFormater(data: any[]): Profile {
  const profile = data[0];

  return {
    address: profile.Address || null,
    birthDate: new Date(`${profile['Birth Date']} GMT`),
    contactInstructions: profile['Contact Instructions'] || null,
    country: profile.Country || null,
    firstName: profile['First Name'],
    geoLocation: profile['Geo Location'] || null,
    headline: profile.Headline,
    industry: profile.Industry,
    instantMessengers: profile['Instant Messengers']
      .split(',')
      .map((im: string) => im.split(':'))
      .filter((im: string[]) => im.length > 1)
      .map(([type, ...rest]: [string, string[]]) => ({
        type: formatType(type),
        username: rest.join(':')
      })),
    lastName: profile['Last Name'],
    maidenName: profile['Maiden Name'] || null,
    summary: profile.Summary,
    twitterHandles: profile['Twitter Handles'] || null,
    websites: profile.Websites.split(',')
      .map((website: string) => website.split(':'))
      .filter((website: string[]) => website.length > 1)
      .map(([type, ...rest]: [string, string[]]) => ({
        type: formatType(type),
        url: rest.join(':')
      })),
    zipCode: profile['Zip Code'] || null
  };
}
