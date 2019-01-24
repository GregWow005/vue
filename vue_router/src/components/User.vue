<template>
    <div>
        <h2>Soy el usuario {{$route.params.id}} </h2>
        <p>Soy una descripción</p>
        <router-link :to="{name: 'bio', params:{id: $route.params.id}}">Bio</router-link>
        <router-link :to="{name: 'foto', params:{id: $route.params.id}}">Foto</router-link>
        <router-view></router-view>
    </div>
</template>