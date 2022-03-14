import React from 'react'
import './FeaturedMovie.css'

export default ({ item }) => {

        let firstDate = new Date(item.first_air_date);
        let genre = [];
        for (let i in item.genres){
                genre.push(item.genres[i].name)
        }


        return (
                <section className="featured" style={{
                        height: '100vh',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
                }}>

                        <div className="darkning-vertical">
                                <div className="darkning-horizontal">

                                        <div className="featured--name">{item.name}</div>
                                        <div className="featured--info">
                                                <div className="points">{item.vote_average}</div>
                                                <div className="year">{firstDate.getFullYear()}</div>
                                                <div className="numberOfSeasons">{item.number_of_seasons} Temporadas</div>
                                        </div>
                                        <div className="featured--overview">{item.overview}</div>
                                        <div className="buttons">
                                                <a href={`/watch/${item.id}` }className="watchIt">Assistir</a>
                                                <a href={`/list/add/${item.id}` }className="mylist">+ Minha Lista</a>
                                        </div>

                                        <div className="genres">
                                                <strong>Gêneros: </strong>
                                                {genre.join(', ')}
                                        </div>
                                </div>
                        </div>

                </section>
        )
}