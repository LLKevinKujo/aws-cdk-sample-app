import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../service/api.service";

export default function Home() {
  const navigate        = useNavigate();
  const navigateHandler = useCallback((path: string) => navigate(path), [navigate])
  const test = async() => {
    await axiosInstance.get('').then(res => console.log(res))
  }

  return (
    <div>
      <div>home</div>
      <button onClick={() => navigateHandler('/detail')}>detail</button>
      <button onClick={() => test()}>hello</button>
    </div>
  )
}

