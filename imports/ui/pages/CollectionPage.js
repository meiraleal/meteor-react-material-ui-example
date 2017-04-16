import {Meteor} from 'meteor/meteor';
import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import CreateRecord from '../components/CreateRecord'
import RecordList from '../components/RecordList'

export default class CollectionPage extends React.Component {
    componentWillMount() {
        Meteor.subscribe("Collection.all", this.props.collectionName);
    }

    render() {
        let data = this.props.collection.find().fetch();
        return (
            <div>
              <CreateRecord collection={this.props.collection}/>
              <RecordList data={data} collection={this.props.collection} schema={this.props.collection.simpleSchema()}/>
            </div>
        );
    }

    componentWillUnmount() {
        //do some clean up;
    }
}
