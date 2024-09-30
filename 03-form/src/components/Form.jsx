import styles from './Form.module.css'
import {useState} from 'react'

const Form = ({user}) => {
    const [name, setName] = useState(user ? user.name : '')
    const [email, setEmail] = useState(user ? user.email : '')
    const [bio, setBio] = useState(user ? user.bio : '')
    const [role, setRole] = useState(user ? user.role : '')

    const handleName = (e) => {
        setName(e.target.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        
        //validação
        //envio
        console.log(name)
        console.log(email)
        console.log(bio)
        console.log(role)

        //limpar form
        setName("")
        setEmail("")
        setBio("")
        setRole("")
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" placeholder="Name" onChange={handleName} value={name} />

                <label>
                    <span>Email</span>
                    <input type="text" name="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} />
                </label>

                <label>
                    <span>Message</span>
                    <textarea name="message" placeholder="Message" onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
                </label>

                <label>
                    <span>Role</span>
                    <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
                        <option value=""></option>
                        <option value="user">User</option>
                        <option value="editor">Editor</option>
                        <option value="admin">Admin</option>
                    </select>
                </label>

                <input type="submit" value='Submit' />
            </form>
        </div>
    )
}

export default Form