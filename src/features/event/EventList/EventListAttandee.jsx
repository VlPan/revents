import React, { Component } from 'react'
import {List, Image} from 'semantic-ui-react';


class EventListAttandee extends Component {
  render() {
    const {person} = this.props;
    return (
      <List.Item>
        <Image as="a" size="mini" circular src={person.photoURL}/>
      </List.Item>
    )
  }
}

export default EventListAttandee;
