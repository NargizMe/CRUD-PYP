import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useParams, useNavigate} from "react-router-dom";
import styled from '@emotion/styled';

function SupplierDetail() {
    const params = useParams();
    const [detailSupplier, setDetailSupplier] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            const id = params.id
            const response = await axios.get(`https://northwind.vercel.app/api/suppliers/${id}`);
            setDetailSupplier(response.data);
        })()
    }, [])

    return (
        <Container>
            <div>
                <button onClick={() => navigate(-1)}>Back</button>
                <h2>Supplier Detail</h2>
            </div>
            <div>
                <h3>ID:</h3>
                <p>{detailSupplier.id}</p>
            </div>
            <div>
                <h3>Company Name:</h3>
                <p>{detailSupplier.companyName}</p>
            </div>
            <div>
                <h3>Contact Name:</h3>
                <p>{detailSupplier.contactName}</p>
            </div>
            <div>
                <h3>Contact Name:</h3>
                <p>{detailSupplier.contactTitle}</p>
            </div>
            <div>
                <h3>City</h3>
                <p>{detailSupplier.address?.city}</p>
            </div>
            <div>
                <h3>Country</h3>
                <p>{detailSupplier.address?.country}</p>
            </div>
            <div>
                <h3>Phone Number:</h3>
                <p>{detailSupplier.address?.phone}</p>
            </div>
        </Container>
    );
}

export default SupplierDetail;


//-------------style---------

const Container = styled.div`
  margin: 70px 13px;
  
  h2{
    color: darkblue;
  }
  
  div{
    display: flex;
    align-items: end;
    margin: 13px 0;
    p{
      margin-left: 10px;
    }
  }
  
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
