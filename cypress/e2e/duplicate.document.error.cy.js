import HomePage from '../POM/pages/home.page';
import NewPage from '../POM/pages/create.new.page';
import SideBar from '../POM/components/side.bar';
import Data from '../support/data';

describe('Create a document with an already existing title', () => {
  it('Tests the duplicate document error', () => {
    HomePage.visit_HomePage();
    SideBar.click_create_new_page();
    NewPage.enter_title(Data.uniqueTitle)
      .enter_content(Data.content)
      .verify_duplicate_error();
  });
});
