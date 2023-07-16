import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {LoginComponent} from './components/login/login.component';
import { NetflixIndex } from './netflix/netflix-index/netflix-index';
import { DataBindingComponent } from './components/login/data binding/data-bindingObject.component';
import { DataBinding2Component } from './components/login/data binding/data-bindingArray.component';
import { Databinding3Component } from './components/login/data binding/data-bindingArrayOfObjects.component';
import { DataBinding4Component } from './components/login/data binding/data-bindingNestedData.component';
import { DataBinding5Component } from './components/login/data binding/dta-bindingBootstrapCards.component';
import { DataBinding2wayComponent } from './components/Twoway Data Binding/TwowayDataBinding.component';
import { TwowayDataBinding1 } from './components/Twoway Data Binding/TwowayDataBinding1.component';
import { NasaComponent } from './components/DataFromAPI/Nasa.component';
import { NasaComponent1 } from './components/DataFromAPI/Nasa.Component.card';
import { ShoppingComponent } from './components/DataFromAPI/Shopping/shopping.component';
import { StyleDemoComponent } from './components/StyleBinding/styledemo.component';
import { StyleDemo1Component } from './components/StyleBinding/styledemo1.component';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StyleDemo1Component />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
