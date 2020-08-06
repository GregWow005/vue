import axios from 'axios'
export default {
     namespaced : true,
     state : {
        codes : {
            'PLANETS' : 'http://www.asterank.com/api/kepler?query={%22TPLANET%22:{%22$lt%22:400,%22$gt%22:300}}&limit=2',
            'F1' : 'http://ergast.com/api/f1/current/last/results.json'
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
                    case 'PLANETS':
                        bar_data = getters['getDataPlanets']( code );
                        break;
                    case 'F1':
                        bar_data = getters['getDataF1']( code );
                        break;
                    // IPA2 by default
                    default:
                        //bar_data = getters['getDataIpa']( code );
                        break;
                }
                //console.log('DATA', bar_data);
                return bar_data;
            }
        },
        getDataPlanets( state, getters ){
            return ( code ) => {
                let data = state.row_data[code]
                console.log('data', data);
                let bar_data = {
                    labels :[],
                    datasets : []
                };
                let labels = [];
                let backgroundColor = [];
                let datasets = [];



                for (const item in data) {
                    let new_data = [];
                    for (const value in data[item]) {
                        //console.log( item, data[item]);
                        //console.log('DATA: ',value, data[item][value]);
                        switch ( value ) {
                            case 'KMAG':
                            case 'RPLANET':
                            case 'PER':
                            case 'RA':
                            case 'DEC':
                                if( !labels.includes( value ) ){
                                    labels.push(value);
                                    backgroundColor.push( '#'+ Math.random().toString(16).substr(2,6) + '66');
                                }
                                new_data.push( data[item][value] );
                                break;
                        
                            default:
                                break;
                        }

                    }
                    datasets.push( {data: new_data, backgroundColor: '#'+ Math.random().toString(16).substr(2,6) + '66', label : 'planet'} );
                    
                }

                bar_data.datasets =  datasets ;
                bar_data.labels = labels;

                //console.log( bar_data );
               /*  bar_data = {
                    labels: ['Running', 'Swimming', 'Eating', 'Cycling'],
                    //backgroundColor : ["#04a1d8aa", "#fe50dcaa", "#1223f7aa", "#dab6a0aa", "#ef3464aa"],
                    datasets: [{
                        backgroundColor : "#04a1d8aa",
                        data: [20, 10, 4, 2]
                    },{
                        backgroundColor : "#1223f7aa",
                        data: [2, 50, 14, 22]
                    }]
                } */

                return bar_data
            }
        },
        getDataF1( state, getters ){
            return ( code ) => {
                let data = state.row_data[code].MRData.RaceTable.Races[0].Results;
                let bar_data = {
                    labels :[],
                    datasets : []
                };
                let labels = [];
                let backgroundColor = [];
                let datasets = [];
                let counter = 1;

                for (const item in data) {
                    if( counter < 4){
                        let new_data = [];
                        let label = "";
                        for (const value in data[item]) {
                            //console.log(value, data[item][value]);
                            switch ( value ) {
                                case 'number':
                                case 'position':
                                case 'points':
                                    if( !labels.includes( value ) ){
                                        labels.push( value );
                                        backgroundColor.push( '#'+ Math.random().toString(16).substr(2,6) + '66');
                                    }
                                    new_data.push( data[item][value] );
                                    label = data[item].Driver.givenName + ' ' + data[item].Driver.familyName;
                                    break;
                            
                                default:
                                    break;
                            }

                        }
                        datasets.push( {data: new_data, backgroundColor: '#'+ Math.random().toString(16).substr(2,6) + '66', label : label} );
                    }
                    counter = counter + 1;
                }

                bar_data.datasets =  datasets;
                bar_data.labels = labels;
                return bar_data
            }
        }
     }
}