export function languagesFormater(data: any[]): Language[] {
  return data.map(language => ({
    name: language.Name,
    proficiency: language.Proficiency
  }));
}
