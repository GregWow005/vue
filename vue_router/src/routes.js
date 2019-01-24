import Home from "./components/Home.vue";
import Equipo from "./components/Equipo.vue";
import User from "./components/User.vue";
import UserBio from "./components/UserBio.vue";
import UserFoto from "./components/UserFoto.vue";

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
    { path:"/equipo/:id", component:Equipo,children:[
        {path:"", components: {
            default : User,
            foto: UserFoto,
            bio : UserBio,
        }, name:'equipo'}
    ]},
];