import {
  causesYouCareAboutFormater,
  certificationsFormater,
  educationsFormater,
  emailsFormater,
  languagesFormater,
  organizationsFormater,
  positionsFormater,
  profileFormater,
  projectsFormater,
  skillsFormater,
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
