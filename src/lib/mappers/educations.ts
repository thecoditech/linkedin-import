export interface Education {
  schoolName: string;
  startDate: Date;
  endDate: Date | null;
  notes: string | null;
  degreeName: string;
  activities: string | null;
}

export function educationsMapper(data: any[]): Education[] {
  return data.map((education) => ({
    activities: education.Activities || null,
    degreeName: education['Degree Name'],
    endDate:
      (education['End Date'] || null) &&
      new Date(`${education['End Date']} GMT`),
    notes: education.Notes || null,
    schoolName: education['School Name'],
    startDate: new Date(`${education['Start Date']} GMT`),
  }));
}
