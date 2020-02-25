import React from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import Task from './Task';

const TaskTable = (props) => {
  const {
    tasks,
    editTask,
  } = props;
  return (
    <TableContainer component={Paper}>
      <Table className="task-table">
        <TableHead>
          <TableRow>
            <TableCell className="category" align="left">Category</TableCell>
            <TableCell className="is-complete" align="center">Complete</TableCell>
            <TableCell className="description">Description</TableCell>
            <TableCell className="assignee">Assigned To</TableCell>
            <TableCell className="estimated-time">Estimated Time (minutes)</TableCell>
            <TableCell className="actual-time">Actual Time (minutes)</TableCell>
            <TableCell className="action"></TableCell>
            <TableCell className="action"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tasks.map(task => (
            <Task
              key={task.id}
              {...task}
              editTask={editTask}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TaskTable;
