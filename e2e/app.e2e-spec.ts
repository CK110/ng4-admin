import { Ng4AdminPage } from './app.po';

describe('ng4-admin App', () => {
  let page: Ng4AdminPage;

  beforeEach(() => {
    page = new Ng4AdminPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
