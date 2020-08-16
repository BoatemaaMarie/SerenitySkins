import React, {useState, useEffect} from 'react'
import Layout from '../../components/shared/Layout/Layout'
// import Calendar from 'react-calendar'
import { postAppointment, addService } from '../../services/appointments'



export default function CreateAppointment(props) {
  const [newAppointment, setNewAppointment]=useState([])
  const [create, setCreate] = useState({
    name: "",
    description: "",
    price: "",
    img_url:""
  })

  const handleChange = (e) => {
    const { value } = e.target
    setCreate({name:value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newAppointment = await addService(create)
    props.setCreate([
      ...props.appointments,
      newAppointment
    ])
    props.history.push('/appointments')
  }

  const makeAppointment = async() => {
    const newAppointment = await postAppointment()
  setNewAppointment(newAppointment)
  }

  useEffect(() => {
    makeAppointment()
  },[])



  return (
    <Layout>

        <h3>My Upcoming Appointments</h3>
       
    <p>select date and time</p>

        {/* <form onSubmit={handleSubmit}>
      <h3>Create Appointment</h3>
      <label>
            Name:

            
        <input
          type="dropdown"
          value={create.name}
          onChange={handleChange}
          />
            

      </label>
        <button>Submit</button>
        </form> */}
 <div>
        {newAppointment.map((appointment) => (
          <>
        <img src={appointment.img_url}/>
          <p>{appointment.name}</p>
            <p>{appointment.price}</p>
            <p>{appointment.duration}</p>
            <p>{appointment.description}</p>
          </>
      </div>  
      
    </Layout>
  

  )
}
