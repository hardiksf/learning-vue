<template>
    <div class="writing-paper">
        <div class="name">
            <h2>Name</h2>
            <div class="name-field">
                <div class="solid"></div>
                <div class="dashed"></div>
                <div class="solid"></div>
                <div class="none"></div>
            </div>
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
    h2
        margin-top: 1vw
        margin-right: 1vw
.name-field
    width: 300px
.name-field
    .solid, .dashed
        height: 1rem
.picture-box
    width: 1000px
    height: 750px
    border-top: 1px solid
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
