<template>
    <div class="animated fadeIn">

        <div class="row">
            <div class="col-lg-10">
                <b-card header="<i class='fa fa-align-justify'></i> Simple Table">
                    <table class="table">
                        <thead>
                        <tr>
                            <th>Username</th>
                            <th>Date registered</th>
                            <th>Role</th>
                            <th>Status</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Samppa Nori</td>
                            <td>2012/01/01</td>
                            <td>Member</td>
                            <td>
                                <span class="badge badge-success">Active</span>
                            </td>
                        </tr>
                        <tr>
                            <td>Estavan Lykos</td>
                            <td>2012/02/01</td>
                            <td>Staff</td>
                            <td>
                                <span class="badge badge-danger">Banned</span>
                            </td>
                        </tr>
                        <tr>
                            <td>Chetan Mohamed</td>
                            <td>2012/02/01</td>
                            <td>Admin</td>
                            <td>
                                <span class="badge badge-secondary">Inactive</span>
                            </td>
                        </tr>
                        <tr>
                            <td>Derick Maximinus</td>
                            <td>2012/03/01</td>
                            <td>Member</td>
                            <td>
                                <span class="badge badge-warning">Pending</span>
                            </td>
                        </tr>
                        <tr>
                            <td>Friderik Dávid</td>
                            <td>2012/01/21</td>
                            <td>Staff</td>
                            <td>
                                <span class="badge badge-success">Active</span>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <ul class="pagination">
                        <li class="page-item"><a class="page-link" href="#">Prev</a></li>
                        <li class="page-item active">
                            <a class="page-link" href="#">1</a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item"><a class="page-link" href="#">4</a></li>
                        <li class="page-item"><a class="page-link" href="#">Next</a></li>
                    </ul>
                </b-card>
            </div><!--/.col-->
        </div>
    </div>
</template>

<script>
    export default {
        name: 'UserRoles'
    }
</script>
