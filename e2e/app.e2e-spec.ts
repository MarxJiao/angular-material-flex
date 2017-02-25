import { AngularMaterialFlexPage } from './app.po';

describe('angular-material-flex App', () => {
  let page: AngularMaterialFlexPage;

  beforeEach(() => {
    page = new AngularMaterialFlexPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
