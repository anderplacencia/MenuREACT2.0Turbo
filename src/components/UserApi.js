


const getUsersApi = () => {
   
    return fetch('https://6651a54620f4f4c442784587.mockapi.io/user')
    .then(response => response.json())
    .then((data) => {
   
        const CleanData = data.map((item) => {
   
            return{
                name: item.name,
                email: item.email,
                password: item.password,
                id: item.id
            };
        });
        return CleanData;
    });
};

export default getUsersApi;