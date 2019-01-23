<template>
    <div>
        <h2>Soy el usuario {{$route.params.id}} </h2>
        <p>Soy una descripción</p>
        <router-view></router-view>
    </div>
</template>