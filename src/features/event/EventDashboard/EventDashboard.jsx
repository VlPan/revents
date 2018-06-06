import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import EventList from '../EventList/EventList';
import { connect } from 'react-redux';

import {deleteEvent} from './../eventActions'
 
const acitons = {
  deleteEvent
}


class EventDashboard extends Component {

  handleDeleteEvent = (eventId) => () => {
   this.props.deleteEvent(eventId);
  }

  render() {
    const { events } = this.props;
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList 
            deleteEvent={this.handleDeleteEvent}
            events={events}
            />
        </Grid.Column>
        <Grid.Column width={6}>
          
        </Grid.Column>
      </Grid>
    );
  }
}

const mapState = (state) => ({
  events: state.events
})




export default connect(mapState, acitons)(EventDashboard);
