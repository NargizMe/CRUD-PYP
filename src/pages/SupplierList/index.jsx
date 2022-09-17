import React from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import styled from '@emotion/styled'

function SupplierList() {
    const navigate = useNavigate()
    const [suppliers, setSuppliers] = React.useState([]);

    React.useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        const response = await axios.get('https://northwind.vercel.app/api/suppliers');
        setSuppliers(response.data);
    }

    async function handleDelete(id){
        if(window.confirm('Are you sure that you want to delete the supplier?')){
            await axios.delete(`https://northwind.vercel.app/api/suppliers/${id}`)
            fetchData();
        }
    }

    return (
        <Table>
            <thead>
            <tr>
                <th>Id</th>
                <th>Company Name</th>
                <th>Contact Name</th>
                <th>Contact Title</th>
                <th>Address City</th>
                <th>Address Country</th>
                <th>Address Phone</th>
                <th></th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {
                suppliers.map((supplier) => {
                    return <tr key={supplier.id}>
                        <td>{supplier.id}</td>
                        <td>{supplier.companyName}</td>
                        <td>{supplier.contactName}</td>
                        <td>{supplier.contactTitle}</td>
                        <td>{supplier.address?.city}</td>
                        <td>{supplier.address?.country}</td>
                        <td>{supplier.address?.phone}</td>
                        <td onClick={() => navigate(`/supplierDetail/${supplier.id}`)}>
                            <Detail>Detail</Detail>
                        </td>
                        <td onClick={() => handleDelete(supplier.id)}>
                            <Delete>X</Delete>
                        </td>
                    </tr>
                })
            }
            </tbody>
        </Table>
    );
}

export default SupplierList;



//-------------style---------

const Delete = styled.button`
  padding: 5px 10px;
  text-align: start;
  color: white;
  background-color: red;
  border-radius: 3px;
  border: none;
  cursor: pointer;
`

const Detail = styled.button`
  padding: 5px 10px;
  text-align: start;
  font-weight: bold;
  background-color: lightblue;
  border-radius: 3px;
  border: none;
  cursor: pointer;
  
  :hover{
      background-color: black;
      color: white;
  }
`
const Table = styled.table`
  margin: 70px auto;    
  
  tr{
    margin: 13px 0;
    display: grid;
    grid-template-columns: repeat(9, 1fr);
  }
  td{
    padding: 0 13px;
    text-align: center;
  }
  th{
    text-align: center;
    font-size: 18px;
    font-style: italic;
  }
`