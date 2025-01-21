
import { useState,useEffect } from "react"

function MyComponent_02() {
    const [width,setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight);

    // without use effect
    // window.addEventListener('resize', handleResize);
    // console.log('Event Listner added ' );
    // not a good way to do --> useEffect

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        console.log('Event Listner added ');
        return () => {
            window.removeEventListener("resize", handleResize);
            console.log('Event Listner removed ');
        }
    }, [])
    
    useEffect(() => {
        document.title = `Size : ${width} x ${height}`
    },[width,height])
    
    
    function handleResize() {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }
  return (
      <>
          <p>Window Width : {width}px</p>
          <p>Window Height : {height}px</p>
      </>
  )
}

export default MyComponent_02