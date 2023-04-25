const countriesList = document.getElementById('countries-list');
fetch('https://restcountries.com/v3.1/region/europe')
.then(res => res.json())
.then(data => {
    data.forEach(country => {
        console.log(country.translations.ces.common);
        console.log(country.flags.png);
        console.log(country.maps.googleMaps);
        let blockCountry = 
        `<div class="col-xl-1 col-lg-2 col-md-3 col-sm-6 mb-3">
        <p><img src="${country.flags.png}" alt="${country.translations.ces.common}"></p>
        <h5><a href="${country.maps.googleMaps}">${country.translations.ces.common}</a></h5>
        <p>${country.population} bov.</p>
        <p>hlavní město: ${country.capital}</p>
        
        </div>`;
        countriesList.innerHTML += blockCountry;
    });
    countriesList.innerHTML = countryList;
});