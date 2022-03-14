
export const API_Key = '25f644fdd200ffc1c183d4295b7b0e39'
const API_Base = 'https://api.themoviedb.org/3'

const basicFetch = async (endpoint) => {
        const req = await fetch(`${API_Base}${endpoint}`)
        const json = await req.json()
        return json
}



export default {
        getHomeList: async () => {
                return [
                        {
                                slug: 'originals',
                                title: 'Originais',
                                items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_Key}`)
                        },
                        {
                                slug: 'trending',
                                title: 'Recomendados',
                                items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_Key}`)
                        },
                        {
                                slug: 'toprated',
                                title: 'Em Alta',
                                items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_Key}`)
                        },
                        {
                                slug: 'action',
                                title: 'ação',
                                items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_Key}`)
                        },
                        {
                                slug: 'comedy',
                                title: 'Comedia',
                                items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_Key}`)
                        },
                        {
                                slug: 'romance',
                                title: 'Romance',
                                items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_Key}`)
                        },
                        {
                                slug: 'documentary',
                                title: 'Documentarios',
                                items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_Key}`)
                        },
                        {
                                slug: 'action',
                                title: 'action',
                                items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_Key}`)
                        }
                ]
        },
        getSpecificMovie: async (movieId)=>{
                return{
                info: await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_Key}`)}
                
              
        }
}
