<template>
    <div>
        <div class="name">
            <h2>Name</h2>
            <div class="name-box" id="square"></div>
        </div>
        <div class="picture-box"></div>
        <div class="solid"></div>
        <div class="dashed"></div>
        <div class="solid"></div>
        <div class="none"></div>

        <div class="solid"></div>
        <div class="dashed"></div>
        <div class="solid"></div>
        <div class="none"></div>

        <div class="solid"></div>
        <div class="dashed"></div>
        <div class="solid"></div>
        <div class="none"></div>

        <div class="solid"></div>
        <div class="dashed"></div>
        <div class="solid"></div>
        <div class="none"></div>

        <div class="solid"></div>
        <div class="dashed"></div>
        <div class="solid"></div>
        <div class="none"></div>
    </div>
</template>

<script>
export default {
    name: "WritingPaper",
    data() {
        return {};
    },
    methods: {}
};
</script>

<style lang="sass">
.name
    display: inline-flex
    padding-bottom: 30px
.name-box
    width: 300px
    height: 50px
    border: 1px solid
    margin: 0 auto
    margin-left: 10px
.picture-box
    width: 900px
    height: 600px
    border: 1px solid
    margin: 0 auto
.solid
    border-bottom: 1px solid
    height: 3rem
.dashed
    border-bottom: 1px dashed
    height: 3rem
.none
    border-bottom: 1px none
    height: 1rem
</style>
