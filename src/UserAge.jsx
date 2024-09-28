import { contextConsumer } from "./UserContextComponent";




function UserAge() {
    const {userDetails, updateAge, todos, setTodos} = contextConsumer();

    const incrAge = ()=>{
        let age = todos.storeAge
        age = age + 1
        setTodos("storeAge", age)
    }
    return (
        <>
        <h3>Store Age - {todos.storeAge}</h3> 
        <h3>Signal Age - {userDetails().age}</h3> 

        <button onClick={incrAge}>Increase Store Age</button>
        
        </>
    );
}

export default UserAge;