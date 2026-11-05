import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    //state variable in class component
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
  }

  // API Calls
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/aman53");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }
  render() {
    const { name, location } = this.state.userInfo;
    return (
      <div className="user-card">
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: 7988020681</h4>
      </div>
    );
  }
}

export default UserClass;
