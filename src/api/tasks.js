import axios from "axios";
import { API_URL } from "../constants";

export const createTask = (taskDetails) =>
  axios.post(`${API_URL}/tasks/create`, taskDetails);

export const getAllTasks = (userId) =>
  axios.get(`${API_URL}/tasks`, {
    headers: {
      "X-User-ID": userId,
    },
  });

export const updateTaskStatus = (taskId, newStatus) =>
  axios.post(`${API_URL}/tasks/update/${taskId}`, {
    status: newStatus,
  });

//TODO:  Error (CORS DEOS NOT ALLOW DELETE)  - will use post in the moment
export const deleteTask = (taskId) =>
  axios.post(`${API_URL}/tasks/destroy/${taskId}`);
