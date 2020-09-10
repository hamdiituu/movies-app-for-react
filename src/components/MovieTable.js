import React from 'react';
import {Container,
    Table,
    Badge,
    Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {Type} from './core'
import AlertCard from './AlertCard'
import {bindActionCreators} from "redux";
import {pageDecrease,pageIncrease} from '../redux/actions/PageControlActions'
class MovieTable extends React.Component {
    state={
        tableHeader :['IMDB Id','Film/Dizi Adı','Yıl','Tip'],
        searchMovies : [],
        searchError : null,
        searchList : [],
        totalPage : null,
        page : null
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
        this.handlePagination();

    }

    handlePagination =()=>{
       const {searchMovies} = this.state;
       if( searchMovies && searchMovies["Response"] ==="True"){
            let totalResult = parseInt(searchMovies["totalResults"])
           this.setState({totalPage : totalResult/10})
       }

    }

    render() {
        return (
            <Container fluid>
                {
                    this.state.searchList
                        ?<div>
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
                                            <td><Link to={"/detay/" + movie.imdbID+ "-" + movie.Title+ "-detayi"} >{movie.Title}</Link></td>
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
                            {
                                parseInt(this.state.searchMovies["totalResults"]) > 10 &&
                                <div>
                                    <p>Toplam <b>{this.state.searchMovies["totalResults"]}</b> kayıt bulunmaktadır.</p>
                                    <p> <b>{(this.props.pageCount *10)}
                                            -
                                        {(this.props.pageCount + 1) *10}
                                    </b> arası kayıtlar görüntülenmektedir.</p>
                                    {
                                        this.props.pageCount >0 &&
                                        <Button
                                            onClick={()=>this.props.pageDecrease()}
                                            className="mr-3" color={"warning"}>Bir Önceki Kayıtlar</Button>
                                    }
                                    {
                                       this.props.pageCount < parseInt(this.state.searchMovies["totalResults"])/10 &&
                                       <Button onClick={()=>this.props.pageIncrease()} color={"warning"}>Bir Sonraki Kayıtlar</Button>
                                    }


                                </div>
                            }



                        </div>
                        : <AlertCard msg={"Filtrelere uygun sonuç bulunamadı."} type={"danger"} />
                }

            </Container>

        );
    }
}

const mapStateToProps = state => {
    return {
        searchMovies: state.SearchMoviesReducer.searchMovies,
        searchError: state.SearchMoviesReducer.searchError,
        pageCount : state.PageControlReducer

    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        pageDecrease,
        pageIncrease
    }, dispatch);
};


export default connect(mapStateToProps,mapDispatchToProps)(MovieTable);