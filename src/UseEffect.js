// - component needs to be uppdercase
// - must be in the function/component body
// - cannot call conditionally eg. if statement,loop
import { useState, useEffect } from "react";
import "./index.css";

const url = "https://api.github.com/users";

function UseEffect() {
  const [users, setUsers] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const [isError,setIsError] = useState(false);

  async function getUsers() {
    const response = await fetch(url);
    const users = await response.json();

    if(response.status > 300){
        setIsError(true);
        setIsLoading(false);
    }
   
    setUsers(users);
    setIsLoading(false);
    console.log(users);
  }

  useEffect(() => {
    getUsers();
  }, []);

  console.log("Component is rendered");

  if(isloading){
    return <h1>Loading....</h1>
  }

  if(isError){
    return <h1>Opps Error....</h1>
  }

  return (
    <div className="container">
      <h1>Github Users</h1>
      <ul className="users">
        {users.map((user) => {
          return (
            <li key={user.id}>
              <img src={user.avatar_url} alt={user.login} />
              <div>
                <h4>{user.login}</h4>
                <a href={user.html_url}>Profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default UseEffect;
