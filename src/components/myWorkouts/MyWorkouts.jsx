import React, { useState } from 'react'
import AddWorkout from './AddWorkout'
import Table from 'react-bootstrap/Table';

export default function MyWorkouts() {
  const [weekDays, setWeekDays] = useState({
    sat : '',
    sun : '',
    mon : '',
    tue : '',
    wed : '',
    thu : '',
    fri : '',
  })
    // const [myWorkoutsArray, setMyWorkoutsArray] = useState([])
    const handelNewWorkout =(data)=>{
        setWeekDays((prevWeekDays) => ({
          ...prevWeekDays,
          [data.day]: prevWeekDays[data.day]
          ? `${prevWeekDays[data.day]} + ${data.workout}`
          : data.workout,
        }))
  
    }
  return (
    <div className='my-workouts' id='my-workout'>
      <AddWorkout newWorkout={handelNewWorkout}/> 
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>Days</th>
          <th>My Workout</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Sat</td>
          <td>{weekDays.sat}</td>
        </tr>
        <tr>
          <td>Sun</td>
          <td>{weekDays.sun}</td>
        </tr>
        <tr>
          <td>Mon</td>
          <td>{weekDays.mon}</td>

        </tr>
        <tr>
          <td>Tue</td>
          <td>{weekDays.tue}</td>
        </tr>
        <tr>
          <td>Wed</td>
          <td>{weekDays.wed}</td>

        </tr>
        <tr>
          <td>Thu</td>
          <td>{weekDays.thu}</td>

        </tr>
        <tr>
          <td>Fri</td>
          <td>{weekDays.fri}</td>

        </tr>
      </tbody>
    </Table>
    </div>
  )
}


