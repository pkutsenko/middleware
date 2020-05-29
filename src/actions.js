
export function loadCurrencies() {
    return (dispatch, getState) => {
        dispatch({type: 'LOADING'});
        fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5').then(r => r.json())
            .then(response => dispatch(dataLoaded(response)));
    }
}

function dataLoaded(response) {
    return {type: 'LOADED', payload: response};
}

function dataLoading() {
    return {type: 'LOADING'};
}