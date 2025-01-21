const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            character: [],
            naves: [],
            planets: [],
            favoritos: [],
        },
        actions: {
            loadingdata: async () => {
                try {
                    const responseFetch = await Promise.all([
                        fetch("https://swapi.tech/api/people/").then((response) => response.json()),
                        fetch("https://swapi.tech/api/starships/").then((response) => response.json()),
                        fetch("https://swapi.tech/api/planets/").then((response) => response.json()),
                    ]);
                    
                    setStore({
                        character: responseFetch[0]?.results || [],
                        naves: responseFetch[1]?.results || [],
                        planets: responseFetch[2]?.results || [],
                    });
                } catch (error) {
                    console.error("Loading Error", error);
                }
            },
            añadirfavoritos: (id) => {
                const store = getStore()
                const item = 
                    store.character.find((personaje) => personaje.uid === id ) || 
                    store.naves.find((nave) => nave.uid === id ) ||
                    store.planets.find((planeta) => planeta.uid === id );
                if(item){
                    setStore({favoritos: [...store.favoritos, item]});
                    console.log("favorito añadido", item)
                };                  
            },
        },
    };
};
export default getState;