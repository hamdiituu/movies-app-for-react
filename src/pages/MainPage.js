import React from 'react';
import {SearchBar,MovieTable} from '../components';
import {Container,Row,Col} from 'reactstrap';
class MainPage extends React.Component{

    render(){
        return(
                <Container fluid className="mt-5">
                    <Row className="mt-3 d-flex justify-content-center" >
                        <Col  xs={12} md={8}>
                           <SearchBar/>
                        </Col>
                    </Row>
                    <hr/>
                    <Row>
                        <Col xs={12}>
                            <MovieTable/>
                        </Col>
                    </Row>
                </Container>
        )
    }
}
export default MainPage;