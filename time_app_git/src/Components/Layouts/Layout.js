import React from 'react';
import Aux from '../../Hoc/Aux';
import Addjira from '../Create-jiras/create-jira';
import SideDrawer from '../SideDrawer/SideDrawer'
import Bootstrap from '../../../node_modules/bootstrap/dist/css/bootstrap.css';

const layout = (props) => (
    <Aux>
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-2 col-md-2 col-lg-1 col-xl-1">
                         <SideDrawer/>
                </div>
                <div className="col py-2">
                    <main>data main<i className="fa fa-edit"></i>
                    <span className="glyphicon glyphicon-random"></span>
                        <Addjira /> 
                    </main>
                </div>
            </div>
        </div>
    </Aux>
);

export default layout;