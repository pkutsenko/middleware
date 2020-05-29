const initialState = {
    loading: false,
    currencies: [],
    filter: ''
}

const currenciesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOADING': {
            return {
                ...state,
                loading: true,
            };
        }
        case 'LOADED': {
            return {
                ...state,
                currencies: action.payload,
                loading: false,
            };
        }
        case 'FILTER': {
            return {
                ...state,
                filter: action.payload
            };
        }
        default: {
            return state;
        }
    }
}

export default currenciesReducer;