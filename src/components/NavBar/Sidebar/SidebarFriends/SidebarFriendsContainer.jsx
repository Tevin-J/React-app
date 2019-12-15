import React from 'react';
import StoreContext from "../../../../StoreContext";
import SidebarFriends from "./SidebarFriends";


const SidebarFriendsContainer = () => {

    return (
        <StoreContext.Consumer>
            {store => {
                let state = store.getState().sidebar;
                return (
                    <SidebarFriends friends={state}/>
                )
            }}
        </StoreContext.Consumer>
    )
};

export default SidebarFriendsContainer;
