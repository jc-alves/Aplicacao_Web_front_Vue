<template>
    <div class="relative">
        <div class="absolute">
            <input 
            type="text"
            :value="keyword"
            class="inputClassList"
            />
        </div>

    </div>

</template>

<script>
export default {
    name: 'Autocomplete',
    props: {
        value: {
            type: String,
            defaulf: ''
        },

    },
    data() {
        return {
            keyword: ''
            
        }      
    },
    computed: {
            
        },
        watch: {
            value(value) {
                this.keyword = value
            },
        created() {
            this.keyword = this.value
        },
    
}}
</script>

<style scoped>

</style>