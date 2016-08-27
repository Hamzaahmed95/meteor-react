import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import  { Fishes }  from '../imports/api/Fishes.jsx';

import StorePicker from '../imports/ui/StorePicker.jsx';

import App from '../imports/ui/App.jsx';

import ReactRoutes from '../imports/ui/ReactRoutes.jsx'

Meteor.startup(() => {
  render(< ReactRoutes />, document.getElementById('render-target'));
});