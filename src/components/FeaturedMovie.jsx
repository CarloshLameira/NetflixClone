import React from 'react'
import './FeaturedMovie.css'

export default ({ item }) => {
 
        let firstDate = new Date(item.first_air_date);

        
        let genre = [];
        for (let i in item.genres){
                genre.push(item.genres[i].name)
        }

        let seasons = item.number_of_seasons;
        if(seasons>1){
                seasons = ' Temporadas'
        }else{
                seasons = ' Temporada'
        }

        let description = item.overview
        if(description.length>200){
                description = description.substring(0, 200)
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
                                                {firstDate && <div className="year">{firstDate.getFullYear()}</div>}
                                                <div className="numberOfSeasons">{item.number_of_seasons}{seasons}</div>
                                        </div>
                                        <div className="featured--overview">{description}</div>
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