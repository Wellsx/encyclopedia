import HomePage from '../POM/pages/home.page';
import SideBar from '../POM/components/side.bar';
import Data from '../support/data';

describe('Open a random page', () => {
  it('Clicks on the Random Page button', () => {
    HomePage.visit_HomePage(Data.device);
    SideBar.click_random_page();
  });
});
