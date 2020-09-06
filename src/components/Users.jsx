import React,{useEffect} from "react";
import { usersList } from "../services/action/usersAction";
import { connect } from "react-redux";

const Users = ({usersList,loading,users,error}) => {
    useEffect(()=>{
        usersList()
    },[])
  return ( <>{
        loading ? <h3>loading...</h3>:error ? <h3>{error}</h3>: <div>
            {
                users.map(user=>{
                return <h4>{user.title}</h4>
                })
            }
        </div>}
  </>)
};

const mapStateToProps = (state) => ({
  loading: state.userReducer.loading,
  users: state.userReducer.users,
  error: state.userReducer.error
});

export default connect(mapStateToProps, { usersList })(Users);
