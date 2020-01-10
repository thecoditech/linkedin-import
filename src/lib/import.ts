import {
  causesYouCareAboutMapper,
  CauseYouCareAbout
} from './mappers/causesYouCareAbout';
import { Certification, certificationsMapper } from './mappers/certifications';
import { Education, educationsMapper } from './mappers/educations';
import { Email, emailsMapper } from './mappers/emails';
import { Language, languagesMapper } from './mappers/languages';
import { Organization, organizationsMapper } from './mappers/organizations';
import { Position, positionsMapper } from './mappers/positions';
import { Profile, profileMapper } from './mappers/profile';
import { Project, projectsMapper } from './mappers/projects';
import { Skill, skillsMapper } from './mappers/skills';
import { TestScore, testScoresMapper } from './mappers/testScores';
import { parseCSV } from './parser';
import { unzipFile } from './unzip';

const filesMappers: { [index: string]: any } = {
  causesYouCareAbout: causesYouCareAboutMapper,
  certifications: certificationsMapper,
  educations: educationsMapper,
  emails: emailsMapper,
  languages: languagesMapper,
  organizations: organizationsMapper,
  positions: positionsMapper,
  profile: profileMapper,
  projects: projectsMapper,
  skills: skillsMapper,
  testScores: testScoresMapper
};

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

/**
 *
 * @param data
 * @param filter
 * @returns       Object with all Linkedin data from ZIP Files
 */
export async function linkedinImport(
  data: Buffer,
  filter: string[] = []
): Promise<LinkedinImport> {
  const files = await unzipFile(data, filter);

  return Object.entries(files).reduce(
    (acc, [file, value]) => ({
      [file]: parseCSV(value, filesMappers[file]),
      ...acc
    }),
    {}
  );
}
