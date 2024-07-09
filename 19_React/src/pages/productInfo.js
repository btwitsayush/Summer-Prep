import { useParams,useNavigate} from "react-router-dom";
import NavBar from "../../components/navBar";
import './productInfo.css';
import useGetProductsById from "../hooks/useGetProductById";
// import useGetProducts from "../hooks/useGetProducts";

const ProductInfo = () => {


  const params = useParams();
  const { id } = params;
  console.log(id);

  const productInfoByID= useGetProductsById(id);
  console.log(productInfoByID);

  const navigate=useNavigate();


//   console.log(typeof(id));

const openSerachPage=()=>{
  navigate('/search')
}

  return (
    <>
      <NavBar />
      <div className="product-container">
        <div className="product-image">
          <img src={productInfoByID.thumbnail} alt="Product Image" />
        </div>
        <div className="product-details">
          <h2 className="product-title">{productInfoByID.title}</h2>
          <p className="product-description">{productInfoByID.description}</p>
          <p className="product-price">INR : {productInfoByID.price * 83}</p>
          <p className="product-rating">Rating: {productInfoByID.rating}</p>
          <p className="product-warranty">Warranty: {productInfoByID.warrantyInformation}</p>
          <p className="product-availability">Availability: {productInfoByID.availabilityStatus}</p>
          <p className="product-stocks">Items Left: {productInfoByID.minimumOrderQuantity}</p>
          <button className="buy-now-button">Buy Now</button>
        </div>
      </div>
      <div className="reviews-container">
        <h3>Customer Reviews</h3>
        {/* here i a, using optional chaning */}
        {productInfoByID?.reviews?.map((review, index) => (
          <div key={index} className="review">
            <p className="review-rating">Rating: {review.rating}</p>
            <p className="review-comment">{review.comment}</p>
            <p className="review-date">Date: {new Date(review.date).toLocaleDateString()}</p>
            <p className="review-author">Reviewed by: {review.reviewerName}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductInfo;
