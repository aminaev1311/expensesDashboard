<template>
    <div :class="[$style.wrapper]" v-if="show" @click.self="onClose">
        <!-- <div :class="[$style.overlay]"></div> -->
        <div :class="[$style.content]">
            <header>{{ show }}</header>
            <component :is="show" />
            <button @click="onClose">Close</button>
        </div>
    </div>
</template>

<script>
import ExpenseForm from '../ExpenseForm'

export default {
    name: 'Modal',
    components: { 
        ExpenseForm 
    },
    data() {
        return {
            show: '',
            settings: null
        }
    },
    methods: {
        onShow( { name, settings } ) {
            this.show = name,
            this.settings = settings
        },
        onClose() {
            this.show = ''
        }
    },
    computed: {
    },
    mounted() {
        this.$modal.eventBus.$on('show', this.onShow)
        this.$modal.eventBus.$on('close', this.onClose )
    }
}
</script>

<style module>
    .wrapper {
        border: 1px solid red;
        position: fixed;
        z-index: 500;
        background: rgba(50, 50, 50, 0.918);
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        backdrop-filter: blur(4px);
    }
    .overlay {
        position: relative;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
    }

    /* .wrapper {
        background: darkgray;
        position: absolute;
        width: 100vw;
        height: 100vh;
        z-index: 1;
        display: flex;
        justify-content: center;
        border: 1px solid darkgrey
    }
    .overlay {
        background: lightgrey;
        z-index: -1;
        display: flex;
        align-items: center;
        justify-content: center;
        align-self: center;
        flex-direction: column;
        width: 500px;
        padding: 16px;
    } */
</style>