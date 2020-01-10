export interface Position {
  companyName: string;
  title: string;
  description: string;
  location: string;
  startedOn: Date;
  finishedOn: Date | null;
}

export function positionsMapper(data: any[]): Position[] {
  return data.map(position => ({
    companyName: position['Company Name'],
    description: position.Description,
    finishedOn:
      (position['Finished On'] || null) &&
      new Date(`${position['Finished On']} GMT`),
    location: position.Location,
    startedOn: new Date(`${position['Started On']} GMT`),
    title: position.Title
  }));
}
