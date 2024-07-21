import React, { useState, useEffect } from "react";
import "./adminaddpackage.css";
import axios from "axios";

function AdminAddPackage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [Title, setTitle] = useState("");
  const [About, setAbout] = useState("");
  const [Amount, setAmount] = useState("");
  const [Rating, setRating] = useState("");
  const [Location, setLocation] = useState("");

  const [Duration, setDuration] = useState("");
  const [No_of_people, setNo_of_people] = useState("");
  const [ImageForms, setImageForms] = useState({
    hotel: null,
    destination: null,
    activity: null,
    attraction: null,
  });

  const ImageFeeding = (e) => {
    e.preventDefault();
    setImageForms({
      ...ImageForms,
      [e.target.name]: e.target.files[0],
    });
    console.log(ImageForms);
  };

  async function Addpackage() {
    setLoading(true);
    setError("");
    setSuccess("");

    const formData = new FormData();
    // formData.append("hotel", ImageForms.hotel);
    // formData.append("destination", ImageForms.destination);
    // formData.append("activity", ImageForms.activity);
    formData.append("attraction", ImageForms.attraction);
    formData.append("hotel", ImageForms.hotel);
    formData.append("destination", ImageForms.destination);
    formData.append("activity", ImageForms.activity);
    formData.append("title", Title);
    formData.append("about", About);
    formData.append("amount", Amount);
    formData.append("rating", Rating);
    formData.append("location", Location);
    formData.append("duration", Duration);
    formData.append("no_of_people", No_of_people);

    try {
      const result = await fetch("package-crud/", {
        method: "post",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("adminkey")}`,
        },
        body: formData,
      });

      const data = await result.json();
      console.log(data);

      if (data.errors) {
        console.log(
          Object.keys(data.errors).map((item) => {
            alert(item);
          })
        );
      } else {
        console.log(data);
        alert("package added succesfully")
        if (data.detail) {
          alert(data.detail);
        }
        // window.location.href = "/login";
      }

      // setSuccess("Package added successfully");
      // setTitle("");
      // setAbout("");
      // setAmount("");
      // setRating("");
      // setLocation("");
      // setDuration("");
      // setNo_of_people("");
    } catch (error) {
      console.log("An error occurred:", error);
      setError("An error occurred while adding the package");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="register">
      {/* <img src={Register} alt="register image" className="register--img" /> */}
      {/* {loading && <Loader></Loader>} */}
      {/* {error.length > 0 && <Error msg={error}></Error>} */}

      <div id="row" className="row justify-content-center ">
        <div className="col-md-6 mt-5">
          {/* {success.length > 0 && <Success msg={success}></Success>} */}
          <div id="wq" className="bs">
            <h2 style={{ textDecoration: "underline" }}>Add packages..</h2>
            <form enctype="multipart/form-data" onSubmit={Addpackage}>
              <input
                type="text"
                className="form-control"
                placeholder="title"
                name="title"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                style={{
                  padding: "20px",
                  border: "none",
                  marginBottom: "20px",
                }}
              />
              <input
                type="text"
                className="form-control"
                placeholder="about"
                name="about"
                onChange={(e) => {
                  setAbout(e.target.value);
                }}
                style={{
                  padding: "20px",
                  border: "none",
                  marginBottom: "20px",
                }}
              />
              <input
                type="number"
                className="form-control"
                placeholder="rating"
                required
                name="rating"
                onChange={(e) => {
                  setRating(e.target.value);
                }}
                style={{ padding: "20px", marginBottom: "20px" }}
              />
              <input
                type="text"
                className="form-control"
                placeholder="location"
                required
                name="location"
                onChange={(e) => {
                  setLocation(e.target.value);
                }}
                style={{ padding: "20px", marginBottom: "20px" }}
              />
              <input
                type="text"
                className="form-control"
                placeholder="duration"
                required
                name="duration"
                onChange={(e) => {
                  setDuration(e.target.value);
                }}
                style={{ padding: "20px", marginBottom: "20px" }}
              />
              <input
                type="number"
                className="form-control"
                placeholder="Enter Amount"
                required
                name="amount"
                onChange={(e) => {
                  setAmount(e.target.value);
                }}
                style={{ padding: "20px", marginBottom: "20px" }}
              />
              <input
                type="text"
                className="form-control"
                placeholder="no_of_people"
                required
                name="no_of_people"
                onChange={(e) => {
                  setNo_of_people(e.target.value);
                }}
                style={{ padding: "20px", marginBottom: "20px" }}
              />
              <label style={{ color: "white", fontSize: ".7rem" }}>
                select attraction
              </label>
              <input
                type="file"
                className="form-control"
                placeholder="attraction"
                required
                name="attraction"
                onChange={ImageFeeding}
                style={{ padding: "20px", marginBottom: "20px" }}
              />
              <input
                type="file"
                className="form-control"
                placeholder="activity"

                name="activity"
                onChange={ImageFeeding}
                style={{ padding: "20px", marginBottom: "20px" }}
              />
              <input
                type="file"
                className="form-control"
                placeholder="hotel"

                name="hotel"
                onChange={ImageFeeding}
                style={{ padding: "20px", marginBottom: "20px" }}
              />
              <input
                type="file"
                className="form-control"
                placeholder="destination"

                name="destination"
                onChange={ImageFeeding}
                style={{ padding: "20px", marginBottom: "20px" }}
              />
            </form>

            {loading ? (
              <div>Registering... Please Wait...</div>
            ) : (
              <button className=" register--btn" onClick={Addpackage}>
                Confirm
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminAddPackage;
