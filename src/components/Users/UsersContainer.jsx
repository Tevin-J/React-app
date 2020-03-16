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

/*коннектом создаем первую контейнерную компоненту, в которой отрисовываем вторую контейнерную
компоненту, которая отрисовывает презентационную компоненту Users*/
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

} /*вторая контейнерная компонента занимается аякс запросами и передает
нужные пропсы в презентационную*/

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

export default connect (mapStateToProps, {
    /*Вместо того чтоб создавать mapDispatchToProps и там диспатчить
    экшнкреэйторы и санк-креэйторы, записали все экшнкреэйторы объектом сразу в коннект.
    коннект сам задиспатчит их*/
    setUsers, setCurrentPage, setTotalUsersCount,
    toggleIsFetching, toggleFollowingInProgress,
    getUsers, follow, unfollow
})(UsersContainer) /*первая контейнерная компонента коннектит
стор и отрисовывает вторую контейнерную компоненту*/