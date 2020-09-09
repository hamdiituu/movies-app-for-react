import React from 'react';
import {SearchBar,MovieTable} from '../components';
import {Container,Row,Col} from 'reactstrap';
import {get} from '../utils/networking'
class MainPage extends React.Component{
    componentDidMount() {
        var params ={
            s : "Pokemon"
        }
        get(params)
            .then(({data,status})=>{
                if (status !==200){
                    console.log("Hata");
                }else{
                    console.log(data)
                }

            });
    }

    render(){
        return(
                <Container fluid className={"mt-3"}>
                    <Row className=" mt-5 d-flex justify-content-center">
                        <Col xs={8}>
                            <SearchBar/>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} className="mt-5">
                            <MovieTable/>
                        </Col>
                    </Row>

                </Container>
        )
    }
}
export default MainPage;