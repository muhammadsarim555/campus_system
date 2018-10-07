import React, { Component } from 'react';


class SignUp extends Component {
    constructor(){
        super();
        this.state = {

        }
    }

    
  SignUp(){
    const {loginValue} = this.state;
    return <div>  
    <input value={loginValue} 
    onChange={(e) => {this.setState({
      loginValue: e.target.value
    })}
  } />
  <button > Submit </button>
  </div>
  }


    render() {
        return (
            <div className="App">

            </div>
        );
    }
}

export default SignUp;
