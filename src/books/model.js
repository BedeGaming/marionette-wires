import { Model } from 'orchestra';

export default Model.extend({
  urlRoot: '/api/books',
  isActive() {
    return this.collection.active === this;
  }
});
