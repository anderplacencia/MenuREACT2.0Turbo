//Acá estamos solicitando los datos de la API para luego llamarlos en el APP.jsx.


const getDataApi = () => {
    return fetch('https://664a41f8a300e8795d417522.mockapi.io/goodFoods/APIFOOD')
    .then(response => response.json())
    .then((data) => {
        const CleanData = data.map((item) => {
            return{
                name: item.name,
                classification: item.classification,
                description: item.description,
                image: item.image,
                id: item.id,
                date: item.date,
            };
        });
        return CleanData;
    });
};

export default getDataApi;