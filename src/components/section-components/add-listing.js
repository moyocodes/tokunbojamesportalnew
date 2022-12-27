import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import useAddListing from '../hooks/landlord/useAddListing';

const AddListing = () => {

 
  const { isActivating, addListing } = useAddListing();

  const [images, setImages] = useState({ file: '', show: '' });


  const detailsState = {
    email: '',
    name: '',
    phone_number: '',
    property_type: '',
    address: '',
    landlord_address: '',
    amount: '',
    occupied: '',
    for_sale: '',
  };
  const [details, setDetails] = useState(detailsState);
  const {
    email,
    name,
    phone_number,
    property_type,
    address,
    landlord_address,
    amount,
    occupied,
    for_sale,    
  } = details;

  const onFileChange = (e) => {
    const { files } = e.target;
    const filesArray = Array.from(e.target.files);
    if (files.length > 1) {
      setImages({
        file: files,
        show: filesArray.map((filer) => filer.name),
      });
    } else {
      setImages({
        file: files,
        show: files[0].name,
      });
    }
  };

//   const handleUser = (e) => {
//     const { value, name } = e.target;
//     setUser({ ...user, [name]: value });
//   };

  const handleDetails = (e) => {
    const { value, name } = e.target;
    setDetails({ ...details, [name]: value });
  };

//   const handleSpaceBar = (e) => {
//     if (e.keyCode === 32) e.preventDefault();
//   };

//   const handleNumber = (e) => {
//     const { name, value } = e.target;
//     if (isNaN(Number(value))) return;
//     setUser({ ...user, [name]: value });
//   };

  const submitAccount = async (e) => {
    e.preventDefault();
    const data = new FormData();
    for (let x = 0; x < images.file.length; x++) {
      data.append('images', images.file[x]);
    }
    // data.append('pole_image', poleimages.file);
    data.append('email', email);
    data.append('name', name);
    data.append('phone_number', phone_number);
    data.append('landlord_address', landlord_address);
    data.append('address', address);
    data.append('property_type', property_type);
    data.append('amount', amount);
    data.append('for_sale', for_sale);
    data.append('occupied', occupied);
    addListing(data);
  };

  const submitForm = () => {
    return (
      email.length > 0 &&
      name.length > 0 &&
      phone_number.length > 0 &&
      address.length > 0 &&
      property_type.length > 0 &&
      for_sale.length > 0 &&
      images.file.length > 0 &&
      landlord_address.length > 0 &&
      amount.length > 0
    );
  };

    return (

     <div className="ltn__appointment-area pb-120">
                <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                    <div className="ltn__appointment-inner">
                        <form onSubmit={submitAccount}>
                        <p><small>All fields are mandatory</small></p>
                        <h6>Personal Information</h6>
                        <div className="row">
                            <div className="col-md-8">
                            <div className="input-item input-item-name ltn__custom-icon">
                                <label>FullName</label>
                                <input type="text"   
                                value={name}
                      name="name"
                      onChange={handleDetails}
                       placeholder="Fullname" />
                            </div>
                            <div className="input-item input-item-name ltn__custom-icon">
                            <label>Email</label>
                                <input type="email"
                                 value={email}
                                 name="email"
                                 onChange={handleDetails}
                                 placeholder="Email" />
                            </div>
                            <div className="input-item input-item-name ltn__custom-icon">
                            <label>Phone Number</label>
                                <input type="tel"
                                 value={phone_number}
                                 name="phone_number"
                                 onChange={handleDetails}
                                placeholder="Phone Number" />
                            </div>
                            <div className="input-item input-item-name ltn__custom-icon">
                            <label>Address</label>
                                <input type="text" 
                                 value={landlord_address}
                                 name="landlord_address"
                                 onChange={handleDetails}
                                  placeholder="Address" />
                            </div>
                            </div>
                        </div>
                        <h6>Property Information</h6>
                        <div className="row">
                            <div className="col-md-6">
                            <div className="input-item input-item-name ltn__custom-icon">
                            <label>Property Type</label>
                            {/* <div className="input-item">
                                <select className="nice-select">
                                <option>None</option>
                                <option>Apartments</option>
                                <option>Condos</option>
                                <option>Duplexes</option>
                                <option>Houses</option>
                                <option>Industrial</option>
                                <option>Land</option>
                                <option>Offices</option>
                                <option>Retail</option>
                                <option>Villas</option>
                                </select>
                            </div> */}
                                <input type="text"
                                value={property_type}
                                 name="property_type"
                                 onChange={handleDetails} placeholder="Property Type" />
                            </div>
                            </div>
                            <div className="col-md-6">
                            <div className="input-item input-item-name ltn__custom-icon">
                            <label>Property Address</label>
                                <input type="text" 
                                  value={address}
                                  name="address"
                                  onChange={handleDetails}
                                   placeholder="Property Address" />
                            </div>
                            </div>
                            <div className="col-md-6">
                            <div className="input-item input-item-name ltn__custom-icon">
                            <label>Property Amount</label>
                                <input type="text"  
                                 value={amount}
                                 name="amount"
                                 onChange={handleDetails}
                                  placeholder="Property Amount" />
                            </div>
                            </div> 
                            <div className="col-md-6">
                            <div className="input-item input-item-name ltn__custom-icon">
                            <label>For Sale/ For rent</label>
                                <input type="text"   value={for_sale}
                                 name="for_sale"
                                 onChange={handleDetails}
                                  placeholder="1 or 0" />
                            </div>
                            </div>
                            <div className="col-md-6">
                            <div className="input-item input-item-name ltn__custom-icon">
                            <label>Occupied</label>
                                <input type="text"   value={occupied}
                                 name="occupied"
                                 onChange={handleDetails}
                                  placeholder="yes or no" />
                            </div>
                            </div>
                        </div>
                       
                        <h2>2. Media</h2>
                        <h6>Listing Media</h6>
                        <input type="file" className="btn theme-btn-3 mb-10"  name="file" multiple onChange={onFileChange} />
                    {images.show ? <small>{images.show}</small> : null}
                    
                        <p>
                            <small>* At least 1 image is required for a valid submission.Minimum size is 500/500px.</small><br />
                            <small>* PDF files upload supported as well.</small><br />
                            <small>* file might take longer to be processed.</small>
                        </p>
                       
                    
{/*               
                        <h2>4. Details</h2>
                        <h6>Listing Details</h6>
                        <div className="row">
                            <div className="col-md-6">
                            <div className="input-item input-item-name ltn__custom-icon">
                                <input type="text" name="ltn__name" placeholder="Size in ft2 (*only numbers)" />
                            </div>
                            </div>
                            <div className="col-md-6">
                            <div className="input-item input-item-name ltn__custom-icon">
                                <input type="text" name="ltn__name" placeholder="Lot Size in ft2 (*only numbers)" />
                            </div>
                            </div>
                            <div className="col-md-6">
                            <div className="input-item input-item-name ltn__custom-icon">
                                <input type="text" name="ltn__name" placeholder="Rooms (*only numbers)" />
                            </div>
                            </div>
                            <div className="col-md-6">
                            <div className="input-item input-item-name ltn__custom-icon">
                                <input type="text" name="ltn__name" placeholder="Bedrooms (*only numbers)" />
                            </div>
                            </div>
                            <div className="col-md-6">
                            <div className="input-item input-item-name ltn__custom-icon">
                                <input type="text" name="ltn__name" placeholder="Bathrooms (*only numbers)" />
                            </div>
                            </div>
                            <div className="col-md-6">
                            <div className="input-item input-item-name ltn__custom-icon">
                                <input type="text" name="ltn__name" placeholder="Custom ID (*text)" />
                            </div>
                            </div>
                            <div className="col-md-6">
                            <div className="input-item input-item-name ltn__custom-icon">
                                <input type="text" name="ltn__name" placeholder="Garages (*text)" />
                            </div>
                            </div>
                            <div className="col-md-6">
                            <div className="input-item input-item-name ltn__custom-icon">
                                <input type="text" name="ltn__name" placeholder="Year Built (*numeric)" />
                            </div>
                            </div>
                            <div className="col-md-6">
                            <div className="input-item input-item-name ltn__custom-icon">
                                <input type="text" name="ltn__name" placeholder="Garage Size (*text)" />
                            </div>
                            </div>
                            <div className="col-md-6">
                            <div className="input-item input-item-name ltn__custom-icon">
                                <input type="text" name="ltn__name" placeholder="Available from (*date)" />
                            </div>
                            </div>
                            <div className="col-md-6">
                            <div className="input-item input-item-name ltn__custom-icon">
                                <input type="text" name="ltn__name" placeholder="Basement (*text)" />
                            </div>
                            </div>
                            <div className="col-md-6">
                            <div className="input-item input-item-name ltn__custom-icon">
                                <input type="text" name="ltn__name" placeholder="Extra Details (*text)" />
                            </div>
                            </div>
                            <div className="col-md-6">
                            <div className="input-item input-item-name ltn__custom-icon">
                                <input type="text" name="ltn__name" placeholder="Roofing (*text)" />
                            </div>
                            </div>
                            <div className="col-md-6">
                            <div className="input-item input-item-name ltn__custom-icon">
                                <input type="text" name="ltn__name" placeholder="Exterior Material (*text)" />
                            </div>
                            </div>
                       
                       
                            
                        </div>
                       */}

                 
        
                        
                        <div className="alert alert-warning d-none" role="alert">
                            Please note that the date and time you requested may not be available. We will contact you to confirm your actual appointment details.
                        </div>
                        <div className="btn-wrapper text-center mt-30">
                        {isActivating ? (
                    <button className="btn theme-btn-1 btn-effect-1 text-uppercase"  type="button" disabled={isActivating}>
                      Submitting...
                    </button>
                  ) : (
                    <button type="submit" className="btn theme-btn-1 btn-effect-1 text-uppercase"  disabled={!submitForm()}>
                    Submit
                    </button>
                  )}
                        </div>
                        </form>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            )
        };


export default AddListing;