import React from "react"
import Card from "./Card"

const Grid = () => {
    return (
        <div className="container">
            {/* <div className="row">
                <Card name="Kiki's Deliversy Service" type="Hayao Miyazaki" url="https://www.imdb.com/title/tt0097814/" image="src\images\kiki's.jpg" />
                <Card name="The Secret World of Arriety" type="Hiromasa Yonebayashi" />
                <Card name="My Neighbour Totoro" type="Hayao Miyazaki" />
                <Card name="Grave of the Fireflies" type="Isao Takahata" />
            </div> */}
            <div className="Card">
                <Card name="Kiki's Deliversy Service" type="Hayao Miyazaki" url="https://www.imdb.com/title/tt0097814/" image="src\images\kiki's.jpg" />
            </div>
            <div className="Card">
                <Card name="The Secret World of Arriety" type="Hiromasa Yonebayashi" />
            </div>
            <div className="Card">
                <Card name="My Neighbour Totoro" type="Hayao Miyazaki" />
            </div>
            <div className="Card">
                <Card name="Grave of the Fireflies" type="Isao Takahata" />
            </div>
            <div className="Card">
                <Card name="Ponyo" type="Hayao Miyazaki" />
            </div>
            <div className="Card">
                <Card name="Howl's Moving Castle" type="Hayao Miyazaki" />
            </div>
            <div className="Card">
                <Card name="Spirited Away" type="Hayao Miyazaki" />
            </div>
            <div className="Card">
                <Card name="The Boy and the Heron" type="Hayao Miyazaki" />
            </div>


            {/* <table>
                <thead>
                    <tr>
                        <th>col1</th>
                        <th>col2</th>
                        <th>col3</th>
                        <th>col4</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="row">
                        <Card name="Kiki's Deliversy Service" type="Hayao Miyazaki" url="https://www.imdb.com/title/tt0097814/" image="src\images\kiki's.jpg" />
                        <Card name="The Secret World of Arriety" type="Hiromasa Yonebayashi" />
                        <Card name="My Neighbour Totoro" type="Hayao Miyazaki" />
                        <Card name="Grave of the Fireflies" type="Isao Takahata" />
                    </tr>
                    <tr className="row">
                        <Card name="Ponyo" type="Hayao Miyazaki" />
                        <Card name="Howl's Moving Castle" type="Hayao Miyazaki" />
                        <Card name="Spirited Away" type="Hayao Miyazaki" />
                        <Card name="The Boy and the Heron" type="Hayao Miyazaki" />
                    </tr>
                    <tr className="row">
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table> */}
        </div>
    )
}

export default Grid