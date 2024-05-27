function postUser (listUsers, data) {

const newTask = {
    name: data.name,
    email: data.email,
    password: data.password,
    id: listUsers.length+1
  };
  
  fetch('https://6651a54620f4f4c442784587.mockapi.io/user', {
    method: 'POST',
    headers: {'content-type':'application/json'},
    // Send your data in the request body as JSON
    body: JSON.stringify(newTask)
  }).then(res => {
    if (res.ok) {
        
        return res.json();
    }
    // handle error
  }).then(task => {
    // do something with the new task
  }).catch(error => {
    // handle error
  })

}

export default postUser