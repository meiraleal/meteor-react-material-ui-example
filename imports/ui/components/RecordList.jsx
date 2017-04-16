import React from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import DeleteRecord from './DeleteRecord';
import EditRecord from './EditRecord';

export default function RecordList(props) {
  const fields = props.schema._schemaKeys.map(key => ({ key, label: props.schema.label(key) })).filter((item, pos, ary) => !pos || item.label != ary[pos - 1].label);
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHeaderColumn>ID</TableHeaderColumn>
          {fields.map(field => (
            <TableHeaderColumn key={field.key}>{field.label}</TableHeaderColumn>
              ))}
          <TableHeaderColumn>Actions</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody>
        {props.data.map((row, index) => (
          <TableRow key={index}>
            <TableRowColumn>{index + 1}</TableRowColumn>
            {fields.map(field => (
              <TableRowColumn key={field.key}>{row[field.key]}</TableRowColumn>
                  ))}
            <TableRowColumn>
              <DeleteRecord collection={props.collection} rowIndex={index + 1} recordId={row._id} />
              <EditRecord collection={props.collection} doc={row} />
            </TableRowColumn>
          </TableRow>
            ))}
      </TableBody>
    </Table>
  );
}
