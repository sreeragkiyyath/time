package com.in28minutes.time.domain;

import org.springframework.stereotype.Component;

@Component
public class JiraDetails {

	public JiraDetails(int jiraNo, String name, String issueDesc, String reporter, String assignee, String devPerson,
			String qaPerson, String airline, String codeReviewer, String testCaseReviewer) {
		super();
		this.jiraNo = jiraNo;
		this.name = name;
		this.issueDesc = issueDesc;
		this.reporter = reporter;
		this.assignee = assignee;
		this.devPerson = devPerson;
		this.qaPerson = qaPerson;
		this.airline = airline;
		this.codeReviewer = codeReviewer;
		this.testCaseReviewer = testCaseReviewer;
	}
	private int jiraNo;
	private String name;
	private  String issueDesc;
	private 	String reporter;
	private  String assignee;
	private String devPerson;
	private 	String qaPerson;
	private String airline;
	private String codeReviewer;
	private String testCaseReviewer;
	public int getJiraNo() {
		return jiraNo;
	}
	public void setJiraNo(int jiraNo) {
		this.jiraNo = jiraNo;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getIssueDesc() {
		return issueDesc;
	}
	public void setIssueDesc(String issueDesc) {
		this.issueDesc = issueDesc;
	}
	public String getReporter() {
		return reporter;
	}
	public void setReporter(String reporter) {
		this.reporter = reporter;
	}
	public String getAssignee() {
		return assignee;
	}
	public void setAssignee(String assignee) {
		this.assignee = assignee;
	}
	public String getDevPerson() {
		return devPerson;
	}
	public void setDevPerson(String devPerson) {
		this.devPerson = devPerson;
	}
	public String getQaPerson() {
		return qaPerson;
	}
	public void setQaPerson(String qaPerson) {
		this.qaPerson = qaPerson;
	}
	public String getAirline() {
		return airline;
	}
	public void setAirline(String airline) {
		this.airline = airline;
	}
	public String getCodeReviewer() {
		return codeReviewer;
	}
	public void setCodeReviewer(String codeReviewer) {
		this.codeReviewer = codeReviewer;
	}
	public String getTestCaseReviewer() {
		return testCaseReviewer;
	}
	public void setTestCaseReviewer(String testCaseReviewer) {
		this.testCaseReviewer = testCaseReviewer;
	}
	
	
	
	
	
}
