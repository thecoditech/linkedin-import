export interface CauseYouCareAbout {
  supportedCause: string;
}

export function causesYouCareAboutMapper(data: any[]): CauseYouCareAbout[] {
  return data.map(cause => ({
    supportedCause: cause['Supported Cause']
  }));
}
