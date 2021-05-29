<template>
    <div>
        <div> press to show a page: </div>
        <div :class="[$style.wrapper]">
            <div @click="onClick(cur - 1)"> &lt; </div>
            <div
            v-for="i in pages" :key="i" 
            @click="onClick(i)" 
            :class="{[$style.active]: cur === i }">
                {{i}}
            </div>
            <div @click="onClick(cur + 1)"> &gt;  </div>
        </div>
        <div> page {{cur}} out of {{pages}} </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    props: ['n', 'cur'],
    data() {
        return {
        }
    },
    methods: {
        onClick(page) {
            if (page < 1 || page > this.pages) {
                return
            }
            this.$emit('pagination', page)
        }
    },
    computed: {
        ...mapGetters(['getExpenses']),
        pages() {
            return Math.ceil(this.getExpenses.length/this.n)
        }
    },
    created() {
    }
}
</script>

<style module>
    .wrapper {
        display: flex;
    }
    .wrapper div {
        background: lightcyan;
        border: 0px;
        width: 20px;
        height: 20px;
        padding: 5px;
        margin: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .wrapper .active {
        background: blue
    }
</style>