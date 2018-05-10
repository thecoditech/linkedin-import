import * as moment from 'moment';

export interface TestScore {
  testDate: Date;
  description: string;
  name: string;
  score: string;
}

export function testScoresFormater(data: any[]): TestScore[] {
  return data.map(testScore => ({
    description: testScore.Description,
    name: testScore.Name,
    score: testScore.Score,
    testDate: moment.utc(testScore['Test Date'], 'MMM YYYY').toDate()
  }));
}
