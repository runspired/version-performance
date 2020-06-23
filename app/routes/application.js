import Ember from 'ember';

export default Ember.Route.extend({
  afterModel() {
    if (document.location.href.indexOf('?tracing') !== -1) {
      endTrace();
    }
  }
});

function endTrace() {
    // just before paint
    requestAnimationFrame(() => {
        // after paint
        requestAnimationFrame(() => {
        document.location.href = 'about:blank';
        });
    });
}