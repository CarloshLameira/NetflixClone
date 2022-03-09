import './App.css'
import React, { useEffect, useState } from 'react'
import Tmdb from './Tmdb'
import MovieRow from './components/MovieRow'
import FeaturedMovie from './components/FeaturedMovie'


export default () => {
        const [movieList, setMovieList] = useState([])
        const [featuredMovie, setFeaturedMovie] = useState([])
        useEffect(() => {
                const loadAll = async () => {
                        let list = await Tmdb.getHomeList()
                        setMovieList(list)


                        //Chosen the featured movie
                        const originals = list.filter(i=>i.slug==='originals')
                        const chosenOne = originals[0].items.results[Math.floor(Math.random() *(originals[0].items.results.length -1))]
                        let featuredData = await Tmdb.getSpecificMovie(chosenOne.id)
                        console.log(featuredData.info)
                        setFeaturedMovie(featuredData.info)                      

                        
                }
                loadAll();

                

        }, [])

        return (
                <div className="page">
                        {featuredMovie &&
                                <FeaturedMovie item={featuredMovie}/>
                        }
                        <section className="lists">

                                {movieList.map((item, key) => (
                                        <MovieRow key={key} title={item.title} items={item.items} />
                                ))}
                        </section>
                </div>

        )
}