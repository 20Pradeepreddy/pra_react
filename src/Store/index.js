import {createStore} from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';

const DUMP_EMPLOYEES = [
    {id:'e1',name:'Arjun', exp:12,dob:new Date(2021,7,14)},
    {id:'e2',name:'Pradeep', exp:2,dob:new Date(2020,11,15)},
    {id:'e3',name:'Kubera', exp:4,dob:new Date(2019,7,23)},
  ];

  const initialState = {items:DUMP_EMPLOYEES};

  const emplopyeeSlice = createSlice({
    name:'employee',
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
        const employeeIdToRemove = action.payload;
            state.items = state.items.filter(employee => employee.id !== employeeIdToRemove);
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
  reducer: emplopyeeSlice.reducer
})

export default employeeStore;
export const employeeActions = emplopyeeSlice.actions;

export const deleteEmployeeData = (employeeId) => {
  return async (dispatch) => {
      const sendRequest = async () => {
          const response = await fetch(`https://triconreact-default-rtdb.firebaseio.com/employee/${employeeId}.json`, {
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