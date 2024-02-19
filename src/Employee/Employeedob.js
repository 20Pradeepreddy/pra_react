import './Employeedob.css'

const Employeedob = (props)=> {
    const month = props.dob.toLocaleString('en-US', {month:'long'});
    const day = props.dob.toLocaleString('en-US',{day:'2-digit'});
    const year = props.dob.getFullYear();

    return(

    <div>
        <div  className='emp-dob'>
                <div  className='emp-date_month'>{month}</div>
                <div  className='emp-date_year'>{year}</div>
                <div  className='emp-date_day'>{day}</div>
        </div>
    </div>
    );
}

export default Employeedob;