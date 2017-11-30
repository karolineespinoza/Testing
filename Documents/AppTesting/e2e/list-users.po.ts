import { browser, by, element } from 'protractor';

export class ListUsersPage {
  navigateTo() {
    return browser.get('/');
  }

  getFirstUser() {
    return element(by.id('user-0'));
  }

}