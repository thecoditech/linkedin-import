import { parse, ParseConfig } from 'papaparse';

const parserConfig: ParseConfig = {
  delimiter: ',',
  header: true
};

export function parser<T>(
  csvString: string,
  formater: (data: any) => T[]
): T[] {
  const { errors, data } = parse(csvString, parserConfig);
  if (errors.length > 0) {
    throw new Error(errors[0].message);
  }

  return formater(data);
}
