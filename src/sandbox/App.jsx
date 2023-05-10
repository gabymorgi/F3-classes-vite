import usuarios from "../fakeApi/users.json"

export default function App() {

  console.log("-----------");
  console.log();
  
  const usuariosMuchasMascotas = usuarios.filter(usuarios => usuarios.mascotas.length > 1)
  
  console.log(usuariosMuchasMascotas);
  
  /* B */
  console.log();
  
  const stringsMuchasMascotas = usuariosMuchasMascotas.map((usuario, index) => {
    console.log({usuario, index});

    const message = `"El Usuario ${usuario.apodo} tiene ${usuario.mascotas.length} mascotas"`
    console.log(message)
    return message
  })
  
  console.log(stringsMuchasMascotas);

  return (
    <div>
      holis
    </div>
  )
}
