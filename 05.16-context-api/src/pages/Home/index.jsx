import React, { useContext } from "react";
import { ProductsContext } from "../../context/ProductContext";
import { Card } from "antd";
const { Meta } = Card;
import { Col, Row } from "antd";

const Home = () => {
  const { products, setProducts } = useContext(ProductsContext);
  return (
    <>
      <div id="products">
        <div className="container">
          <div className="products">
            <Row gutter={[16, 16]}>
              {products &&
                products.map((p) => {
                  return (
                    <Col>
                      <Card
                        hoverable
                        style={{
                          width: 240,
                        }}
                        cover={
                          <img alt="example" src={p.thumbnail} style={{}} />
                        }
                      >
                        <Meta title={p.title} description="www.instagram.com" />
                      </Card>
                    </Col>
                  );
                })}
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
