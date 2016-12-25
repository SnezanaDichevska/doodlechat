import { DoodlechatPage } from './app.po';

describe('doodlechat App', function() {
  let page: DoodlechatPage;

  beforeEach(() => {
    page = new DoodlechatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
