<template>
    <div>
        <h2>Notes</h2>
        <div class="text-button">
            <textarea
                class="text"
                type="text"
                notes="name"
                placeholder="Enter note here:"
                v-model="noteText"
            ></textarea>
            <button class="add-button" type="button" @click="addNote">
                ADD
            </button>
            <h5 class="your-notes">Your notes</h5>
            <div class="all-notes">
                <div
                    class="note"
                    v-for="(note, index) in notesArray"
                    :key="index"
                >
                    {{ note }}
                    <button class="delete btn btn-ligh" @click="deleteItem">
                        &#10005;
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Notes",
    data() {
        return {
            notesArray: [],
            noteText: ""
        };
    },
    methods: {
        addNote() {
            this.notesArray.push(this.noteText);
            this.noteText = "";
        },
        deleteItem() {
            const targetedText = event.target.parentNode.innerText;
            const noteToBeDeleted = targetedText.slice(
                0,
                targetedText.length - 2
            );
            const indexToBeRemoved = this.notesArray.indexOf(noteToBeDeleted);
            this.notesArray.splice(indexToBeRemoved, 1);
        }
    }
};
</script>

<style lang="sass">
.text-button
    display: flex
    flex-direction: column
    justify-content: center
    margin-top: 10px
.text
    width: 25%
    margin: 0 auto
.add-button
    width: 100px
    margin: 0 auto
    margin-top: 10px
.your-notes
    margin-top: 20px
.all-notes
    margin: 0 auto
.note
    border: 1px solid grey
    padding: 5px 50px 5px 20px
    margin: 5px auto 0 auto
    position: relative
    min-height: 50px
.delete
    position: absolute
    top: -5px
    right: -5px
</style>
