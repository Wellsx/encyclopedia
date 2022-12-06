import HomePage from '../POM/pages/home.page';
import NewPage from '../POM/pages/create.new.page';
import SideBar from '../POM/components/side.bar';
import Data from '../support/data';

describe('Creating a new page with title field empty', () => {
  it('Creating a new page with mandatory field title empty', () => {
    HomePage.visit_HomePage(Data.device);
    SideBar.click_create_new_page();
    NewPage.enter_content(Data.content).verify_mandatory_title_field();
  });
});
