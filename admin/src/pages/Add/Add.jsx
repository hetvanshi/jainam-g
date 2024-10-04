import React, { useState } from "react";
import "./Add.css";
import { assets } from "../../assets/assets";
import axios from "axios";
import { toast } from "react-toastify";

const Add = ({ url }) => {
  const [image, setImage] = useState(null); // Initialize as null for no image

  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    weight: "",
    category: "Classic Khakhras",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("weight", Number(data.weight));
    formData.append("category", data.category);
    formData.append("image", image);
    try {
      const response = await axios.post(`${url}/api/food/add`, formData);
      if (response.data.success) {
        setData({
          name: "",
          description: "",
          price: "",
          weight: "",
          category: "Classic Khakhras",
        });
        setImage(null);
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error("Error uploading the form data:", error);
    }
  };

  return (
    <div className="add">
      <form className="flex-col" onSubmit={onSubmitHandler}>
        <div className="add-img-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt=""
              width="120px"
            />
          </label>
          <input
            onChange={onImageChange}
            type="file"
            name="image"
            id="image"
            className="hidden-input"
            required
          />
        </div>
        <div className="add-product-name flex-col">
          <p>Product name</p>
          <input
            onChange={onChangeHandler}
            value={data.name}
            type="text"
            name="name"
            placeholder="Type here"
          />
        </div>
        <div className="add-product-description flex-col">
          <p>Product description</p>
          <textarea
            onChange={onChangeHandler}
            value={data.description}
            name="description"
            rows="6"
            placeholder="Write content here"
            required
          ></textarea>
        </div>
        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Product category</p>
            <select onChange={onChangeHandler} name="category">
              <option value="Classic Khakhras">Classic Khakhras</option>
              <option value="Flavored">Flavored</option>
              <option value="Spicy Khakhras">Spicy Khakhras</option>
              <option value="Combo Packs">Combo Packs</option>
              <option value="Diet Khakhras">Diet Khakhras</option>
              <option value="Kids' Favorites">Kids' Favorites</option>
              <option value="Regular">Regular</option>
            </select>
          </div>
          <div className="add-price flex-col">
            <p>Product price</p>
            <input
              onChange={onChangeHandler}
              value={data.price}
              type="number"
              name="price"
              placeholder="₹120"
            />
          </div>
          <div className="add-weight flex-col">
            <p>Product weight</p>
            <input
              onChange={onChangeHandler}
              value={data.weight}
              type="number"
              name="weight"
              placeholder="250"
            />
          </div>
        </div>
        <button type="submit" className="add-btn">
          ADD
        </button>
      </form>
      <style jsx>{`
        .hidden-input {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default Add;

// import React, { useState } from "react";
// import "./Add.css";
// import { assets } from "../../assets/assets";
// import axios from "axios";

// const Add = () => {
//   const url = "http://localhost:4000";

//   const [image, setImage] = useState(false);

//   const [data, setData] = useState({
//     name: "",
//     description: "",
//     price: "",
//     weight: "",
//     category: "Classic Khakhras",
//   });

//   const onChangeHandler = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     setData((data) => ({ ...data, [name]: value }));
//   };

//   const onSubmitHandler = async (event) => {
//     event.preventDefault();
//     const formData = new FormData();
//     formData.append("name", data.name);
//     formData.append("description", data.description);
//     formData.append("price", Number(data.price));
//     formData.append("weight", Number(data.weight));
//     formData.append("category", data.category);
//     formData.append("image", image);
//     const response = await axios.post(`${url}/api/food/add`, formData);
//     if (response.data.success) {
//       setData({
//         name: "",
//         description: "",
//         price: "",
//         weight: "",
//         category: "Classic Khakhras",
//       });
//       setImage(false);
//     }
//   };

//   return (
//     <div className="add">
//       <form className="flex-col" onSubmit={onSubmitHandler}>
//         <div className="add-img-upload flex-col">
//           <p>Upload Image</p>
//           <label htmlFor="image">
//             <img
//               src={image ? URL.createObjectURL(image) : assets.upload_area}
//               alt=""
//             />
//           </label>
//           <input
//             onClick={(e) => setImage(e.target.files[0])}
//             type="file"
//             name="image"
//             id="image"
//             hidden
//             required
//           />
//         </div>
//         <div className="add-product-name flex-col">
//           <p>Product name</p>
//           <input
//             onChange={onChangeHandler}
//             value={data.name}
//             type="text"
//             name="name"
//             placeholder="Type here"
//           />
//         </div>
//         <div className="add-product-description flex-col">
//           <p>Product description</p>
//           <textarea
//             onChange={onChangeHandler}
//             value={data.description}
//             name="description"
//             rows="6"
//             placeholder="Write content here"
//             required
//           ></textarea>
//         </div>
//         <div className="add-category-price">
//           <div className="add-category flex-col">
//             <p>Product category</p>
//             <select onChange={onChangeHandler} name="category">
//               <option value="Classic Khakhras">Classic Khakhras</option>
//               <option value="Flavored">Flavored</option>
//               <option value="Spicy Khakhras">Spicy Khakhras</option>
//               <option value="Combo Packs">Combo Packs</option>
//               <option value="Diet Khakhras">Diet Khakhras</option>
//               <option value="Kids' Favorites">Kids' Favorites</option>
//               <option value="Regular">Regular</option>
//             </select>
//           </div>
//           <div className="add-price flex-col">
//             <p>Product price</p>
//             <input
//               onChange={onChangeHandler}
//               value={data.price}
//               type="number"
//               name="price"
//               placeholder="₹120"
//             />
//           </div>
//           <div className="add-weight flex-col">
//             <p>Product weight</p>
//             <input
//               onChange={onChangeHandler}
//               value={data.weight}
//               type="number"
//               name="weight"
//               placeholder="250"
//             />
//           </div>
//         </div>
//         <button type="submit" className="add-btn">
//           ADD
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Add;
