import rowTemplate from '../src/templates/table-row.hbs';
import countriesServices from '../src/js/services/countries-service.js';
import '@pnotify/core/dist/BrightTheme.css';

const refs = {
  searchForm: document.querySelector('#findCountry'),
  countriesInfo: document.querySelector('#countriesInfo'),
};

const debounce = require('lodash.debounce');

refs.searchForm.addEventListener('input', debounce(searchFormInput, 500));

function searchFormInput(e) {
  // console.dir(e.currentTarget);

  let searchElement = e.target.value;
  clearListItems();
  // console.log(searchElement);
  countriesServices.fetchArticles(searchElement);
}

function clearListItems() {
  refs.countriesInfo.innerHTML = '';
}
// const { alert, notice, info, success, error } = require('@pnotify/core');

// // Manually set the type.
// const myAlert = alert({
//   text: "I'm an alert.",
//   type: 'info',
// });

// // Automatically set the type.
// const myNotice = notice({
//   text: "I'm a notice.",
// });

// const myInfo = info({
//   text: "I'm an info message.",
// });

// const mySuccess = success({
//   text: "I'm a success message.",
// });

// const myError = error({
//   text: "I'm an error message.",
// });
