import React, { useEffect, useState } from 'react'
import "./SignUp.css"
import { Link } from 'react-router-dom'

const SignUp = () => {

  useEffect(() => {
    document.title = "Registrarme"
  }, [])

 const [name, setName] = useState("")
 const [lastName, setLastName] = useState("")
 const [age, setAge] = useState("")
 const [mail, setMail] = useState("")
 const [password, setPassword] = useState("")
 const [repeatPassword, setRepeatPassword] = useState("")
 const [error, setError] = useState(false)
 const [errorContraseña, setErrorContraseña] = useState(false)


 const validarFormulario = (e) =>{
    if(name === "" || lastName === "" || age === "" || mail === "" || password === "" || repeatPassword === ""){
          e.preventDefault()
          setError(true)
          setErrorContraseña(false)
        
    }else if(password !== repeatPassword){
       e.preventDefault()
       setErrorContraseña(true)
       setError(false)
    }else{
      e.preventDefault()
      setError(false)
      setErrorContraseña(false)
      localStorage.setItem("Usuario", JSON.stringify({mail, password, name}))
    }

 }

  const tirarError = error ? "wrong" : "none"
  const tirarErrorContraseña = errorContraseña ? "wrong" : "none"
  

  return (
    <div className='register'>
         <h1>Registrarme</h1>
        <form>

            <label htmlFor="nombre">Nombre</label>
            <input type="name" id='nombre' placeholder='Nombre' required onChange={(e) => setName(e.target.value)}/>

            <label htmlFor="apellido">Apellido</label>
            <input type="text" id='apellido' placeholder='Apellido' required onChange={(e) => setLastName(e.target.value)}/>

            <label htmlFor="edad">Fecha de nacimiento</label>
            <input type="date" id='edad' required onChange={(e) => setAge(e.target.value)}/>

            <label htmlFor="nuevoUsuario">Nombre de usuario o correo electronico</label>
            <input type="mail" id='nuevoUsuario' placeholder='Usuario o correo electronico' required onChange={(e) => setMail(e.target.value)}/>

            <label htmlFor="nuevaContraseña">Contraseña</label>
            <input type="password" id='nuevaContraseña' placeholder='Contraseña' required onChange={(e) => setPassword(e.target.value)}/>

            <label htmlFor="second">Repetir Contraseña</label>
            <input type="password" id='second' placeholder='Repetir Contraseña' required onChange={(e) => setRepeatPassword(e.target.value)}/>
            <span className={tirarErrorContraseña}>Las contraseñas no son iguales</span>

            <button type='submit' onClick={(e) => validarFormulario(e)}>Registrarme</button>
            <span className={tirarError}>Hay datos Incorrectos o vacios</span>
        </form>

        <div className='toLogin'>
          <span>¿Ya tenes una cuenta? <Link to={"/login"}>Inicia Sesion aca</Link></span>
        </div>
    </div>
  )
}

export default SignUp