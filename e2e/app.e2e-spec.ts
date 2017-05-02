import { FeedbackPage } from './app.po';

describe('feedback App', () => {
  let page: FeedbackPage;

  beforeEach(() => {
    page = new FeedbackPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('fb works!');
  });
});
