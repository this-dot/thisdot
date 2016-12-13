import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('lazy-thumbnail', 'Integration | Component | lazy thumbnail', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{lazy-thumbnail}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#lazy-thumbnail}}
      template block text
    {{/lazy-thumbnail}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
