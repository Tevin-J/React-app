import React, {useState, useEffect} from 'react';
import style from './ProfileInfo.module.css';


const ProfileStatusWithHooks = (props) => {
    /*let stateWithSetState = useState(false)
    let editMode = stateWithSetState[0]
    let setEditMode = stateWithSetState[1]
    аналогично записи ниже*/
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)
    useEffect( () => {
        setStatus(props.status)
    }, [props.status])
    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    const onStatusChanged = (e) => {
        setStatus(e.currentTarget.value)
    }
    return (
        <div>
            {!editMode &&
            <div>
                <span onDoubleClick={activateEditMode}>{props.status || '- - - - -'}</span>
            </div>
            }
            {editMode &&
            <div>
                <input onBlur={deactivateEditMode} autoFocus={true} value={status} onChange={onStatusChanged}/>
            </div>
            }
        </div>
    )
}
export default ProfileStatusWithHooks;