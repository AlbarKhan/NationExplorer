// "use strict";
// // Example using the Fetch API
// const maindiv = document.querySelector(".country-image");
// fetch("https://restcountries.com/v3.1/all")
//   .then((response) => response.json())
//   .then((data) => {
//     // Process the retrieved data
//     // console.log(data); // Display data in the console

//     // Use the data to update your website content
//     // For example, display country names:
//     const countryflag = data.map((country) => country.flags.png);
//     console.log(countryflag);

//     countryflag.forEach((flag) => {
//       //   maindiv.innerHTML = "";
//       const flags = document.createElement("img");
//       flags.src = `${flag}`;
//       maindiv.appendChild(flags);
//       //   console.log(country);
//     });
//   })
//   .catch((error) => {
//     // Handle any errors during the API request
//     console.error("Error fetching data:", error);
//   });
