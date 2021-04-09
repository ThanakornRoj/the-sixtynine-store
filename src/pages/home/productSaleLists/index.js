import React, { useState } from "react";

import {
  ProductContainer,
  ProductBox,
  ScrollContainer,
  ViewButton,
  Menu,
} from "./style";

const SaleLists = () => {
  const [current, setCurrent] = useState(true);

  const productData = [
    {
      name: "Monitor Samsung LC27",
      description: "simply dummy text.",
      price: 1000,
      image: "https://sv1.picz.in.th/images/2021/02/02/odiWVR.png",
      view: 3000,
    },
    {
      name: "Monitor Samsung LC27",
      description: "simply dummy text.",
      price: 1000,
      image: "https://sv1.picz.in.th/images/2021/02/02/odgM58.png",
      view: 3000,
    },
    {
      name: "Monitor Samsung LC27",
      description: "simply dummy text.",
      price: 1000,
      image: "https://sv1.picz.in.th/images/2021/02/02/odi0Y0.png",
      view: 3000,
    },
    {
      name: "Monitor Samsung LC27",
      description: "simply dummy text.",
      price: 1000,
      image: "https://sv1.picz.in.th/images/2021/02/02/odi7iu.png",
      view: 3000,
    },
    {
      name: "Monitor Samsung LC27",
      description: "simply dummy text.",
      price: 1000,
      image: "https://sv1.picz.in.th/images/2021/02/02/odi7iu.png",
      view: 3000,
    },
    {
      name: "Monitor Samsung LC27",
      description: "simply dummy text.",
      price: 1000,
      image: "https://sv1.picz.in.th/images/2021/02/02/odiWVR.png",
      view: 3000,
    },
    {
      name: "Monitor Samsung LC27",
      description: "simply dummy text.",
      price: 1000,
      image: "https://sv1.picz.in.th/images/2021/02/02/odgM58.png",
      view: 3000,
    },
    {
      name: "Monitor Samsung LC27",
      description: "simply dummy text.",
      price: 1000,
      image: "https://sv1.picz.in.th/images/2021/02/02/odi7iu.png",
      view: 3000,
    },
    {
      name: "Monitor Samsung LC27",
      description: "simply dummy text.",
      price: 1000,
      image: "https://sv1.picz.in.th/images/2021/02/02/odgM58.png",
      view: 3000,
    },
    {
      name: "Monitor Samsung LC27",
      description: "simply dummy text.",
      price: 1000,
      image: "https://sv1.picz.in.th/images/2021/02/02/odi0Y0.png",
      view: 3000,
    },
    {
      name: "Monitor Samsung LC27",
      description: "simply dummy text.",
      price: 1000,
      image: "https://sv1.picz.in.th/images/2021/02/02/odi7iu.png",
      view: 3000,
    },
    {
      name: "Monitor Samsung LC27",
      description: "simply dummy text.",
      price: 1000,
      image: "https://sv1.picz.in.th/images/2021/02/02/odgM58.png",
      view: 3000,
    },
    {
      name: "Monitor Samsung LC27",
      description: "simply dummy text.",
      price: 1000,
      image: "https://sv1.picz.in.th/images/2021/02/02/odi0Y0.png",
      view: 3000,
    },
    {
      name: "Monitor Samsung LC27",
      description: "simply dummy text.",
      price: 1000,
      image: "https://sv1.picz.in.th/images/2021/02/02/odi7iu.png",
      view: 3000,
    },
  ];

  return (
    <ProductContainer>
      <Menu>
        <p
          style={{ color: current ? "#333333" : null }}
          onClick={() => setCurrent(true)}
        >
          Most viewed products
        </p>
        <p
          className="second-menu"
          style={{ color: current ? null : "#333333" }}
          onClick={() => setCurrent(false)}
        >
          Best selling products
        </p>
      </Menu>
      <ScrollContainer>
        {productData.map((data, index) => (
          <ProductBox>
            <div className="product-detail">
              <div className="number">
                <p>{index + 1}</p>
              </div>
              <div className="image-layouts">
                <img src={data.image} />
              </div>
              <div className="product-name">
                <p>{data.name}</p>
                <p className="description">{data.description}</p>
              </div>
            </div>
            <div className="price">
              <div>
                <p>${data.price.toLocaleString("en-IN")}</p>
                <p className="price-text">Price</p>
              </div>
            </div>

            <div className="view">
              <div>
                <p>{data.view.toLocaleString("en-IN")}</p>
                <p className="price-text">Views</p>
              </div>
            </div>

            <ViewButton>view</ViewButton>
          </ProductBox>
        ))}
      </ScrollContainer>
    </ProductContainer>
  );
};

export default SaleLists;
