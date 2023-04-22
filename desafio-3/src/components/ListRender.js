import { useState } from "react"

const ListRender = () => {
    const [list] = useState(["Matheus", "Pedro", "Josias"])

    const [users, setUsers] = useState([
        {id: 1, name: "Matheus", age:31},
        {id: 2, name: "João", age: 44},
        {id: 3, name: "Pedro", age: 44}
    ])

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4)

        setUsers((prevUsers)=> {

            return prevUsers.filter((user)=>randomNumber !== user.id)

        })
    }

  return (
    <div>
        {/* Iterando em lista colocando índice. Apenas em último caso */}
        <ul>
            {list.map((item, i) => (
                <li style={{listStyleType: "none"}} key={i}>{item}</li>
            ))}
        </ul>
        {/* Iterando em lista sem colocar índice, mas usando um atributo único (como id em BD)*/}
        <ul>
            {users.map((user)=> (
                <li key={user.id} style={{listStyleType: "none"}}>
                    {user.name} - {user.age}
                </li>
            ))}
        </ul>
        <button onClick={deleteRandom}>Delete random user</button>
    </div>
  )
}

export default ListRender