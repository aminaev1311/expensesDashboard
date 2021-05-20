<template>
    <div>
        <div> press to show a page: </div>
        <button @click="$emit('pagination-click', page-1>0 ? page=page-1 : page)"> &lt; </button>
        <span v-for="n in Math.ceil(list.length/5)" :key="n">&nbsp;
            <button @click="$emit('pagination-click',n)">{{page=n}}</button>&nbsp;
        </span>
        <button @click="$emit('pagination-click', page + 1 <= Math.ceil(list.length/5)? page=page+1 : page)"> &gt;  </button>
    </div>
</template>

<script>
export default {
    props: {
        list: Array
    },
    data() {
        return {
            page: 1
        }
    },
    methods: {
        pageClick(n) {
            this.page = n
            return this.$emit('pagination-click',n)
        }
    }
}
</script>

<style>

</style>