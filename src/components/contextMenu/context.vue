<template>
  <div :class="[$style.wrapper]" v-if="show">
      You are editing id: {{ obj.id }}
      <div :class="[$style.edit]" @click="edit(obj)"><i class="fas fa-pen"></i>Edit</div>
      <div :class="[$style.delete]" @click="del(obj.id)"><i class="fas fa-trash-alt"></i>Delete</div>
      <button @click="onClose"><i class="fas fa-times"></i>Close</button>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'

export default {
    methods: {
        ...mapGetters([
            'getExpenseById'
        ]),
        ...mapMutations([
            'deleteExpense'
        ]),
        onShow(obj) {
            this.show = true
            this.obj = obj
            console.log(obj)
        },
        onClose() {
            this.show = false
        },
        edit(obj) {
            this.onClose()
            this.$modal.show(
                { 
                name: 'ExpenseForm', settings: 
                    {
                        id: obj.id, 
                        value: obj.value, 
                        date: obj.date, 
                        category: obj.category
                    } 
                } )
            
        },
        del(id) {
            this.onClose()
            console.log("deleting ", id)
            this.deleteExpense(id)
        }
    },
    data() {
        return {
            show: false,
            obj: null
        }
    },
    mounted() {
        this.$context.eventBus.$on('show', this.onShow )
        this.$context.eventBus.$on('close', this.onClose )
    }
}
</script>

<style module lang="scss">
    .wrapper {
        border: 1px solid grey;
        background: lightgrey;
        position: absolute;
        top: 10px;
        left: 230px;
    }
    .edit {
        padding: 10px;
    }
    .delete {
        padding: 10px;
    }
    i {
        margin-right: 10px;
    }
</style>