export interface Skill {
  name: string;
}

export function skillsFormater(data: any[]): Skill[] {
  return data.map(skill => ({ name: skill.Name }));
}
