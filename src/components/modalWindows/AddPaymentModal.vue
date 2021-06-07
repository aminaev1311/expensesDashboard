<template>
    <div :class="[$style.wrapper]">
        <div :class="[$style.overlay]">
                <header>Name</header>
                <ExpenseForm />
                <button @click="$emit('hidePaymentModal')">Close</button>
        </div>
    </div>
</template>

<script>
import ExpenseForm from '../ExpenseForm'

export default {
    name: 'AddPaymentModal',
    components: { 
        ExpenseForm 
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