import React from 'react';
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage, setTotalUsersCount,
    setUsers, toggleIsFetching,
    unfollow
} from "../../Redux/usersReducer";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import {usersAPI} from "../../api/api";

/*коннектом создаем первую контейнерную компоненту, в которой отрисовываем вторую контейнерную
компоненту, которая отрисовывает презентационную компоненту Users*/
class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        if (this.props.users.length === 0) { /*если изначально длина массива юзеров равна нулю, то делаем get-запрос на сервер,
             и затем вызываем коллбек который засетает юзеров, полученных с сервера*/
            usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
                    this.props.toggleIsFetching(false);
                    this.props.setUsers(data.items);
                    /*this.props.setTotalUsersCount(response.data.totalCount)*/
                    this.props.setTotalUsersCount(25)
                })
        }
    }
    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items)
            })
    }
    onReducePagesList = () => {
        this.props.toggleIsFetching(true);
        let currentPage = this.props.currentPage-1;
        this.props.setCurrentPage(currentPage);
        usersAPI.getUsers(currentPage, this.props.pageSize).then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(this.props.totalUsersCount-5)
            })
    }
    onIncreasePagesList = () => {
        this.props.toggleIsFetching(true);
        let currentPage = this.props.currentPage+1;
        this.props.setCurrentPage(currentPage);
        usersAPI.getUsers(currentPage, this.props.pageSize).then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
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

export default connect (mapStateToProps, {
    /*Вместо того чтоб создавать mapDispatchToProps и там диспатчить
    экшнкреэйторы, записали все экшнкреэйторы объектом сразу в коннект.
    коннект сам задиспатчит их*/
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching
})(UsersContainer) /*первая контейнерная компонента коннектит
стор и отрисовывает вторую контейнерную компоненту*/