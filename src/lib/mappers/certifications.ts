export interface Certification {
  name: string;
  url: string;
  authority: string;
  startDate: Date;
  endDate: Date | null;
  licenseNumber: string | null;
}

export function certificationsMapper(data: any[]): Certification[] {
  return data.map((certification) => ({
    authority: certification.Authority,
    endDate:
      (certification['End Date'] || null) &&
      new Date(`${certification['End Date']} GMT`),
    licenseNumber: certification['License Number'] || null,
    name: certification.Name,
    startDate: new Date(`${certification['Start Date']} GMT`),
    url: certification.Url,
  }));
}
