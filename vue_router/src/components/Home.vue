<template>
    <div>
        <h1>Home</h1>
        <!-- <router-link :to="'/equipo/' + id">Equipo</router-link> -->
        <router-link :to="{name: 'equipo', params:{id: id}}">Equipo</router-link>
        <router-link :to="{name: 'contacto', params:{newsletter: true}}">Contacto</router-link>
    </div>
</template>
<script>
export default {
    data(){
        return{
            id: "Toto",
        }
    }
}
</script>