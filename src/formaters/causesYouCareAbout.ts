export function causesYouCareAboutFormater(data: any[]): CauseYouCareAbout[] {
  return data.map(cause => ({
    supportedCause: cause['Supported Cause']
  }));
}
