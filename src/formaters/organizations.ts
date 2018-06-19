import * as moment from 'moment';

export function organizationsFormater(data: any[]): Organization[] {
  return data.map(organisation => ({
    description: organisation.Description,
    endDate:
      (organisation['End Date'] || null) &&
      moment.utc(organisation['End Date'], 'MMM YYYY').toDate(),
    name: organisation.Name,
    position: organisation.Position,
    startDate: moment.utc(organisation['Start Date'], 'MMM YYYY').toDate()
  }));
}
