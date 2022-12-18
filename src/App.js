import 'bootstrap/dist/css/bootstrap.min.css'

import Tile from './components/listTile'
import Navbar from './components/navbar'
import Input from './components/input'
import { useEffect, useState } from 'react'
import axios from 'axios'


function App() {
  const [list, setList] = useState([])

  useEffect(() => {
    retrieveList()
  }, [])

  function retrieveList() {
    axios.get("http://localhost:5000")
      .then((res) => {
        let current = [];
        res.data.map(item => {
          current.push(item)
        })
        addItem(current)
      }).catch((err) => {
        console.log(err);
      })
  }

  function addItem(current) {
    setList(current)
  }

  function appendItem(item) {
    setList(prevlist => {
      return [...prevlist, item]
    })
    const data = {
      name: item
    }
    axios.post("http://localhost:5000", data);
    window.location.reload();
  }

  function removeItem(id) {
    axios.delete("http://localhost:5000/" + id)
    window.location.reload();
  }

  return (
    <div>
      <Navbar />
      <Input onAdd={appendItem} />
      {list.map((item) => {
        return (
          <Tile id={item._id}
            title={item.name}
            onDelete={removeItem}
            key={item._id}
          />
        )
      })}
    </div>
  );
}

export default App;
