/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Test from './Test';
import Glints from './Glints';
import {name as appName} from './app.json';
import TodoApp from './TodoApp';
import Main from './Main';
import Route from './Route';

AppRegistry.registerComponent(appName, () => Route);
