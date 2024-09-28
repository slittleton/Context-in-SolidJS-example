import logo from './logo.svg';
import styles from './App.module.css';
import UserDetails from './UserDetails';
import UpdateAge from './UpdateAge';
import { UserContextComponent } from './UserContextComponent';



function App() {

  return (
    <UserContextComponent>
      <div class={styles.App}>
        <h2>USING CONTEXT in SOLIDJS</h2>
        <UserDetails></UserDetails>
        <UpdateAge></UpdateAge>
      </div>
    </UserContextComponent>
  );
}

export default App;
