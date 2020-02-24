import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const Task = props => {
  const {
    id,
    isComplete,
    category,
    description,
    assignee,
    estimatedTime,
    actualTime,
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
      <TableCell className="time">{estimatedTime}</TableCell>
      <TableCell className="time">{actualTime}</TableCell>
    </TableRow>
  )
}

export default Task;
