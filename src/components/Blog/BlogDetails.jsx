import parse from "html-react-parser";

const BlogDetails = ({ blogDetails }) => {
  return (
    <div>
      <div className="container">
        <h4 className="my-3">{blogDetails["title"]}</h4>
        <hr className="" />
        <div className="row">
          <div className="col-md-12 col-lg-12">
            <img className="w-100" src={blogDetails["image_1"]} />
            {parse(blogDetails["long_description"])}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
