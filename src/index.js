import angular from 'angular';

import { app } from './app/app.js';

const initInjector = angular.injector(['ng']);
const $http = initInjector.get('$http');
const $q = initInjector.get('$q');

function fetchToken() {
  return $q((resolve, reject) => {
    var koeApiToken = window.localStorage.getItem('koeApiToken');

    if (!koeApiToken) {
      let accessData = "grant_type=password&username=evaluacion&password=idwqug127eg9";
      let headers = { 'Content-type': 'application/x-www-form-urlencoded' };

      return $http.post('http://todolist.koeonline.net/token', accessData, headers)
      .then((res) => {
        window.localStorage.setItem('koeApiToken', 'Bearer ' + res.data.access_token);
        resolve();
      });
    } else {
      return $http.get('http://todolist.koeonline.net/api/user', { headers: { 'Authorization': koeApiToken } })
      .then((res) => {
        resolve();
      }, (error) => {
        if (error.status === 401) {
          window.localStorage.removeItem('koeApiToken');
        }
        reject();
      });
    }
  });
};

const bootstrapApp = (response) => {
  angular.bootstrap(document, [app.name]);
};

const showError = () => {
  console.log('Authorization has been denied, reload');
};

fetchToken().then(bootstrapApp, showError);
