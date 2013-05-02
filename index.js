
/**
 * Module dependencies.
 */

var reactive = require('reactive');
var html = require('./template').trim();
var domify = require('domify');

/**
 * Expose `Process`.
 */

module.exports = Process;

/**
 * Initialize a new `Process`.
 *
 * @param {Object} obj
 * @api public
 */

function Process(obj) {
  if (!obj) throw new Error('process settings required');
  for (var k in obj) this[k] = obj[k];
  if (!this.name) throw new Error('.name required');
  this.el = domify(html);
  reactive(this.el, obj, this);
}
