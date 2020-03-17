import React from 'react';
import style from './ProfileInfo.module.css';


class ProfileStatus extends React.Component {
    state = {
        isEditMode: false
    }
    activateEditMode = () => {
        this.setState({isEditMode: true})
    }
    deactivateEditMode = () => {
        this.setState({isEditMode: false})
    }
    render() {
        return (
            <div>
                {!this.state.isEditMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                    </div>
                }
                {this.state.isEditMode &&
                    <div>
                        <input value={this.props.status} onBlur={this.deactivateEditMode} autoFocus={true}/>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;