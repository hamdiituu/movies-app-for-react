import React from 'react';
import {searchById} from '../redux/actions/SearchByIdAction'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {DetailCard,AlertCard} from '../components';
import {Loader} from '../components/core';
class DetailPage extends React.Component{

    state ={
        searchByIdResp : null,
        searchByIdError : null

    }
    componentDidMount() {
        this.handleRouteParams()
    }

    handleRouteParams(){
       let imdbId = this.props.match.params.movie.split("-")[0] ;
       this.props.searchById(imdbId);
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        const {searchByIdResp ,searchByIdError} = this.props;
        if (searchByIdResp !== prevProps.searchByIdResp || searchByIdError !== prevProps.searchByIdError ){
           this.handleRouteParams()
            this.setState({searchByIdResp , searchByIdError})
        }
    }

    render(){

        return(

            !this.state.searchByIdResp
            ? <Loader/>
            :this.state.searchByIdError
            ?<AlertCard msg={"Sitemsel Hata ERR38."} type={"danger"} />
            :this.state.searchByIdResp && this.state.searchByIdResp["Response"] ==="True"
            ?<DetailCard data ={this.state.searchByIdResp} />
            :<AlertCard msg ="Böyle bir sonuç mevcut değil" />

        )
    }
}

const mapStateToProps = state => {
    return {
        searchByIdResp: state.SearchByIdReducer.searchByIdResp,
        searchByIdError: state.SearchByIdReducer.searchByIdError
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        searchById,
    }, dispatch);
};

export default connect(mapStateToProps,mapDispatchToProps)(DetailPage);