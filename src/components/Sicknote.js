/*
* Title: Simple react app to act as landing page when patient needs to view
* sick note submitted onto the ethereum network
* Version: v00_01
* Author: Nzwisisa Chidembo <nzwisisa@gmail.com>
*/

import React, { Component } from 'react';
import request from 'request';
import AppBar from 'material-ui/AppBar';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import moment from 'moment';

class Sicknote extends Component {
  constructor (props) {
    super(props)
    this.state = {
      id: props.match.params.number,
      practiceNo: '',
      sickDays: '',
      timeStamp: '',
      illnessDescription: '',
      isReady: false
    };

    this.onRun = this.onRun.bind(this);
  }

  //Place your ethereum helper function endpoint below and API gateway api key
  sicknoteEndPoint = ''
  apiKey = ''
  res = ''

  componentDidMount() {
    const self = this;
    this.onRun(event => self.setState({id: this.state.id}));
  }

  onRun = async (event) => {

    request.post({
      headers: {
        'content-type' : 'application/json',
        'x-api-key': this.apiKey
      },
      url: this.sicknoteEndPoint,
      body: JSON.stringify({
          "request": {
              "type": "GetLastSickNote",
              "data": {
                  "patientId": Number(this.state.id)
              }
          }
      })
    }, function(error, response, body){
      this.setState({
        practiceNo: Number(JSON.parse(body).response.data.practiceNo),
        sickDays: JSON.parse(body).response.data.sickDays,
        timeStamp: moment.unix(JSON.parse(body).response.data.timeStamp).format('MMMM Do YYYY'),
        illnessDescription: String(JSON.parse(body).response.data.illnessDescription)
      });
    }.bind(this));
  };

  render() {
    return (
      <div>
        <AppBar title="View Sick Note" />
          <Card>
            <CardHeader
              title = "Sick Note Details"
            />
            <CardText>
              <div>
                Doctor Practice Number: {this.state.practiceNo}
              </div>
              <div>
                Submitted: {this.state.timeStamp}
              </div>
              <div>
                Total Sick Days: {this.state.sickDays}
              </div>
              <div>
                Illness Description: {this.state.illnessDescription}
              </div>
            </CardText>
          </Card>
      </div>
    )
  }
}

export default Sicknote;
