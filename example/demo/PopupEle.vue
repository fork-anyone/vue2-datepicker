<template>
  <div>
    <date-picker
      v-model="value"
      value-type="format"
      type="time"
      :open.sync="open"
      placeholder="Select time"
      :popup-ele="popupEle"
      @change="handleChange"
    >
      <div slot="input">
        click here.
      </div>
    </date-picker>
    <div ref="popupEle" class="popper-ele">Popper Ele</div>
  </div>
</template>
<style>
.popper-ele {
  background-color: blue;
  width: 100px;
  height: 80px;
  text-align: center;
  left: 200px;
  color: white;
  position: relative;
}
</style>
<script>
export default {
  name: 'PopupEle',
  data() {
    return {
      value: null,
      open: false,
      popupEle: null,
    };
  },
  mounted() {
    this.popupEle = this.$refs.popupEle;
  },
  methods: {
    handleChange(value, type) {
      if (type === 'second') {
        this.open = false;
      }
    },
  },
};
</script>
