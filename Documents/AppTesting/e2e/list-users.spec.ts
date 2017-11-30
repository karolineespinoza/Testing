import { browser } from 'protractor';
import { ListUsersPage } from './list-users.po';

describe('nglabs List Users', () => {
  let page: ListUsersPage;

  beforeEach(() => {
    page = new ListUsersPage();
  });

  it('should check first user is mojombo', () => {
    page.navigateTo();
    page.getFirstUser().getText().then(
      text => {
        expect(text).toContain('mojombo');
      }
    );
    expect(page.getFirstUser().getText()).toContain('mojombo');
  });

  afterEach(() => {
    browser.driver.sleep(3000); //Esto es solo para que nuestro ojo humano pueda ver el resultado en el navegador
  });

});