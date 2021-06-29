<template>
    <div :class="[$style.wrapper]" @click.self="$modal.close()" >
        <!-- v-if="show"  -->

        <!-- <div :class="[$style.overlay]"></div> -->
        <div :class="[$style.content]">
            <header>{{ name }}</header>
            <component :is="name" :settings="settings" />
            <!-- <button @click="onClose">Close</button> -->
            <button @click="$modal.close()">Close</button>
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
    props: ['name', 'settings'],
    data() {
        return {
            // show: '',
            // settings: null
        }
    },
    methods: {
        // onShow( { name, settings } ) {
        //     this.show = name
        //     console.log('settings received in the modal: ',settings)
        //     this.settings = settings
        // },
        // onClose() {
        //     this.show = ''
        //     this.settings = null
        // }
    },
    computed: {
    },
    mounted() {
        // this.$modal.eventBus.$on('show', this.onShow)
        // this.$modal.eventBus.$on('close', this.onClose )
    },
    beforeDestroy() {
        // this.$modal.eventBus.$off('show', this.onShow)
        // this.$modal.eventBus.$off('close', this.onClose )
    }
}
</script>

<style module>
    .wrapper {
        /* border: 1px solid red; */
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
    .content {
        border: 1px solid red;
        width: 400px;
        background: white;
        z-index: 10000
    }

    .content input,select {
        border: 1px solid grey;
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