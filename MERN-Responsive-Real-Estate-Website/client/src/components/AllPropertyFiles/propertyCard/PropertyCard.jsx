import React, { useEffect,useState } from 'react';
import classes from './propertyCard.module.css';
import { Link } from 'react-router-dom';
import person from '../../../assets/person.jpg';
import { AiOutlineHeart } from 'react-icons/ai';

const PropertyCard = ({ property }) => {
  const [formattedPrice, setFormattedPrice] = useState("");
  const ownerProfileImg = property?.currentOwner?.profileImg;
  const isVerified = property?.isVerified;
  const formatPrice = property?.price;

  // Function to format the price with the NPR symbol (रू) and appropriate units
  function formatPriced(price) {
    if (price >= 10000000 && price < 100000000) {
      return `रू ${(price / 10000000).toFixed(2)} Cr`;
    } else if (price >= 100000000) {
      return `रू ${(price / 100000000).toFixed(2)} Arab`;
    } else if (price >= 100000) {
      return `रू ${(price / 100000).toFixed(2)} Lakh`;
    } else {
      return `रू ${price}`;
    }
  }

  useEffect(() => {
    // Format the price when the component mounts
    const formattedPrice = formatPriced(formatPrice);
    setFormattedPrice(formattedPrice);
  }, [formatPrice]);

  return isVerified ? (
    <div className={classes.containerProperty}>
      <div key={property._id} className={classes.property}>
        <Link to={`/propertyDetail/${property._id}`} className={classes.imgContainer}>
          <img src={`http://localhost:5000/images/${property?.img}`} alt="" />
        </Link>
        <div className={classes.details}>
          <div className={classes.priceAndOwner}>
            <span className={classes.price}>{formattedPrice}</span>
            <img src={ownerProfileImg ? `http://localhost:5000/images/${ownerProfileImg}` : person} className={classes.owner} alt='' />
          </div>
          <div className={classes.moreDetails}>
            <span>BHK: {property.BHK}</span>
            <span>{property.sqmeters} square meters</span>
          </div>
          <div className={classes.desc}>
            <span>Location: {property.location}</span>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <p className={classes.paragraphs}></p>
  );
};

export default PropertyCard;
