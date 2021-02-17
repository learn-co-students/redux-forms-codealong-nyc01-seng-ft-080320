export default function manageTodo(state = {
  todos: [],
}, action) {
    switch (action.type) {
        case 'ADD_TODO':
            console.log("Current State: ", state);
            return { todos: [...state.todos , action.payload.text]} 

        default: 
            return state;
    }
}
