import {Collection} from 'orchestra';
import Model from './model';

export default Collection.extend({
  url: '/api/colors',
  model: Model
});
