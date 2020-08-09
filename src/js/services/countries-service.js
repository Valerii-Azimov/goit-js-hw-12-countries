import countryList from '../../../src/templates/country-list.hbs';
import rowTemplate from '../../../src/templates/table-row.hbs';
import '@pnotify/core/dist/BrightTheme.css';

const baseUrl = 'https://restcountries.eu/rest/v2/name/';
const { alert, notice, info, success, error } = require('@pnotify/core');

export default {
  page: 1,
  fetchArticles(qwery) {
    const requestParams = `${qwery}`;

    fetch(baseUrl + requestParams)
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(data => {
        if (data.length === 1) {
          const markup = data.map(country => rowTemplate(country)).join('');
          countriesInfo.insertAdjacentHTML('beforeend', markup);
        } else if (data.length <= 10) {
          const markup = data.map(country => countryList(country)).join('');
          countriesInfo.insertAdjacentHTML('beforeend', markup);
        } else {
          return error(
            'Too many matches found. Please enter a more specific query!',
          );
        }
      });
  },
};
