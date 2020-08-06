import axios from "axios";
export default {
    namespaced : true,
    state : {
        codes : {
            'IPA'   : 'https://api.punkapi.com/v2/beers?page=1&per_page=5',
            'IPA2'  : 'https://api.punkapi.com/v2/beers?page=2&per_page=5',
            'COVID' : 'https://api.covid19api.com/live/country/spain'
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
                //console.log('code', code);
                let bar_data;
                switch (code) {
                    case 'IPA':
                    case 'IPA2':
                        bar_data = getters['getDataIpa']( code );
                        break;
                    case 'COVID':
                        bar_data = getters['getDataCovid']( code );
                        break;
                    // IPA2 by default
                    default:
                        bar_data = getters['getDataIpa']( code );
                        break;
                }
                //console.log('DATA', bar_data);
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
                    tmp_object.data = datasets.data;
                    tmp_object.backgroundColor = datasets.backgroundColor;
                    mapped_datasets.push( tmp_object );
                }
                return mapped_datasets;
            }
        },
        getDataIpa( state, getters ){
            return ( code ) => {
                let data = state.row_data[code];
                let bar_data = {
                    labels :[],
                    datasets : []
                };
                let labels = [];
                let backgroundColor = [];
                let datasets = {};
    
                for (const item in data) {
                    //console.log( item, data[item]);
                    labels.push( data[item].name + ' ( ibu )');
                    
                    if( datasets['data'] === undefined){
                        datasets['data'] = [];
                        datasets['backgroundColor'] = [];
                    }
                    datasets['data'].push( data[item].ibu );
                    datasets['backgroundColor'].push( '#'+ Math.random().toString(16).substr(2,6) );
                }
                let tmp_object = {};
                tmp_object.data = datasets.data;
                tmp_object.backgroundColor = datasets.backgroundColor;

                // create datasets data to use in graph
                //let mapped_datasets = getters['getMappedDataSets']( datasets );
                //let mapped_datasets = [];
                bar_data.datasets =  [tmp_object] ;
                //bar_data.datasets.backgroundColor = backgroundColor;
                bar_data.labels = labels;
                //console.log('bar_Data', bar_data);
    
                return bar_data;
            }

        },
        getDataCovid( state, getters ){
            return ( code ) => {
                let data = state.row_data[code][state.row_data[code].length - 1 ];
                let bar_data = {
                    labels :[],
                    datasets : []
                };
                let labels = [];
                let backgroundColor = [];
                let datasets = {
                    data : [],
                    backgroundColor : []
                };

                //console.log('data', data);
                for (const item in data) {
                    //console.log( item, data[item]);
                    switch (item ) {
                        case 'Active':
                        case 'Confirmed':
                        case 'Deaths':
                        case 'Recovered':
                            labels.push( item );
                            datasets.data.push( data[item] );
                            datasets.backgroundColor.push( '#'+ Math.random().toString(16).substr(2,6) );
                            
                            break;
                    
                        default:
                            break;
                    }
                }

                bar_data.datasets =  [datasets] ;
                //bar_data.datasets.backgroundColor = backgroundColor;
                bar_data.labels = labels;

                //console.log('bar_Data', bar_data);

                return bar_data;

            }
        }
    }
}