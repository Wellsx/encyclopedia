import HomePage from '../POM/pages/home.page';
import SideBar from '../POM/components/side.bar';

describe('Open a random page', () => {
  it('Clicks on the Random Page button', () => {
    HomePage.visit_HomePage();
    SideBar.click_random_page();
  });
});
