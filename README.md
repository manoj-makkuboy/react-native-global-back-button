# react-native-global-back-button
This wrapper lets you add and remove eventlistener for back button while the considering eventlistener as a global object.

## Install
> $ npm install react-native-global-back-button

## Usage
``` 
import globalBackHandler from "react-native-global-back-button";
globalBackHandler.disableBackButton();
globalBackHandler.enableBackButton();
```
If you want to disable the backHandler in one screen and want to enable in another screen you can do import call enableBackButton() in one screen and import and call disableBackButton() in the other screen. Like below.

### Screen A
```
import globalBackHandler from "react-native-global-back-button";
globalBackHandler.disableBackButton();
```

### Screen B
```
import globalBackHandler from "react-native-global-back-button";
globalBackHandler.enableBackButton();
```
