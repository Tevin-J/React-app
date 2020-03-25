import React from 'react';
import {connect} from "react-redux";
import {
    follow, requestUsers, setCurrentPage, setTotalUsersCount, setUsers, toggleFollowingInProgress, toggleIsFetching, unfollow
} from "../../Redux/usersReducer";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount, getUsers
} from "../../Redux/users-selectors";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
        /*вызываем thunk-creator из редьюсера, в котором объединена вся логика диспатчей и запросов на сервер, которые
        должны выполняться вместе*/
    }
    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }
    onReducePagesList = () => {
        let currentPage = this.props.currentPage-1;
        this.props.getUsers(currentPage, this.props.pageSize)
    }
    onIncreasePagesList = () => {
        let currentPage = this.props.currentPage+1;
        this.props.getUsers(currentPage, this.props.pageSize)
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
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    })
}

export default compose(
    connect (mapStateToProps, {
        setUsers, setCurrentPage, setTotalUsersCount,
        toggleIsFetching, toggleFollowingInProgress,
        getUsers: requestUsers, follow, unfollow
    })
)(UsersContainer)