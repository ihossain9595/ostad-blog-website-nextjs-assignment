"use client";

import { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import Link from "next/link";

const Header = ({ socials, categories }) => {
  let [keyword, SetKeyword] = useState("");

  const currentDate = new Date();

  return (
    <div>
      <div className="py-2 bg-dark text-white container-fluid">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-4">
              <h6>
                <i className="bi bi-calendar2-check"></i> Today:
                <span>
                  {" "}
                  {currentDate.getDay()}/{currentDate.getMonth()}/{currentDate.getFullYear()}
                </span>
              </h6>
            </div>
            <div className="col-md-4">
              <span className="float-end">
                <a target="_blank" className="text-white" href={socials["facebook"]}>
                  <i className="mx-2 bi bi-facebook"></i>
                </a>
                <a target="_blank" className="text-white" href={socials["youtube"]}>
                  <i className="mx-2 bi bi-youtube"></i>
                </a>
                <a target="_blank" className="text-white" href={socials["x"]}>
                  <i className="mx-2 bi bi bi-twitter"></i>
                </a>
                <a target="_blank" className="text-white" href={socials["linkedin"]}>
                  <i className="mx-2 bi bi-linkedin"></i>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>

      <Navbar expand="lg" className="bg-white sticky-top shadow-sm">
        <div className="container">
          <div className="navbar-brand">
            <img className="nav-logo" src={"/images/logo.svg"} alt="img" />
          </div>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto ms-3 my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
              <Link className="nav-link f-13" href="/">
                Home
              </Link>
              {categories?.map((item, i) => {
                return (
                  <Link key={i} className="nav-link f-13" href={`/category?id=${item["id"]}`}>
                    {item["name"]}
                  </Link>
                );
              })}
            </Nav>
            <div className="d-flex ms-3">
              <div className="input-group">
                <input
                  onChange={(e) => {
                    SetKeyword(e.target.value);
                  }}
                  type="text"
                  className="form-control"
                  placeholder="Search..."
                />
                <Link href={keyword === "" ? "/" : `/search?keyword=${keyword}`} className="btn btn-danger" type="button">
                  <i className="bi bi-search"></i>
                </Link>
              </div>
            </div>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default Header;
