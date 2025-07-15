import React from "react"
import Card from "./Card"

const Grid = () => {
    return (
        <div className="container">
            <div className="card">
                <Card name="Kiki's Deliversy Service" type="Hayao Miyazaki" url="https://www.imdb.com/title/tt0097814/" image="src\images\kiki's.jpg" />
            </div>
            <div className="card">
                <Card name="The Secret World of Arriety" type="Hiromasa Yonebayashi" url="https://www.imdb.com/title/tt1568921/" image="src\images\arietty.jpg" />
            </div>
            <div className="card">
                <Card name="My Neighbour Totoro" type="Hayao Miyazaki" url="https://www.imdb.com/title/tt0096283/" image="src\images\totoro.jpg" />
            </div>
            <div className="card">
                <Card name="Grave of the Fireflies" type="Isao Takahata" url="https://www.imdb.com/title/tt0095327/" image="src\images\fireflies.jpg" />
            </div>
            <div className="card">
                <Card name="Ponyo" type="Hayao Miyazaki" url="https://www.imdb.com/title/tt0876563/" image="src\images\ponyo.jpg" />
            </div>
            <div className="card">
                <Card name="Howl's Moving Castle" type="Hayao Miyazaki" url="https://www.imdb.com/title/tt0347149/" image="src\images\castle.webp" />
            </div>
            <div className="card">
                <Card name="Spirited Away" type="Hayao Miyazaki" url="https://www.imdb.com/title/tt0245429/" image="src\images\spirited.jpg" />
            </div>
            <div className="card">
                <Card name="The Boy and the Heron" type="Hayao Miyazaki" url="https://www.imdb.com/title/tt6587046/" image="src\images\heron.webp" />
            </div>
        </div>
    )
}

export default Grid