import React, { Component } from 'react';


class LoginScreenContainer extends Component {

    constructor(props){
        super(props);
        this.state={
          username:'',
          password:'',
          loginmessage:'',
          buttonLabel:'Register',
          isLogin:true
        }
      }
      componentWillMount(){
          this.setState({
                  loginmessage:"Not registered yet, Register Now"
                })
      }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default LoginScreenContainer;