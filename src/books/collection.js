import { Collection } from 'orchestra';
import Model from './model';

export default Collection.extend({
  url: '/api/books',
  model: Model
});
