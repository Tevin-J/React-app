import React from 'react';
import {connect} from "react-redux";
import {
    followActionCreator,
    setCurrentPageActionCreator, setTotalUsersCountActionCreator,
    setUsersActionCreator, toggleIsFetchingActionCreator,
    unfollowActionCreator
} from "../Redux/usersReducer";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
/*коннектом создаем первую контейнерную компоненту, в которой отрисовываем вторую контейнерную
компоненту, которая отрисовывает презентационную компоненту Users*/
class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        if (this.props.users.length === 0) { /*если изначально длина массива юзеров равна нулю, то делаем get-запрос на сервер,
             и затем вызываем коллбек который засетает юзеров, полученных с сервера*/
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(response => {
                    this.props.toggleIsFetching(false);
                    this.props.setUsers(response.data.items);
                    /*this.props.setTotalUsersCount(response.data.totalCount)*/
                    this.props.setTotalUsersCount(25)
                })
        }
    }
    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items)
            })
    }
    onReducePagesList = () => {
        this.props.toggleIsFetching(true);
        let currentPage = this.props.currentPage-1;
        this.props.setCurrentPage(currentPage);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(this.props.totalUsersCount-5)
            })
    }
    onIncreasePagesList = () => {
        this.props.toggleIsFetching(true);
        let currentPage = this.props.currentPage+1;
        this.props.setCurrentPage(currentPage);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(this.props.totalUsersCount+5)
            })
    }
    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage} onReducePagesList={this.onReducePagesList}
                   onPageChanged={this.onPageChanged} onIncreasePagesList={this.onIncreasePagesList}
                   users={this.props.users} unfollow={this.props.unfollow} follow={this.props.follow}/>
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
        isFetching: state.usersPage.isFetching
    })
}
let mapDispatchToProps = (dispatch) => {

    return {
         follow: (userId) => {
             dispatch(followActionCreator(userId))
         },
         unfollow: (userId) => {
             dispatch(unfollowActionCreator(userId))
         },
        setUsers: (users) => {
             dispatch(setUsersActionCreator(users))
        },
        setCurrentPage: (pageNumber) => {
             dispatch(setCurrentPageActionCreator(pageNumber))
        },
        setTotalUsersCount: (totalUsersCount) => {
             dispatch(setTotalUsersCountActionCreator(totalUsersCount))
        },
        toggleIsFetching: (isFetching) => {
             dispatch(toggleIsFetchingActionCreator(isFetching))
        }
    }
}
export default connect (mapStateToProps, mapDispatchToProps)(UsersContainer) /*первая контейнерная компонента коннектит
стор и отрисовывает вторую контейнерную компоненту*/