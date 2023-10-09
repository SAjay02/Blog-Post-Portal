import {useState}from 'react'
function Mode()
{
    let dark=false;
    const darkOn=<h1>Dark Mode is ON!</h1>
    const lightOn=<h1>Light Mode is On!</h1>    
    function click()
    {
        dark=!dark;
        if(dark==true)
        {
            console.log("Dark Mode is ON!")
        }
        else
        {
            console.log("Light Mode is On!")
        }
    }
    const[Input,setInput]=useState();
    function handle(e)
    {
        setInput(e.target.value);
    }
    return(
        <div>
            {dark?darkOn:lightOn}
            
        </div>
    );
}
export default Mode;