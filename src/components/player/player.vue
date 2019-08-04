<template>
  <div>
    {{ songInfo.vkey }}
  </div>
</template>

<script>
import {getSongVkey} from 'api/song'
import {mapGetters} from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'songmid'
    ])
  },
  methods: {}
}
</script>
