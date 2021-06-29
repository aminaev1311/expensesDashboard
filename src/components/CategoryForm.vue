<template>
    <span>
        <v-btn @click="showCategoryForm">
            Add category
        </v-btn>
        <span v-if="showNewCategoryForm">
            <!-- <input type="text" v-model="newCategory"/> -->
            <v-text-field
            v-model="newCategory"
            label="Add new category"
            required
            ></v-text-field>
            <v-btn @click="clickHandlerAddCategory">
                Save category
            </v-btn>
        </span>
    </span>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
    name: 'CategoryForm',
    data() {
        return {
            showNewCategoryForm: false,
            newCategory: ''
        }
    },
    methods: {
        showCategoryForm() {
            this.showNewCategoryForm = !this.showNewCategoryForm
        },
        clickHandlerAddCategory() {
            this.addCategory(this.newCategory)
            this.newCategory = ''
            this.showNewCategoryForm = false
        },
        ...mapMutations([
            'addCategory'
        ])
    },
}
</script>

<style module>

</style>