import {useEffect, useState} from 'react';

// import components
import Loading from './Loading';
import Users from './Users';
import Warning from './Warning';

function App() {

  const [users, setUsers] = useState([]);

  const [loading, setLoading] = useState(false);

  const [selected, setSelected] = useState(null);

  const [error, setError] = useState(null);

  const [retries, setRetries] = useState(0);

  const url = `https://reqres.in/api/users?delay=2&${retries}`;

  useEffect(()=>{

    setLoading(true);

    fetch(url)
    .then(response => {

      if(response.ok){
        return response.json();
      }
      else
      {
        throw new Error('<<<<<<fetch da malumot aniqlanmadi>>>>>');
      }

    })
    .then(result => {
      setLoading(false);
      return setUsers(result.data);
    })
    .catch(error => {
      setError(error);
      return  console.error(error);
    })
    .finally(
      ()=>{
        setLoading(false);
      }
    )
    
  }, [retries]);

  if(error){
    return <Warning tryAgain={()=> setRetries(retries + 1)} />
  }

  if(loading){
    return <Loading />;
  }

  return (
    <div style={{margin:"40px"}}>
      <h1>users</h1>
      <h1>
          <Users users={users} onSelected={(user) => setSelected(user)} />
      </h1>
      <div>
        {
          selected ? `${selected.first_name}` : ""
        }
      </div>
       
    </div>
  );
}

export default App;
