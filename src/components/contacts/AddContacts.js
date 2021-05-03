    import React,{useState} from 'react'
    import {useDispatch} from "react-redux"
    import {addContact} from "../../actions/contactAction"
    import shortid  from 'shortid'
    import {useHistory} from "react-router-dom"

    function AddContacts() {
        const dispatch = useDispatch();
        const history = useHistory();

        const [name,setName] = useState("")
        const [phone,setPhone] = useState("")
        const [mail,setMail] = useState("")
        const createContact =(e)=>{
            e.preventDefault();
            const new_contact = {
                id: shortid.generate(),  
                name:name,
                phone:phone,
                email:mail,
            }
            dispatch(addContact(new_contact));
            history.push("/");
        }
        return (
            
            <div className="card border-0m shadow">
                <div className="card-header bg-danger text-white" >
                Add Contacts
                </div>
                <div className="card-body" >
                    <form onSubmit={(e)=>createContact(e)}>
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
                            type="number"
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
                            value={mail}
                            onChange={(e)=>setMail(e.target.value)}
                            />
                        </div>
                        <button className="btn btn-primary" type="submit">Create Contact</button>
                    </form>
                </div>
            </div>
        )
    }

    export default AddContacts
