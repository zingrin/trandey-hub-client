import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router";
import {
  FaStar,
  FaShoppingCart,
  FaPlus,
  FaMinus,
  FaArrowLeft,
} from "react-icons/fa";
import Swal from "sweetalert2";

const BestSellerDetails = () => {
  const { id } = useParams();
  console.log("ID:", id);

  const [product, setProduct] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [userRating, setUserRating] = useState(0);

  useEffect(() => {
    if (!id) return;

    setLoading(true);

    fetch(`http://localhost:5000/api/bestSellers/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Product not found");
        return res.json();
      })
      .then((data) => {
        console.log("PRODUCT:", data);

        setProduct(data);
        setReviews(data.reviews || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error:", err);
        setLoading(false);
      });
  }, [id]);

  // ✅ REVIEW SUBMIT
  const handleReviewSubmit = async (e) => {
    e.preventDefault();

    if (userRating === 0) {
      Swal.fire("Error", "Please select rating!", "error");
      return;
    }

    const form = e.target;
    const name = form.userName.value;
    const comment = form.comment.value;

    const newReview = {
      productId: id,
      name,
      rating: userRating,
      comment,
      date: new Date().toLocaleDateString("en-GB"),
    };

    try {
      const res = await fetch("http://localhost:5000/api/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newReview),
      });

      if (res.ok) {
        setReviews([newReview, ...reviews]);
        form.reset();
        setUserRating(0);

        Swal.fire("Success", "Review Added!", "success");
      }
    } catch (err) {
      console.error(err);
    }
  };

  // ✅ LOADING
  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center bg-[#FCF9F3]">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-red-600"></div>
      </div>
    );
  }

  // ✅ NOT FOUND
  if (!product) {
    return (
      <div className="text-center py-20 text-red-500 font-bold text-xl">
        Product Not Found ❌
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-10 bg-[#FCF9F3] min-h-screen text-[#2D3142]">
      {/* Breadcrumb */}
      <div className="flex justify-between items-center mb-8">
        <nav className="text-sm text-gray-500 font-medium">
          Shop &gt; {product.type === "best" ? "Best Seller" : "Sale"} &gt;
          <span className="text-black font-bold"> {product.name}</span>
        </nav>

        <Link
          to="/"
          className="flex items-center gap-2 text-red-500 font-bold hover:underline"
        >
          <FaArrowLeft /> Back
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
        {/* Image */}
        <div className="bg-white p-10 rounded-3xl shadow-sm flex justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="max-h-[400px] object-contain"
          />
        </div>

        {/* Info */}
        <div>
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>

          <div className="flex items-center gap-2 mb-4 text-orange-500">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} />
            ))}
            <span className="text-gray-400 text-sm">
              ({reviews.length} reviews)
            </span>
          </div>

          <div className="mb-6">
            <span className="text-4xl font-bold text-yellow-700">
              ${product.newPrice}
            </span>
            <span className="ml-3 line-through text-gray-400">
              ${product.oldPrice}
            </span>
          </div>

          <p className="text-gray-600 mb-6">{product.description}</p>

          {/* Quantity */}
          <div className="flex gap-4 items-center mb-6">
            <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>
              <FaMinus />
            </button>

            <span>{quantity}</span>

            <button onClick={() => setQuantity(quantity + 1)}>
              <FaPlus />
            </button>
          </div>

          <button className="bg-red-500 text-white px-6 py-3 rounded-xl flex items-center gap-2">
            Add to Cart <FaShoppingCart />
          </button>
        </div>
      </div>

      {/* Reviews */}
      <div className="grid lg:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-bold mb-6">
            Reviews ({reviews.length})
          </h2>

          {reviews.length === 0 && <p>No reviews yet</p>}

          {reviews.map((r, i) => (
            <div key={i} className="mb-4 border-b pb-3">
              <h4 className="font-bold">{r.name}</h4>
              <p className="text-sm text-gray-400">{r.date}</p>
              <p>{r.comment}</p>
            </div>
          ))}
        </div>

        {/* Form */}
        <form onSubmit={handleReviewSubmit}>
          <h2 className="text-xl font-bold mb-4">Add Review</h2>

          <input
            name="userName"
            placeholder="Name"
            className="w-full mb-3 p-2 border"
            required
          />

          <div className="flex gap-2 mb-3">
            {[1, 2, 3, 4, 5].map((s) => (
              <FaStar
                key={s}
                onClick={() => setUserRating(s)}
                className={
                  s <= userRating ? "text-orange-500" : "text-gray-300"
                }
              />
            ))}
          </div>

          <textarea
            name="comment"
            placeholder="Comment"
            className="w-full mb-3 p-2 border"
            required
          />

          <button className="bg-red-500 text-white px-5 py-2 rounded">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default BestSellerDetails;
