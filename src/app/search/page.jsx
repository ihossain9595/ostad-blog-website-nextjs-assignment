import MainLayout from "@/components/Layout/MainLayout";
import PopularBlogList from "@/components/Blog/PopularBlogList";
import LatestBlogList from "@/components/Blog/LatestBlogList";

const getData = async (keyword) => {
  const blogs = (await (await fetch(`${process.env.HOST}/api/blog/search?keyword=${keyword}`)).json())?.data;
  const popularBlogs = (await (await fetch(`${process.env.HOST}/api/blog/type?type=Popular`)).json())?.data;

  return { blogs, popularBlogs };
};

const Search = async ({ searchParams }) => {
  const keyword = searchParams["keyword"];

  const { blogs, popularBlogs } = await getData(keyword);

  return (
    <MainLayout>
      <div className="container mt-4">
        <h5>LATEST</h5>
        <hr />
        <div className="row">
          <div className="col-md-9 col-lg-9 col-sm-12 col-12 px-3">
            <LatestBlogList latestBlogs={blogs} />
          </div>
          <div className="col-md-3 col-lg-3 col-sm-12 col-12 px-3">
            <PopularBlogList popularBlogs={popularBlogs} />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Search;
