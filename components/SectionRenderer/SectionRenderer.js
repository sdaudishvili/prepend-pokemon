import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, CardHeader } from '@mui/material';

const SectionRenderer = ({ title, children }) => {
  return (
    <Card sx={{ marginTop: 3 }}>
      <CardHeader title={title} />
      <CardContent>{children}</CardContent>
    </Card>
  );
};
SectionRenderer.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string
};

SectionRenderer.defaultProps = {
  children: null,
  title: ''
};

export default SectionRenderer;
