import { LibAppPage } from './app.po';

describe('lib-app App', () => {
  let page: LibAppPage;

  beforeEach(() => {
    page = new LibAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
