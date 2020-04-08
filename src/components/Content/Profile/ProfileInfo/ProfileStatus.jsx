import React from 'react';

class ProfileStatus extends React.Component {
    state = {
        isEditMode: false,
        status: this.props.status
    }
    activateEditMode = () => {
        this.setState({isEditMode: true})
    }
    deactivateEditMode = () => {
        this.setState({isEditMode: false})
        this.props.updateStatus(this.state.status);
    }
    onStatusChange = (e) => {
        this.setState({status: e.currentTarget.value})
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.props.status !== prevProps.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {!this.state.isEditMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || '-----'}</span>
                    </div>
                }
                {this.state.isEditMode &&
                    <div>
                        <input value={this.state.status} onChange={this.onStatusChange} onBlur={this.deactivateEditMode} autoFocus={true}/>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;