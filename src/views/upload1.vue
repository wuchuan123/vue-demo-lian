<template>
  <div>
    <input type="file" ref="file" @change="upload" />
    <button @click="click"></button>
  </div>
</template>

<script>
export default {
  methods: {
    upload(event) {
      const { files } = event.target;
      console.log(event, "event");
      console.log(files, "files");
      const xx = window.URL.createObjectURL(files[0]);
      console.log(xx, "xx");
    },
    click() {
      const { file } = this.$refs;
      file.click();
    },
  },
};
</script>

<style></style>
