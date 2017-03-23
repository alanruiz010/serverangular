import { ServerangularPage } from './app.po';

describe('serverangular App', function() {
  let page: ServerangularPage;

  beforeEach(() => {
    page = new ServerangularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
