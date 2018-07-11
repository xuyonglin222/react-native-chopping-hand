import { AppRegistry } from 'react-native';
import App from './src/Root';
import axios from 'axios'

axios.defaults.baseURL = 'http://192.168.1.6:3000';
axios.defaults.headers.post['Content-Type'] = 'application/json';
AppRegistry.registerComponent('pro', () => App);
