/**
 * Created by Manhhailua on 11/30/16.
 */

import Entity from './Entity';

class Banner extends Entity {

  constructor(banner) {
    super(banner);

    this._html = banner.html;
    this._type = banner.type;
  }

  get html() {
    return this._html;
  }

  get type() {
    return this._type;
  }

}

export default Banner;