import * as Types from '../constants/ActionTypes'

let initialstate = {
    option: '',
    isAlertOpen: false,
    isOpen: false
}

const statusAlert = (state = initialstate, actions) => {
    switch (actions.type) {
        case Types.OPEN_ALERT_LOGIN:
            state.option = 'login'
            state.isAlertOpen = true
            console.log(state)
            return { ...state }
        case Types.OPEN_ALERT_SAVE:
            state.option = 'edit'
            state.isOpen = true
            console.log(state)
            return { ...state }
        default:
            return { ...state }
    }
}

export default statusAlert