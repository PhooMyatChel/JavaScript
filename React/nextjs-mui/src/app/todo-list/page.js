"use client";

import React, { useState } from 'react';
import {
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Stack
} from '@mui/material';

export default function TodoListPage() {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const handleAddOrUpdateTask = () => {
    if (!taskName.trim()) return;

    if (editIndex !== null) {
      const updatedTasks = [...tasks];
      updatedTasks[editIndex] = taskName;
      setTasks(updatedTasks);
      setEditIndex(null);
    } else {
      setTasks([...tasks, taskName]);
    }

    setTaskName('');
  };

  const handleEdit = (index) => {
    setTaskName(tasks[index]);
    setEditIndex(index);
  };

  const handleRemove = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
    if (editIndex === index) {
      setTaskName('');
      setEditIndex(null);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>To Do List</h2>
      <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
        <TextField
          label="Task Name"
          variant="outlined"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <Button
          variant="contained"
          color={editIndex !== null ? 'warning' : 'success'}
          onClick={handleAddOrUpdateTask}
        >
          {editIndex !== null ? 'Update Task' : 'Add Task'}
        </Button>
      </Stack>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Task</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tasks.map((task, index) => (
              <TableRow key={index}>
                <TableCell>{task}</TableCell>
                <TableCell align="right">
                  <Stack direction="row" spacing={1} justifyContent="flex-end">
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleEdit(index)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => handleRemove(index)}
                    >
                      Remove
                    </Button>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
            {tasks.length === 0 && (
              <TableRow>
                <TableCell colSpan={2} align="center">
                  No tasks available
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
