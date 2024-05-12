import React from "react";
import Link from "next/link";

const LatestBlogList = ({ latestBlogs }) => {
  return (
    <div className="row">
      {latestBlogs?.map((item, i) => {
        return (
          <div key={i} className="p-2 col-md-4">
            <div className="card bg-white shadow-sm">
              <img className="card-img-top" src={item["image_3"]} alt="News Image" />
              <div className="card-body">
                <h6 className="card-title">{item["title"]}</h6>
                <p>{item["short_description"]}</p>
                <p className="my-2 fw-bold p-0">
                  <i className="bi bi-clock"></i> 3 Days Ago
                </p>
                <Link href={`/details?id=${item["id"]}`} className="btn mt-2 btn-sm btn-outline-danger">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default LatestBlogList;
