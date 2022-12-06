import HomePage from '../POM/pages/home.page';
import NewPage from '../POM/pages/create.new.page';
import SideBar from '../POM/components/side.bar';
import Data from '../support/data';

describe('Creating a new page with content field empty', () => {
  it('Creating a new page with mandatory field content empty ', () => {
    HomePage.visit_HomePage(Data.device);
    SideBar.click_create_new_page();
    NewPage.enter_title(Data.title).verify_mandatory_content_field();
  });
});
