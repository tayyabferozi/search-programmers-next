import React, { useState } from "react";
import clsx from "clsx";

import Button from "../../../components/Button";
import GridContainer from "../../../components/GridContainer";
import Section from "../../../components/Section";

const PostViewBody = () => {
  const [tabState, setTabState] = useState(0);

  return (
    <Section id="post-view-body">
      <img
        className="bg-left"
        src="/assets/vectors/bg-process-left.svg"
        alt="bg"
      />
      <img
        className="bg-right"
        src="/assets/vectors/bg-process-right.svg"
        alt="bg"
      />
      <img
        className="bg-left-dark"
        src="/assets/vectors/bg-process-left-dark.svg"
        alt="bg"
      />
      <img
        className="bg-right-dark"
        src="/assets/vectors/bg-process-right-dark.svg"
        alt="bg"
      />

      <div className="text-wrap">
        <GridContainer rowClassName="gy-5">
          <div className="col-lg-7">
            <div className="text-wrap">
              <div className="header mb-3">
                <h2>
                  I will create one product shopify store, dropshipping website
                </h2>
              </div>

              <div className="body">
                <img
                  className="w-100"
                  src="/assets/imgs/result-img-1.png"
                  alt="I will create one product shopify store, dropshipping website"
                />

                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Beatae at, odit earum dolorem nulla nisi quibusdam
                  voluptatibus commodi ipsam fuga assumenda, ratione sed quia
                  exercitationem sapiente nam accusamus ex illo.
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam fugit eligendi, vitae optio maiores possimus voluptate
                  iure recusandae unde molestiae similique odio tenetur quo
                  suscipit et temporibus accusamus eum quod obcaecati rerum vel.
                  Optio, non! Et porro atque mollitia explicabo nobis iure
                  voluptates, pariatur adipisci aliquid quod expedita obcaecati
                  commodi ipsa ut ducimus, unde assumenda veritatis sunt
                  repudiandae? Quo quas dolorem enim nesciunt dolor quae,
                  perspiciatis aperiam deleniti velit modi necessitatibus
                  ducimus libero reiciendis officiis non accusamus excepturi
                  incidunt quisquam saepe architecto illum voluptas at. Totam,
                  dolor. Veniam, qui quod ab minus nulla blanditiis maxime
                  dolorum aut amet et perferendis?
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                  voluptatibus, cum iure veritatis, illum nemo, corporis maiores
                  recusandae magnam facere fugit repellat ratione cumque
                  repellendus praesentium alias magni tempora earum doloremque.
                  Iste, magni! Laborum dolores in maiores ex, quis voluptatem
                  fugit obcaecati atque aspernatur, a tenetur aliquam quia
                  vitae? Perspiciatis!
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Iusto, quod?
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                  consequatur optio unde. Odio ratione nesciunt animi repellat?
                  Nesciunt, ipsa at repellat dolore dignissimos officiis,
                  perferendis mollitia totam autem doloremque cumque. Dolorem
                  alias, nobis dolore, ab nemo illo facilis sunt explicabo
                  fugiat sit consequuntur asperiores debitis fugit cum modi ea
                  facere reiciendis aperiam vel esse voluptatem unde doloribus
                  nostrum. Eum rerum minus inventore maiores cum atque, in
                  illum, dolore culpa vel repellat saepe, molestias ducimus
                  ratione. Quae illum laudantium consequatur natus soluta.
                  Tempora, aut? Quasi fugiat odit omnis fugit. Numquam, animi
                  iure! Quia recusandae, eveniet reiciendis explicabo quis iste
                  error inventore facilis porro quaerat eos possimus aspernatur
                  unde, accusantium distinctio magnam nostrum voluptate itaque
                  quasi harum? Soluta nemo voluptatem rem fuga possimus ipsa
                  beatae, cumque repudiandae ipsam cupiditate illum facere
                  adipisci optio, voluptatum recusandae enim vero eos
                  consequatur, dolores aliquid excepturi. Nostrum, dolorum
                  deleniti possimus alias sequi officia dolore molestias sunt
                  voluptate architecto voluptatum doloremque temporibus ratione
                  quisquam recusandae? Exercitationem voluptatem molestias, amet
                  nemo nobis reprehenderit, fugit totam odit dolorum, unde
                  tempora fuga consectetur ut nam quae nesciunt eveniet ex
                  adipisci at doloribus facere. Illo earum repellat non nesciunt
                  provident explicabo, voluptatibus numquam, impedit neque rem
                  unde accusantium, ex deserunt! Illum.
                </p>

                <br />
                <br />

                <ul className="categories_list">
                  <li>web programming</li>
                  <li>designing</li>
                  <li>development</li>
                  <li>art</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="user-info d-flex align-items-center justify-content-start gap-2">
              <img src="/assets/imgs/result-user-img-1.png" alt="Edoardoizzo" />
              <div className="text">
                <strong>Edoardoizzo</strong>
                <div className="fs-16 fw-400 text-primary-1">
                  Top Rated Seller
                </div>
              </div>
            </div>

            <div className="plans  mt-30">
              <div className="tabs">
                {[
                  {
                    text: "Basic",
                  },
                  {
                    text: "Standard",
                  },
                  {
                    text: "Premium",
                  },
                ].map((el, idx) => {
                  return (
                    <div
                      onClick={() => setTabState(idx)}
                      key={"plan-tab" + idx}
                      className={clsx("tab", tabState === idx && "active")}
                    >
                      {el.text}
                    </div>
                  );
                })}
              </div>
              <div className="tab-contents">
                {tabState === 0 && (
                  <div className="tab-content">
                    <h4 className="text-primary-1">$87, 222</h4>
                    <p>Save up to 10% with Subscribe to Save</p>

                    <p className="fs-16 mt-3">
                      <strong className="fs-16">STANDARDart</strong> Black and
                      white or simple colors, detailed. Obtained JPG, PNG and
                      PSD file.
                    </p>

                    <div className="d-flex gap-4 mt-3 flex-wrap">
                      <div className="d-flex align-items-center gap-2">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"></path>
                          <path d="M9 4H7v5h5V7H9V4z"></path>
                        </svg>
                        <strong className="fs-16 text-light-2">
                          10 Days Delivery
                        </strong>
                      </div>

                      <div className="d-flex align-items-center gap-2">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M4.50001 11.4999C6.40001 13.3999 9.60001 13.3999 11.5 11.4999C12.2 10.7999 12.7 9.7999 12.9 8.7999L14.9 9.0999C14.7 10.5999 14 11.8999 13 12.8999C10.3 15.5999 5.90001 15.5999 3.10001 12.8999L0.900012 15.0999L0.200012 8.6999L6.60001 9.3999L4.50001 11.4999Z"></path>
                          <path d="M15.8 7.2999L9.40001 6.5999L11.5 4.4999C9.60001 2.5999 6.40001 2.5999 4.50001 4.4999C3.80001 5.1999 3.30001 6.1999 3.10001 7.1999L1.10001 6.8999C1.30001 5.3999 2.00001 4.0999 3.00001 3.0999C4.40001 1.6999 6.10001 1.0999 7.90001 1.0999C9.70001 1.0999 11.5 1.7999 12.8 3.0999L15 0.899902L15.8 7.2999Z"></path>
                        </svg>
                        <strong className="fs-16 text-light-2">
                          1 Revision
                        </strong>
                      </div>
                    </div>

                    <ul>
                      <li>2 Figures</li>
                      <li>Source File</li>
                      <li>High Resolution</li>
                      <li>Background/Scene</li>
                      <li>Color</li>
                    </ul>

                    <Button primary>Continue</Button>
                  </div>
                )}
                {tabState === 1 && (
                  <div className="tab-content">
                    <h4 className="text-primary-1">$90, 322</h4>
                    <p>Save up to 10% with Subscribe to Save</p>

                    <p className="fs-16 mt-3">
                      <strong className="fs-16">STANDARDart</strong> Black and
                      white or simple colors, detailed. Obtained JPG, PNG and
                      PSD file.
                    </p>

                    <div className="d-flex gap-4 mt-3">
                      <div className="d-flex align-items-center gap-2">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"></path>
                          <path d="M9 4H7v5h5V7H9V4z"></path>
                        </svg>
                        <strong className="fs-16 text-light-2">
                          10 Days Delivery
                        </strong>
                      </div>

                      <div className="d-flex align-items-center gap-2">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M4.50001 11.4999C6.40001 13.3999 9.60001 13.3999 11.5 11.4999C12.2 10.7999 12.7 9.7999 12.9 8.7999L14.9 9.0999C14.7 10.5999 14 11.8999 13 12.8999C10.3 15.5999 5.90001 15.5999 3.10001 12.8999L0.900012 15.0999L0.200012 8.6999L6.60001 9.3999L4.50001 11.4999Z"></path>
                          <path d="M15.8 7.2999L9.40001 6.5999L11.5 4.4999C9.60001 2.5999 6.40001 2.5999 4.50001 4.4999C3.80001 5.1999 3.30001 6.1999 3.10001 7.1999L1.10001 6.8999C1.30001 5.3999 2.00001 4.0999 3.00001 3.0999C4.40001 1.6999 6.10001 1.0999 7.90001 1.0999C9.70001 1.0999 11.5 1.7999 12.8 3.0999L15 0.899902L15.8 7.2999Z"></path>
                        </svg>
                        <strong className="fs-16 text-light-2">
                          1 Revision
                        </strong>
                      </div>
                    </div>

                    <ul>
                      <li>2 Figures</li>
                      <li>Source File</li>
                      <li>High Resolution</li>
                      <li>Background/Scene</li>
                      <li>Color</li>
                    </ul>

                    <Button primary>Continue</Button>
                  </div>
                )}
                {tabState === 2 && (
                  <div className="tab-content">
                    <h4 className="text-primary-1">$10, 000</h4>
                    <p>Save up to 10% with Subscribe to Save</p>

                    <p className="fs-16 mt-3">
                      <strong className="fs-16">STANDARDart</strong> Black and
                      white or simple colors, detailed. Obtained JPG, PNG and
                      PSD file.
                    </p>

                    <div className="d-flex gap-4 mt-3">
                      <div className="d-flex align-items-center gap-2">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"></path>
                          <path d="M9 4H7v5h5V7H9V4z"></path>
                        </svg>
                        <strong className="fs-16 text-light-2">
                          10 Days Delivery
                        </strong>
                      </div>

                      <div className="d-flex align-items-center gap-2">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M4.50001 11.4999C6.40001 13.3999 9.60001 13.3999 11.5 11.4999C12.2 10.7999 12.7 9.7999 12.9 8.7999L14.9 9.0999C14.7 10.5999 14 11.8999 13 12.8999C10.3 15.5999 5.90001 15.5999 3.10001 12.8999L0.900012 15.0999L0.200012 8.6999L6.60001 9.3999L4.50001 11.4999Z"></path>
                          <path d="M15.8 7.2999L9.40001 6.5999L11.5 4.4999C9.60001 2.5999 6.40001 2.5999 4.50001 4.4999C3.80001 5.1999 3.30001 6.1999 3.10001 7.1999L1.10001 6.8999C1.30001 5.3999 2.00001 4.0999 3.00001 3.0999C4.40001 1.6999 6.10001 1.0999 7.90001 1.0999C9.70001 1.0999 11.5 1.7999 12.8 3.0999L15 0.899902L15.8 7.2999Z"></path>
                        </svg>
                        <strong className="fs-16 text-light-2">
                          1 Revision
                        </strong>
                      </div>
                    </div>

                    <ul>
                      <li>2 Figures</li>
                      <li>Source File</li>
                      <li>High Resolution</li>
                      <li>Background/Scene</li>
                      <li>Color</li>
                    </ul>

                    <Button primary>Continue</Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </GridContainer>
      </div>
    </Section>
  );
};

export default PostViewBody;
