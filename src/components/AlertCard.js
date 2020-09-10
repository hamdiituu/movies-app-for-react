import React from "react";
import {Alert,Container} from 'reactstrap';
const AlertCard =(props)=>{
    return(
        <Container>
            <Alert className={"mt-5"} color={props.type? props.type :"info"}>
                {props.msg?props.msg:"Lütfen bir mesaj giriniz"}
            </Alert>
        </Container>

    )
}
export default AlertCard;