import React from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import DeleteRecord from './DeleteRecord';
import EditRecord from './EditRecord';


export default class RecordList extends React.Component {
    fields = this.props.schema._schemaKeys.map(key => ({ key: key, label: this.props.schema.label(key) }))
        .filter((item, pos, ary) => item.key.split(".").length == 1);
    colToString(col) {
        if(typeof col == "undefined")
            return "";
        else
            return col.toString();
    }

    render() {
        return (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHeaderColumn>ID</TableHeaderColumn>
                  {this.fields.map(field => (
                      <TableHeaderColumn key={field.key}>{field.label}</TableHeaderColumn>
                  ))}
                <TableHeaderColumn>Actions</TableHeaderColumn>
                </TableRow>
                </TableHeader>
                <TableBody>
                {this.props.data.map((row, index) => (
                    <TableRow key={index}>
                      <TableRowColumn>{index + 1}</TableRowColumn>
                      {this.fields.map(field => (
                          <TableRowColumn key={field.key}>{this.colToString(row[field.key])}</TableRowColumn>
                      ))}
                        <TableRowColumn>
                        <DeleteRecord collection={this.props.collection} rowIndex={index + 1} recordId={row._id} />
                        <EditRecord collection={this.props.collection} doc={row} />
                        </TableRowColumn>
                        </TableRow>
                ))}
            </TableBody>
                </Table>
        );
    }
}
