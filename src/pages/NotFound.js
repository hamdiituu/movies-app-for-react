import React from 'react';
import {Container,Jumbotron} from 'reactstrap';
import {Link} from "react-router-dom";
class MainPage extends React.Component{

    render(){
        return(
            <Container fluid className="mt-5 d-flex justify-content-center" >
               <Jumbotron>
                   Malesef Böyle Bir Sayfa Mevcut Değil
                   <br/>
                   Anasayfa dönmek için <b><Link to="/">tıklayınız.</Link></b>
               </Jumbotron>
            </Container>
        )
    }
}
export default MainPage;