import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from "react-redux"
import {getContact,updateContact} from "../../actions/contactAction"
import {useParams} from "react-router-dom"
import {useHistory} from "react-router-dom"

function EditContacts() {
    let {id} = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    const contact = useSelector((state)=>state.contact.contact)

    const [name,setName] = useState("")
    const [phone,setPhone] = useState("")
    const [email,setMail] = useState("")
    
    useEffect (()=>{
        if(contact != null){
            setName(contact.name);
            setPhone(contact.phone);
            setMail(contact.email)
        }
        dispatch(getContact(id));
    }, [contact])

    const onUpdateContact = (e)=>{
        e.preventDefault()

        const update_contact = Object.assign(contact,{name:name,phone:phone,email:email})
        dispatch(updateContact(update_contact))
        history.push("/")
    }

    return (
        
        <div className="card border-0m shadow">
            <div className="card-header bg-danger text-white" >
            Add Contacts
            </div>
            <div className="card-body" >
                <form onSubmit={(e) => onUpdateContact(e)}>
                    <div className="form-group">
                        <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Your Name"
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Your Number"
                        value={phone}
                        onChange={(e)=>setPhone(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Your E-mail"
                        value={email}
                        onChange={(e)=>setMail(e.target.value)}
                        />
                    </div>
                    <button className="btn btn-warning" type="submit">Update Contact</button>
                </form>
            </div>
        </div>
    )
}

export default EditContacts
