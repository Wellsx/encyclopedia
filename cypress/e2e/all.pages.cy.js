import HomePage from '../POM/pages/home.page';
import Data from '../support/data';
import Document from '../POM/pages/document.page';

describe('Open a page from the All Pages list', () => {
  it('Click on a page on the home page', () => {
    HomePage.visit_HomePage(Data.device).click_on_page('Django');
    Document.verify_document_title('Django').verify_document_content();
  });
});
