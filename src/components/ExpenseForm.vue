<template>
  <div>
      <input type="date" v-model="date" placeholder="date">
      <br>
      <input type="text" v-model="category" placeholder="category">
      <br>
      <input type="number" v-model.number="value" placeholder="amount">
      <br>
      <button @click="save">Save</button>
      <!-- <button @click="$emit('save', {date: date, category: category, value: value})">Save</button> -->
      <!--comment-->
  </div>
</template>

<script>
export default {
    name: 'ExpensesForm',
    data() {
        return {
            date: null,
            category: null,
            value: null
        }
    },
    methods: {
        save() {
            this.$emit('save', {date: this.date, category: this.category, value: this.value})
            this.date = null
            this.category = null,
            this.value = null
        }
    }
}
</script>

<style>

</style>