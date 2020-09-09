import React from "react";
import {Input,Button,Container,Col,Row} from 'reactstrap';

class SearchBar extends React.Component{
    render(){
        return(
            <Container>
                <Row className=" d-flex justify-content-center">
                    <Col xs={2} >
                        <select className="form-control rounded-0">
                            <option>Hepsi</option>
                            <option>Film</option>
                            <option>Dizi</option>

                        </select>
                    </Col>
                    <Col xs={2} >
                        <Input className="rounded-0" type="number" placeholder={"Yıl"} />
                    </Col>
                    <Col xs={6} >
                        <Input className="rounded-0" placeholder={"Flim ,Dizi Adı"} />
                    </Col>
                    <Col xs={2}>
                        <Button className="rounded-0" color={"success"}>Bul</Button>
                    </Col>

                </Row>
            </Container>
        );
    }
}

export default SearchBar;