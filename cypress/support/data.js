import moment from 'moment';
moment.locale('en-gb');

class Data {
  today = moment().format('L');
  getUnixTimeStamp() {
    let number = moment().unix();
    let num = number.toString();
    return num;
  }

  title = 'Title' + this.getUnixTimeStamp();

  content = 'Lorem ipsum';

  uniqueTitle = 'Python';

  device = 'macbook-15';
}
export default new Data();
