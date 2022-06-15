import { UpIconService } from './icon.service';
import { UpIcon } from './lib';

const icon1 = {
  name: 'accounts_payable_large',
  data: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32"><path fill="#312B78" fill-rule="evenodd" d="M9 3a2 2 0 00-2 2v7a1 1 0 102 0V5h7.586L23 11.414V27H9v-5a1 1 0 10-2 0v5a2 2 0 002 2h14a2 2 0 002-2V11.414A2 2 0 0024.414 10L18 3.586A2 2 0 0016.586 3H9zM4 16a1 1 0 100 2h10.92l-2.294 2.293a1 1 0 001.415 1.414l3.998-3.999h.002a1.002 1.002 0 000-1.415l-.002-.002-3.998-3.998a1 1 0 00-1.415 1.414L14.92 16H4z" clip-rule="evenodd"/></svg>`
} as UpIcon;

const icon2 = {
  name: 'accounts_payable_medium',
  data: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path fill="#312B78" fill-rule="evenodd" d="M7 2a2 2 0 00-2 2v5a1 1 0 002 0V4h5.586L17 8.414V20H7v-3a1 1 0 10-2 0v3a2 2 0 002 2h10a2 2 0 002-2V8.414A2 2 0 0018.414 7L14 2.586A2 2 0 0012.586 2H7zm3.707 7.293a1 1 0 00-1.414 1.414L10.586 12H3a1 1 0 100 2h7.586l-1.293 1.293a1 1 0 101.414 1.414l3-3A.997.997 0 0014 13.01m-.294-.717l-2.999-3m3 3l.007.008-.008-.008zm.007.008a.996.996 0 01.21.317l-.21-.318zm.21.317a.996.996 0 01.076.374l-.076-.374z" clip-rule="evenodd"/></svg>`
} as UpIcon;

const icon3 = {
  name: 'accounts_receivable_large',
  data: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32"><path fill="#312B78" fill-rule="evenodd" d="M9 3a2 2 0 00-2 2v4a1 1 0 002 0V5h7.586L23 11.414V27H9v-2a1 1 0 10-2 0v2a2 2 0 002 2h14a2 2 0 002-2V11.414A2 2 0 0024.414 10L18 3.586A2 2 0 0016.586 3H9zm9 13a1 1 0 110 2H7.08l2.294 2.293a1 1 0 11-1.415 1.414l-3.998-3.999h-.002a.997.997 0 010-1.415l.002-.001 3.998-4a1 1 0 011.415 1.415L7.08 16H18z" clip-rule="evenodd"/></svg>`
} as UpIcon;

describe('Icon Service', () => {
  const service = new UpIconService();
  beforeEach(() => {
    service.registerIcons([icon1, icon2, icon3]);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return empty string if no icon is found', () => {
    expect(service.findIcon('some-non-existent-icon-id')).toBe('');
  });

  it('should return the svg string if icon is found based on its id', () => {
    expect(service.findIcon(icon2.name)).toEqual(icon2.data);
  });
});
