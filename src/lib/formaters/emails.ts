import * as moment from 'moment';

export interface Email {
  emailAddress: string;
  confirmed: boolean;
  primary: boolean;
  updatedOn: Date;
}

export function emailsFormater(data: any[]): Email[] {
  return data.map(email => ({
    confirmed: email.Confirmed === 'Yes',
    emailAddress: email['Email Address'],
    primary: email.Primary === 'Yes',
    updatedOn: moment.utc(email['Updated On'], 'M/D/YY, h:m a').toDate()
  }));
}
