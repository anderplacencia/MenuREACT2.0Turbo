//Listado de usuarios

const getUsersApi = () => {
   
    return fetch('https://6651a54620f4f4c442784587.mockapi.io/user')
    .then(response => response.json())
    .then((data) => {
        return data;
    });
};

export default getUsersApi;