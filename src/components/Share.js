/**
 * Created by Manhhailua on 12/5/16.
 */

/* eslint-disable import/no-extraneous-dependencies */

import Vue from 'vue';
import { Share as ShareModel } from '../models';
import { Placement } from '../components';
import { dom } from '../mixins';

const Share = Vue.component('share', {

  props: {
    model: {
      type: Object,
    },
  },

  mixins: [dom],

  created() {
    // Init global container object
    window.arfShares = window.arfShares || {};
    window.arfShares[this.current.id] = this;
  },

  computed: {
    current() {
      return (this.model instanceof ShareModel) ? this.model : new ShareModel(this.model);
    },

    activePlacementsModels() {
      return this.current.activePlacements();
    },
  },

  render(h) { // eslint-disable-line no-unused-vars
    const vm = this;

    return (
      <div
        id={vm.current.id}
        class="arf-share"
        style={{
          width: `${vm.current.width}px`,
          height: `${vm.current.height}px`,
        }}
      >
        {vm.activePlacementsModels.map(placement => (
          <Placement model={placement} />
        ))}
      </div>
    );
  },

});

export default Share;
