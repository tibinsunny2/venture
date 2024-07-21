/*
import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import StripeCheckout from "react-stripe-checkout";
import Swal from "sweetalert2";
import Loader from "../components/Loader";
import Error from "../components/Error";

function TourBookingscreen({ match }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [tour, setTour] = useState({});
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalDays, setTotalDays] = useState(0);

  const tourid = match.params.tourid;
  const fromdate = moment(match.params.fromdate, "DD-MM-YYYY");
  const todate = moment(match.params.todate, "DD-MM-YYYY");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if (!user) {
      window.location.href = "/login";
    }
    async function fetchMyAPI() {
      try {
        setError("");
        setLoading(true);
        const data = (
          await axios.post("/api/tours/gettourbyid", {
            tourid: match.params.tourid,
          })
        ).data;
        //console.log(data);
        setTour(data);
      } catch (error) {
        console.log(error);
        setError(error);
      }
      setLoading(false);
    }

    fetchMyAPI();
  }, []);

  useEffect(() => {
    const totaldays = moment.duration(todate.diff(fromdate)).asDays() + 1;
    setTotalDays(totaldays);
    setTotalAmount(totalDays * tour.rentperday);
  }, [tour]);

  const onToken = async (token) => {
    console.log(token);
    const bookingDetails = {
      tour,
      userid: JSON.parse(localStorage.getItem("currentUser"))._id,
      fromdate,
      todate,
      totalAmount,
      totaldays: totalDays,
      token,
    };

    try {
      setLoading(false);
      const result = await axios.post(
        "/api/tourbookings/booktour",
        bookingDetails
      );
      setLoading(false);
      Swal.fire(
        "Congratulations",
        "Your Room Booked Successfully",
        "success"
      ).then((result) => {
        window.location.href = "/home";
      });
    } catch (error) {
      setError(error);
      Swal.fire("Opps", "Error:" + error, "error");
    }
    setLoading(false);
    //TESTING CARD
    //https://stripe.com/docs/testing
    //https://www.npmjs.com/package/react-stripe-checkout
    // fetch("/save-stripe-token", {
    //   method: "POST",
    //   body: JSON.stringify(token),
    // }).then((response) => {
    //   response.json().then((data) => {
    //     alert(`We are in business, ${data.email}`);
    //   });
    // });
  };

  return (
    <div className="m-5">
      {loading ? (
        <Loader></Loader>
      ) : error.length > 0 ? (
        <Error msg={error}></Error>
      ) : (
        <div className="row justify-content-center mt-5 bs">
          <div className="col-md-6">
            <h1>{tour.name}</h1>
            <img src={tour.imageurls[0]} alt="" className="bigimg" />
          </div>
          <div className="col-md-6">
            <div style={{ textAlign: "right" }}>
              <h1>Booking Details</h1>
              <hr />
              <b>
                <p>
                  Name : {JSON.parse(localStorage.getItem("currentUser")).name}
                </p>
                <p>From Date : {match.params.fromdate}</p>
                <p>To Date : {match.params.todate}</p>
                <p>Max Count : {tour.maxcount}</p>
              </b>
            </div>
            <div style={{ textAlign: "right" }}>
              <h1>Amount</h1>
              <hr />
              <b>
                <p>Total Days : {totalDays}</p>
                <p>Rent per day : {tour.rentperday}</p>
                <p>Total Amount : {totalAmount}</p>
              </b>
            </div>

            <div style={{ float: "right" }}>
              <StripeCheckout
                amount={totalAmount * 100}
                currency="USD"
                token={onToken}
                stripeKey="pk_test_51M2qZEJdqzfSzjlZrwNofnmcIZtUP3D9f8JRh3mCzj4f2kmBcXaHarx6pCr7D4dLBVWaHidXsY7MctqwxUwD0BQe00dGUcMYUU"
              >
                <button className="btn btn-primary">Pay Now</button>
              </StripeCheckout>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default STourBookingscreen;
*/
