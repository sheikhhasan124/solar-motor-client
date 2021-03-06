import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";

const Review = () => {
  const { data: reviews, isLoading } = useQuery("reviews", () =>
    fetch("https://enigmatic-dawn-68660.herokuapp.com/review").then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div id="review" className="my-20">
      <h2 className="text-center font-bold text-2xl"><span className="text-amber-500">CUSTOMER</span>  REVIEWS </h2>
      <div className="grid lg:grid-cols-3 gap-5">
        {reviews.map((rev) =>  {
          const {userName, review, img, rating, address } = rev;
          // console.log(rev)
         return (
            <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
              <p>{review}</p>
            </div>
            <div className="flex items-center">
              <div className="px-5 mb-3">
                {" "}
                <img src={img} alt="" />
              </div>
              <div>
                <p>{address}</p>
                <p>{userName}</p>
                <p>Rating{rating}</p>
              </div>
            </div>
          </div>
         )
        })}
      </div>
    </div>
  );
};

export default Review;
