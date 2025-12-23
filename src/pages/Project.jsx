import { useContext } from "react"
import { Projectbox } from "../context/ProjectContainer"

function Project() {


  const [data,setData] = useContext(Projectbox)

  console.log(data)
  return (
    <div className="">
    </div>
  )
}

export default Project