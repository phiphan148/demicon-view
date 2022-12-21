import React from 'react';
import './App.css';
import ComboBox from './UI/ComboBox';
import Result from './UI/Result';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      originalData: [],
      sortedUsers: [],
      countryList: [],
      countryName: '',
      userNumber: 0,
      DataisLoaded: false
    };
  }

  componentDidMount() {
    fetch("users/getUsers")
      .then((res) => res.json())
      .then((result) => {
        const countries = result.countries;
        this.setState({
          originalData: countries,
          sortedUsers: countries,
          countryList: countries.map(country => country.name),
          userNumber: countries.map(country => country.users).flatMap(user => user).length,
          DataisLoaded: true
        });
      })
  }

  render() {
    const {DataisLoaded, originalData, countryList, sortedUsers, userNumber} = this.state;
    const importUsers = (event) => {
      fetch("users/import-users")
        .then((result) => {
          window.location.reload();
        });
      this.setState({sortedUsers: sortedUsers})
      event.preventDefault();
    }

    if (!DataisLoaded) return <div>
      <h1> Please wait for moment </h1></div>;

    const handleSubmit = (childData) => {
      let sortedUsers = childData ? originalData.filter(data => data.name === childData) : originalData;
      this.setState({sortedUsers: sortedUsers})
      this.setState({userNumber: sortedUsers.map(country => country.users).flatMap(user => user).length})
    }

    return (
      <div className="App">
        <div className="ImportUsers">
          <span>Click here to import more users</span>
          <Button className="button" onClick={importUsers}>Import Users</Button>
        </div>
        <ComboBox countryList={countryList} userNumber={userNumber} getCountryValue={handleSubmit}/>
        <Result userList={sortedUsers}/>
      </div>
    );
  }
}

export default App;
