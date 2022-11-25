import { browser, by, element } from 'protractor';

export class AppPage {

  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.deepCss('app-root ion-content')).getText();
  }

  getTitleText(){
    return element(by.css('app-root h1')).getText();
  }

  async getTitleTextH2():Promise<string> {
    return element(by.css('app-root h2')).getText();
  }

  async getTitleWelcome():Promise<string>{
    return element(by.css('app-root .welcome')).getText();
  }

  async getTitletitle():Promise<string>{
    return element(by.css('app-root .title')).getText();
  }





}

