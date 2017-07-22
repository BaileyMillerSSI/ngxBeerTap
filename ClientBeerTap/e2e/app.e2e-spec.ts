import { ClientBeerTapPage } from './app.po';

describe('client-beer-tap App', () => {
  let page: ClientBeerTapPage;

  beforeEach(() => {
    page = new ClientBeerTapPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
