import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../service/api.service";
import './App.css'

export default function Home() {
  const navigate        = useNavigate();
  const navigateHandler = useCallback((path: string) => navigate(path), [navigate])

  const [newPlayer, setNewPlayer] = useState({name: "", country: ""})
  const onChangePlayer = (key: string, value: string) => {
    setNewPlayer(prevState => ({
      ...prevState,
      [`${key}`]: value
    }))
  }

  const [deletePlayerName, setDeletePlayerName] = useState('')

  const [allPlayers, setAllPlayer] = useState([] as {name:string, country:string, level: number}[])

  const onCreatePlayer = async() => {
    await axiosInstance.post('', newPlayer)
      .then(res => test())
      .then(() => setNewPlayer({name: "", country: ""}))
  }

  const onDeletePlayer = async() => {
    await axiosInstance.delete(`/${deletePlayerName}`)
      .then(res => test())
      .then(() => setDeletePlayerName(""))
  }

  const onDeleteAll = async() => {
    await axiosInstance.delete('')
      .then(res => test())
  }

  const test = async() => {
    await axiosInstance.get('')
      .then(res => setAllPlayer(res.data))
  }

  useEffect(() => {
    test()
  },[])


  return (
    <div className="container">
      <div className="input-container">
        <label className="input-label">名前</label>
        <input onChange={(e) => onChangePlayer("name", e.target.value)} value={newPlayer.name} />
        <span className="input-focus"></span>
      </div>
      <div className="input-container">
        <label className="input-label">国</label>
        <input onChange={(e) => onChangePlayer("country", e.target.value)} value={newPlayer.country} />
        <span className="input-focus"></span>
      </div>
      <div className="input-container">
        <label className="input-label">削除するプレイヤーのなまえ</label>
        <input onChange={(e) => setDeletePlayerName(e.target.value)}  value={deletePlayerName}/>
        <span className="input-focus"></span>
      </div>
      <div className="tab">
        <button className="tablinks" onClick={() => onCreatePlayer()}>作成</button>
        <button className="tablinks" onClick={() => onDeletePlayer()}>削除</button>
        <button className="tablinks" onClick={() => onDeleteAll()}>全てを削除</button>
      </div>
      <div>
        {allPlayers.map((e, index) => {
          return <div className="card" key={index}>
            <div className="card-header">プレイヤー{index+1}</div>
            <div className="card-body">
              <ul className="my-list">
                <li>名前 - {e.name}</li>
                <li>国　 - {e.country}</li>
              </ul>
            </div>
            <div className="card-footer">
              <a href="#">Level: {e.level}</a>
            </div>
          </div>
        })}
      </div>

    </div>
  )
}

