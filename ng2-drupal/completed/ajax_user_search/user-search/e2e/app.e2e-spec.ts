import { UserSearchPage } from './app.po';

describe('user-search App', function() {
  let page: UserSearchPage;

  beforeEach(() => {
    page = new UserSearchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
