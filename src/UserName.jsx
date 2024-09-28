import { contextConsumer } from "./UserContextComponent";



function UserName() {

    const {todos} = contextConsumer();
    return (
        <div>Store - {JSON.stringify(todos)}</div>

    );
}
export default UserName;