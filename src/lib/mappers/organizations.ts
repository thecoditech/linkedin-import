export interface Organization {
  name: string;
  description: string;
  position: string;
  startDate: Date;
  endDate: Date | null;
}

export function organizationsMapper(data: any[]): Organization[] {
  return data.map(organization => ({
    description: organization.Description,
    endDate:
      (organization['End Date'] || null) &&
      new Date(`${organization['End Date']} GMT`),
    name: organization.Name,
    position: organization.Position,
    startDate: new Date(`${organization['Start Date']} GMT`)
  }));
}
