export interface Project {
  title: string;
  description: string;
  url: string | null;
  startDate: Date;
  endDate: Date | null;
}

export function projectsFormater(data: any[]): Project[] {
  return data.map(project => ({
    description: project.Description,
    endDate:
      (project['End Date'] || null) && new Date(`${project['End Date']} GMT`),
    startDate: new Date(`${project['Start Date']} GMT`),
    title: project.Title,
    url: project.Url || null
  }));
}
