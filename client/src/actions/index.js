import axios from 'axios';
import { IS_LOADING, FETCH_EMPLOYERS, FETCH_JOB_DESCRIPTIONS, FETCH_EMPLOYER, FETCH_JOB_DESCRIPTION } from './types';

export const fetchEmployers = () => async dispatch => {
  try {
    dispatch(isLoading(true));
    const res = await axios.get('/api/employer');
    dispatch(isLoading(false));
    dispatch({ type: FETCH_EMPLOYERS, employers: res.data });
  } catch (err) {
    console.log(err);
  }
};

export const fetchEmployer = id => async dispatch => {
  try {
    dispatch(isLoading(true));
    const res = await axios.get(`/api/employer/${id}`);
    dispatch(isLoading(false));
    dispatch({ type: FETCH_EMPLOYER, employer: res.data });
  } catch (err) {
    console.log(err);
  }
};

export const fetchJobDescriptions = () => async dispatch => {
  try {
    dispatch(isLoading(true));
    const res = await axios.get('/api/job-description');
    dispatch(isLoading(false));
    dispatch({ type: FETCH_JOB_DESCRIPTIONS, jobDescriptions: res.data });
  } catch (err) {
    console.log(err);
  }
};

export const fetchJobDescription = id => async dispatch => {
  try {
    dispatch(isLoading(true));
    const res = await axios.get(`/api/job-description/${id}`);
    dispatch(isLoading(false));
    dispatch({ type: FETCH_JOB_DESCRIPTION, jobDescription: res.data });
  } catch (err) {
    console.log(err);
  }
};

export const deleteEmployer = id => async dispatch => {
  try {
    dispatch(isLoading(true));
    await axios.delete(`/api/employer/${id}`);
    dispatch(isLoading(false));
  } catch (err) {}
};

// Action to determine if item is loading.
export function isLoading(bool) {
  return {
    type: IS_LOADING,
    isLoading: bool
  };
}
