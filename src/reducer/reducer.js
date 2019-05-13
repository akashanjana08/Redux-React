const INIT_STATE = {
    userName: "AKASH",
   
}

export default function (state = INIT_STATE, action) {
    switch (action.type) {
        case "CHANGE_STATE" :
           return (
               {
                   ...state,
                   userName : action.payLoad,
               }
           )
        default:
            return state;
    }
}