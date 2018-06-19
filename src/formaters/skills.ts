export function skillsFormater(data: any[]): Skill[] {
  return data.map(skill => ({ name: skill.Name }));
}
