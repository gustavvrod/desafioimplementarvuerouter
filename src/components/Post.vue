<template>
    <div class="main__post">  
        <h1 v-text="tituloEntrada"></h1>
        <div id="paginar">
            <router-link :to="paginar(false)">Anterior</router-link>
            <router-link :to="paginar(true)">Siguiente</router-link>
        </div>
        <router-link :to="{name: 'articulos'}">Ver Ultimo Articulo</router-link>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    methods: {
        paginar(siguiente){
            let entrada = parseInt(this.$route.params.entrada)
            if (siguiente)
                return entrada < 10 ? `/post/${entrada + 1}`: `/post/${entrada}`
            else
                return entrada > 1 ? `/post/${entrada - 1}`: `/post/${entrada}`
        }
    },
    computed: {
        tituloEntrada(){
            return `Post numero ${this.$route.params.entrada} `
        }
    },
}
</script>

<style scoped>
    .main__post{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 50px;
    }
    #paginar{
        display: flex;
        flex-direction: row;
        align-items: baseline;
        justify-content: space-evenly;
        width: 300px;
    }
</style>