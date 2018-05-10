import * as moment from 'moment';

export interface Certification {
  name: string;
  url: string;
  authority: string;
  startDate: Date;
  endDate: Date | null;
  licenseNumber: string | null;
}

export function certificationsFormater(data: any[]): Certification[] {
  return data.map(certification => ({
    authority: certification.Authority,
    endDate:
      (certification['End Date'] || null) &&
      moment.utc(certification['End Date'], 'MMM YYYY').toDate(),
    licenseNumber: certification['License Number'] || null,
    name: certification.Name,
    startDate: moment.utc(certification['Start Date'], 'MMM YYYY').toDate(),
    url: certification.Url
  }));
}
