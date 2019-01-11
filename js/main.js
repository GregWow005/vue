Vue.component('elegir-ganador', {
    /* template :`<div>
                    <h5>El ganador es: {{ganador}}</h5>
                    <h5>Participantes</h5>
                    <ul>
                        <li v-for="user in users">{{user}}</li>
                    </ul>
                    <br>
                    <button @click="elegirGanador">Elegir Ganador</button>
                </div>
                `, */
    mounted() {
    },
    methods: {
        elegirGanador(){
            var cantidad = this.users.length;
            let indice = Math.floor((Math.random() * cantidad));
            this.ganador = this.users[indice];
        }
    },
    data() {
        return {
            ganador : 'Aún no tenemos ganador',
            users : ["Juan","Ana","Pepe","Marta","River"]
        }
    },
});


Vue.component('desplegable', {
    mounted() {
        
    },
    methods: {
        selectNumber(){
            console.log('type, target : ', event.target.selectedIndex,event.target.value,event.target.options[event.target.selectedIndex].text);
        }
    },
    data() {
        return {
            numbers :["One","Two","Thres","Cuatro","5"],
            names : {
                '1' : 'Prol',
                '2' : 'Enol',
                '3' : 'Brol',
                '4' : 'Frol'
            }
        }
    },
});

Vue.component('radio-button', {
    methods: {
        selectRadio(){
            console.log('COMMENT: ', event.target.value);
        }
    }
});

Vue.component('check-box', {
    methods: {
        selectCheck(){
            console.log('COMMENT: ', event.target.value,event.target.checked);
        }
    }
});

Vue.component('input-text',{
    methods:{
        getInputText(){
            console.log('COMMENT: ', event.target.value);
        }
    }
})

new Vue({
    el : '.vue-main',
    data : {
        mensaje : ''
    }
});


/**
 * Componentes -> Valores y eventos
 * Radio-Button
 * CheckBox
 * Input
 * TextArea
 * Range
 * Search
 * List - DataList
 * Required
 * Progress
 */

