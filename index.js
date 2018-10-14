import { BackHandler } from "react-native";

class GlobalBackHandler {
    constructor() {
        this.backHandler = null
    }

    disableBackButton() {
        this.backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
          return true;
        });
      }
    
    enableBackButton() { 
        this.backHandler.remove();
      }
}

export default new GlobalBackHandler()