import React from 'react';
import {Container, Pagination, PaginationItem, PaginationLink, Table,Badge} from 'reactstrap';
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
            <Pagination aria-label="Page navigation example">
                <PaginationItem>
                    <PaginationLink first href="#" />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink previous href="#" />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">
                        1
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">
                        2
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">
                        3
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">
                        4
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">
                        5
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink next href="#" />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink last href="#" />
                </PaginationItem>
            </Pagination>
        </Container>

    );
}

export default MovieTable;