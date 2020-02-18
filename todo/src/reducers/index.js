export const initialState = {
    list: [
        {
            item:"First",
            completed:false,
            id:1
        },
        {
            item:"Second",
            completed:false,
            id:2
        }
    ]
}
export function todoReducer(state,action){
    switch(action.type){
        case "ADD":
            return{
                ...state, list:[...state.list,{
                    item:action.payload,
                    completed:false,
                    id:Date.now()
                }]
            }
        case "TOGGLE":
            return {
              ...state,
              list: state.list.map(todo => {
                if (action.payload === todo.id) {
                  return { ...todo, completed: !todo.completed };
                } else {
                  return todo;
                }
              })
            };
        case "FILTER":
            return {
              ...state,
              list: state.list.map(todo => {
                if (action.payload === todo.id) {
                  return { ...todo, completed: !todo.completed };
                } else {
                  return todo;
                }
              })
            };
        default:
            return state;
    }

}