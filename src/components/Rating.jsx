import React, { useEffect, useRef, useState } from "react";
import black_star_icon from "../assets/icons/black_star_icon.svg";
import yellow_star_icon from "../assets/icons/yellow_star_icon.svg";
import empty_star from "../assets/icons/empty_star.svg";
import { FaStarHalfAlt } from "react-icons/fa";
import { BiSolidImageAdd } from "react-icons/bi";
import { reviewEndpoint, reviewImageEndpoint } from "../services/reviewServices";
import { useDispatch, useSelector } from "react-redux";
import cross from '../assets/icons/cross.png';
import { fetchProductData } from "../redux/productSlice";

const Rating = ({ productId }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.items);
  const product = products.find((p) => p.id === productId);
  const [showReview, setShowReview] = useState(false);
  const [selectedRating, setSelectedRating] = useState(0);
  const [selectedImages, setSelectedImages] = useState([]);
  const [description, setDescription] = useState("");
  const [expandedReviewIndex, setExpandedReviewIndex] = useState(null);
  const [showAllReviews, setShowAllReviews] = useState(false);
  const [hoverRating, setHoverRating] = useState(0);
  const [imageSend, setImageSend] = useState([]);
  const [showAllImages, setShowAllImages] = useState(false);


  const fileInputRef = useRef(null);

  const ratingCounts = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
  const totalReviews = product.reviews?.length || 0;

  product.reviews?.forEach((review) => {
    const rating = Math.round(review.rating);
    if (ratingCounts[rating] !== undefined) {
      ratingCounts[rating]++;
    }
  });

  const ratingDistribution = {};
  Object.keys(ratingCounts).forEach((star) => {
    const count = ratingCounts[star];
    ratingDistribution[star] =
      totalReviews > 0 ? Math.round((count / totalReviews) * 100) : 0;
  });

  const handleRating = (i) => setSelectedRating(i + 1);

  // const handleFileChange = (e) => {
  //   const files = Array.from(e.target.files);
  //   files.forEach((file) => {
  //     const reader = new FileReader();
  //     console.log(reader);
  //     reviewImageEndpoint(reader.result)
  //     reader.onloadend = () => {
  //       setSelectedImages((prev) => [...prev, reader.result]);
  //     };
  //     reader.readAsDataURL(file);
  //   });
  // };

  const handleFileChange = async (e) => {
    const files = Array.from(e.target.files);
    const formData = new FormData();

    files.forEach((file) => {
      formData.append('files', file);
    });

    try {
      const response = await reviewImageEndpoint(formData)
      console.log('Upload success:', response.data.files);
      setImageSend(response.data.files);


      files.forEach((file) => {
        const reader = new FileReader();
        console.log(reader);

        reader.onloadend = () => {
          setSelectedImages((prev) => [...prev, reader.result]);

        };
        reader.readAsDataURL(file);
      });
    } catch (error) {
      console.error('Upload failed:', error);
    }
  };

  console.log(selectedImages);
  console.log(imageSend);

  const handleImageDelete = (i) => {
    setSelectedImages((prev) => prev.filter((_, index) => index !== i));
  };

  const handleToPostRating = async () => {
    await reviewEndpoint(productId, selectedRating, description, imageSend);
    dispatch(fetchProductData());
    setShowReview(false);
    setSelectedRating(0);
    setDescription("");
    setSelectedImages([]);
  };

  const toggleExpanded = (index) => {
    setExpandedReviewIndex((prev) => (prev === index ? null : index));
  };

  const handleCloseRating = () => {
    setShowReview(!showReview)
  }

  // const handleImageUpload=()=>{
  //   reviewImageEndpoint()
  // }

  return (
    <div className="relative text-textPrimary">
      <p className="mt-[27px] text-[24px] font-bold">Ratings & Reviews</p>
      <div className="flex items-start gap-6 relative mt-[30px]">
        <div className="flex gap-3 items-center">
          <p className="text-[36px] font-semibold pt-2">
            {product.averageRating || 0}
          </p>
          <img src={black_star_icon} alt="star" className="w-[32px]" />
        </div>

        <div className="flex flex-col gap-2 w-full max-w-[300px]">
          {[5, 4, 3, 2, 1].map((star) => {
            const percent = ratingDistribution[star] || 0;

            return (
              <div key={star} className="flex items-center gap-2">
                <p className="text-sm w-[12px]">{star}</p>
                <img src={black_star_icon} alt="star" className="w-[14px]" />
                <div className="w-full h-[10px] bg-gray-200 rounded overflow-hidden">
                  <div
                    className="h-full bg-yellow-500 rounded"
                    style={{ width: `${percent}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-600 min-w-[32px] text-right">
                  {percent}%
                </p>
              </div>
            );
          })}
        </div>

        <button
          onClick={() => setShowReview(!showReview)}
          className="border px-5 py-3 absolute right-0"
        >
          Rate Product
        </button>
      </div>

      {showReview && (
        <div className="absolute top-0 bg-white w-full border pt-4 px-6 pb-6 z-10">
          <div className="flex justify-between items-center">
            <p className="text-[20px] font-bold ">Rate this product</p>
            <img onClick={handleCloseRating} className="w-5 cursor-pointer" src={cross} alt="" />
          </div>
          <div className="flex gap-5 mt-[18px] cursor-pointer">
            {[1, 2, 3, 4, 5].map((_, index) => (
              <img
                key={index}
                onClick={() => handleRating(index)}
                onMouseEnter={() => setHoverRating(index + 1)}
                onMouseLeave={() => setHoverRating(0)}
                src={
                  (hoverRating || selectedRating) > index
                    ? yellow_star_icon
                    : empty_star
                }
                alt="star"
                className="w-[28px] h-[28px] transition-all duration-200"
              />
            ))}
          </div>

          <p className="border-t pt-[20px] mt-[25px] text-[20px] font-bold">
            Review this product
          </p>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            cols={100}
            rows={10}
            className="border mt-[20px] p-3 w-full"
            placeholder="Description..."
          ></textarea>

          <div className="mt-[22px]">
            <input
              type="file"
              accept="image/*"
              multiple
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
            />
            <div
              onClick={() => fileInputRef.current.click()}
              className="w-16 h-16 bg-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-300 transition rounded"
            >
              <BiSolidImageAdd size={35} />
            </div>

            <div className="flex flex-wrap gap-4 mt-4 relative">
              {selectedImages.map((src, index) => (
                <div className="relative" key={index}>
                  <img
                    src={src}
                    alt="rating"
                    className="w-20 h-20 object-cover rounded"
                  />
                  <p
                    onClick={() => handleImageDelete(index)}
                    className="absolute top-0 right-0 text-2xl text-white font-bold bg-slate-600 w-5 h-5 rounded-full flex items-center justify-center cursor-pointer"
                  >
                    -
                  </p>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={handleToPostRating}
            className="px-8 py-3 bg-orange-500 text-white mt-[36px] text-[20px]"
          >
            Submit
          </button>
        </div>
      )}

      <div className="w-[985px]">
        {(showAllReviews ? product.reviews : product.reviews?.slice(0, 3))?.map(
          (review, index) => {
            const shouldTruncate = review.comment.length > 100;
            const isExpanded = expandedReviewIndex === index;
            const images = review.images || [];
            const imageTruncate = images.length > 3;
            const displayedImages = showAllImages ? images : images.slice(0, 3);
            const displayedText = isExpanded
              ? review.comment
              : review.comment.slice(0, 100);

            return (
              <div className="text-[18px]" key={index}>
                <div className="flex items-center gap-[2px] mt-[45px] h-[24px]">
                  {[1, 2, 3, 4, 5].map((_, i) => {
                    const rating = review.rating;
                    if (rating >= i + 1) {
                      return (
                        <img
                          key={i}
                          src={yellow_star_icon}
                          alt="full star"
                          className="w-[20px] h-[19px]"
                        />
                      );
                    } else if (rating >= i + 0.5) {
                      return <FaStarHalfAlt key={i} size={22} />;
                    } else {
                      return (
                        <img
                          key={i}
                          src={empty_star}
                          alt="empty star"
                          className="w-[20px] h-[19px]"
                        />
                      );
                    }
                  })}
                  <p className="ml-[10px]">{review.rating}</p>
                </div>

                <p className="mt-[16px]">
                  {displayedText}
                  {shouldTruncate && (
                    <span
                      onClick={() => toggleExpanded(index)}
                      className="text-linkPrimary ml-1 underline text-[18px] cursor-pointer"
                    >
                      {isExpanded ? "Read Less" : "Read More"}
                    </span>
                  )}
                </p>

                <div className="mt-[16px] flex gap-4 flex-wrap">
                  {displayedImages.map((img, imgIndex) => (
                    <div key={imgIndex} className="relative">
                      <img
                        src={img}
                        alt={`review-${imgIndex}`}
                        className="w-[140px] h-[140px] rounded-[10px] border object-cover"
                      />

                      {!showAllImages && imageTruncate && imgIndex === 2 && (
                        <div
                          className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 text-white text-[48px] font-semibold flex items-center justify-center rounded-[10px] cursor-pointer"
                          onClick={() => setShowAllImages(true)}
                        >
                          +{images.length - 3}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-[15px]">
                  <span>Annoe</span>
                  <span className="text-textSecondary ml-[6px]">|</span>
                  <span className="ml-[6px]">28 September</span>
                </div>
              </div>
            );
          }
        )}

        {!showAllReviews && product.reviews?.length > 3 && (
          <button
            onClick={() => setShowAllReviews(true)}
            className="text-[24px] mt-[51px] text-linkPrimary font"
          >
            View all Reviews
          </button>
        )}
      </div>
    </div>
  );
};

export default Rating;
