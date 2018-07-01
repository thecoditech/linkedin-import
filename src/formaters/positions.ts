import * as moment from 'moment';

export interface Position {
  companyName: string;
  title: string;
  description: string;
  location: string;
  startedOn: Date;
  finishedOn: Date | null;
}

export function positionsFormater(data: any[]): Position[] {
  return data.map(position => ({
    companyName: position['Company Name'],
    description: position.Description,
    finishedOn:
      (position['Finished On'] || null) &&
      moment.utc(position['Finished On'], 'MMM YYYY').toDate(),
    location: position.Location,
    startedOn: moment.utc(position['Started On'], 'MMM YYYY').toDate(),
    title: position.Title
  }));
}
