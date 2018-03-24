import { HelloCloudPage } from './app.po';

describe('hello-cloud App', () => {
  let page: HelloCloudPage;

  beforeEach(() => {
    page = new HelloCloudPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
