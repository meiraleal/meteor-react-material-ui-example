import React from 'react';
import AutoForm from 'uniforms-material/AutoForm';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import ContentClear from 'material-ui/svg-icons/content/clear';

export default class DeleteRecord extends React.Component {
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
    handleRemove = () => {
        this.props.collection.remove(this.props.recordId);
        this.handleClose();
    }

    render() {
        const actions = [
                <FlatButton label="Cancel" primary={true} onTouchTap={this.handleClose} />,
                <FlatButton label="Sure, remove!" primary={true} onTouchTap={this.handleRemove} />
        ];
        return (
            <div>
              <RaisedButton label="Remove" secondary={true} onTouchTap={this.handleOpen} icon={<ContentClear/>}/>
                <Dialog title={"Remove Record #"+ this.props.rowIndex} actions={actions} open={this.state.open} onRequestClose={this.handleClose}>
                Are you sure you want to remove it?
              </Dialog>
            </div>
        );
    }
}
