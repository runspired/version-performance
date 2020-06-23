import Component from '@glimmer/component';

export default class TD extends Component {
  get cellValue() {
    return this.args.column;
  }
}
