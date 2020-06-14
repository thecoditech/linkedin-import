import { parse, ParseConfig } from 'papaparse';

const parserConfig: ParseConfig = {
  delimiter: ',',
  header: true,
  skipEmptyLines: true,
};

export function parseCSV<T>(csvString: string, mapper: (data: any) => T): T {
  const { errors, data } = parse(csvString, parserConfig);
  if (errors.length > 0) {
    throw new Error(errors[0].message);
  }

  return mapper(data);
}
