import {CollectionView} from 'orchestra';
import ItemView from './item-view';

export default CollectionView.extend({
  childView: ItemView,
  className: 'container'
});
