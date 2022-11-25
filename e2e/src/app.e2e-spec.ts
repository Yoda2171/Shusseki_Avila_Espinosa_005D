import { AppPage } from './app.po';
import {async} from 'rxjs';

describe('new App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('Prueba 1', ()=>{
    page.navigateTo();
    expect (page.getTitleText()).toContain('Bienvenido {{username}}')
  });

  it('prueba 2', async()=>{
    await page.navigateTo();
    expect(await page.getTitleWelcome()).toEqual('Tu aplicacion para tomar la asistencia del insituto Duoc UC');
  })

  it('prueba 3', async()=>{
    await page.navigateTo();
    expect(await page.getTitletitle()).toEqual('Inicio');
  })
 
  
  /*
  it('prueba ', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toContain('Start with Ionic UI Components');
  });*/

});
