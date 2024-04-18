function loadJson(url){
    return fetch(url)
        .then(response => {
            if(response.status == 200){
                return response.json();
            } else {
                throw new Error(response.status);
            }
        });
}

async function loadJsonAsync(url){
    try{
        console.log("Inciando la carga de datos...");
        const resultado = await loadJson(url);
        console.log("Datos cargados con éxito");
    }catch(error){
        console.log("Error al cargar los datos");
    }
}

loadJsonAsync("https://javascript.info/no-such-user.json").catch(alert); 