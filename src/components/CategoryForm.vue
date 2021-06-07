<template>
    <span>
        <button @click="showCategoryForm">
            Add category
        </button>
        <span v-if="showNewCategoryForm">
            <input type="text" v-model="newCategory"/>
                <button @click="clickHandlerAddCategory">
                    Save category
                </button>
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