import React from 'react';
import AutoForm from 'uniforms-material/AutoForm';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import ContentCreate from 'material-ui/svg-icons/content/create';

export default class EditRecord extends React.Component {
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
        this.props.collection.update({_id: doc._id},{$set: doc});
        this.handleClose();
    }

    render() {
        return (
            <div>
              <RaisedButton label="Edit" primary={true} onTouchTap={this.handleOpen} icon={<ContentCreate/>}/>
              <Dialog title="Edit Record" open={this.state.open} onRequestClose={this.handleClose}>
                <AutoForm model={this.props.doc} schema={this.props.collection.simpleSchema()} style={this.style} onSubmit={this.handleSubmit}/>
              </Dialog>
            </div>
        );
    }
}
