# NASA Facilities and Weather

A JavaScript project that combines NASA facility information with current weather data.

## About

This project retrieves NASA facility information and uses each facility's latitude and longitude to request current weather conditions.

NASA facility data is retrieved first.

The coordinates from each facility are then used with the Open-Meteo API to retrieve current weather information.

The facility and weather details are displayed together on the page.

## Features

- Retrieve NASA facility information
- Extract facility location coordinates
- Request current weather for each facility
- Combine information from two APIs
- Display facility location information
- Display current weather conditions
- Show the current date and time

## Topics Practiced

### APIs

- Using multiple APIs
- Using `fetch()`
- Reading JSON responses
- Passing data from one API request into another

### Asynchronous JavaScript

- Working with promises
- Using `.then()`
- Making API requests inside loops
- Passing asynchronous results between functions

### Arrays

- Creating nested arrays
- Adding values with `.push()`
- Accessing values by index
- Storing facility and weather information

### Loops

- Using `for` loops
- Processing multiple facilities
- Making repeated weather requests

### DOM Manipulation

- Creating sections
- Creating headings
- Creating labels and values
- Displaying facility data
- Displaying weather data

## Technologies

- HTML5
- CSS3
- JavaScript
- NASA Facilities API
- Open-Meteo Weather API

## Running the Project

1. Clone or download the repository.
2. Open `index.html`.
3. Select the button to retrieve the facility information.
4. Review the NASA facilities and current weather conditions.
5. Open the browser developer tools and select the Console to view logged data.

## Purpose

This project was created while practicing JavaScript APIs, promises, arrays, loops, and DOM manipulation.

The focus is on combining data from two separate APIs by using information from one API request to create another API request.