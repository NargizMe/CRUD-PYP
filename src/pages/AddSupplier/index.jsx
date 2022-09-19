import React from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import styled from '@emotion/styled';

function AddSupplier() {
  const [addSupplier, setAddSupplier] = React.useState({
    companyName: '',
    contactName: '',
    contactTitle: '',
    address:{
        city: '',
        country: '',
        phone: '',
    },
  });
  const navigate = useNavigate()

  async function handleAdd(){
    if(addSupplier.companyName!=='' && addSupplier.contactName!=='' && addSupplier.contactTitle!=='' && addSupplier.address!=={}){
      await axios.post('https://northwind.vercel.app/api/suppliers', addSupplier)
      navigate(`/`)
    }
    else{
      alert('POST cannot be empity');
    }
  }

  return (
    <Container>
        <HeadDiv>
            <button onClick={() => navigate(-1)}>Back</button>
            <h2>Add Supplier</h2>
        </HeadDiv>
        <Div>
            <input placeholder='Company name' onChange={(e) => setAddSupplier({
                ...addSupplier,
                companyName: e.target.value
            })}/>
            <input placeholder='Contact name' onChange={(e) => setAddSupplier({
                ...addSupplier,
                contactName: e.target.value
            })}/>
            <input placeholder='Contact Title' onChange={(e) => setAddSupplier({
                ...addSupplier,
                contactTitle: e.target.value
            })}/>
            <input placeholder='City' onChange={(e) => setAddSupplier({
                ...addSupplier,
                address:{...addSupplier.address, city: e.target.value}
            })}/>
            <input placeholder='Country' onChange={(e) => setAddSupplier({
                ...addSupplier,
                address:{...addSupplier.address, country: e.target.value}
            })}/>
            <input placeholder='Phone Number' onChange={(e) => setAddSupplier({
                ...addSupplier,
                address:{...addSupplier.address, phone: e.target.value}
            })}/>
            <Button onClick={handleAdd}>Add</Button>
        </Div>
    </Container>
  );
}

export default AddSupplier;


//----------------STYLE-------------

const HeadDiv = styled.div`
    display: flex;
    align-items: end;
    margin: 13px 0;

  button{
    padding: 5px;
    margin-right: 13px;
    font-weight: bold;
    background-color: lightblue;
    border-radius: 3px;
    border: none;
    cursor: pointer;
  }

  button:hover{
    background-color: black;
    color: white;
  }
`

const Div = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 13px;
  width: 300px;
`

const Container = styled.div`
  margin: 70px 13px;
  
  input{
    padding: 10px 13px;
  }
`

const Button = styled.button`
    padding: 10px 13px;
    font-size: 17px;
    margin-right: 13px;
    font-weight: bold;
    background-color: lightblue;
    border-radius: 3px;
    border: none;
    cursor: pointer;
    width: 100%;
  
  :hover{
    background-color: black;
    color: white;
  }
`