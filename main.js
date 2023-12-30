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
    // countryData.name = countriesName;
    // countryData.capital = countryCapital;
    // countryData.flags = countriesFlag;
    // countryData.console.log(countryData.flags);
    console.log(countriesLanguage);
    displayData(
      countriesName,
      countryCapital,
      countriesFlag,
      countriesLanguage,
      countriespopulation,
      countriesSubRegion
    );
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
  countriesubregion
) {
  countries.innerHTML = "";

  countriesName.forEach((countryName, index) => {
    const language = countriesLanguage[index]
      ? Object.values(countriesLanguage[index]).join(",")
      : "";
    // console.log(language);

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
                  <p class="currency">CURRENCY&nbsp;:&nbsp; RUPEES</p>
                  <button class="btn btn-primary">
                    <a href="#" class="text-light text-decoration-none"
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
