<template>
    <div>
        <h2>Dónde encontrarme {{$route.params.newsletter}}</h2>
        <p>Calle Tal y Tal</p>
        <h5>{{newsletter}}</h5>
        <!-- <template v-if="$route.params.newsletter === 'true'"> -->
        <!-- <template v-if="newsletter === 'true'"> -->
            <template v-if="newsletter">
            <form>
                <h3>Newsletter</h3>
                <label for="">Correo</label>
                <input type="email" placeholder="tu correo" id="correoe">
            </form>
        </template>
        <p v-else>:)</p>
        
    </div>
</template>

<script>
export default {
    props : ['newsletter']
}
</script>
