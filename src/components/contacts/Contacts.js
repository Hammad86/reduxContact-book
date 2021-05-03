import React from 'react'
import Table from 'react-bootstrap/Table';
import {useSelector,useDispatch, connect} from "react-redux";
import Avatar from "react-avatar"
import {Link} from "react-router-dom"
import {deleteContact,selectAllContact,clearAllContact,deleteAllContact} from "../../actions/contactAction"
import {useState,useEffect} from 'react'
const Contacts =()=> {
    const dispatch = useDispatch();
    const contact = useSelector((state) =>state.contact.contacts)
    const [selectAll,setSelectAll] = useState(false)
    const selectedContacts = useSelector((state) =>state.contact.selectedContacts)
    useEffect(()=>{
      if(selectAll){
        dispatch(selectAllContact(contact.map(contact =>contact.id)))
      }
      else{
        dispatch(clearAllContact())
      }
    })
    return (
        <div>
          {
            selectedContacts.length > 1 ?(
              <button onClick={()=>dispatch(deleteAllContact())} className="btn btn-primary mr-3" >Delete All</button>
            ):null
          }
            <Table striped bordered hover >
  <thead className="bg-danger text-white fixed">
    <tr>
      <th>
          <div className="custom-control custom-checkbox" >
                <input 
                id="selectAll" type="checkbox" className="custom-control-input" value={selectAll}
                onClick={()=>setSelectAll(!selectAll)} />
                <label htmlFor="selectAll" className="custom-control-label" />
          </div>
      </th>
      
      <th >Name</th>
      <th>Phone</th>
      <th>E-mail</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
      {contact.map(data => (<tr key={data.id}> 
        <td><div className="custom-control custom-checkbox" >
                <input checked={selectAll} type="checkbox" className="custom-control-input"/>
                <label className="custom-control-label" />
          </div></td>
        <td> <Avatar className= "mr-2" name={data.name} size="45" round={true} /> {data.name}</td>
        <td>{data.phone}</td>
        <td>{data.email}</td>
        <td className="actions" >
          <Link to={`/contacts/edit/${data.id} `}  ><span className="material-icons mr-2" >edit</span></Link>
         <Link to={"/"}> <span className="material-icons text-danger" onClick={()=>dispatch(deleteContact(data.id))}>remove_circle</span></Link>
        </td>
      </tr>)
      )
      }
    

  </tbody>
</Table>
        </div>
    )
}

export default Contacts
