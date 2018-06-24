import {
  causesYouCareAboutFormater,
  CauseYouCareAbout,
  Certification,
  certificationsFormater,
  Education,
  educationsFormater,
  Email,
  emailsFormater,
  GeoPosition,
  Language,
  languagesFormater,
  Organization,
  organizationsFormater,
  positionsFormater,
  Profile,
  profileFormater,
  Project,
  projectsFormater,
  Skill,
  skillsFormater,
  TestScore,
  testScoresFormater
} from './formaters';
import { parseCSV } from './parser';
import { unzipFile } from './unzip';

const filesFormaters: { [index: string]: any } = {
  causesYouCareAbout: causesYouCareAboutFormater,
  certifications: certificationsFormater,
  educations: educationsFormater,
  emails: emailsFormater,
  languages: languagesFormater,
  organizations: organizationsFormater,
  positions: positionsFormater,
  profile: profileFormater,
  projects: projectsFormater,
  skills: skillsFormater,
  testScores: testScoresFormater
};

export interface LinkedinImport {
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

export async function linkedinImport(
  data: Buffer,
  filter: string[] = []
): Promise<LinkedinImport> {
  const files = await unzipFile(data, filter);

  return Object.entries(files).reduce(
    (acc, [file, value]) => ({
      [file]: parseCSV(value, filesFormaters[file]),
      ...acc
    }),
    {}
  );
}
