<template>
    <div>
        <div class="row">
            <div class="col-lg-2">
                <h4>Search By</h4>
            </div>
            <div class="col-md-2">
                <select  :value="field" @input="$emit('update:field', $event.target.value)" class="form-control">
                    <option v-for="type in searchBy" :value="type.id">{{ type.value }}</option>
                </select>
            </div>
            <div class="col-lg-4">
                <input type="text" :value="query" @input="$emit('update:query', $event.target.value)" class="form-control increase-input" placeholder="Search.."/>
            </div>
            <div class="col-lg-2">
                <button class="btn btn-primary" @click="$emit('refresh')">
                    <i class="fa fa-refresh" aria-hidden="true"></i> Reset Filter
                </button>
            </div>
            <div class="col-lg-2">
                <div class="row">
                    <div class="col-md-6"><p>per page</p></div>
                    <div class="col-md-6 per-page">
                        <select :value="perlist" @input="$emit('update:perlist', $event.target.value)" class="form-control">
                            <option value="10">10</option>
                            <option value="20">20</option>
                            <option value="30">30</option>
                            <option value="40">40</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
        <br>
    </div>
</template>

<script>
    export default {
        name: "Search",

        props: ['searchBy', 'query', 'field', 'perlist'],

    }
</script>

<style scoped>
.increase-input{
    height: 37px
}
</style>