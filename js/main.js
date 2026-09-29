// NASA Facilities API: https://data.nasa.gov/docs/legacy/gvk9-iz74.json

// Open-Meteo Weather API: https://api.open-meteo.com/v1/forecast?

document.querySelector('button').addEventListener('click', getFacilityInformationAndWeather);

function getFacilityInformationAndWeather() {

    document.querySelector('#facilityNamesAndWeather').replaceChildren();

    const nowDateTime = document.querySelector('#nowDateTime');
    nowDateTime.innerText = '';
    nowDateTime.innerText = 'Date and Time: ' + new Date();

    let facilitiesInformationAndWeather = [];

    getFacilityInformation()

        .then(function (facilitiesInformation) {
            console.log(facilitiesInformation);

            for (let i = 0; i < facilitiesInformation.length; i++) {
                console.log(facilitiesInformation[i]);

                let facilityInformationAndWeather = [];

                let numberFacilities = facilitiesInformation[i].length;
                console.log(numberFacilities);

                let facilityLatitude = facilitiesInformation[i][numberFacilities - 1][0];
                console.log(facilityLatitude);

                let facilityLongitude = facilitiesInformation[i][numberFacilities - 1][1];
                console.log(facilityLongitude);

                getFacilityWeather(facilityLatitude, facilityLongitude)

                    .then(function (facilityWeather) {
                        console.log(facilityWeather);

                        facilityInformationAndWeather.push(facilitiesInformation[i]);
                        console.log(facilityInformationAndWeather);

                        facilityInformationAndWeather.push(facilityWeather);
                        console.log(facilityInformationAndWeather);

                        facilitiesInformationAndWeather.push(facilityInformationAndWeather);
                        console.log(facilitiesInformationAndWeather);

                        let currentFacility = facilitiesInformationAndWeather.length - 1;

                        buildFacilityInformationAndWeather(
                            facilitiesInformationAndWeather[currentFacility][0],
                            facilitiesInformationAndWeather[currentFacility][1]
                        );
                    })
            }
        })
};

function getFacilityInformation() {

    let facilitiesInformation = [];

    const facilityInformationURL = 'https://data.nasa.gov/docs/legacy/gvk9-iz74.json'
    console.log(facilityInformationURL);

    return fetch(facilityInformationURL)

        .then(function (response) {
            console.log(response);
            return response.json();
        })

        .then(function (data) {
            console.log(data);

            console.log(data.length);

            for (let i = 0; i < data.length; i++) {
                console.log(data[i].center);

                let facilityInformation = [];
                let facilityLatitudeLongitude = [];

                facilityInformation.push(data[i].center);
                facilityInformation.push(data[i].city);
                facilityInformation.push(data[i].state);
                facilityInformation.push(data[i].zipcode);
                facilityInformation.push(data[i].country);

                facilityLatitudeLongitude.push(data[i].location.latitude);
                facilityLatitudeLongitude.push(data[i].location.longitude);
                facilityInformation.push(facilityLatitudeLongitude);

                facilitiesInformation.push(facilityInformation);
            }

            console.log(facilitiesInformation);
            return facilitiesInformation;

        })

};

function getFacilityWeather(facilityLatitude, facilityLongitude) {
    console.log(facilityLatitude);
    console.log(facilityLongitude);

    const facilityWeatherURL =
        'https://api.open-meteo.com/v1/forecast?' +
        `latitude=${facilityLatitude}&longitude=${facilityLongitude}&current=temperature_2m,apparent_temperature,relative_humidity_2m,cloud_cover,wind_speed_10m,precipitation`;

    console.log(facilityWeatherURL);

    return fetch(facilityWeatherURL)

        .then(function (response) {
            console.log(response);
            return response.json();
        })

        .then(function (data) {
            console.log(data);
            console.log(data.current);

            let facilityWeather = [];

            facilityWeather.push(data.current.apparent_temperature);
            facilityWeather.push(data.current.cloud_cover);
            facilityWeather.push(data.current.precipitation);
            facilityWeather.push(data.current.relative_humidity_2m);
            facilityWeather.push(data.current.temperature_2m);
            facilityWeather.push(data.current.wind_speed_10m);

            console.log(facilityWeather);

            return facilityWeather;
        });
};

