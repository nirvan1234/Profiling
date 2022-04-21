import React,{useState} from 'react';
import Table from '../Table/table';

function AddForm() {
    const [name , setName] = useState("");
    const [phone , setPhone] = useState(0);
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const [items , setItems] = useState([]);

    const handleEvent = (e) => {
        setName(e.target.value);
    }

    const handleEventTwo = (e) => {
        setPhone(e.target.value);
    }

    const handleEventThree = (e) => {
        setEmail(e.target.value);
    }

    const handleEventFour = (e) => {
        setPassword(e.target.value);
    }
    const handleChangeOne = (e) => {
        setName(e);
    }
    const handleChangeTwo = (e) => {
        setPhone(e);
    }
    const handleChangeThree = (e) => {
        setEmail(e);
    }
    const handleChangeFour = (e) => {
        setPassword(e);
    }
    const listofItem = () =>{
          setItems((prevItems) =>{
              return [ ...prevItems , {name , phone ,email,password}]
          })
          setName("");
          setPhone("");
          setEmail("");
          setPassword("");
    }

    const deleteItem =(id) => {
        console.log("delete");
        setItems((prevItems) => {
            return prevItems.filter((arrayElem, index) => {
                return index !== id;
            })
        })
      }

  return (
      <div className='center-div'>
    <div className='col-md-6'>
            <div className='mb-2'>
                 <input  type="text" value={name} onChange={e =>handleEvent(e)} placeholder='Enter Name'  className='form-control'/>
            </div>
            <div className='mb-2'>
                <input  type="number" value={phone} onChange={e =>handleEventTwo(e)}  placeholder='Enter Phone' className='form-control'/>
            </div>
            <div className='mb-2'>
                <input  type="text" value={email} onChange={e =>handleEventThree(e)}  placeholder='Enter Email' className='form-control'/>
            </div>
            <div className='mb-2'>
                <input  type="text" value={password} onChange={e =>handleEventFour(e)}  placeholder='Enter Password' className='form-control'/>
            </div>
            <div className='mb-2'>
                <button type="button" onClick={listofItem} class="btn btn-success" >Submit</button>
            </div>
            <ul>
            <table class="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      <th scope="col">Password</th>
    </tr>
  </thead>
  </table>
                <li>
                    {items.map((itemVal , index) => {
                            return (
                            <div>
   
                            <Table
                            key={index}
                            id={index}
                            text={itemVal.name}
                            phone={itemVal.phone}
                            email={itemVal.email}
                            password={itemVal.password}
                            onSelect={deleteItem}
                            onSelectOne={handleChangeOne}
                            onSelectTwo={handleChangeTwo}
                            onSelectThree={handleChangeThree}
                            onSelectFour={handleChangeFour}
                            />
                            </div>)
                    })}
                   
                </li>
            </ul>
    </div>
    </div>
  )
}

export default AddForm