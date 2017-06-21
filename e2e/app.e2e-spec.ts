import { SnyderSnippetsPage } from './app.po';

describe('snyder-snippets App', () => {
  let page: SnyderSnippetsPage;

  beforeEach(() => {
    page = new SnyderSnippetsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
