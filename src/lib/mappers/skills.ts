export interface Skill {
  name: string;
}

export function skillsMapper(data: any[]): Skill[] {
  return data.map((skill) => ({ name: skill.Name }));
}
