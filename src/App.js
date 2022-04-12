
import {Cards,Chart,CountryPicker} from './components';
import styles from './App.module.css';

import React, { Component } from 'react';
import { fetchData } from './api';
import image from './images/image.png';

export default class App extends Component {
  state={
      data:{},
      country:'',
  }

async componentDidMount(){
    const data =await fetchData();
    this.setState({data:data})

}

handleCountryChange = async (country) =>{
  const data =await fetchData(country);
  this.setState({data:data,country:country});
  
}

  render() {
    return (
      <div className={styles.container}>
       <img className={styles.image} src={image} alt="COVID-19" />
      <Cards data={this.state.data}/>
      <CountryPicker handleCountryChange={this.handleCountryChange}/>
      <Chart data={this.state.data} country={this.state.country}/>

      App</div>
    )
  }
}
