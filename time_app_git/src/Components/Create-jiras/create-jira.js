import React, { Component } from 'react';
import axios from 'axios';
import Dialog from 'react-bootstrap-dialog';
import ShowAlert from '../Dialogbox/ShowAlert';


class addjira extends Component {


  constructor () {
    super()
    this.postDataHandler = this.postDataHandler.bind(this);
  }

  state = {
    jiraDetails: {
      jiraNo: 0,
      name:'',
      issueDesc:'',
      reporter:'',
      assignee:'',
      devPerson : '',
		qaPerson :'',
		airline : '',
		codeReviewer : '',
		testCaseReviewer : ''
    },
    abc: "danger",
    formFields: {username: ''}

  }

   postDataHandler = (event) => {
        const name = this.state.jiraDetails;
    axios.post('http://localhost:9050/spring-mvc/create_jira', name).then(
      console.log("done" + "localhost:9050/spring-mvc/create-jira/")
    ).then(function (response,data) {
    console.log("done :"+response.data );
  })
  .catch(function (error) {
    console.log("hi sree error " + error);
  });
  event.preventDefault();

  }



  getDataHandler = () => {
    const rep = axios.get("http://localhost:9050/spring-mvc/greeting").then(
      response => {
        console.log("get method called");
        console.log("Done :" + response.data);
        this.setState({ abc: response.data });
        console.log("hai");
      }
    );
  }

  render() {
    return (
      <div className="container">
        <h2>
          <b>Create Jira :
        </b>
        </h2>
        <form onSubmit= {this.postDataHandler} onChange={this.updateFormValues}>
          <div className="form-group">
            <label>Jira number:</label>
            <input type="number" min="0" className="form-control" id="jiraNo"  placeholder="Enter jira number" name="GPPROD" />
          </div>
          <div className="form-group">
            <label>Name </label>
            <input type="text" min="0" max="" message="Please enter the jira name" className="form-control" id="jiraNo" placeholder="Enter jira number" name="GPPROD" />
          </div>
          <div className="form-group">
            <label>Dev </label>
            <input type="text" min="0" max="" message="Please enter the jira name"  className="form-control" id="jiraNo" placeholder="Enter jira number" name="GPPROD" />
          </div>
          <div className="form-group">
            <label>QA </label>
            <input type="text" min="0" max="" message="Please enter the jira name"  className="form-control" id="jiraNo" placeholder="Enter jira number" name="GPPROD" />
          </div>
          
        <button className="btn btn-success" type="submit" >Submit</button>
        
        </form>
      </div>
    );
  }
}

export default addjira;