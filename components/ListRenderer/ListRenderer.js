import React from 'react';
import PropTypes from 'prop-types';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { propertyKeyToLabel } from '@/utils/base';
import { getValueByPath } from '@/utils/getValueByPath';

const ListRenderer = (props) => {
  const { items, displayKeys } = props;

  const renderContent = (value) => {
    if (typeof value === 'boolean') {
      return value ? <CheckCircleIcon color="secondary" /> : <CancelIcon color="action" />;
    }
    return value;
  };

  return (
    <Table>
      <TableHead>
        <TableRow>
          {displayKeys && displayKeys.map((x) => <TableCell key={x}>{propertyKeyToLabel(x)}</TableCell>)}
        </TableRow>
      </TableHead>
      <TableBody>
        {items &&
          items.map((item, i) => (
            <TableRow hover key={item.id || JSON.stringify(i)}>
              {displayKeys &&
                displayKeys.map((x) => <TableCell key={x}>{renderContent(getValueByPath(item, x))}</TableCell>)}
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
};

ListRenderer.propTypes = {
  items: PropTypes.array.isRequired,
  displayKeys: PropTypes.array.isRequired
};

export default ListRenderer;
