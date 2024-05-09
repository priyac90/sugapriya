import {
  TextField,
  Box,
  InputLabel,
  Select,
  MenuItem,
  Button,
  FormControl,
  Input,
} from "@mui/material";
import { Publish } from "@mui/icons-material";
//import { mockDataTeam } from "../../Data/mockData";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Product.css";
import * as React from "react";
const Product = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [image, setImage] = useState(null);
  const [selectedOption, setSelectedOption] = useState("");
  const [mockDataTeamState, setMockDataTeamState] = useState(mockDataTeam);
  useEffect(() => {
    console.log("ID:", id);
    console.log("Users:", user);
    // Find the user data with the matching ID
    const currentUser = mockDataTeamState.find(
      (user) => user.id === parseInt(id)
    );
    setUser(currentUser);
  }, [id, mockDataTeamState]);

  const handleUpdate = () => {
    // Update user logic
    const index = mockDataTeamState.findIndex((item) => item.id === user.id);
    if (index !== -1) {
      const updatedData = [...mockDataTeamState];
      updatedData[index] = user;
      console.log("Updated data:", updatedData);
      // Set the updated data to state
      setMockDataTeamState(updatedData);
    } else {
      console.error("User not found in mockDataTeam");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleImageChange = (e) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      setImage(file);
      const reader = new FileReader();
      reader.onload = (event) => {
        const imgDataURL = event.target.result;
        console.log("New image data URL:", imgDataURL); // Debugging statement
        setUser({ ...user, img: imgDataURL }); // Update the user state with the new image data
        console.log("User state after image update:", user); // Debugging statement
      };
      reader.readAsDataURL(file);
    }
  };
  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  if (!user) return <div>Loading...</div>;

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { mt: 5, width: "25ch", ml: 5 },
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "left",
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        required
        id="Input1"
        label="Required"
        name="Product"
        value={user.Product}
        onChange={handleChange}
        variant="standard"
      />

      <TextField
        required
        id="Input2"
        label="Required"
        name="SKU"
        value={user.SKU}
        onChange={handleChange}
        variant="standard"
      />
      <TextField
        required
        id="Input3"
        label="Required"
        name="Quantity"
        value={user.Quantityonhand}
        onChange={handleChange}
        variant="standard"
      />
      <FormControl sx={{ m: 4, width: "25ch" }}>
        <InputLabel id="dropdown-label">Category</InputLabel>
        <Select
          labelId="dropdown-label"
          id="dropdown"
          value={selectedOption}
          onChange={handleSelectChange}
        >
          <MenuItem value="option1">Option 1</MenuItem>
          <MenuItem value="option2">Option 2</MenuItem>
          <MenuItem value="option3">Option 3</MenuItem>
          <MenuItem value="option4">Option 4</MenuItem>
          <MenuItem value="option5">Option 5</MenuItem>
          {/* Add more MenuItems as needed */}
        </Select>
      </FormControl>
      <TextField
        label="MSRP"
        id="standard-start-adornment"
        sx={{ m: 1, width: "25ch" }}
        name="MSRP"
        variant="standard"
        value={user.MSRP}
        onChange={handleChange}
      />
      <Box sx={{ m: 4, width: "25ch" }}>
        <div className="productUpload">
          <img
            id="product-image"
            alt="Product Image"
            className="productUploadImg"
            src={user.img}
          />
          <label htmlFor="file">
            <Publish />
          </label>
          <input
            type="file"
            id="file"
            style={{ display: "none" }}
            onChange={handleImageChange}
          />
        </div>
        <div className="productDesc">
          <TextField
            className="productDesc"
            label="Enter your Product Description"
            multiline
            rows={4}
            fullWidth
            variant="standard"
            onChange={handleChange}
          />
        </div>
      </Box>
      <Button onClick={handleUpdate}>Update</Button>
    </Box>
  );
};
export default Product;