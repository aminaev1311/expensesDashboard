<template>
  <div :class="[$style.wrapper]" v-if="show">
      <div :class="[$style.edit]"><i class="fas fa-pen"></i>Edit</div>
      <div :class="[$style.delete]"><i class="fas fa-trash-alt"></i>Delete</div>
      <button @click="onClose"><i class="fas fa-times"></i>Close</button>
  </div>
</template>

<script>
export default {
    methods: {
        onClose() {
            this.show = false
        }
    },
    data() {
        return {
            show: true
        }
    },
}
</script>

<style module>
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