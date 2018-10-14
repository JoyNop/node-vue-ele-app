<template>

</template>

<script>
    export default {
        name: "FundList",
        data() {
            return {
                tableData: []
            };
        },
        created() {
            this.getProfile();
        },
        methods: {
            getProfile() {
                //获取表格数据
                this.$axios("/api/profiles")
                    .then(res => {
                        console.log(res);
                    })
                    .catch(err => console.log(err));
            }
        }
    }
</script>

<style scoped>

</style>
