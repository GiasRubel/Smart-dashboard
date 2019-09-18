<template>
    <div class="card">
        <div class="card-header">
            Address
        </div>
        <div class="card-body">
            <div class="row">
                <div class="col-12" v-if="address">
                    <table :class="{'table table-hover table-sm table-bordered': true, 'mg-0': !deliveryDate}">
                        <tr>
                            <td width="25%">Full name</td>
                            <td>{{ address.full_name }}</td>
                        </tr>
                        <tr>
                            <td>Country</td>
                            <td>{{ address.country.title }}</td>
                        </tr>
                        <tr>
                            <td>State</td>
                            <td>{{ address.state.title }}</td>
                        </tr>
                        <tr>
                            <td>District</td>
                            <td>{{ address.district.title }}</td>
                        </tr>
                        <tr>
                            <td>City</td>
                            <td>{{ address.city }}</td>
                        </tr>
                        <tr>
                            <td>Zip code</td>
                            <td>{{ address.zip_code }}</td>
                        </tr>
                        <tr>
                            <td>Phone number</td>
                            <td>
                                <ul>
                                    <li v-for="pn in address.phones">{{ pn.phone }}</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>Address</td>
                            <td>{{ address.address }}</td>
                        </tr>
                        <tr>
                            <td>Address 2</td>
                            <td>{{ address.address_2 }}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['address', 'deliveryDate'],
        name: "OrderAddress",
        data(){
            return {

            }
        }
    }
</script>

<style scoped>

</style>