<template>
    <ul class="pagination">
        <li :disabled="pagination.current_page <= 1" class="page-item">
            <a @click.prevent="changePage(1)" aria-disabled="true" class="page-link" role="button">First</a>
        </li>
        <li :disabled="pagination.current_page <= 1" class="page-item">
            <a @click.prevent="changePage(pagination.current_page-1)" aria-disabled="true" class="page-link"
               role="button">Prev</a>
        </li>
        <li :class="isCurrentPage(page) ? 'active' : ''" class="page-item" v-for="page in pages">
            <a @click.prevent="changePage(page)" class="page-link" href="#">{{page}}</a>
        </li>
        <li class="page-item">
            <a :class="pagination.current_page >= pagination.last_page?'disabled':''" @click.prevent="changePage(pagination.current_page+1)"
               aria-disabled="true" class="page-link"
               role="button">Next</a>
        </li>
        <li :disabled="pagination.current_page >= pagination.last_page" class="page-item">
            <a @click.prevent="changePage(pagination.last_page)" aria-disabled="true" class="page-link" role="button">Last</a>
        </li>
    </ul>
</template>

<style>
    .pagination {
        margin-top: 40px;
    }
</style>

<script>
    export default {
        props: ['pagination', 'offset'],
        data() {
            return {
                numberOfPageShow: window.screen.width < 768 ? 4 : 8
            }
        },
        methods: {
            isCurrentPage(page) {
                return this.pagination.current_page === page;
            },
            changePage(page) {
                if (page > this.pagination.last_page) {
                    page = this.pagination.last_page;
                }
                this.pagination.current_page = page;
                this.$emit('paginate');
            }
        },
        computed: {
            pages() {
                let pages = [];
                let from = this.pagination.current_page - Math.floor(this.numberOfPageShow / 2);
                if (from < 1) {
                    from = 1;
                }
                let to = from + this.numberOfPageShow - 1;
                if (to > this.pagination.last_page) {
                    to = this.pagination.last_page;
                }
                while (from <= to) {
                    pages.push(from);
                    from++;
                }
                return pages;
            }
        }
    }
</script>
