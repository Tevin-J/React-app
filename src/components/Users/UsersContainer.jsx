import React from 'react';
import {connect} from "react-redux";
import {
    follow,
    getUsers,
    setCurrentPage, setTotalUsersCount,
    setUsers, toggleFollowingInProgress, toggleIsFetching, unfollow
} from "../../Redux/usersReducer";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import {compose} from "redux";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(/*this.props.users,*/ this.props.currentPage, this.props.pageSize)
        /*вызываем thunk-creator из редьюсера, в котором объединена вся логика диспатчей и запросов на сервер, которые
        должны выполняться вместе*/
    }
    onPageChanged = (pageNumber) => {
        this.props.getUsers(/*this.props.users,*/ pageNumber, this.props.pageSize)
    }
    onReducePagesList = () => {

        let currentPage = this.props.currentPage-1;
        this.props.getUsers(/*this.props.users,*/ currentPage, this.props.pageSize)
    }
    onIncreasePagesList = () => {

        let currentPage = this.props.currentPage+1;
        this.props.getUsers(/*this.props.users,*/ currentPage, this.props.pageSize)
    }
    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage} onReducePagesList={this.onReducePagesList}
                   onPageChanged={this.onPageChanged} onIncreasePagesList={this.onIncreasePagesList}
                   users={this.props.users} unfollow={this.props.unfollow} follow={this.props.follow}
                   toggleFollowingInProgress={this.props.toggleFollowingInProgress}
                       followingInProgress={this.props.followingInProgress}/>
            </>
        )
    }

}

let mapStateToProps = (state) => {
    return ({
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    })
}

export default compose(
    connect (mapStateToProps, {
        setUsers, setCurrentPage, setTotalUsersCount,
        toggleIsFetching, toggleFollowingInProgress,
        getUsers, follow, unfollow
    })
)(UsersContainer)