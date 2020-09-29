class Datasource {
  static getGlobalDataCases() {
    const url = 'https://covid19.mathdro.id/api';
    return fetch(`${url}`)
      .then((response) => response.json())
      .then((responseJson) => Promise.resolve(responseJson));
  }

  static getCountryDataCases(country) {
    const urlCountry = `https://covid19.mathdro.id/api/countries/${country}`;
    return fetch(`${urlCountry}`)
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.error) {
          // eslint-disable-next-line prefer-promise-reject-errors
          return Promise.reject(`${country} cases not found`);
        }
        return Promise.resolve(responseJson);
      });
  }
}

export default Datasource;
