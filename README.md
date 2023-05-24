# react-native-test-app

Used Expo cli, install expo cli

`npm install -g expo-cli`

Then run

`expo login` and give your credentials

Go to the project directory and for debug run `npm start` and for generating apk run 

`eas build --platform android` 

also you may need to have change the eas.json

`"production": {
      "android": {
        "buildType": "apk"
      }
    }
    `
