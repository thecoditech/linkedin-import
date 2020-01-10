export interface Language {
  name: string;
  proficiency: string;
}

export function languagesMapper(data: any[]): Language[] {
  return data.map(language => ({
    name: language.Name,
    proficiency: language.Proficiency
  }));
}
