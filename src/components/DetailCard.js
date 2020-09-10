import React from 'react';
import {Container,Row,Col,Jumbotron,Badge} from 'reactstrap';
import {Type} from './core'
import {Link} from 'react-router-dom';
const DetailCard =(props)=>{
        return(
            <Container fluid>
            <Row className="mt-3">
                <Col xs={12} >
                    <Jumbotron className=" bg-dark text-light">
                        <h1>{props.data.Title} <Badge className="small" color={"warning"}>
                            {props.data.imdbRating}
                        </Badge> </h1>
                        <h5>{props.data.Released} - {props.data.Country}</h5>
                    </Jumbotron>
                </Col>
            </Row>
                <Link className="btn btn-warning" to={"/movies-app-for-react/"} >&#8592;  Anasayfa </Link>
                <Row className="mt-4">
                    <Col xs={12} md={3}>
                        <img className="img-thumbnail" src={props.data.Poster}
                             alt ="image"
                        />
                    </Col>
                    <Col xs={12} md={6}>
                        <h3>{props.data.Title} <Type type={props.data.Type}/></h3>
                        <p className="mt-5">
                            <b>Süre :</b> {props.data.Runtime}
                        </p>
                        <p >
                            <b>Yazar :</b> {props.data.Writer}
                        </p>
                        <p>
                            <b>Aktörler :</b> {props.data.Actors}
                        </p>
                        <p>
                            <b>Dil :</b> {props.data.Language}
                        </p>
                        <p>
                            <b>Yıl :</b> {props.data.Year}
                        </p>
                        <p>
                            <b>Tür :</b> {props.data.Genre}
                        </p>
                        <p>
                            <b>Tanıtım :</b>  {props.data.Plot}
                        </p>

                    </Col>

                </Row>

            </Container>
    );
}
export default DetailCard;