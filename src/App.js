import "./style.css";
import React from "react";
import UserCard from "./UserCard"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://randomuser.me/api/?results=8")
        .then(res => res.json())
        .then(
            (result) => {
              this.setState({
                isLoaded: true,
                items: result.results
              });
            }
        )
        .catch(
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
        )
  }

  render() {
    const items = this.state.items;
    const { error, isLoaded } = this.state;
    if (error) return (<div>Error: {error.message}</div>);
    if (!isLoaded) return <div>Loading...</div>;
    return (
        <div className={"list"}>
          {
            items.map((item, index) => (
                <UserCard key={index}
                          userName={`${item.name.first ? item.name.first : ""} ${item.name.last}`}
                          imgUrl={item.picture.medium}
                />
            ))}
        </div>
    )
  }
}

export default App;
