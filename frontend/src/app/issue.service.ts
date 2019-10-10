import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IssueService {
  baseUrl = 'http://localhost:4000';
  constructor(private http: HttpClient) { }

  getIssues() {
    return this.http.get(`${this.baseUrl}/issues`);
  }

  getIssueById(id) {
    return this.http.get(`${this.baseUrl}/issues/${id}`);
  }

  addIssue(issue_title, issue_responsible, issue_description, issue_severity) {
    const issue = {
      title: issue_title,
      responsible: issue_responsible,
      description: issue_description,
      severity: issue_severity
    };
    return this.http.post(`${this.baseUrl}/issues/add`, issue);
  }

  updateIssue(id, title, responsible, description, severity, status) {
    const issue = {
      title: title,
      responsible: responsible,
      description: description,
      severity: severity,
      status: status
    };
    return this.http.post(`${this.baseUrl}/issues/update/${id}`, issue);
  }

  deleteIssue(id) {
    return this.http.get(`${this.baseUrl}/issues/delete/${id}`);
  }

}
