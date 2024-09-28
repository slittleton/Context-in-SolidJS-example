import { createContext, useContext, createSignal } from 'solid-js'
import { createStore } from "solid-js/store";

const UserContext = createContext()

export function UserContextComponent(props) {

    // STATE
    const [userDetails, setUserDetails] = createSignal({ age: 10, name: 'sai' })
    const [todos, setTodos] = createStore({
        storeAge: 1,
        storeName: "MyStore"
    });

    // FUNCTIONS THAT UPDATE STATE
    const updateStore = (propName, propValue)=>{
        setTodos(propName, propValue)
    }

    const updateAge = (updateByValue) => {
        setUserDetails(() => {
            return {
                ...userDetails(),
                age: userDetails().age + updateByValue,
            }
        })
    }

    // Values and functions that you want to be available for consumming
    const contextData = {
        userDetails,
        updateAge,
        todos,
        setTodos
    }

    // This Component wraps its props.children allowing it to be used as a wrapper 
    // where ever you want the state available for consumption, 
    // in this example project it wraps around App.jsx so it is avaible everywhere
    return (
        <UserContext.Provider value={contextData}>
            <h2>Store Name: {todos.storeName}</h2>
            {props.children}
        </UserContext.Provider>
    );
}

// This function must be called in any component where you want to consume the provided state
// that comes from the above component
export function contextConsumer() {
    return useContext(UserContext);
};

