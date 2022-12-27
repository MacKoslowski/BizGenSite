import React, { useState } from "react";
import { Carousel, Row, Col, Container, Card, Badge } from "react-bootstrap";
import img1 from "../cityscape.png";
import img2 from "../stock_image.png";
import logo from "../bizgen_logo.png";
import Blog from "./Blog";
import Contact from "./Contact";
import {
  BsShop,
  BsFillLightbulbFill,
  BsCashCoin,
  BsArrowDown,
} from "react-icons/bs";
import Image from "react-bootstrap/Image";
function Home() {
  return (
    <Container style={{ height: "100%" }}>
      <Row style={{ textAlign: "center" }}>
        <img src={logo} className="imgStyle" />
      </Row>
      <Row style={{ textAlign: "center", marginTop: "5em" }}>
        <Col sm={12} md={4}>
          <BsShop size={145} />
          <p className="iconDesc">
            <b>
              We offer a full range of small business and commercial financing
              options for all credit types.
            </b>
          </p>
        </Col>
        <Col sm={12} md={4}>
          <BsFillLightbulbFill size={145} />
          <p className="iconDesc">
            <b>
              We creatively bring solutions to give you the best business loan
              options.
            </b>
          </p>
        </Col>
        <Col sm={12} md={4}>
          <BsCashCoin size={145} />
          <p className="iconDesc">
            <b>Let us do the heavy lifting and save you time and money.</b>
          </p>
        </Col>
      </Row>
      <Row>
        <BsArrowDown size={100} />
      </Row>
      <Row>
        <Col>
          <Card style={{ marginTop: "7em" }}>
            <h1 id="business_loans" className="headerCenter">
              Business Loans
            </h1>
            <div className="longText">
              <h2>SBA Loans </h2> Small business loans are provided by banks and
              SBA certified commercial lenders and backed by the Small Business
              Administration in the USA. There are a variety of loan programs
              for small and existing businesses that haven’t been able to secure
              traditional bank loans. The Small Business Administration (SBA)
              loans offer great terms and favorable rates to small businesses.
              They cap the maximum interest rate a bank or lender can charge to
              help you keep more of your hard earned business revenues. Since
              the government is taking most of the risk, there are certain
              guidelines both the small business, bank or SBA Lender must meet
              before the loan will be funded. Two of the most popular SBA loans
              are 7(a) loans and 504 loans.
            </div>
            <Row>
              <Col sm={12} md={4}>
                <h4 className="headerCenter">SBA 7(a) Loans</h4>
                <ul>
                  <li>
                    Loans up to $5M, SBA will back up to $3.75M. -Terms: 3 to 25
                    Years
                  </li>
                  <li>
                    Rates: 4% - 9% depending on the type of business loan and
                    business credit history
                  </li>
                  <li>
                    Funding - 30 to 60 days depending on quality of paperwork
                    completion, working with the right SBA lender and
                    professional loan expertise.
                  </li>
                  <li>
                    Use of Funds - The 7(a) loans can be used for starting or
                    acquiring an existing business, purchase or construction of
                    a new or used building, working capital for inventory,
                    payroll, fixed assets and leasehold improvements and other
                    uses.
                  </li>
                </ul>
              </Col>
              <Col sm={12} md={4}>
                <h4 className="headerCenter">504 Loans</h4>
                <ul>
                  <li>
                    Loans may be larger but SBA will loan up to $5M. SBA will
                    back 40% of eligible projects costs, Community Development
                    Corporation will back 50% and your small business
                    contributes 10%.
                  </li>
                  <li>Terms 10 - 20 Years.</li>
                  <li>Rates: 5% - 7% (below market rates).</li>
                  <li>
                    Funding - 30 to 60 days - Underwriting goes much more
                    smoothly when requirements are submitted as requested.
                  </li>
                  <li>
                    Use of Funds - The 504 loans are used for long term fixed
                    assets like commercial real estate or large equipment. In
                    some cases long term equipment or owner occupied commercial
                    real estate can be refinanced at or below market prices.
                  </li>
                </ul>
              </Col>
              <Col sm={12} md={4}>
                <h2 className="headerCenter">SBA Micro Loans</h2>
                <ul>
                  <li>Loans are up to $50k.</li>
                  <li>Rates: 6% - 14% (below market rates)</li>
                  <li>Terms - Up to 6 years</li>
                  <li>
                    Use of Funds - The SBA Micro Loans are designated for small
                    businesses and non profit childcare centers starting or
                    expanding. The funds can be used for general business
                    purposes. The SBA designates intermediary lenders which are
                    community based organizations that administer the loans and
                    have their own lending and credit requirements. Small
                    businesses are required to provide collateral and a personal
                    guarantee of the business owner.
                  </li>
                </ul>
              </Col>
            </Row>

            <div className="longText">
              <h2>
                Invoice Financing{" "}
                <Badge pill bg="secondary">
                  New
                </Badge>
              </h2>
              Invoice Financing is a way for a business to improve cash flow
              right away. Businesses can borrow money and use unpaid invoices or
              amounts due from customers for collateral. Companies can use it to
              pay employees, supplies or boost company growth sooner than if
              they waited to get paid. Businesses pay a percentage of the
              invoice as a fee for getting the money up front. Typically the
              lender pays 85% to 95% of the invoice up front and when the
              invoice is paid off they’ll pay the remaining amount minus their
              fee. Invoice financing can solve cash flow challenges when
              customers take awhile to pay their invoice (30, 60 to 90 days).
              It’s also a great way to get much needed capital when other types
              of business credit could be difficult to obtain.
            </div>

            <div className="longText">
              <h2>
                Equipment Financing{" "}
                <Badge pill bg="secondary">
                  New
                </Badge>
              </h2>
              Equipment Financing is a type of loan that is specifically used to
              purchase business related new and used equipment or vehicles.
              Businesses can use it for construction equipment and vehicles,
              manufacturing equipment, dental, veterinarian, medical equipment,
              restaurant equipment, office furniture and fixtures, and computer
              software and hardware equipment. It is often offered at a fixed
              interest rate and a fixed monthly payment making it manageable on
              a businesses cash flow. The loans are more easy to obtain than
              others, the equipment is often used as the collateral allowing
              businesses without great credit to secure financing. Down payments
              vary from 5% to 20% of the cost of the equipment. Another program
              for businesses to use is the Sale and Lease Back. This program
              allows businesses to receive cash for their existing equipment
              then lease it back with a manageable payment. At the end of the
              lease the business regains ownership of the equipment.
            </div>

            <div className="longText">
              <h2>
                Term Loans &nbsp;
                <Badge pill bg="secondary">
                  New
                </Badge>
              </h2>
              Term loans can be used in a variety of ways from adding new
              inventory to expanding your business. One of the advantages of
              term loans is that they can be either unsecured or secured and
              typically close quickly, sometimes within just a few days. While
              these can range from $25,000 to $5,000,000, loans less than
              $100,000 usually only require a credit check, bank statements and
              a short application. The terms range from 6 months to 6 years and
              can vary widely when it comes to interest rate. Unsecured business
              loans that don’t require collateral can be helpful in maneuvering
              business challenges, responding to a business opportunity or when
              there’s an emergency like replacing a piece of equipment urgently.
              Term loans can be a bridge between a traditional longer term loan
              and short term needs.
            </div>
          </Card>
        </Col>
      </Row>
      <Row>
        <Blog />
      </Row>

      <Row>
        <Col>
          <Card>
            <div className="longText">
              <h1 id="about_us" className="headerCenter">
                About Us
              </h1>
              In simple terms, our primary service is helping you get the
              capital you need when you need it. Small and medium sized
              companies can have immediate needs or long term objectives that
              require a partner that’s ready and responsive, yet meticulous in
              their search in framing your choices and the right solution for
              you. In accomplishing your business ambitions and helping you be
              successful in securing the financing you need for your business:
              -We have connections to over 50 partners including banks, finance
              companies, etc. who all have different lending appetites.
              -Experience with all FICO credit spectrums to know the right fit
              for a successful outcome. -Work with Preferred Lending Partners
              with the SBA for small and medium sized businesses. -Responsive
              and Adaptive to your needs -Access to finance companies for small
              business owners that don’t fit traditional bank financing or are
              credit challenged.
            </div>
            <div className="longText">
              <h2 className="headerCenter">Our Committment</h2>
              Communication is everything and we strive to be purposeful and
              ethical to gain your trust. Our approach in growing solid
              relationships is based on integrity and part of our business model
              with our clients, partners and colleagues. To initiate this, we
              utilize transparency throughout the process flow to empower our
              clients each step of the way. Whether we’re working with small or
              medium sized businesses, our focus on innovation and open
              mindedness to improve the customer experience contributes to
              dynamic and synergetic solutions. We invite unique challenges and
              have access to alternate financing to work together to frame and
              create the right funding solution. Our clients will be empowered
              and educated as they shape and forge informed financial decisions
              for their company. Transparency and honesty will create a great
              partnership with our clients as they frame and secure their
              future.
            </div>
          </Card>
        </Col>
      </Row>
      <hr />
      <Row>
        <Contact />
      </Row>
    </Container>
  );
}

export default Home;
