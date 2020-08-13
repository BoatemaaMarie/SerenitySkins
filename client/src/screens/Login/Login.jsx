import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { loginUser } from '../../services/auth';
import Layout from '../../components/shared/Layout/Layout'

export default function Login(props) {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = async (e)=>{
    e.preventDefault();
    const userData = await loginUser(formData);
    props.setCurrentUser(userData)
    props.history.push('/')
  }

  return (
    <>
      <Layout>
    <form onSubmit={handleSubmit}>
      <h1>Hey Girl, Welcome to Serenity</h1>
      <h3>LOGIN HERE</h3>
      <label>
        Username:
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          />
          <button>Submit</button>
      </label>
      <Link to='/register'>Not a memember? Register Here</Link>
        </form>
      </Layout>
      </>
  )
}
