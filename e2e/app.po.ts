import { browser, element, by } from 'protractor';

export class FeedbackPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('fb-root h1')).getText();
  }
}
