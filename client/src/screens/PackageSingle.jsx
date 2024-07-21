import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function PackageSingle() {

  const { id } = useParams()
  console.log(id);

  const [packageId, setPackageId] = useState([])
  const fetchData = async () => {
    const response = await axios.get(`/package-detail/${id}/`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("key")}`,
      }
    })
    setPackageId(response.data)

    console.log(response);
  }

  useEffect(() => {
    fetchData();

  }, [])



  return (
    <>
      <div className="product--header">
        <div className="product--details">
          <h4 style={{ color: "blue", textDecoration: "underline", fontSize: "40px" }}>Our packages</h4>
          <h1 style={{ fontSize: "58px", color: "red" }}>
            "Be with us we can do wonders for you"
          </h1>
          <p style={{ fontSize: "16px", marginBottom: "15px", color: "white", fontWeight: "800" }}>
            "Embark on an adrenaline-fueled journey with our Adventure Getaway
            package! Conquer rugged landscapes, experience heart-pounding
            activities, and create memories that will last a lifetime. Unleash
            your inner adventurer!"
            <br /> Get the most favourite package from the store.
          </p>

        </div>
      </div>

      <div className="container mt-5 pt-3">
        <div className="row mb-5">
          <div className="col-9">
            <h2><b>{packageId.title}</b></h2>
            <div className="imgDiv">
              <Carousel fade>
                <Carousel.Item>
                  {/* <ExampleCarouselImage text="First slide" /> */}
                  <img src={packageId.attraction} alt="" />
                </Carousel.Item>
                <Carousel.Item>
                  {/* <ExampleCarouselImage text="Second slide" /> */}
                  <img src={packageId.hotel} alt="" />
                </Carousel.Item>
                <Carousel.Item>
                  {/* <ExampleCarouselImage text="Third slide" /> */}
                  <img src={packageId.activity} alt="" />

                </Carousel.Item>
                <Carousel.Item>
                  {/* <ExampleCarouselImage text="Third slide" /> */}
                  <img src={packageId.destination} alt="" />

                </Carousel.Item>
              </Carousel>
            </div >
            <h4><b>Location:</b> {packageId.location}</h4>
            <h4><b>Rating:</b> {packageId.rating} &#9733;</h4>
            <h5>{packageId.about}</h5>
            <h5><b>Package Rate:</b> {packageId.amount}</h5>
            <h3>Gallery</h3>
            <img src={packageId.attraction} alt="" width={"200px"} height={"200px"} />
            <img src={packageId.hotel} alt="" width={"200px"} height={"200px"} />
            <img src={packageId.destination} alt="" width={"200px"} height={"200px"} />
            <img src={packageId.activity} alt="" width={"200px"} height={"200px"} />

          </div>
          <div className="col-3 text-center mt-5 d-flex flex-column justify-content-center ">
            <h5 style={{ textDecoration: "underline" }}>GADGETS</h5>
            <h6><Link to={'/converter'}>Currency Converter</Link></h6>
            <h6><Link to={'/Wheather'}>Weather</Link></h6>
            <h6><Link to={'/journal'}>Global Safety Journal</Link></h6>
            <h6><Link to={'/destinations'}>Destinations</Link></h6>
            <h6><Link to={'/emergency'}>Emergency Services</Link></h6>
          </div>
        </div>
      </div>



    </>
  )
}

export default PackageSingle