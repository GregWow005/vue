import Home from "./components/Home.vue";
import Equipo from "./components/Equipo.vue";
import User from "./components/User.vue";
import UserBio from "./components/UserBio.vue";
import UserFoto from "./components/UserFoto.vue";
import Contacto from "./components/Contacto.vue";
import NoEncontrado from "./components/NoEncontrado.vue";

/* export const routes = [
    { path:"/", component:Home },
    { path:"/equipo/:id", component:Equipo,children:[
        {path:"", component:User, name:'equipo', children:[
            { path:"bio/:id", component:UserBio, name:'bio' },
            { path:"foto", component:UserFoto, name:'foto' },
        ]}
    ]}
]; */

export const routes = [
    { path:"/", component:Home },
    { path:"/equipo/:id", component:Equipo, children:[
        {path:"", components: {
            default : User,
            foto: UserFoto,
            bio : UserBio,
        }, name:'equipo'}
    ]},
    //{path:"/contacto/:newsletter", component: Contacto, name: 'contacto'}
    //{path:"/contacto/:newsletter", component: Contacto, name: 'contacto', props:true}
    {path:"/contacto/", component: Contacto, name: 'contacto', props:{newsletter:true}},
    {path:"*", component: NoEncontrado, name: 'noencontrado'} // tiene que estar la última. Si no encuenta ninguna de las otras rutas entonces, asume que será esta última
];