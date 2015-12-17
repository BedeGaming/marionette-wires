import { ItemView } from 'orchestra';
import template from './template.hbs';

export default ItemView.extend({
  template: template,
  modelEvents: {
    all: 'render'
  }
});
