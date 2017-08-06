import React from "react";
import { Home } from "../../components";


class HomeContainer extends React.Component{

  state = {
    title: undefined,
    }

    componentDidMount() {
      this.getTitle();
    }

    getTitle = () => {
      setTimeout(() => {
      this.setState({title: "Home: Easy as uno"})
    }, 0)
    }

  render(){
  return(
    <div>
      {
        this.state.title
        ?   <Home title={ this.state.title }/>
        : <h1> No State yet </h1>
      }
    </div>
  )
}
}


export default HomeContainer;
