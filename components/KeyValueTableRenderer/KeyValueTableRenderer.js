import React from 'react';
import PropTypes from 'prop-types';
import { Table, TableBody, TableCell, TableRow } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { propertyKeyToLabel } from '@/utils/base';
import { getValueByPath } from '@/utils/getValueByPath';

const KeyValueTableRenderer = (props) => {
  const { data, displayKeys } = props;

  const renderContent = (value) => {
    if (typeof value === 'boolean') {
      return value ? <CheckCircleIcon color="secondary" /> : <CancelIcon color="action" />;
    }
    return value;
  };

  return (
    <Table>
      <TableBody>
        {displayKeys &&
          displayKeys.map((x) => (
            <TableRow key={x} hover>
              <TableCell>{propertyKeyToLabel(x)}</TableCell>
              <TableCell>{renderContent(getValueByPath(data, x))}</TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
};

KeyValueTableRenderer.propTypes = {
  data: PropTypes.object.isRequired,
  displayKeys: PropTypes.array.isRequired
};

export default KeyValueTableRenderer;
