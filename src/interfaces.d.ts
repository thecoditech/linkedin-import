interface CauseYouCareAbout {
  supportedCause: string;
}

interface Certification {
  name: string;
  url: string;
  authority: string;
  startDate: Date;
  endDate: Date | null;
  licenseNumber: string | null;
}

interface Education {
  schoolName: string;
  startDate: Date;
  endDate: Date | null;
  notes: string | null;
  degreeName: string;
  activities: string | null;
}

interface Email {
  emailAddress: string;
  confirmed: boolean;
  primary: boolean;
  updatedOn: Date;
}

interface Language {
  name: string;
  proficiency: string;
}

interface Organization {
  name: string;
  description: string;
  position: string;
  startDate: Date;
  endDate: Date | null;
}

interface GeoPosition {
  companyName: string;
  title: string;
  description: string;
  location: string;
  startedOn: Date;
  finishedOn: Date | null;
}

interface Website {
  type: string;
  url: string;
}

interface InstantMessenger {
  type: string;
  username: string;
}

interface Profile {
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

interface Project {
  title: string;
  description: string;
  url: string | null;
  startDate: Date;
  endDate: Date | null;
}

interface Skill {
  name: string;
}

interface TestScore {
  testDate: Date;
  description: string;
  name: string;
  score: string;
}

interface LinkedinImport {
  causesYouCareAbout?: CauseYouCareAbout[];
  certifications?: Certification[];
  educations?: Education[];
  emails?: Email[];
  languages?: Language[];
  organizations?: Organization[];
  positions?: GeoPosition[];
  profile?: Profile;
  projects?: Project[];
  skills?: Skill[];
  testScores?: TestScore[];
}
