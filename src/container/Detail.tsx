import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export default function Detail() {
  const navigate        = useNavigate();
  const navigateHandler = useCallback((path: string) => navigate(path), [navigate])

  return (
    <div>
      <div>
        detail
      </div>
      <button onClick={() => navigateHandler('/')}>home</button>
    </div>
  )
}