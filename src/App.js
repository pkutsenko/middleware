import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { loadCurrencies } from './actions';
import { getCurrencyFiltered, getCurrencyLoading, getCurrencyFilter } from './selectors';

function App() {
  const dispatch = useDispatch();
  const  currencies = useSelector(getCurrencyFiltered);
  const loading = useSelector(getCurrencyLoading);
  const filter = useSelector(getCurrencyFilter);

  useEffect(() => {
    dispatch(loadCurrencies());
  }, []);

  const setFilter = e => dispatch({type: 'FILTER', payload: e.currentTarget.value});

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{loading ? 'Loading...' : ''}</h1>
        <input type="text" placeholder="Filter" value={filter} onChange={setFilter} />
        <ul>
          {currencies.map(({ccy, buy, sale}, index) => (<li key={ccy}>{ccy}: {buy}/{sale}</li>))}
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
