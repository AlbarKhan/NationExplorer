"use strict";
// Example using the Fetch API

const countries = document.querySelector(".countries");
const asia = document.getElementById("Asia");
const europe = document.getElementById("Europe");

fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    // Process the retrieved data
    console.log(data); // Display data in the console

    // Use the data to update your website content
    // For example, display country names:

    function getCountriesName(data) {
      return data.map((country) => country.name.common);
    }
    function getCountriesCapital(data) {
      return data.map((country) => country.capital);
    }
    function getCountriesFlag(data) {
      return data.map((country) => country.flags.png);
    }
    function getCountriesLanguage(data) {
      return data.map((country) => country.languages);
    }
    function getCountriesPopulation(data) {
      return data.map((country) => country.population);
    }
    function getCountriesSubRegion(data) {
      return data.map((country) => country.subregion);
    }
    function getCountriescurrency(data) {
      return data.map((country) => country.currencies);
    }
    function getCountriesLocation(data) {
      return data.map((country) => country.maps.googleMaps);
    }

    function countriesDetails(data) {
      return [
        getCountriesName(data),
        getCountriesCapital(data),
        getCountriesFlag(data),
        getCountriesLanguage(data),
        getCountriesPopulation(data),
        getCountriesSubRegion(data),
        getCountriescurrency(data),
        getCountriesLocation(data),
      ];
    }
    const asiaContinent = data.filter(
      (country) => country.continents == "Asia"
    );
    const europeContient = data.filter(
      (country) => country.continents == "Europe"
    );
    console.log(europeContient);
    // console.log(sortedPopulation.splice(-10));
    // const topTen = data.sort((a, b) => b.population - a.population);
    // console.log(topTen.slice(0, 10));
    // console.log(...getCountriesSubRegion(data));

    asia.addEventListener("click", function () {
      displayData(...countriesDetails(asiaContinent));
    });

    europe.addEventListener("click", function (e) {
      displayData(...countriesDetails(europeContient));
    });

    displayData(...countriesDetails(data));
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

// const asia = document.getElementById("Asia");
// asia.addEventListener("click", function () {
//   console.log("click");
// });
