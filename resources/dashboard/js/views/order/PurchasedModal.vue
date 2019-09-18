<template>

</template>

<script>
    export default {
        name: "PurchasedModal",
        props: {
            newModal: {
                type: Boolean,
                required: true
            }
        },
        data(){
            return {
                pModals: this.newModal
            }
        },
        methods: {
            showModal(){
                alert("Akash Aj")
            }
        }

    }
</script>

<style scoped>

</style>