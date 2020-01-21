import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/styles';
import {Topbar} from './components';

const useStyles = makeStyles(theme => ({
  
}));

const Main = props => {

  return (
    <Topbar />
  );
};

Main.propTypes = {
  children: PropTypes.node
};

export default Main;
