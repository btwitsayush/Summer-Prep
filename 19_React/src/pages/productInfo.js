import { useParams, useLocation ,useNavigate} from "react-router-dom";
import NavBar from "../../components/navBar";
import './productInfo.css';
// import useGetProducts from "../hooks/useGetProducts";

const ProductInfo = (props) => {

  const{setSearch,search} =props;




  const location = useLocation();
  const { data } = location.state || {};
  // console.log(data);

  const params = useParams();
  const { id } = params;
  console.log(id);

  const navigate=useNavigate();


//   console.log(typeof(id));

const openSerachPage=()=>{
  navigate('/search')
}

let product = {};
try{
 product =data.find((elem)=>{
    
        return elem.id === parseInt(id)
})
}
catch(err){
  console.log("problem occured");
  console.log(err);
}
  return (
    <>
      <NavBar setSearch={setSearch} search={search} openSerachPage={openSerachPage}/>
      <div className="product-container">
        <div className="product-image">
          <img src={product.thumbnail} alt="Product Image" />
        </div>
        <div className="product-details">
          <h2 className="product-title">{product.title}</h2>
          <p className="product-description">{product.description}</p>
          <p className="product-price">INR : {product.price * 83}</p>
          <p className="product-rating">Rating: {product.rating}</p>
          <p className="product-warranty">Warranty: {product.warrantyInformation}</p>
          <p className="product-availability">Availability: {product.availabilityStatus}</p>
          <p className="product-stocks">Items Left: {product.minimumOrderQuantity}</p>
          <button className="buy-now-button">Buy Now</button>
        </div>
      </div>
      <div className="reviews-container">
        <h3>Customer Reviews</h3>
        {product?.reviews?.map((review, index) => (
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
