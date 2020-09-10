import React from "react";

const Loader =()=>{
    return(
        <div className="contaier mt-5 text-center p-5">
            <div className="d-flex justify-content-center">
                <div className="spinner-grow text-success m-5" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-grow text-warning m-5" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-grow text-danger m-5" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        </div>
    )

}

export default Loader;