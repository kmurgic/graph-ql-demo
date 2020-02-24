import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Delete from '@material-ui/icons/Delete';
import Edit from '@material-ui/icons/Edit';

const Task = props => {
  const {
    id,
    isComplete,
    category,
    description,
    assignee,
    estimatedTime,
    actualTime,
    editTask,
    removeTask,
    toggleTaskComplete
  } = props;
  return (
    <TableRow>
      <TableCell className="category">
        {category.name}
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
      <TableCell className="assignee">
        {assignee.name}
      </TableCell>
      <TableCell className="time">{estimatedTime}</TableCell>
      <TableCell className="time">{actualTime}</TableCell>
      <TableCell className="action">
        <IconButton onClick={() => editTask(id)}>
          <Edit color="inherit" style={{ color: '#43a047' }} />
        </IconButton>
      </TableCell>
      <TableCell className="action">
        <IconButton onClick={() => removeTask(id)}>
          <Delete color="inherit" style={{ color: '#e53935' }} />
        </IconButton>
      </TableCell>
    </TableRow>
  )
}

export default Task;
