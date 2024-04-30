import { Fragment, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import FilterSelect from "../components/FilterSelect";
import Footer from "../components/Footer/Footer";
import SearchBar from "../components/SeachBar/SearchBar";
import ShopList from "../components/ShopList";
import useWindowScrollToTop from "../hooks/useWindowScrollToTop";
import { products } from "../utils/products";
import './Shop.css';
const Shop = () => {
  const [filterList, setFilterList] = useState(
    products.filter((item) => item.category === "manga")
  );
  useWindowScrollToTop();

  return (
    <Fragment>
      {/* <Banner title="product" /> */}
      <div className="total">
        <section className="filter-bar">
          <div style={{ margin: "75px" }}>
            <Container className="filter-bar-contianer">
              <Row className="justify-content-center">
                <Col md={4}>
                  <FilterSelect setFilterList={setFilterList} />
                </Col>
                <Col md={8}>
                  <SearchBar setFilterList={setFilterList} />
                </Col>
              </Row>
            </Container>
            <Container>
              <ShopList productItems={filterList} />
            </Container>
          </div>
          <div>
            <Footer />
          </div>
        </section>
      </div>

    </Fragment>
  );
};

export default Shop;
