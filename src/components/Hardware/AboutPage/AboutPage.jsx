import React from 'react';
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
        <Typography>Symptom Tracker, The App is a simple tool designed to help facilitate better communication between patients and clinicians. Historically, interventions for patient-provider communication have generally targeted providers. By giving patients a free, accessible, and intuitive tool for tracking their issues, I aim to make patients better at advocating for themselves, and to provide clinicians with more accurate data about what’s happening in between visits</Typography>
        <hr/>
        <Typography>Technologies Used</Typography>
        <List>
          <ListItem>
            React
          </ListItem>
          <ListItem>
            React Redux
          </ListItem>
          <ListItem>
            Redux Saga
          </ListItem>
          <ListItem>
            Material UI
          </ListItem>
          <ListItem>
            Node.js
          </ListItem>
          <ListItem>
            Postgres
          </ListItem>
          <ListItem>
            SQL
          </ListItem>
          <ListItem>
            Chart.js
          </ListItem>
        </List>
        <a href="https://www.flaticon.com/free-icons/doctor" title="doctor icons">Doctor icons created by Roundicons - Flaticon</a>
      </div>
    </div>
  );
}

export default AboutPage;
