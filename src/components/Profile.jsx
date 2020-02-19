import React, { Component } from "react";
import "./Profile.css";

export default class PathFinding extends Component {

    // fetches data from HACK THE NORTH API and displays information on screen
    getData () {
      fetch('https://hackthenorth.netlify.com/api/fe-challenge-attendee').then(response => {
        return response.json();
      })
      .then(responseData => {
        if (responseData == null) {
          document.write('HACKATHON CRASHER FOUND'); // temp placeholder
          console.log('ERROR');
        } else {
          console.log('SUCCESS');
          console.log(responseData);
          document.getElementById('hi').src = responseData.profile_pic;
          document.getElementById('attendeeId').innerHTML = 'ID: ' + responseData.id;
          document.getElementById('attendeeName').innerHTML = 'Name: ' + responseData.name;
          document.getElementById('attendeeBio').innerHTML = 'Biography: ' + responseData.bio;
          document.getElementById('attendeeType').innerHTML = responseData.type;
          document.getElementById('checkIn').innerHTML = 'Checked In: ' + responseData.checked_in;
          var i;
          document.getElementById('actions').innerHTML = '';
          for (i = 0; i < responseData.actions.length; i++) {
            document.getElementById('actions').innerHTML += responseData.actions[i];
          }
          if (responseData.type === 'hacker') {
            document.getElementById('extra').innerHTML = 'Workshops Attended: '+ responseData.num_workshop_attended;
          }
          if (responseData.type === 'sponsor') {
            document.getElementById('extra').innerHTML = 'Company: '+ responseData.sponsor_company + responseData.sponsor_company_link;
          }
          if (responseData.type === 'volunteer') {
            document.getElementById('extra').innerHTML = 'Next Shift: '+ (responseData.next_shift / 360000) + ' hours!';
          }
          if (responseData.type === 'organizer') {
            document.getElementById('extra').innerHTML = 'Phone Number: ' + responseData.phone_number;
          }
          /*
          id: number;
          name: string;
          profile_pic: string; // a url to an image
          bio?: string; // a paragraph describing the attendee
          type: AttendeeType;
          checked_in: boolean;
          actions: Action[];
          num_workshops_attended?: number; // all "hacker" type attendees (and no other types) will have this field
          sponsor_company?: string; // all "sponsor" type attendees (and no other types) will have this field
          sponsor_company_link?: string; // all "sponsor" type attendees (and no other types) will have this field
          next_shift?: number; // datetime (ms); all "volunteer" type attendees (and no other types) will have this field
          phone_number?: string; // all "organizer" type attendees (and no other types) will have this field
          */
        }
        
      })
    }

    // POST request and change attendee information
    changeData() {
      console.log('POST REQUEST');
    }
  
    render() {
      return (
        <div>
          <div>
            <h1 className="title">Hack The North</h1>
            <p className="italic">Profile Information</p>
            <div>
                <img className="image" src='htn.png' height="180" width="180" alt="HACK THE NORTH LOGO"></img>
            </div>
            <button className="button" onClick={() => this.getData()}>
              GET ATTENDEE INFORMATION
            </button>
            <button className="button" onClick={() => this.changeData()}>
              CHANGE ATTENDEE INFORMATION
            </button>
          </div>
          <div>
            <img id = "hi" className = "profileImg" src="profile-image-holder.jpg" height="360" width="360" alt="PROFILE"></img>
            <p id = "attendeeId">
              ID: 
            </p>
            <p id = "attendeeName"s>
              Name: 
            </p>
            <p id = "attendeeBio">
              Biography: 
            </p>
            <p id = 'attendeeType'>
            </p>
            <p id = "checkIn">
              Checked In: 
            </p>
            <p>
              List of Actions: 
            </p>
            <p id = "actions">
            </p>
            <p id = "extra">
            </p>  
          </div>
        </div>
      );
    }
  }