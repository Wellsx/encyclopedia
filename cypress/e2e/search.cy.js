import HomePage from '../POM/pages/home.page';
import SearchBar from '../POM/components/search.bar';
import Data from '../support/data';

describe('Search for a document', () => {
  it('Click on the search bar and search for a document', () => {
    HomePage.visit_HomePage(Data.device);
    SearchBar.search('Git');
  });
});
