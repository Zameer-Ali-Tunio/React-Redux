import react from 'react';
import {set,fb_login,google_login,github_login} from '../store/action';
import { connect } from 'react-redux';

// import './font-awesome.min.css';

class Home extends react.Component{
  render(){
    return(
      <div>
            <h1>Home  </h1>
            <button onClick={()=>this.props.fb_login()}>fb_login</button>
            <button onClick={()=>this.props.google_login()}>G_login</button>
            <button onClick={()=>this.props.github_login()}>GHub_login</button>
      </div>
    );
  }
}
const mapStateToProps=(state)=>({
  user:state.users
})
const mapDispatchToProp=(dispatch)=>({
  set:(data)=> dispatch(set(data)),
  fb_login:(data)=> dispatch(fb_login(data)),
  google_login:(data)=> dispatch(google_login(data)),
  github_login:(data)=> dispatch(github_login(data)),
})
export default connect(mapStateToProps,mapDispatchToProp)(Home);