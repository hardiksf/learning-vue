<template>
  <div class="component-border">
    <h2>Counter Component</h2>
    <p>Increments following text by {{ addNum }} upon button click</p>
    <p class="counter">{{ count }}</p>
    <button type="button" class="btn btn-info" @click="increment">
      Increment above text
    </button>
  </div>
</template>

<script>
export default {
  props: {
    addNum: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      count: 0
    };
  },
  methods: {
    increment() {
      this.count += Number(this.addNum);
    }
  }
};
</script>
