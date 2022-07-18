import React, { Fragment, useLayoutEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import {
  Routes,
  Route,
  Navigate,
  BrowserRouter,
  Link,
  useParams,
  useNavigate,
} from 'react-router-dom'
import LoremIpsum from 'react-lorem-ipsum'

let items = Array.from(new Array(100), (_, i) => ({
  id: i + 1,
  content: 'item - ' + (i + 1),
}))

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <ol>
        {items.map(item => (
          <li key={item.id}>
            <Link to={'/item/' + item.id}>{item.content}</Link>
          </li>
        ))}
      </ol>
    </div>
  )
}

function Item() {
  const { id } = useParams()
  const item = items[+id! - 1]
  const navigate = useNavigate()
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <h1>Item {id}</h1>
      <p>{item.content}</p>
      {Array.from(Array(20), (e, i) => (
        <Fragment key={i}>
          <p>lorem - {i + 1}</p>
          <button onClick={() => navigate(-1)}>Back</button>
        </Fragment>
      ))}
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/item/:id" element={<Item />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
