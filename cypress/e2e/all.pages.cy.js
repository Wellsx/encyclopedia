import HomePage from '../POM/pages/home.page';
import Data from '../support/data';
import Document from '../POM/pages/document.page';

describe('Open a page from the All Pages list', () => {
  it('Click on CSS on the home page', () => {
    HomePage.visit_HomePage(Data.device).click_on_page('CSS');
    Document.verify_document_title('CSS').verify_document_content();
  });
  it('Click on Django on the home page', () => {
    HomePage.visit_HomePage(Data.device).click_on_page('Django');
    Document.verify_document_title('Django').verify_document_content();
  });
  it('Click on Git on the home page', () => {
    HomePage.visit_HomePage(Data.device).click_on_page('Git');
    Document.verify_document_title('Git').verify_document_content();
  });
  it('Click on HTML on the home page', () => {
    HomePage.visit_HomePage(Data.device).click_on_page('HTML');
    Document.verify_document_title('HTML').verify_document_content();
  });
  it('Click on Java on the home page', () => {
    HomePage.visit_HomePage(Data.device).click_on_page('Java');
    Document.verify_document_title('Java').verify_document_content();
  });
  it('Click on Python on the home page', () => {
    HomePage.visit_HomePage(Data.device).click_on_page('Python');
    Document.verify_document_title('Python').verify_document_content();
  });
});
