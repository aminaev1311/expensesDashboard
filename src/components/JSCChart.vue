<template>
    <JSCGrid :options="options" />
</template>

<script>
   import { JSCGrid } from 'jscharting-vue';
   export default {
      name: 'DataGrid',
      data() {
         return {
            options: {
               data: [
                  ['Art', 5, 10],
                  ['Greg', 3, 6],
                  ['Olivia', 11, 8],
                  ['Steve', 11, 4],
                  ['Anna', 3, 8]
               ],
               columns: [
                  { header: 'Name' },
                  { header: 'Value One' },
                  { header: 'Value Two' },
                  { header: 'Sum', value: '{%1+%2}' }
               ]
            }
         };
      },
      components: {
         JSCGrid
      }
   };
</script>