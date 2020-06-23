import Component from '@ember/component'
import { computed } from '@ember/object'

export default Component.extend({
  tagName : '',
  cellValue: computed('column', 'columnIndex', 'rowIndex', function() {
    return this.column;
  })
})
