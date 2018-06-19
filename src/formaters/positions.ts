import * as moment from 'moment';

export function positionsFormater(data: any[]): GeoPosition[] {
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
