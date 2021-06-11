<template>
    <div :class="[$style.wrapper]" v-if="show" >
        <div :class="[$style.overlay]">
                <header>{{ show }}</header>
                <ExpenseForm v-if=" show === 'paymentform' " />
                <button @click="onClose">Close</button>
        </div>
    </div>
</template>

<script>
import ExpenseForm from '../ExpenseForm'

export default {
    name: 'Modal',
    props: {
        modal: String
    },
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
    mounted() {
        this.$modal.eventBus.$on('show', this.onShow)
        this.$modal.eventBus.$on('close', this.onClose )
    }
}
</script>

<style module>
    .wrapper {
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
    }
</style>