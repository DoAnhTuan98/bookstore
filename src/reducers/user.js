import * as Types from '../constants/ActionTypes'

let initialstate = {
    id: '1r3sfs',
    name: 'Anh Tuan',
    email: 'doanhtuan@gmail.com',
    password: 'tuan123',
    address: 'so 2 minh khai',
    phone: '0963585663',
    cart: []
}

function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}



const user = (state = { ...initialstate }, actions) => {
    let { account } = actions
    // console.log(state)
    switch (actions.type) {
        case Types.LOGIN:
            if (state.email === account.email && state.password === account.password) {
                console.log(state)
                let token = makeid(10)
                state.token = token
                delete state.password
                localStorage.setItem('token', state.token)
                console.log(state)
                return { ...state }
            }
            return { message: 'wrong email or password' }
        default:
            return state
    }
}

export default user