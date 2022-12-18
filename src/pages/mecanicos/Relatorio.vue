<template>
    <div class="relatorios">
        <h4>Relatorios</h4>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'relatorio',
    data() {
        return {
            nome: ''
        }
    }
}
</script>