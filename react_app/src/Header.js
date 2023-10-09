function Header(props)
{
    const click=()=>console.log("Done");
    //const clickMouse=()=>console.log("Mouse Kutty");
    
  return( 
  <div> 
  <h1>Hey {props.name} {props.roll}</h1>
  <h2>Hey {props.name} {props.roll}</h2>
  </div>
  )
}
export default Header;