import React from 'react';
import {Container,Table,Badge} from 'reactstrap';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {Type} from './core'
class MovieTable extends React.Component {
    state={
        tableHeader :['IMDB Id','Film/Dizi Adı','Yıl','Tip'],
        searchMovies : [],
        searchError : null,
        searchList : []
    }
    componentDidMount() {
        const {searchMovies ,searchError} = this.props;
        if (searchMovies || searchError){
            this.fecthMoviesData()
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {searchMovies ,searchError} = this.props;
        if (searchMovies !== prevProps.searchMovies || searchError !== prevProps.searchError ){
            this.fecthMoviesData()
        }

    }

    fecthMoviesData =()=>{
        const {searchMovies ,searchError} = this.props;
        let searchList = searchMovies["Search"]
        this.setState({
            searchMovies,
            searchError,
            searchList
        })

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
                    {
                        this.state.searchList.map((movie,index) => {
                            return(
                                <tr key={index}>
                                    <td>
                                        <Badge className="badge badge-pill" color={"warning"}>
                                            {movie.imdbID}
                                        </Badge>
                                    </td>
                                    <td><Link to={"/detay/" + movie.Title+ "-" + movie.imdbID+ "-detayi"} >{movie.Title}</Link></td>
                                    <td>
                                        <Badge className="badge badge-pill" color={"info"}>
                                            {movie.Year}
                                            </Badge>
                                    </td>
                                    <td> <Type type ={movie.Type}/> </td>

                                </tr>
                            )
                        })
                    }


                    </tbody>
                </Table>


            </Container>

        );
    }
}

const mapStateToProps = state => {
    return {
        searchMovies: state.SearchMoviesReducer.searchMovies,
        searchError: state.SearchMoviesReducer.searchError
    };
};

export default connect(mapStateToProps)(MovieTable);