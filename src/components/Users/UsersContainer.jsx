import React from 'react';
import {connect} from "react-redux";
import {
    followActionCreator,
    setCurrentPageActionCreator, setTotalUsersCountActionCreator,
    setUsersActionCreator,
    unfollowActionCreator
} from "../Redux/usersReducer";
import * as axios from "axios";
import Users from "./Users";
/*коннектом создаем первую контейнерную компоненту, в которой отрисовываем вторую контейнерную
компоненту, которая отрисовывает презентационную компоненту Users*/
class UsersContainer extends React.Component {
    componentDidMount() {
        if (this.props.users.length === 0) { /*если изначально длина массива юзеров равна нулю, то делаем get-запрос на сервер,
             и затем вызываем коллбек который засетает юзеров, полученных с сервера*/
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(response => {
                    this.props.setUsers(response.data.items);
                    /*this.props.setTotalUsersCount(response.data.totalCount)*/
                    this.props.setTotalUsersCount(25)
                })
        }
    }
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }
    onReducePagesList = () => {
        let currentPage = this.props.currentPage-1
        this.props.setCurrentPage(currentPage);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(this.props.totalUsersCount-5)
            })
    }
    onIncreasePagesList = () => {
        let currentPage = this.props.currentPage+1
        this.props.setCurrentPage(currentPage);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(this.props.totalUsersCount+5)
            })
    }
    render() {
        return (
            <Users totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage} onReducePagesList={this.onReducePagesList}
                   onPageChanged={this.onPageChanged} onIncreasePagesList={this.onIncreasePagesList}
                   users={this.props.users} unfollow={this.props.unfollow} follow={this.props.follow}/>
        )
    }

} /*вторая контейнерная компонента занимается аякс запросами и передает
нужные пропсы в презентационную*/

let mapStateToProps = (state) => {
    return ({
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
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
        }
    }
}
export default connect (mapStateToProps, mapDispatchToProps)(UsersContainer) /*первая контейнерная компонента коннектит
стор и отрисовывает вторую контейнерную компоненту*/