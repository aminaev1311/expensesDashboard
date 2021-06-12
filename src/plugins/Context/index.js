export default {
    install (Vue) {
        if (this.installed ) {
            return
        } 

        this.installed = true

        Vue.prototype.$context = {

            eventBus: new Vue(),

            show( obj ) {
                this.eventBus.$emit('show', obj )
            },

            close() {
                this.eventBus.$emit('close')
            }
        }
    }    
}
