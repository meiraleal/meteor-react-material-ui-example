import React from 'react';
import AutoForm from 'uniforms-material/AutoForm';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

export default class CreateRecord extends React.Component {
    state = {
        open: false
    };

    style = {
        padding: '0px 60px'
    };

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    handleSubmit = (doc) => {
        this.props.collection.insert(doc);
        this.handleClose();
    }

    render() {
        return (
            <div>
              <RaisedButton label="New" primary={true} onTouchTap={this.handleOpen} icon={<ContentAdd/>}/>
              <div style={this.state.open ? {} : {display: "none"}}>
                <br/>
                <h2>Create new Record</h2>
                <br/>
                <AutoForm schema={this.props.collection.simpleSchema()} style={this.style} onSubmit={this.handleSubmit}/>
              </div>
            </div>
        );
    }
}
