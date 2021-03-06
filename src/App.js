import './App.css'
import React, { useEffect, useState } from 'react'
import Tmdb from './Tmdb'
import MovieRow from './components/MovieRow'
import FeaturedMovie from './components/FeaturedMovie'
import NavBar from './components/NavBar'


export default () => {
        const [movieList, setMovieList] = useState([])
        const [featuredMovie, setFeaturedMovie] = useState([])
        const [blackBar, setBlackBar] = useState(false)
        const [isLoading, setisLoading] = useState(true)
        useEffect(() => {
                const loadAll = async () => {
                        let list = await Tmdb.getHomeList()
                        setMovieList(list)



                        //Chosen the featured movie
                        const originals = list.filter(i => i.slug === 'originals')
                        const index = Math.floor(Math.random() * (originals[0].items.results.length - 1))
                        const chosenOne = originals[0].items.results[index]
                        let featuredData = await Tmdb.getSpecificMovie(chosenOne.id, 'tv')


                        setFeaturedMovie(featuredData.info)
                        setisLoading(false)


                }
                loadAll();



        }, [])

        useEffect(() => {
                const scrollListener = () => {
                        if (window.scrollY > 10) {
                                setBlackBar(true)
                        } else {
                                setBlackBar(false)
                        }
                }
                window.addEventListener('scroll', scrollListener);
                return () => {
                        window.removeEventListener('scroll', scrollListener);
                }
        }, []


        )



        return (
                <div className="page">
                        <NavBar black={blackBar} />
                        {isLoading ?
                                <div className="loading">
                                        <img src="https://pa1.narvii.com/7724/02d6be6c9b9ca850006adc3fa77d9e4088c9c959r1-2000-1000_hq.gif" />
                                </div>

                                :

                                <>
                                        {featuredMovie &&
                                                <FeaturedMovie item={featuredMovie} />
                                        }
                                        <section className="lists">

                                                {movieList.map((item, key) => (
                                                        <MovieRow key={key} title={item.title} items={item.items} />
                                                ))}
                                        </section>
                                </>


                        }
                </div>

        )
}
