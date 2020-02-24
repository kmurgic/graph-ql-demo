import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const Task = props => {
  const {
    id,
    isComplete,
    assignee,
    description,
    toggleTaskComplete
  } = props;
  return (
    <TableRow>
      <TableCell className="category">
        House Chores
      </TableCell>
      <TableCell className="is-complete" align="center">
        <FormControlLabel
          control={
            <Checkbox
              color="default"
              checked={isComplete}
              onClick={() => toggleTaskComplete(id)}
            />
          }
        />
      </TableCell>
      <TableCell className="description">{description}</TableCell>
      <TableCell className="assignee">{assignee}</TableCell>
      <TableCell className="time">30 minutes</TableCell>
      <TableCell className="time">1 hour</TableCell>
    </TableRow>
  )
}

export default Task;
