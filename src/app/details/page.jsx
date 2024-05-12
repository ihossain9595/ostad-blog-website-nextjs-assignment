import MainLayout from "@/components/Layout/MainLayout";
import PopularBlogList from "@/components/Blog/PopularBlogList";
import BlogDetails from "@/components/Blog/BlogDetails";

const getData = async (id) => {
  const blogDetails = (await (await fetch(`${process.env.HOST}/api/blog/details?id=${id}`)).json())?.data;
  const popularBlogs = (await (await fetch(`${process.env.HOST}/api/blog/type?type=Popular`)).json())?.data;

  return { blogDetails, popularBlogs };
};

const Details = async ({ searchParams }) => {
  const id = searchParams["id"];

  const { blogDetails, popularBlogs } = await getData(id);
  return (
    <MainLayout>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-9 col-lg-9 col-sm-12 col-12 px-3">
            <BlogDetails blogDetails={blogDetails} />
          </div>
          <div className="col-md-3 col-lg-3 col-sm-12 col-12 px-3">
            <PopularBlogList popularBlogs={popularBlogs} />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Details;
