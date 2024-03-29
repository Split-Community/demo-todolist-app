# To Do List Split Demo

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## Description

This is a to-do list app that includes the ability to create tasks and delete them. 

## Features

- Create Tasks
- Delete Tasks
- Send events and impressions to Split
- Use a feature flag to enable refreshing to create lots of impressions and events data
- Use a feature flag to show off how a slow page render impacts the Google webvital metrics

## Installation

1. Clone the repository.
2. Run `npm install` to install the dependencies.
3. Set the `authorizationKey` in app.js to a client side SDK key
4. create the feature flags called `refresh` and `test_flag` for this demo

## Usage

1. Run `npx parcel index.html` to start the app.
2. Open your browser and navigate to `http://localhost:1234`.



## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For any questions or feedback, please contact Split Software.
