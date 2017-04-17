import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import React from 'react';
import CreateRecord from '../components/CreateRecord';
import RecordList from '../components/RecordList';

export default class CollectionPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = { data: [] };
  }
  componentDidMount() {
    Tracker.autorun(() => {
      this.sub = Meteor.subscribe('Collection.all', this.props.collectionName);
      this.setState({ data: this.props.collection.find().fetch() });
    });
  }

  componentWillUnmount() {
    if (this.sub) {
      this.sub.stop();
    }
  }

  render() {
    return (
      <div>
        <CreateRecord collection={this.props.collection} />
        <RecordList
          data={this.state.data}
          collection={this.props.collection}
          schema={this.props.collection.simpleSchema()}
        />
      </div>
    );
  }
}
