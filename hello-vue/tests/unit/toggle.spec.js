import { mount } from "@vue/test-utils";
import Toggle from "@/components/Toggle.vue";
import Vue from "vue";

describe(`Toggle`, () => {
  const wrapper = mount(Toggle);

  function sum(a, b) {
    return a + b;
  }

  test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
