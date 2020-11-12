import {connect} from 'react-redux';
import Login from '../../components/login/login';


export const mapStateToProps = (state) => ({

});


const handleSubmit = (event) => {
  event.preventDefault();
  if (this.state.username === 'admin' && this.state.password === 'admin') {
    this.props.history.push("/home");
  } else {
    alert('Incorrect Credntials!');
  }
}

export const mapDispatchToProps = (dispatch) => ({
  onLoginSubmit: () => dispatch(handleSubmit)
});
  
const LoginScreenContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Login);

export default LoginScreenContainer;