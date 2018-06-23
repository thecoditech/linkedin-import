import * as moment from 'moment';

export interface Education {
  schoolName: string;
  startDate: Date;
  endDate: Date | null;
  notes: string | null;
  degreeName: string;
  activities: string | null;
}

export function educationsFormater(data: any[]): Education[] {
  return data.map(education => ({
    activities: education.Activities || null,
    degreeName: education['Degree Name'],
    endDate:
      (education['End Date'] || null) &&
      moment.utc(education['End Date'], 'YYYY').toDate(),
    notes: education.Notes || null,
    schoolName: education['School Name'],
    startDate: moment.utc(education['Start Date'], 'YYYY').toDate()
  }));
}
