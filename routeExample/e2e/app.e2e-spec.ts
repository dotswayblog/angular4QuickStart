import { RouteExamplePage } from './app.po';

describe('route-example App', () => {
  let page: RouteExamplePage;

  beforeEach(() => {
    page = new RouteExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