function buildFacilityInformationAndWeather(facilityInformation, facilityWeather) {
    console.log(facilityInformation);
    console.log(facilityInformation.length);

    console.log(facilityWeather);
    console.log(facilityWeather.length);

    const facilityNamesAndWeather = document.querySelector('#facilityNamesAndWeather');
    console.log(facilityNamesAndWeather);

    let sectionFacility = document.createElement('section');
    console.log(sectionFacility);

    let headingFacility = document.createElement('h3');
    console.log(headingFacility);
    headingFacility.innerText = facilityInformation[0];
    console.log(facilityInformation[0]);
    sectionFacility.appendChild(headingFacility);

    let divCity = document.createElement('div');
    console.log(divCity);

    let nameCity = document.createElement('span');
    console.log(nameCity);
    nameCity.innerText = 'CITY: ';
    divCity.appendChild(nameCity);

    let valueCity = document.createElement('span');
    console.log(valueCity);
    console.log(facilityInformation[1]);
    valueCity.innerText = facilityInformation[1];
    divCity.appendChild(valueCity);

    sectionFacility.appendChild(divCity);

    let divState = document.createElement('div');
    console.log(divState);

    let nameState = document.createElement('span');
    console.log(nameState);
    nameState.innerText = 'STATE: ';
    divState.appendChild(nameState);

    let valueState = document.createElement('span');
    console.log(valueState);
    console.log(facilityInformation[2]);
    valueState.innerText = facilityInformation[2];
    divState.appendChild(valueState);

    sectionFacility.appendChild(divState);

    let divZipcode = document.createElement('div');
    console.log(divZipcode);

    let nameZipcode = document.createElement('span');
    console.log(nameZipcode);
    nameZipcode.innerText = 'ZIP CODE: ';
    divZipcode.appendChild(nameZipcode);

    let valueZipcode = document.createElement('span');
    console.log(valueZipcode);
    console.log(facilityInformation[3]);
    valueZipcode.innerText = facilityInformation[3];
    divZipcode.appendChild(valueZipcode);

    sectionFacility.appendChild(divZipcode);

    let divCountry = document.createElement('div');
    console.log(divCountry);

    let nameCountry = document.createElement('span');
    console.log(nameCountry);
    nameCountry.innerText = 'COUNTRY: ';
    divCountry.appendChild(nameCountry);

    let valueCountry = document.createElement('span');
    console.log(valueCountry);
    console.log(facilityInformation[4]);
    valueCountry.innerText = facilityInformation[4];
    divCountry.appendChild(valueCountry);

    sectionFacility.appendChild(divCountry);

    let divApparentTemperature = document.createElement('div');
    console.log(divApparentTemperature);

    let nameApparentTemperature = document.createElement('span');
    console.log(nameApparentTemperature);
    nameApparentTemperature.innerText = 'APPARENT TEMPERATURE: ';
    divApparentTemperature.appendChild(nameApparentTemperature);

    let valueApparentTemperature = document.createElement('span');
    console.log(valueApparentTemperature);
    console.log(facilityWeather[0]);
    valueApparentTemperature.innerText = facilityWeather[0] + ' °C';
    divApparentTemperature.appendChild(valueApparentTemperature);

    sectionFacility.appendChild(divApparentTemperature);

    let divCloudCover = document.createElement('div');
    console.log(divCloudCover);

    let nameCloudCover = document.createElement('span');
    console.log(nameCloudCover);
    nameCloudCover.innerText = 'CLOUD COVER: ';
    divCloudCover.appendChild(nameCloudCover);

    let valueCloudCover = document.createElement('span');
    console.log(valueCloudCover);
    console.log(facilityWeather[1]);
    valueCloudCover.innerText = facilityWeather[1] + '%';
    divCloudCover.appendChild(valueCloudCover);

    sectionFacility.appendChild(divCloudCover);

    let divPrecipitation = document.createElement('div');
    console.log(divPrecipitation);

    let namePrecipitation = document.createElement('span');
    console.log(namePrecipitation);
    namePrecipitation.innerText = 'PRECIPITATION: ';
    divPrecipitation.appendChild(namePrecipitation);

    let valuePrecipitation = document.createElement('span');
    console.log(valuePrecipitation);
    console.log(facilityWeather[2]);
    valuePrecipitation.innerText = facilityWeather[2] + ' mm';
    divPrecipitation.appendChild(valuePrecipitation);

    sectionFacility.appendChild(divPrecipitation);

    let divRelativeHumidity = document.createElement('div');
    console.log(divRelativeHumidity);

    let nameRelativeHumidity = document.createElement('span');
    console.log(nameRelativeHumidity);
    nameRelativeHumidity.innerText = 'RELATIVE HUMIDITY: ';
    divRelativeHumidity.appendChild(nameRelativeHumidity);

    let valueRelativeHumidity = document.createElement('span');
    console.log(valueRelativeHumidity);
    console.log(facilityWeather[3]);
    valueRelativeHumidity.innerText = facilityWeather[3] + '%';
    divRelativeHumidity.appendChild(valueRelativeHumidity);

    sectionFacility.appendChild(divRelativeHumidity);

    let divTemperature = document.createElement('div');
    console.log(divTemperature);

    let nameTemperature = document.createElement('span');
    console.log(nameTemperature);
    nameTemperature.innerText = 'TEMPERATURE: ';
    divTemperature.appendChild(nameTemperature);

    let valueTemperature = document.createElement('span');
    console.log(valueTemperature);
    console.log(facilityWeather[4]);
    valueTemperature.innerText = facilityWeather[4] + ' °C';
    divTemperature.appendChild(valueTemperature);

    sectionFacility.appendChild(divTemperature);

    let divWindSpeed = document.createElement('div');
    console.log(divWindSpeed);

    let nameWindSpeed = document.createElement('span');
    console.log(nameWindSpeed);
    nameWindSpeed.innerText = 'WIND SPEED: ';
    divWindSpeed.appendChild(nameWindSpeed);

    let valueWindSpeed = document.createElement('span');
    console.log(valueWindSpeed);
    console.log(facilityWeather[5]);
    valueWindSpeed.innerText = facilityWeather[5] + ' km/h';
    divWindSpeed.appendChild(valueWindSpeed);

    sectionFacility.appendChild(divWindSpeed);

    console.log(sectionFacility);

    facilityNamesAndWeather.appendChild(sectionFacility);

};