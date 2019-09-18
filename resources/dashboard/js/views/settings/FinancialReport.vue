<template>
    <div class="fadein animated">
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        Financial report
                        <div class="float-right">
                            <a class="btn btn-primary" href="/dashboard/report/pdf/financial-report" target="_blank" v-b-tooltip.hover title="PDF">
                                <i class="fa fa-file-pdf-o"></i>
                            </a>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-sm-6 col-md-3 col-lg-3">
                                <Callout variant="info">
                                    <small class="text-muted">Total order's</small>
                                    <br>
                                    <strong class="h4">{{ report.totalOrder }}</strong>
                                </Callout>
                            </div>
                            <div class="col-sm-6 col-md-3 col-lg-3">
                                <Callout variant="warning">
                                    <small class="text-muted">Total order cost</small>
                                    <br>
                                    <strong class="h4">${{ helper.fixed(report.totalOrderCost) }}</strong>
                                </Callout>
                            </div>
                            <div class="col-sm-6 col-md-3 col-lg-3">
                                <Callout variant="success">
                                    <small class="text-muted">Total shipping cost</small>
                                    <br>
                                    <strong class="h4">${{ helper.fixed(report.totalShippingCost) }}</strong>
                                </Callout>
                            </div>
                            <div class="col-sm-6 col-md-3 col-lg-3">
                                <Callout variant="danger">
                                    <small class="text-muted">Total product cost</small>
                                    <br>
                                    <strong class="h4">${{ helper.fixed(report.totalProductCost) }}</strong>
                                </Callout>
                            </div>
                            <div class="col-sm-6 col-md-3 col-lg-3">
                                <Callout variant="warning">
                                    <small class="text-muted">Total gift</small>
                                    <br>
                                    <strong class="h4">${{ helper.fixed(report.totalGiftCost) }}</strong>
                                </Callout>
                            </div>
                            <div class="col-sm-6 col-md-3 col-lg-3">
                                <Callout variant="primary">
                                    <small class="text-muted">Total insurance</small>
                                    <br>
                                    <strong class="h4">${{ helper.fixed(report.totalInsuranceCost) }}</strong>
                                </Callout>
                            </div>
                            <div class="col-sm-6 col-md-3 col-lg-3">
                                <Callout variant="info">
                                    <small class="text-muted">Total service charge</small>
                                    <br>
                                    <strong class="h4">${{ helper.fixed(report.totalServiceChargeCost) }}</strong>
                                </Callout>
                            </div>
                            <div class="col-sm-6 col-md-3 col-lg-3">
                                <Callout variant="info">
                                    <small class="text-muted">Total gateway charge amount</small>
                                    <br>
                                    <strong class="h4">${{ helper.fixed(report.totalGateChargeAmount) }}</strong>
                                </Callout>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {Callout} from '../../components/'
    import helper from '../../helper/helpers'
    import axios from 'axios'
    export default {
        components: {
            Callout
        },
        name: "FinancialReport",
        data(){
          return {
              report: {},
              helper
          }
        },
        methods:{
            getFinancialReport(){
                axios.get('/dashboard/financial-report').then(response => {
                    this.report = response.data.report;
                }).catch(error => {
                   console.log(error)
                });
            }
        },
        created() {
            this.getFinancialReport();
        }
    }
</script>

<style scoped>
    @media screen and (max-width: 600px) {
        .col-md-3 >>> .callout{
            min-height: 95px;
        }
    }
</style>