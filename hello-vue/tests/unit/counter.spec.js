import { mount } from "@vue/test-utils";
import Counter from "@/components/Counter.vue";
import Vue from "vue";

describe(`Counter`, () => {
    const wrapper = mount(Counter);

    function sum(a, b) {
        return a + b;
    }

    test('adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
    });

});
