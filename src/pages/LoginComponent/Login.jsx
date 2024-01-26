import React, { useState } from 'react'
import "./Login.css"
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {

  useEffect(() => {
    document.title = "Iniciar Sesion"
  }, [])

  let usuario;

  if(localStorage.getItem("Usuario")){
    usuario = JSON.parse(localStorage.getItem("Usuario"))
  }else{
    usuario = {}
  }

 
  const [error, setError] = useState(false)

  const [mailLogin, setMailLogin] = useState("")
  const [passwordLogin, setPasswordLogin] = useState("")

  const validarFormularioLogin = (e) =>{
    if(passwordLogin === usuario.password && mailLogin === usuario.mail){
          e.preventDefault()
          setError(false)
          const updateUser = {...usuario, InicioSesion: true}
          localStorage.setItem("Usuario", JSON.stringify(updateUser))
    }else{
      e.preventDefault()
      setError(true)
    }
 }

 const tirarError = error ? "denegado" : "none"
 const createAccount = usuario === undefined ? "denegado" : "denegadoLogin"

  return (
    <div className='loginPage'>
        <h1>Iniciar Sesion</h1>
        <form>
            <label htmlFor="usuario">Nombre de usuario o correo electronico</label>
            <input type="mail" id='usuario' placeholder='Usuario o correo electronico' required onChange={(e) => setMailLogin(e.target.value)}/>

            <label htmlFor="contraseña">Contraseña</label>
            <input type="password" id='contraseña' placeholder='Contraseña' required onChange={(e) => setPasswordLogin(e.target.value)}/>

            {
             usuario === false ? <button disabled type='submit'>Iniciar sesion</button> : <button onClick={(e) => validarFormularioLogin(e)} type='submit'>Iniciar sesion</button>
            }
            <span className={createAccount }>No tienes una cuenta, Registrate aqui <Link to={"/registrarme"}>Registrarme</Link></span>
            <span className={tirarError}>El mail o la contraseña son incorrectos</span>
        </form>
    </div>
  )
}

export default Login