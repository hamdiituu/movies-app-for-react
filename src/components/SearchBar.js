import React from "react";
import {Input,Button,Container,Col,Row} from 'reactstrap';
import {SEARCH_TYPES} from '../utils/constants'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {searchMovies} from '../redux/acitons/SearchMoviesAction';
class SearchBar extends React.Component{
    state ={
        type : null,
        y: null,
        s: "Pokemon",
        params : null

    }
    searchMovies = ()=>{
        let params = {
            s : this.state.s,
            type: this.state.type,
            y : this.state.y
        }
        this.setState({params})
        this.props.searchMovies(params);

    }

    render(){
        return(
            <Container>
                <Row className=" d-flex justify-content-center">
                    <Col xs={2} >
                        <select
                            onChange={e => this.setState({type : e.target.value})}
                            className="form-control rounded-0">
                            {
                                SEARCH_TYPES.map(item =>{
                                  return  (<option
                                          key={item.id}
                                          value={item.value} >{item.name}</option>)
                                })
                            }

                        </select>
                    </Col>
                    <Col xs={2} >
                        <Input
                            onChange={e => this.setState({y: parseInt(e.target.value)})}
                            className="rounded-0"
                            type="number"
                            placeholder={"Yıl"} />
                    </Col>
                    <Col xs={6} >
                        <Input
                            value={this.state.s}
                            onChange={e => this.setState({s:e.target.value})}
                            className="rounded-0"
                            placeholder={"Flim ,Dizi ,Bölüm ,Oyun Adı"} />
                    </Col>
                    <Col xs={2}>
                        <Button
                            onClick={this.searchMovies}
                            className="rounded-0"
                            color={"success"}>Bul</Button>
                    </Col>
                </Row>
            </Container>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        searchMovies,
    }, dispatch);
};

export default connect(null,mapDispatchToProps)(SearchBar);