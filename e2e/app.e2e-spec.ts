import { EcheckClientPage } from './app.po';

describe('echeck-client App', function() {
  let page: EcheckClientPage;

  beforeEach(() => {
    page = new EcheckClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
