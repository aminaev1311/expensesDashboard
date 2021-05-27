<template>
    <div>
        <div> press to show a page: </div>
        <button @click="$emit('pagination', cur - 1 > 0 ? cur - 1 : cur)"> &lt; </button>
        <span v-for="i in pages" :key="i">&nbsp;
            <button @click="$emit('pagination',i)">{{i}}</button>&nbsp;
        </span>
        <button @click="$emit('pagination', cur + 1 <= pages ? cur + 1 : cur)"> &gt;  </button>
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

<style>

</style>