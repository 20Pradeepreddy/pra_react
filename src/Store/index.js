import {createStore} from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';

const DUMP_EMPLOYEES = [
  {id:1001,name:'Pradeep',exp:4,dob:new Date(2001,11,12)},
  {id:1002,name:'Arjun',exp:5,dob:new Date(1997,9,16)},
  {id:1003,name:'Kubera',exp:10,dob:new Date(2000,11,7)}
];
const initialState = {items:DUMP_EMPLOYEES};

const employeeSlice = createSlice({
  name:'employeedetails',
  initialState : initialState,
  reducers :{
    addEmployee(state, action) {
      const EmployeeData = {
        ...action.payload,
        id: Math.random().toString()
       };
 
      state.items.push(EmployeeData);
    },

    removeEmployee(state, action) {
      const employeeId = action.payload;
          state.items = state.items.filter(employee => employee.id !== employeeId);
    }
  }
});

export const sendEmployeeData = (employeeData) => {

  return async (dispatch) => {

    const sendRequest =  async () => {
      const response = await fetch('https://triconreact-default-rtdb.firebaseio.com/employee.json', 
      { method: 'PUT',
       body: JSON.stringify(employeeData),
     });

     if(!response.ok) {
      throw new Error("Sending employee data failed!");
     }

    };

    try {
        await sendRequest();
    }catch (error) {
        console.log(error);
    }
  };
}


const employeeStore = configureStore({
reducer: employeeSlice.reducer
})

export default employeeStore;
export const employeeActions = employeeSlice.actions;

export const deleteEmployeeData = (employeeId) => {
return async (dispatch) => {
    const sendRequest = async () => {
        const response = await fetch(`https://triconreact-default-rtdb.firebaseio.com//employee/${employeeId}.json`, {
            method: 'DELETE',
        });

        if (!response.ok) {
            throw new Error("Deleting employee data failed!");
        }
    };

    try {
        await sendRequest();
        dispatch(employeeActions.removeEmployee(employeeId));
    } catch (error) {
        console.log(error);
    }
};
};