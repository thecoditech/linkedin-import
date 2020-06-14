import { loadAsync } from 'jszip';
import fromPairs from 'lodash.frompairs';
import unzip from 'lodash.unzip';
import zip from 'lodash.zip';

export interface ExportFiles {
  causesYouCareAbout?: string;
  certifications?: string;
  educations?: string;
  emails?: string;
  languages?: string;
  organizations?: string;
  positions?: string;
  profile?: string;
  projects?: string;
  skills?: string;
  testScores?: string;
}

const filesName: [string, string][] = [
  ['Causes You Care About.csv', 'causesYouCareAbout'],
  ['Certifications.csv', 'certifications'],
  ['Education.csv', 'educations'],
  ['Email Addresses.csv', 'emails'],
  ['Languages.csv', 'languages'],
  ['Organizations.csv', 'organizations'],
  ['Positions.csv', 'positions'],
  ['Profile.csv', 'profile'],
  ['Projects.csv', 'projects'],
  ['Skills.csv', 'skills'],
  ['Test Scores.csv', 'testScores'],
];

/**
 * Unzip Linkedin ZIP Export file.
 *
 * @param data Buffer
 * @param filter string[]
 * @returns Promise
 */
export async function unzipFile(
  data: Buffer,
  filter: string[] = []
): Promise<ExportFiles> {
  const { files } = await loadAsync(data);
  const existingFilesName = Object.keys(files);

  const [filesNameToLoad, filesPropertiesName] = unzip(
    filesName.filter(
      ([fileName, property]) =>
        existingFilesName.includes(fileName) &&
        (filter.length === 0 || filter.includes(property))
    )
  );

  const filesToLoad = filesNameToLoad.map((fileName) =>
    files[fileName].async('text')
  );
  const filesContent = await Promise.all(filesToLoad);

  return fromPairs(zip(filesPropertiesName, filesContent));
}
