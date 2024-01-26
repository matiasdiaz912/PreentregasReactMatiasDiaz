import { Link } from "react-router-dom"
import "./Categories.css"

const Category = (openMenu) => {

  
  
let usuario;

  if(localStorage.getItem("Usuario")){
    usuario = JSON.parse(localStorage.getItem("Usuario"))
  }else{
    localStorage.setItem("Usuario", JSON.stringify({InicioSesion: false}))
  }

  return (

    <>
    {
      usuario.InicioSesion && <h2 className="bienvenida">Bienvenido {usuario.name}</h2>
    }

       <h1>Categorias</h1>

      <section className={`categories${openMenu.open ? 'Open' : ''}`}>
        <Link className="tecnologies" to="/category/Tecnologia">
            <img src="multimedia\img\categoriaTecnologia.png" alt="Categoria tecnologia" />
            <h2>Tecnologia</h2>
        </Link>

        <Link className="homeArticles" to={"/category/Articulos%20de%20Casa"}>
            <img src="multimedia\img\categoriaArticulosDelHogar.jfif" alt="Categoria articulos del hogar" />
            <h2>Articulos Hogar</h2>
        </Link>

        <Link className="garden" to={"/category/Jardin"}>
            <img src="multimedia\img\categoriaJardin.jfif" alt="Categoria de jardin" />
            <h2>Jardin</h2>
        </Link>
    </section>
    </>
  )
}

export default Category