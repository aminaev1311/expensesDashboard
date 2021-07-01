<template>
  <v-row>
    <v-col>
      <header>
          <div class="text-h6 text-md-h5 mb-6">My expenses</div>
      </header>
      <!-- <v-btn
        class="mb-4"
        @click="modalClickHander"
        dark
        color="success">
        Add Expense with Modal
        <v-icon dark>
          mdi-plus
        </v-icon>
      </v-btn> -->
      <v-dialog
        v-model="showExpenseForm"
        persistent
        max-width="600px"
      >
        <template v-slot:activator=" { on } ">
          <v-btn
            class="mb-4"
            color="success"
            dark
            v-on="on"
            @click="showExpenseForm = true"
          >
            Open Dialog
            <v-icon dark>
              mdi-plus
            </v-icon>
          </v-btn>
        </template>
        <v-card  class="pa-6">
          <!-- <ExpenseForm v-show="showExpenseForm"/> -->
          <!-- <input type="date" v-model="date" placeholder="date"> -->
          <!-- <v-row justify="center">
              <v-date-picker v-model="date" v-if="showDatePicker" @blur="showDatePicker = false"></v-date-picker>
          </v-row> -->
          <v-menu
            v-model="menu"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="date"
                label="Choose a date"
                prepend-icon="mdi-calendar"
                readonly
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="date"
              @input="menu = false"
            ></v-date-picker>
        </v-menu>
          <!-- <input v-model="category"> -->
          <!-- <select v-model="category">
            <option value="" disabled selected="selected">Please select category</option>
            <option v-for="(option,idx) in getCategories" :key="idx" :value="option">{{option}}</option>
          </select> -->
          <v-select
          :items="getCategories"
          v-model="category"
          label="Pick a category"
          solo
          />
          <CategoryForm />
          <br>
          <!-- <input type="number" v-model.number="value" placeholder="enter amount"> -->
          <v-text-field
            v-model.number="value"
            label="value"
            required
          ></v-text-field>
          <br>
          <v-row
            align="center"
            justify="space-around"
          >
            <v-btn @click="save" class="mr-4 mb-4" color="primary">Save</v-btn>
            <v-btn @click="showExpenseForm = false" class="mr-4 mb-4" color="blue-grey">Close</v-btn>
          </v-row>
        </v-card>
      </v-dialog>
    <!-- <button @click="onClick" > {{ buttonTitle }} </button> -->
    <!-- <ExpenseForm v-show="showExpenseForm"/> -->
    <!-- <ExpensesList :n="n" :cur="page"/> -->
      <ExpensesTable :n="n" :cur="page"/>
      <!-- <Pagination :n="n" :cur="page" @pagination="paginationHandler" /> -->
    </v-col>
    <v-col>
      <div class="text-h6 text-md-h5 mb-16">Expenses by categories</div>
      <Chart />
    </v-col>
  </v-row>
</template>

<script>
// @ is an alias to /src
import { mapMutations, mapGetters } from 'vuex'
import CategoryForm from '../components/CategoryForm.vue'
import ExpensesTable from '@/components/ExpensesTable.vue'
import Chart from '../components/Chart.vue'
// import ExpenseForm from '@/components/ExpenseForm.vue'
// import Pagination from '@/components/Pagination.vue'

export default {
  name: 'PageDashboard',
  props: {
        settings: {
            type: Object,
            default: null
        }
    },
  components: {
    ExpensesTable,
    CategoryForm,
    Chart,
    // ExpenseForm,
    // Pagination
  },
  data() {
    return {
      showExpenseForm: false,
      buttonTitle: 'Add expense +',
      page: 1,
      n: 10,
      dialog: false,
      date: null,
      category: null,
      value: null,
      showDatePicker: true,
      menu: false
    }
  },
  methods: {
    onClick() {
      this.showExpenseForm = !this.showExpenseForm
      this.buttonTitle = this.buttonTitle==='hide expense form' ? 'Add expense +' : 'hide expense form'
    },
    modalClickHander() {
      this.$modal.show({ name: 'ExpenseForm', settings: {} } )  
    },

    paginationHandler(i) {
      this.page = i
    },
    ...mapMutations([
            'addExpense', 'editExpense'
        ]),
    save() {
      this.date = this.getFormattedDate()
      if (this.date && this.category && this.value) {
          this.addExpense({date: this.date, category: this.category, value: this.value});
          this.category = null,
          this.value = null
      }
      // if (this.date && this.category && this.value) {
          
      // }
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
    }
  },
  computed: {
    ...mapGetters(
      [
        'getExpenses',
        'getCategories'
      ]
    )
  },
  mounted () {
    this.page = +this.$route.params.page || 1

    this.date = this.getFormattedDate()
    this.category =  this.$route.params.category || null
    this.value = +this.$route.query.value || null

    // if (this.settings) {
    //     let {value, category, date} = this.settings
    //     this.category = category
    //     this.value = value
    //     this.date = date
    // }
  }
}

</script>
