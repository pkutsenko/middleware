import sortBy from 'lodash/sortBy';
import { createSelector } from 'reselect';

const getCurrencies = state => state.currency.currencies;
export const getCurrencyFilter = state => state.currency.filter;
export const getCurrencyLoading = state => state.currency.loading;

const getCurrencySorted = createSelector([getCurrencies], (currencies) => {
    return sortBy(currencies, 'ccy');
})

export const getCurrencyFiltered = createSelector([getCurrencySorted, getCurrencyFilter], (currencySorted, filter) => {
    return currencySorted.filter(item => item.ccy.includes(filter))
})
