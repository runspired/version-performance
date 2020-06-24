import Ember from 'ember';
import _ from 'lodash'

export default Ember.Route.extend({
  rowsCount: 300,
  columnsCount: 20,

  model() {
    const items = _.map(_.range(0, this.rowsCount) , (rowIndex) => {
      return _.map(_.range(0, this.columnsCount),(columnIndex) => {
           return rowIndex * this.columnsCount + columnIndex;
       });
    });
    return { items };
  },
  afterModel() {
    performance.mark('after-model');
    if (document.location.href.indexOf('?tracing') !== -1) {
      endTrace();
    }
  }
});

function endTrace() {
    // just before paint
    requestAnimationFrame(() => {
        performance.mark('begin-first-paint');
        // after paint
        requestAnimationFrame(() => {
          document.location.href = 'about:blank';
        });
    });
}