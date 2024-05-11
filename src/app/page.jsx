import MainLayout from "@/components/Layout/MainLayout";
import Hero from "@/components/Blog/Hero";
import PopularBlogList from "@/components/Blog/PopularBlogList";
import LatestBlogList from "@/components/Blog/LatestBlogList";

const getData = async () => {
  const sliders = (await (await fetch(`${process.env.HOST}/api/blog/type?type=Slider`)).json())?.data;
  const features = (await (await fetch(`${process.env.HOST}/api/blog/type?type=Featured`)).json())?.data;
  const popularBlogs = (await (await fetch(`${process.env.HOST}/api/blog/type?type=Popular`)).json())?.data;
  const latestBlogs = (await (await fetch(`${process.env.HOST}/api/blog/latest`)).json())?.data;

  return { sliders, features, popularBlogs, latestBlogs };
};

const Home = async () => {
  const { sliders, features, popularBlogs, latestBlogs } = await getData();

  console.log(popularBlogs);
  console.log("+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+"); //

  return (
    <div>
      <MainLayout>
        <Hero sliders={sliders} features={features} />

        <div className="container mt-4">
          <h5>LATEST</h5>
          <hr />
          <div className="row">
            <div className="col-md-9 col-lg-9 col-sm-12 col-12 px-3">
              <LatestBlogList latestBlogs={latestBlogs} />
            </div>
            <div className="col-md-3 col-lg-3 col-sm-12 col-12 px-3">
              <PopularBlogList popularBlogs={popularBlogs} />
            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
};

export default Home;
