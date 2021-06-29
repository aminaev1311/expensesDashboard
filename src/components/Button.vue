<template>
        <button 
        @click="onClick"
        color="success"
        dark
        >
        <slot name="header"></slot>
        <slot></slot>
        <slot name="footer"></slot>
        </button>
</template>

<script>
export default {
    props: {
        text: String
    },
    methods: {
        onClick() {
            console.log('clicked')
        }
    }
}
</script>

<style>

</style>