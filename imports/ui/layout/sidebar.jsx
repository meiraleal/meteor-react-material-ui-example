import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import { Link } from 'react-router-dom';

export default function Sidebar(props) {
  return (
    <div>
      <Drawer open width={250}>
        <AppBar title="Pet Clinic" showMenuIconButton={false} />
        {props.routes.map((route, index) => (
          <Link key={index} to={route.path}><MenuItem>{route.title}</MenuItem></Link>
            ))}
      </Drawer>
    </div>
  );
}
