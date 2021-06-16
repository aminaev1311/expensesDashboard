<template>
  <div>
      <input type="date" v-model="date" placeholder="date">
      <br>
      <!-- <input v-model="category"> -->
      <select v-model="category">
        <!-- <option disabled value="">Please select category</option> -->
        <option v-for="(option,idx) in getCategories" :key="idx" :value="option">{{option}}</option>
      </select>
      <CategoryForm />
      <br>
      <input type="number" v-model.number="value" placeholder="amount">
      <br>
      <button @click="save(settings)">Save</button>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
import CategoryForm from './CategoryForm.vue'

export default {
    components: { CategoryForm },
    name: 'ExpenseForm',
    props: {
        settings: {
            type: Object,
            default: null
        }
    },
    data() {
        return {
            date: null,
            category: null,
            value: null
        }
    },
    computed: {
        ...mapGetters(
            [
                'getCategories'
            ]
        )
    },
    methods: {
        ...mapMutations([
            'addExpense', 'editExpense'
        ]),
        save(settings) {
            if (settings.value) {
                console.log("Saving: ", settings )
                this.editExpense({date: this.date, category: this.category, value: this.value, id: settings.id})
            } else {
                if (this.date && this.category && this.value) {
                    this.addExpense({date: this.date, category: this.category, value: this.value});
                }
            }
            if (this.date && this.category && this.value) {
                this.date = null,
                this.category = null,
                this.value = null
            }
        },
        getFormattedDate() {
            const todayTime = new Date();
            const month = String(todayTime.getMonth() + 1). padStart(2, '0')
            const day = String(todayTime.getDate()). padStart(2, '0')
            const year = String(todayTime.getFullYear()). padStart(2, '0')
            return year + "-" + month + "-" + day
        },
        onShow( {value, category, date} ) {
            console.log("onShow in Expense Form", value, category, date)
            this.category = category
            this.value = value
            this.date = date
        },
        // onShow() {
        //     const {value, category, date} = this.settings
        //     this.category = category
        //     this.value = value
        //     this.date = date
        // }
    },
    mounted() {
        this.date = this.getFormattedDate()
        this.category =  this.$route.params.category || null
        this.value = +this.$route.query.value || null

        console.log("seetings received as props in the ExpenseForm", this.settings)

        if (this.settings) {
            let {value, category, date} = this.settings
            this.category = category
            this.value = value
            this.date = date
        }
    }
    
}
</script>

<style>

</style>