import * as React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ProgressiveImage from "react-progressive-image";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const Home = ({ imageDetails, image }) => (
  <>
    <main>
      <div className="container">
        <div className="row center">
          <div className="image-container">
            <div
              className="thumbnail"
              ref={image}
              style={{
                width: imageDetails.width,
                height: imageDetails.height,
              }}
            >
              <div className="frame">
                <Link to={`/model/jimmy-fermin`}>
                  <ProgressiveImage
                    src={require("../images/model1.jpeg")}
                    placeholder={require("../images/model1.jpeg")}
                  >
                    {(src) => (
                      <motion.img
                        src={src}
                        alt="Jimmy Fermin"
                        whileHover={{ scale: 1.1 }}
                        transition={transition}
                      />
                    )}
                  </ProgressiveImage>
                </Link>
              </div>
            </div>
            <motion.div
              exit={{ opacity: 0 }}
              transition={transition}
              className="information"
            >
              <div className="title">Jimmy Fermin</div>
              <div className="location">
                <span>34.454564</span>
                <span>-93.365785</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  </>
);

export default Home;
