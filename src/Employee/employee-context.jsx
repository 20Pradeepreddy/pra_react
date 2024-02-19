import { createContext, useReducer, useState } from "react";

export const EmployeeContext = createContext({
    items:[],
    onSaveEmployeeData: () => {},
});

function employeeReducer(state, action) {
    const updatedEmployees = [...state]

    if(action.type === 'ADD_EMPLOYEE'){
      const EmployeeData = {
        ...action.payload,
        id: Math.random().toString()
       };
      updatedEmployees.push(EmployeeData)
    }

    if(action.type === 'REMOVE_EMPLOYEE') {
       // logic to remove employee
    }
    return updatedEmployees;
}

export default function EmployeeContextProvider({children}) {
    const DUMP_EMPLOYEES = [
        {id:'e1',name:'Arjun', exp:12,dob:new Date(2021,7,14)},
        {id:'e2',name:'Pradeep', exp:2,dob:new Date(2020,11,15)},
        {id:'e3',name:'Kubera', exp:4,dob:new Date(2019,7,23)},
      ];

      const [employees, dispatch] = useReducer(employeeReducer, DUMP_EMPLOYEES);
    
    const addEmployeeHandler = employee =>  {
        dispatch(
          {
            type: 'ADD_EMPLOYEE',
            payload: employee
          }
        );
    }
  
    const contextValue = {
      items: employees,
      onSaveEmployeeData: addEmployeeHandler
    };

    return <EmployeeContext.Provider value={contextValue}>
            {children}
    </EmployeeContext.Provider>

}