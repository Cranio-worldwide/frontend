import {useEffect} from "react";
import {apiClient} from "../app/request/request";

export default function Home() {
    useEffect(()=> {
        apiClient.get('/').then(console.log)
        alert()
    },[])
  return (
    <>
      Здесь будет проектик
    </>
  )
}
