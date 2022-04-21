import React ,{useState} from 'react';
// import { Link } from "react-router-dom";
import Modal from '../modal';

function Table(props) {
  const [isOpen, setIsOpen] = useState(false);

  const showDetails = () => {
    setIsOpen(true);
  }
  function EditMember(e){
   console.log(e);
   setIsOpen(false);
  }
  return (
    <div>     
 <table class="table">
  
  <tbody>
    <tr>
      <th scope="row">{props.text}</th>
      <td>{props.phone}</td>
      <td>{props.email}</td>
      <td>{props.Password}</td>
      <td><button type="button"  onClick={() => {props.onSelect(props.id)}} class="btn btn-success" >Delete</button></td>
       <td><button type="button"  onClick={() => showDetails()} class="btn btn-success" >Edit</button></td>
    </tr>
  </tbody>
</table>
<Modal  open={isOpen} onClose={() => setIsOpen(false)}>
<div className='col-md-6'>
            <div className='mb-2'>
                 <input  type="text" 
                 defaultValue={props.text} 
                 onChange={(e) => {props.onSelectOne(e.target.value)}}
                 placeholder='Enter Name'  className='form-control'/>
            </div>
            <div className='mb-2'>
                <input  type="number" 
                defaultValue={props.phone} 
                onChange={(e) => {props.onSelectTwo(e.target.value)}}
                placeholder='Enter Phone' className='form-control'/>
            </div>
            <div className='mb-2'>
                <input  
                type="text" 
                defaultValue={props.email} 
                onChange={(e) => {props.onSelectThree(e.target.value)}}
                 placeholder='Enter Email' 
                 className='form-control'/>
            </div>
            <div className='mb-2'>
                <input  type="password" 
                defaultValue={props.Password} 
                onChange={(e) => {props.onSelectFour(e.target.value)}}
                placeholder='Enter Password' 
                className='form-control'/>
            </div>
            <div className='mb-2'>
                <button type="button" 
                onClick={(e) => EditMember(props.id)} 
                class="btn btn-success" >Submit</button>
            </div>
            </div>
</Modal>
    </div>
  )
}

export default Table