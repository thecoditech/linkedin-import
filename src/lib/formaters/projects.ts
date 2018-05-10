import * as moment from 'moment';

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
      (project['End Date'] || null) &&
      moment.utc(project['End Date'], 'MMM YYYY').toDate(),
    startDate: moment.utc(project['Start Date'], 'MMM YYYY').toDate(),
    title: project.Title,
    url: project.Url || null
  }));
}
