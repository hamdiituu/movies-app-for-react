import React from 'react';
import {Container,Table,Badge} from 'reactstrap';
import {Link} from 'react-router-dom';
class MovieTable extends React.Component {
    state={
        tableHeader :['#','Film/Dizi Adı','Yıl','Tip','Poster','IMDB Id']
    }
    render() {
        return (
            <Container fluid>
                <Table hover>
                    <thead className="bg-dark text-light">
                    <tr>
                        {
                            this.state.tableHeader.map(item=>{
                                return (<th key={item}> {item} </th>)
                        })
                        }
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td><Link to="/detay">Go To Detail</Link></td>
                        <td><Badge className="badge badge-pill" color={"warning"}>2015</Badge></td>
                        <td>Film</td>
                        <td><Badge color={"info"}>5.7/10</Badge></td>
                        <td>24FHD545</td>
                    </tr>

                    </tbody>
                </Table>

            </Container>

        );
    }
}

export default MovieTable;