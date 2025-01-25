const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            character: [],
            naves: [],
            planets: [],
            favoritos: JSON.parse(localStorage.getItem("favoritos")) || [],
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
            añadirFavoritos: (item) => {
                const store = getStore();
                const isAlreadyFavorite = store.favoritos.some(
                    (fav) => fav.uid === item.uid && fav.type === item.type
                );
                if (!isAlreadyFavorite) {
                    const updatedFavorites = [...store.favoritos, item];
                    setStore({ favoritos: updatedFavorites });
                    localStorage.setItem("favoritos", JSON.stringify(updatedFavorites));
                }
            },
            borrarFavorito: (uid, type) => {
                const store = getStore();
                const actualizarListaFavoritos = store.favoritos.filter((fav) =>
                    fav.uid !== uid || fav.type !== type
                );
                setStore({ favoritos: actualizarListaFavoritos });
                localStorage.setItem("favoritos", JSON.stringify(actualizarListaFavoritos))
            },
        },
    };
};
export default getState;






