import React, { useState } from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

export default function AddWorkout({newWorkout}) {
const handelData =(form_data)=>{
newWorkout(form_data)
}
    return (
        <div className='add-workout'>
          <h1>Add Workout</h1>
        <WorkoutForm form_data={handelData}/>

    </div>
  )
}


function WorkoutForm({form_data}) {
  const handelSubmit = (e)=>{
    e.preventDefault();
    form_data(formData)
  }
  const [formData, setFormData] = useState({
    workout : '',
    day : '',
  })
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <Form onSubmit={handelSubmit} className='add-workout--form'>
      <Row>
        <Col>
          <Form.Control name="workout" placeholder="Name of Workout" onChange={onChange}/>
        </Col>

        <Col>
          <Form.Select name='day' aria-label="Default select example" onChange={onChange}>
            <option>Day</option>
            <option value="sat">Sat</option>
            <option value="sun">Sun</option>
            <option value="mon">Mon</option>
            <option value="tue">Tue</option>
            <option value="wed">Wed</option>
            <option value="thu">Thu</option>
            <option value="fri">Fri</option>
    </Form.Select>
        </Col>
        <Col>
      <Button type="submit">ADD</Button>
        </Col>
      </Row>
    </Form>
  );
}

