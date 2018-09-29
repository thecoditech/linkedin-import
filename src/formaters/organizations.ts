export interface Organization {
  name: string;
  description: string;
  position: string;
  startDate: Date;
  endDate: Date | null;
}

export function organizationsFormater(data: any[]): Organization[] {
  return data.map(organisation => ({
    description: organisation.Description,
    endDate:
      (organisation['End Date'] || null) &&
      new Date(`${organisation['End Date']} GMT`),
    name: organisation.Name,
    position: organisation.Position,
    startDate: new Date(`${organisation['Start Date']} GMT`)
  }));
}
