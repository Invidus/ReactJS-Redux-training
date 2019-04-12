const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE'; // Используем конст. дабы не ошибаться в нейминге

let initialState = {
    messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'Whaaat?' }, { id: 3, message: 'where are you?' },
        { id: 4, message: 'Google' }, { id: 5, message: 'Playing with dog' }
    ],
    dialogs: [
        { id: 1, name: 'Alex' },
        { id: 2, name: 'Sasha' }, { id: 3, name: 'Vasya' },
        { id: 4, name: 'Nomad' }, { id: 5, name: 'Andrey' }
    ],
    newMessageBody: ""
}
const dialogReducer = (state = initialState, action) => {
    // let stateCopy = {
    //     ...state,
    //    // messages: [...state.messages]
    // };


    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
            return {
                ...state,
                newMessageBody: action.body
            }
        }
        case SEND_MESSAGE: {
            let body = state.newMessageBody;

            return {
                ...state,
                newMessageBody: "",
                messages: [...state.messages, { id: 6, message: body }]
            };
        }
        default: return state
    }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default dialogReducer