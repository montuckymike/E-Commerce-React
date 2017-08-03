import React from "react";
import { About } from "../../components";

class AboutContainer extends React.Component{

    state={
      title: undefined
    }

    componentDidMount(){
      this.setTitle();
    }

    setTitle = () => {
      setTimeout(() => {
        this.setState({ title: "About"})
      }, 2000)
    }
  render(){
  return(
    <div>
      {
        this.state.title
        ? <About title={ this.state.title }/>
        : <h1>No state yet</h1>
      }


    </div>
  )
}
}


export default AboutContainer
