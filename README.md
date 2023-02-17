## Packages Used to Implement Component in React 16.8.0

1. create-react-app
    - delete:
      - /node_modules
      - /package-lock.json
    - adjust files:
      - index.js
      - app.js
2. npm i styled-components@4.3.1
3. npm install @material-ui/core
4. npm install @material-ui/lab
5. npm install @material-ui/system
6. npm i react-spring@8.0.27

## Searchable Comment Terms

- DEVNOTE:
- DEVGUIDE:
- TODO:

## Console Warning: findDOMNode ...

After light researching, I think this only matters in StrictMode and will not be problematic in production.  [GitHub issues suggest disabling StrictMode or using 'unstable_createMuiStrictModeTheme'](https://github.com/mui/material-ui/issues/13394#issuecomment-885308801)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.