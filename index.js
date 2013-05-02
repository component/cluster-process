
/**
 * Module dependencies.
 */

var reactive = require('reactive');
var html = require('./template').trim();
var Flipbox = require('flipbox');
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
  var el = domify(html);
  reactive(el, obj, this);
  this.el = flip(el);
}

/**
 * Flip onclick.
 */

function flip(el) {
  var box = new Flipbox(el);
  box.el.onclick = box.flip.bind(box);
  return box.el;
}
