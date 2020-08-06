import axios from "axios";
export default {
    namespaced : true,
    state : {
        codes : {
            'NAR' : 'http://api.jikan.moe/v3/anime/1735/stats',
            'MON' : 'https://mindicador.cl/api'
        },
        row_data : {},
    },
    mutations : {
        setData( state, payload ){
            state.row_data[payload.code] = payload.data;
        },
    },
    actions : {
        getData( { commit, state, getters }, payload ) {
            let code = payload.code;

            return axios.get( state.codes[code] )
            .then( ( result ) => {
                commit('setData', { code: code, data: result.data});
            })
            .catch( ( error ) => {
                console.log( error );
            })
        },
    },
    getters : {
        getMappedData( state, getters ){
            return ( code ) => {
                let bar_data;

                switch ( code ) {
                    case 'NAR':
                        bar_data = getters['getDataNaruto'](code);
                        break; 
                    // MON is by default
                    default:
                        bar_data = getters['getDataMoney'](code);
                        break;
                }

                return bar_data;
            } 
        },
        getMappedDataSets( state ){
            return ( datasets ) => {
                let mapped_datasets = [];
                let tmp_object;
                for (const key in datasets) {
                    tmp_object = {};
                    tmp_object.label = key;
                    tmp_object.data = datasets[key];
                    tmp_object.backgroundColor = '#'+ Math.random().toString(16).substr(2,6);
                    mapped_datasets.push( tmp_object );
                }

                return mapped_datasets;
            }
        },
        getDataMoney( state, getters ){
            return ( code ) => {
                let data = state.row_data[code];
                let bar_data = {
                    labels :[],
                    datasets : []
                };
                let labels = [];
                let datasets = {};
    
                for (const item in data) {
                    if( typeof data[item] === 'object'){
                        labels.push( data[item].nombre );
                        if( datasets['data'] === undefined){
                            datasets['data'] = [];
                        }
                        datasets['data'].push( data[item].valor )  
                    }
                }
                // create datasets data to use in graph
                let mapped_datasets = getters['getMappedDataSets']( datasets );
                bar_data.datasets = mapped_datasets;
                bar_data.labels = labels;

                return bar_data;
            }


        },
        getDataNaruto( state, getters ){
            return ( code ) => {
                let data = state.row_data[code].scores;
                let bar_data = {
                    labels :[],
                    datasets : []
                };
                let labels = [];
                let datasets = {};
    
                for (const [key, item] of Object.entries(data)) {
                    labels.push('score ' + key)
                    for (var value in item) {
                        if( datasets[value] === undefined){
                            datasets[value] = [];
                        }   
                        if( value === 'percentage'){
                            item[value] = item[value] * 1000;
                        }
                        datasets[value].push( item[value] )      
                    }
    
                } 
    
                // create datasets data to use in graph
                let mapped_datasets = getters['getMappedDataSets']( datasets );
                bar_data.datasets = mapped_datasets;
                bar_data.labels = labels;
    
                return bar_data;
            }
        }
    }
}


/**
 * 
 * EXAMPLE GETTER WITH PARAMS
*   getByCode(state){
        return (code) => {
        return state.row_data[ code ];
        }
    },


 * EXAMPLE DATA GRAPH
 * let bar_data = {
                labels :[],
                datasets : []
                labels : ["January","February","March","April","May","June","July","August","September","October","November","December"],
                labels : [],
                datasets: [
                    {
                        label: "Data One",
                        backgroundColor: "#f87979",
                        data : []
                        data: [40, 20, 12, 39, 10.51, 10, 39, 80, 40, 20, 12, 11]
                    }
                ]
                
            };
 */