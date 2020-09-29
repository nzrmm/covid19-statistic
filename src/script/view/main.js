// eslint-disable-next-line import/extensions
import Datasource from '../data/datasource.js';

const main = () => {
  const searchCountry = document.getElementById('search-country');
  const btnClick = document.getElementById('btn-click');

  // Global Cases Covid 19

  const getGlobalData = () => {
    Datasource.getGlobalDataCases()
      .then((result) => {
        const {
          confirmed, recovered, deaths, lastUpdate,
        } = result;

        document.getElementById('template-lastupdate').innerHTML = `<p class="text-muted">Last Update ${lastUpdate}</p>`;
        document.getElementById('template-global-cases').innerHTML = `
                    <div class="col-md-4 col-sm-12 text-warning mb-3" >
                        <div class="card bg-dark border border-warning shadow">
                            <div class="card-body">
                                <p class="card-text">Confirmed</p>
                                <h1 class="card-title" >${confirmed.value}</h1>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4 col-sm-12 text-success mb-3" >
                        <div class="card bg-dark border border-success shadow">
                            <div class="card-body">
                                <p class="card-text">Recovered</p>
                                <h1 class="card-title" >${recovered.value}</h1>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4 col-sm-12 text-danger mb-3">
                        <div class="card bg-dark border border-danger shadow">
                            <div class="card-body">
                                <p class="card-text">Deaths</p>
                                <h1 class="card-title">${deaths.value}</h1>
                            </div>
                        </div>
                    </div>
                `;
      });
  };

  getGlobalData();

  // Country Cases Covid 19

  const buttonSearchCountryClick = () => {
    Datasource.getCountryDataCases(searchCountry.value)
      // eslint-disable-next-line no-use-before-define
      .then(renderCountryDataCases)
      // eslint-disable-next-line no-use-before-define
      .catch(renderErrorCountry);
  };

  const renderCountryDataCases = (countryCases) => {
    const { confirmed, recovered, deaths } = countryCases;

    document.getElementById('template-country-cases').innerHTML = `
            <div class="col-md-4 col-sm-12 text-warning mb-3" >
                <div class="card bg-dark border border-warning shadow">
                    <div class="card-body">
                        <p class="card-text h5">${searchCountry.value.toUpperCase()}</p>
                        <h1 class="card-title">${confirmed.value}</h1>
                        <p class="card-text">Confirmed</p>
                    </div>
                </div>
            </div>

            <div class="col-md-4 col-sm-12 text-success mb-3" >
                <div class="card bg-dark border border-success shadow">
                    <div class="card-body">
                        <p class="card-text h5">${searchCountry.value.toUpperCase()}</p>
                        <h1 class="card-title">${recovered.value}</h1>
                        <p class="card-text">Recovered</p>

                    </div>
                    </div>
            </div>

            <div class="col-md-4 col-sm-12 text-danger mb-3">
                <div class="card bg-dark border border-danger shadow">
                    <div class="card-body">
                        <p class="card-text h5">${searchCountry.value.toUpperCase()}</p>
                        <h1 class="card-title">${deaths.value}</h1>
                        <p class="card-text">Deaths</p>
                    </div>
                    </div>
            </div>
       `;
  };

  const renderErrorCountry = (message) => {
    document.getElementById('template-country-cases').innerHTML = `
            <div class="col-md-4 offset-md-4">
                <div class="alert alert-danger" role="alert">${message}</div>
            </div>
        `;
  };
  btnClick.addEventListener('click', buttonSearchCountryClick);
};

// }

export default main;
