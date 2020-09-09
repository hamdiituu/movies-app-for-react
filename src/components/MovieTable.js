import React from 'react';
import {Container,Table,Badge} from 'reactstrap';
import {Link} from 'react-router-dom';
const MovieTable =()=>{
    return(
        <Container fluid>
            <Table hover >
                <thead className="bg-warning ">
                <tr>
                    <th>#</th>
                    <th>Film/Dizi Adı</th>
                    <th>Yıl</th>
                    <th>Tip</th>
                    <th>Poster</th>
                    <th>IMDB ID</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td><Link to="/detay">Go To Detail</Link></td>
                    <td>Otto</td>
                    <td>75 dak</td>
                    <td><Badge color={"info"}>5.7/10</Badge></td>
                </tr>

                </tbody>
            </Table>

        </Container>

    );
}

export default MovieTable;