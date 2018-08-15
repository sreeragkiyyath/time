
import React from 'react';
import Aux from '../../Hoc/Aux';

const sideDrawer = (props) => (
    <Aux>
<nav className="navbar navbar-light navbar-expand-sm px-0 flex-row flex-nowrap">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarWEX" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="navbar-collapse collapse" id="navbarWEX">
        <div className="nav flex-sm-column flex-row">
            <a className="nav-item nav-link active" href="home">Home</a>
            <a href="d" className="nav-item nav-link"><i className="fa fa-edit"></i>Add</a>
            <a href="s" className="nav-item nav-link">Link</a>
            <a href="test" className="nav-item nav-link">Link</a>
        </div>
    </div>
</nav>
</Aux>
);

export default sideDrawer;