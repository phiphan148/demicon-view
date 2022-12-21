import React from 'react';
import './App.css';
import ComboBox from './UI/ComboBox';
import Result from './UI/Result';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      originalData: [],
      sortedUsers: [],
      countryList: [],
      DataisLoaded: false
    };
  }

  componentDidMount() {
    fetch(
      "users/getUsers")
      .then((res) => res.json())
      .then((result) => {
        const countries = result.countries;
        this.setState({
          originalData: countries,
          sortedUsers: countries,
          countryList: countries.map(country => country.name),
          DataisLoaded: true
        });
      })
  }

  render() {
    const {DataisLoaded, originalData, countryList, sortedUsers} = this.state;
    if (!DataisLoaded) return <div>
      <h1> Please wait for some time.... </h1></div>;

    const handleSubmit = (childData) => {
      let sortedUsers = childData ? originalData.filter(data => data.name === childData) : originalData;
      this.setState({sortedUsers: sortedUsers})
    }

    return (
      <div className="App">
        <ComboBox countryList={countryList} getCountryValue={handleSubmit}/>
        <Result userList={sortedUsers}/>
      </div>
    );
  }
}

export default App;
