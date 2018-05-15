import {
  causesYouCareAboutFormater,
  CauseYouCareAbout,
  Certification,
  certificationsFormater,
  Education,
  educationsFormater,
  Email,
  emailsFormater,
  Language,
  languagesFormater,
  Organization,
  organizationsFormater,
  Position,
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

export interface LinkedinImport {
  causesYouCareAbout?: CauseYouCareAbout[];
  certifications?: Certification[];
  educations?: Education[];
  emails?: Email[];
  languages?: Language[];
  organizations?: Organization[];
  positions?: Position[];
  profile?: Profile;
  projects?: Project[];
  skills?: Skill[];
  testScores?: TestScore[];
}

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
