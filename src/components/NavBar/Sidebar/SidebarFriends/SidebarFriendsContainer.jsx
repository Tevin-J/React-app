import React from 'react';
import SidebarFriends from "./SidebarFriends";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return (
        {
            friends: state.sidebar
        }
    )
}
let mapDispatchToProps = () => {
    return (
        {

        }
    )
}

const SidebarFriendsContainer = connect(mapStateToProps, mapDispatchToProps)(SidebarFriends)
export default SidebarFriendsContainer;
