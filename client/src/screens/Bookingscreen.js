import React, { useState, useEffect } from "react";
import { Navigate, useParams,useNavigate, Link } from "react-router-dom";
import "./booking.css";
import axios from "axios";
function Bookingscreen({}) {
  const { id } = useParams();
  console.log(id);
const navigate=useNavigate()
  const [packageId, setPackageId] = useState([]);
  const [currentUser, setCurrentUser] = useState("");
  const fetchData = async () => {
    const response = await axios.get(`/package-detail/${id}/`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("key")}`,
      },
    });
    setPackageId(response.data);

    console.log(response);
  };

  useEffect(() => {
    fetchData();
    const user = localStorage.getItem("user");
    setCurrentUser(user);
  }, []);
  const payment = async () => {
    console.log(currentUser)
const {id,title,amount,duration,location,rating,no_of_people}=packageId
const newduration=Number(duration)
const newnumber_of_peoples=Number(no_of_people)
console.log(typeof(newduration))
const Newamount=Number(amount)
console.log(Newamount)
console.log(id,title,amount,duration,location,rating,no_of_people)
    const response = await axios.post(`http://127.0.0.1:8000/trips/`, {
      
      
        title,
        amount:Newamount,
        duration:newduration,
        location,
        rating,
        no_of_peoples:newnumber_of_peoples,
        username:currentUser,
      
    });
    if(response){
      alert("payment successfully completed")
      navigate('/product')
    }
  };


  return (
    <div className="m-5">
      <div>
        <div>
          <h1
            style={{
              color: "#5ab1da",
              marginBottom: "20px",
              fontSize: "48px",
            }}
          >
            {packageId.title}
          </h1>
          <img
            src={packageId.attraction}
            alt=""
            style={{width:"100%", height: "500px", borderRadius: "4px" }}
          />
        </div>
        <div>
          <div>
            <h1
              style={{
                marginTop: "20px",
                backgroundColor: "#5ab1da",
                padding: "20px",
                color: "white",
                borderRadius: "4px",
              }}
            >
              Booking Details
            </h1>
            <hr />
            <b>
              <p>Name : {currentUser}</p>
              <p>About : {packageId.about} </p>
              <img src={packageId.attraction} alt="No images" />
              <img src={packageId.destination} alt="No images" />
              <img src={packageId.hotel} alt="No images" />
              <p>Number of members included :{packageId.no_of_people}</p>
              <p>Location : {packageId.location}</p>
              <p>Rating : {packageId.rating} *</p>
              <p></p>
            </b>
          </div>
          <div>
            <h1
              style={{
                marginTop: "20px",
                backgroundColor: "#5ab1da",
                padding: "20px",
                color: "white",
                borderRadius: "4px",
              }}
            >
              Amount : <h6>{packageId.amount}</h6>
            </h1>
            <hr />
          </div>
          <div>
            {/* <Link to={`/cart/${id}`} style={{ padding: "10px 20px" }} onClick={payment}>Pay Now</Link> */}
            <button onClick={payment}>pay now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bookingscreen;
