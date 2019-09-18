<template>
    <div class="animated fadein">
        <div class="row">
            <div class="col-12">
                <b-collapse id="collapse1" class="mt-2">
                    <b-card>
                        <generate-component></generate-component>
                    </b-card>
                </b-collapse>
                <div class="card">
                    <div class="card-header">
                        Generate shipping cost
                        <div class="float-right">
                            <b-button v-b-toggle.collapse1 variant="primary" size="sm">Generate</b-button>
                        </div>
                    </div>
                    <div class="card-body">

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import GenerateComponent from './GenerateComponent';
    export default {
        components: {
            'generate-component' : GenerateComponent
        },
        name: "GenerateShippingCost"
    }
</script>

<style scoped>

</style>