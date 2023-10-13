import React from "react";
import earning from "./assets/earning.png";
import order from "./assets/orders.png";
import balance from "./assets/balance.jpg";
import totalSale from "./assets/total-sales.png";

const cdata = [
  {
    name: "Earnings",
    amount: "$ 198k",
    percentage: "37.8%",
    image: earning,
  },
  {
    name: "Orders",
    amount: "$ 2.4k",
    percentage: "2%",
    image: order,
  },
  {
    name: "Balance",
    amount: "$ 2.4k",
    percentage: "2%",
    image: balance,
  },
  {
    name: "Total Sales",
    amount: "$ 89k",
    percentage: "11%",
    image: totalSale,
  },
];

const barGraph = [
  { month: "jan", percentage: 50 },
  { month: "feb", percentage: 65 },
  { month: "mar", percentage: 40 },
  { month: "apr", percentage: 72 },
  { month: "may", percentage: 84 },
  { month: "jun", percentage: 93 },
  { month: "jul", percentage: 38 },
  { month: "aug", percentage: 59 },
  { month: "sep", percentage: 75 },
  { month: "oct", percentage: 89 },
  { month: "nov", percentage: 97 },
  { month: "dec", percentage: 68 },
];

const Home = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
              <a
                href="/"
                className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
              >
                <span className="fs-5 d-none d-sm-inline">Dashboard</span>
              </a>
              <ul
                className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
                id="menu"
              >
                <li className="nav-item">
                  <a href="#nav" className="nav-link align-middle px-0">
                    <i className="fs-4 bi-house" />
                    <span className="ms-1 d-none d-sm-inline">Home</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#submenu1"
                    data-bs-toggle="collapse"
                    className="nav-link px-0 align-middle"
                  >
                    <i className="fs-4 bi-speedometer2" />
                    <span className="ms-1 d-none d-sm-inline">Dashboard</span>
                  </a>
                  <ul
                    className="collapse show nav flex-column ms-1"
                    id="submenu1"
                    data-bs-parent="#menu"
                  >
                    <li className="w-100">
                      <a href="#nav" className="nav-link px-0">
                        <span className="d-none d-sm-inline">Item</span> 1
                      </a>
                    </li>
                    <li>
                      <a href="#nav" className="nav-link px-0">
                        <span className="d-none d-sm-inline">Item</span> 2
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#nav" className="nav-link px-0 align-middle">
                    <i className="fs-4 bi-table" />
                    <span className="ms-1 d-none d-sm-inline">Orders</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#submenu2"
                    data-bs-toggle="collapse"
                    className="nav-link px-0 align-middle "
                  >
                    <i className="fs-4 bi-bootstrap" />
                    <span className="ms-1 d-none d-sm-inline">Bootstrap</span>
                  </a>
                  <ul
                    className="collapse nav flex-column ms-1"
                    id="submenu2"
                    data-bs-parent="#menu"
                  >
                    <li className="w-100">
                      <a href="#nav" className="nav-link px-0">
                        <span className="d-none d-sm-inline">Item</span> 1
                      </a>
                    </li>
                    <li>
                      <a href="#nav" className="nav-link px-0">
                        <span className="d-none d-sm-inline">Item</span> 2
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="#submenu3"
                    data-bs-toggle="collapse"
                    className="nav-link px-0 align-middle"
                  >
                    <i className="fs-4 bi-grid" />
                    <span className="ms-1 d-none d-sm-inline">Products</span>
                  </a>
                  <ul
                    className="collapse nav flex-column ms-1"
                    id="submenu3"
                    data-bs-parent="#menu"
                  >
                    <li className="w-100">
                      <a href="#nav" className="nav-link px-0">
                        <span className="d-none d-sm-inline">Product</span> 1
                      </a>
                    </li>
                    <li>
                      <a href="#nav" className="nav-link px-0">
                        <span className="d-none d-sm-inline">Product</span> 2
                      </a>
                    </li>
                    <li>
                      <a href="#nav" className="nav-link px-0">
                        <span className="d-none d-sm-inline">Product</span> 3
                      </a>
                    </li>
                    <li>
                      <a href="#nav" className="nav-link px-0">
                        <span className="d-none d-sm-inline">Product</span> 4
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#nav" className="nav-link px-0 align-middle">
                    <i className="fs-4 bi-people" />
                    <span className="ms-1 d-none d-sm-inline">Customers</span>
                  </a>
                </li>
              </ul>
              <hr />
              <div className="dropdown pb-4">
                <a
                  href="#nav"
                  className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                  id="dropdownUser1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="https://github.com/mdo.png"
                    alt="hugenerd"
                    width={30}
                    height={30}
                    className="rounded-circle"
                  />
                  <span className="d-none d-sm-inline mx-1">loser</span>
                </a>
                <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                  <li>
                    <a className="dropdown-item" href="#nav">
                      New project...
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#nav">
                      Settings
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#nav">
                      Profile
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#nav">
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col py-3" style={{ backgroundColor: "#E7E8ED" }}>
            <div className="four-divs d-flex justify-content-around gap-3 px-4">
              {cdata.map((elem, index) => (
                <div
                  className="bg-light d-flex justify-content-around p-3 w-25"
                  style={{ borderRadius: "10px" }}
                  key={index}
                >
                  <div className="four-images p-2">
                    <img
                      src={elem.image}
                      style={{ width: "70px", height: "70px" }}
                      alt="top-img"
                    />
                  </div>
                  <div>
                    <p className="m-0 p-0 text-secondary">{elem.name}</p>
                    <h4>{elem.amount}</h4>
                    <p className="m-0 p-0 text-secondary">
                      {elem.percentage} this month
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="d-flex gap-4 px-4 my-4">
              <div className="bg-light w-75 p-3 rounded-4">
                <div className="d-flex justify-content-between">
                  <div>
                    <h3 className="fs-4 fw-bold">Overview</h3>
                  </div>
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-light dropdown-toggle text-secondary"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Querterly
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a
                          className="dropdown-item text-secondary"
                          href="#drop"
                        >
                          Anually
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item text-secondary"
                          href="#drop"
                        >
                          Monthly
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <p className="text-secondary">Montly Earnings</p>

                <div
                  className="bar-graph border border-dark w-100 d-flex align-items-baseline"
                  style={{ height: "250px" }}
                >
                  {barGraph.map((bar, index) => (
                    <>
                      <div
                        style={{
                          width: "35px",
                          height: `${(250 * bar.percentage) / 100}px`,
                          backgroundColor: "blueviolet",
                          borderRadius: "10px",
                        }}
                        key={index}
                      ></div>
                      <p className="m-0 p-0 text-secondary">{bar.month}</p>
                    </>
                  ))}
                </div>
              </div>
              <div className="bg-light w-25 p-3 rounded-4">
                <p className="fs-4 fw-bold m-0 p-0">Customers</p>
                <p className="text-secondary">Customers that buy Products</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
