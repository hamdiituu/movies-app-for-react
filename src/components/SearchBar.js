import React from "react";
import {Input,Button,Container,Col,Row} from 'reactstrap';

class SearchBar extends React.Component{
    render(){
        return(
            <Container>
                <Row>
                    <Col xs={11} >
                        <Input placeholder={"Flim ,Dizi Adı"} />
                    </Col>
                    <Col xs={1}>
                        <Button color={"success"}>Bul</Button>
                    </Col>

                </Row>
            </Container>
        );
    }
}

export default SearchBar;