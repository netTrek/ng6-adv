import { AppPage } from './app.po';
import { browser, by, element } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to ps!');
  });

  it('should type Text', () => {
    page.navigateTo();
    browser.waitForAngular().then( () => {
      element(by.css('input')).sendKeys('hello world');
      browser.sleep( 10000 );
      expect(page.getParagraphText()).toEqual('Welcome to ps!');
    });
  });
});
