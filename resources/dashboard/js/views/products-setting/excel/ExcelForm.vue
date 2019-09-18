<template>
    <div class="card-body">
        <b-alert v-if="masages" variant="success" show><strong>{{masages}}</strong></b-alert>
        <span v-if="excelError">&nbsp;
            <b-alert variant="warning" show><strong>{{ excelError }}</strong></b-alert>
        </span>&nbsp;
        <b-form-fieldset>
            <input accept=".xlsx" id="file"
                   name="File" ref="file"
                   type="file" v-on:change="handleFileUpload()"
                   v-validate="'required'"/>
            <span class="text-danger" v-if="errors.has('File')">{{ errors.first('File')}}</span>
        </b-form-fieldset>
        <div slot="footer">
            <b-button @click="submitFile()"
                      size="sm"
                      type="submit"
                      variant="success">
                <i class="fa fa-dot-circle-o"></i> Submit
            </b-button>
            <b-button @click="reset" size="sm" type="submit" variant="danger">
                <i class="fa fa-ban"></i> Reset
            </b-button>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['url'],
        data() {
            return {
                excelError: '',
                masages: '',
            }
        },
        methods: {

            submitFile() {

                  /*Initialize the form data */
                let formData = new FormData();

                /* Add the form data we need to submit */
                formData.append('file', this.file);

                this.$validator.validateAll().then((valid) => {
                    if (valid) {
                        axios.post(this.url,
                            formData,
                            {
                                headers: {
                                    'Content-Type': 'multipart/form-data'
                                }
                            }
                        ).then(response => {

                            if (response.data.success) {
                                this.masages = response.data.success;

                                setTimeout(() => {
                                    this.masages = ''
                                }, 2000);

                                this.excelError = '';
                                this.$validator.reset()
                            }
                        }).catch(error => {

                            if (error.response.data.errors) {
                                this.excelError = 'Something Wrong On Your Excel File!!!';

                                setTimeout(() => {
                                    this.excelError = ''
                                }, 5000)
                            }
                        })
                    }
                })
            },


            /*
            Handles a change on the file upload
          */
            handleFileUpload() {
                this.file = this.$refs.file.files[0];
            },

            reset() {
                document.getElementById("file").value = "";
            },
        },
    }
</script>

<style scoped>

</style>