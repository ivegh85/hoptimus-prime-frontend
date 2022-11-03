<template>
  <div class="vue-modal" v-show="open">
      <div class="vue-modal-inner" v-show="open">
        <div class="vue-modal-content">
          <p>
            An error occurred
          </p>
          <slot />
          <button type="button" @click="close">got it</button>
        </div>
      </div>
  </div>
</template>

<script>

export default {
  name: "ErrorModal",
  props: {
    open: {
      type: Boolean,
      required: true,
    },
  },
  setup (_, { emit }) {
    const close = () => {
      emit('close')
    };

    return { close };
  }
};
</script>

<style scoped>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.vue-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: rgba(0,0,0,0.5);
  z-index: 1;
}

.vue-modal-inner {
  max-width: 500px;
  margin: 2rem auto;
}

.vue-modal-content {
  position: relative;
  background-color: #fff;
  border: 1px solid rgba(0,0,0,0.3);
  background-clip: padding-box;
  border-radius: 0.2rem;
  padding: 1rem
}

p {
  margin: auto;
  font-size: large;
  padding: 5rem 8rem;

}

button {
  margin: 0;
  position: relative;
  border-radius: 0.2rem;
  background-color: deeppink;
  width: 60px;
  height: 30px;
  padding-bottom: 10px;
  display: block;
}


</style>