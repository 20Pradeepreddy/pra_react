import './EmployeeFilter.css'

const EmployeeFilter = (props) => {

    const dropdownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
    }

    return(
        <div className="emp-filter">
            <div className="emp-filter__control">
            <label> Filter by Experience :</label>
                <select value={props.selected} onChange={dropdownChangeHandler}>
                <option value=''>select experience in yrs</option>
                    <option value='19'> 19 yrs</option>
                    <option value='18'> 18 yrs</option>
                    <option value='17'> 17 yrs</option>
                    <option value='16'> 16 yrs</option>
                    <option value='15'> 15 yrs</option>
                    <option value='14'> 14 yrs</option>
                    <option value='13'> 13 yrs</option>
                    <option value='12'> 12 yrs</option>
                    <option value='11'> 11 yrs</option>
                    <option value='10'> 10 yrs</option>
                    <option value='9'> 9 yrs</option>
                    <option value='8'> 8 yrs</option>
                    <option value='7'> 7 yrs</option>
                    <option value='6'> 6 yrs</option>
                    <option value='5'> 5 yrs</option>
                    <option value='4'> 4 yrs</option>
                    <option value='3'> 3 yrs</option>
                    <option value='2'> 2 yrs</option>
                    <option value='1'> 1 yr</option>
                </select>
            </div>
        </div>
    );
}

export default EmployeeFilter;