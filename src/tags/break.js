// https://github.com/vishnevskiy/bbcodejs/blob/master/src/coffee/tags.coffee
import React from 'react';
import Tag from '../tag';

export default class BreakTag extends Tag {
  constructor(renderer, settings = {}) {
    super(renderer, settings);
    this.SELF_CLOSE = true;
    this.STRIP_OUTER = true;
  }

  toHTML() {
    return '<br />';
  }

  toReact() {
    return <br />;
  }
}
