"use strict";
// Example using the Fetch API
const countryData = {};
const countries = document.querySelector(".countries");
fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    // Process the retrieved data
    console.log(data); // Display data in the console

    // Use the data to update your website content
    // For example, display country names:

    const countriesName = data.map((country) => country.name.common);
    const countryCapital = data.map((country) => country.capital);
    const countriesFlag = data.map((country) => country.flags.png);
    const countriesLanguage = data.map((country) => country.languages);
    const countriespopulation = data.map((country) => country.population);
    const countriesSubRegion = data.map((country) => country.subregion);
    countryData.currency = data.map((country) => country.currencies);
    const countriesLocation = data.map((country) => country.maps.googleMaps);

    // console.log(countriespopulation);
    function getCountriesName(data) {
      return data.map((country) => country.name.common);
    }
    const asiaContinent = data.filter(
      (country) => country.continents == "Asia"
    );
    console.log(getCountriesName(asiaContinent));
    // console.log(topten);
    // console.log(sortedPopulation.splice(-10));
    const topTen = data.sort((a, b) => b.population - a.population);
    console.log(topTen.slice(0, 10));
    const para = [
      getCountriesName(data),
      countryCapital,
      countriesFlag,
      countriesLanguage,
      countriespopulation,
      countriesSubRegion,
      countryData.currency,
      countriesLocation,
    ];
    displayData(...para);
  })
  .catch((error) => {
    // Handle any errors during the API request
    console.error("Error fetching data:", error);
  });

function displayData(
  countriesName,
  countriesCapital,
  countryflag,
  countriesLanguage,
  countriespopulation,
  countriesubregion,
  countryCurrency,
  countriesLocation
) {
  countries.innerHTML = "";

  countriesName.forEach((countryName, index) => {
    const language = countriesLanguage[index]
      ? Object.values(countriesLanguage[index]).join(",")
      : "";
    // console.log(language);
    const currencyy = countryCurrency[index]
      ? Object.values(countryCurrency[index])
      : "";
    // Object.values(countryCurrency[index]);

    const currencyCheck = currencyy[0] ? currencyy[0].name : "";
    const country = document.createElement("div");
    country.className = "col-lg-4 col-md-6";
    country.innerHTML = `
  <div class="card">
              <img
                src="${countryflag[index]}"
                alt=""
              />
              <div class="card-body">
                <div class="card-title">
                  <h3 class="country-name text-center">${countryName}</h3>
                  <p class="capital">CAPITAL&nbsp;:&nbsp;${countriesCapital[index]}</p>
                  <p class="language">LANGUAGE&nbsp;:&nbsp;${language}</p>
                  <p class="population">POPULATION&nbsp;:&nbsp;${countriespopulation[index]}</p>
                  <p class="subregion">SUB-REGION&nbsp;:&nbsp; ${countriesubregion[index]}</p>
                  <p class="currency">CURRENCY&nbsp;:&nbsp; ${currencyCheck}</p>
                  <button class="btn btn-primary">
                    <a href="${countriesLocation[index]}" class="text-light text-decoration-none" target="_blank"
                      >Location</a
                    >
                  </button>
                </div>
              </div>
            </div>
  `;
    countries.appendChild(country);
  });
}

const topTenbtn = document.getElementById("top-10");
function topTenPopulated() {}
