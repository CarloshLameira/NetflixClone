import React from 'react'
import './FeaturedMovie.css'

export default ({ item }) => {

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
                                                <div className="points">{item.vote_average} pontos</div>
                                                <div className="year">2099</div>
                                                <div className="numberOfSeasons">{item.number_of_seasons}</div>
                                        </div>
                                        <div className="featured--overview">{item.overview}</div>
                                        <div className="watch-it">Botao assista</div>
                                        <div className="add-on-list">Botao adicionar na lista</div>
                                        <div className="genders">{}</div>

                                </div>
                        </div>

                </section>
        )
}