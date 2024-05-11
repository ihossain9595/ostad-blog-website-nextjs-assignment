import Link from "next/link";
import Subscribe from "@/components/Footer/Subscribe";

const Footer = ({ socials, categories }) => {
  return (
    <div className="section-footer">
      <div className="py-5 bg-dark">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6  p-3">
              <h5 className="text-white fw-bold my-3"> ABOUT </h5>
              <p className="text-white"> {socials["about"]} </p>
              <div className="d-flex justify-content-center justify-content-sm-start">
                <div className="d-flex align-items-center">
                  <a target="_blank" href={socials["facebook"]}>
                    <div className="d-flex justify-content-center align-items-center">
                      <i className=" h3 text-white bi bi-facebook"></i>
                    </div>
                  </a>
                  <a target="_blank" href={socials["youtube"]}>
                    <div className="d-flex justify-content-center align-items-center">
                      <i className="h3 text-white  mx-2 bi bi-youtube"></i>
                    </div>
                  </a>
                  <a target="_blank" href={socials["x"]}>
                    <div className="d-flex justify-content-center align-items-center">
                      <i className=" h3 text-white mx-2 bi bi-twitter"></i>
                    </div>
                  </a>
                  <a target="_blank" href={socials["linkedin"]}>
                    <div className="d-flex justify-content-center align-items-center">
                      <i className=" h3 text-white mx-2 bi bi-linkedin"></i>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 p-3">
              <h5 className="text-white fw-bold my-3">RECOMMENDED</h5>
              {categories?.map((item, i) => {
                if (i < 4) {
                  return (
                    <Link key={i} className="nav-link text-white my-1" href={`/category?id=${item["id"]}`}>
                      {item["name"]}
                    </Link>
                  );
                }
              })}
            </div>
            <div className=" col-md-3 col-sm-6 p-3">
              <h5 className="text-white fw-bold my-3">RECOMMENDED</h5>
              {categories?.map((item, i) => {
                if (i > 3 && i < 8) {
                  return (
                    <Link key={i} className="nav-link text-white my-1" href={`/category?id=${item["id"]}`}>
                      {item["name"]}
                    </Link>
                  );
                }
              })}
            </div>
            <div className="col-md-3 col-sm-6 p-3">
              <Subscribe />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
