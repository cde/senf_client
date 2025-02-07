/** @format */

import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";

import { useTranslation } from "react-i18next";
import { useHistory } from "react-router";

//LazyLoad
import { LazyImage } from "react-lazy-images";

//IMAGES
import TopPath from "../../images/topPathNew.png";
import TopPathBad from "../../images/toppathbad.png";

import First from "../../images/first.png";
import FirstBad from "../../images/firstbad.png";

import Second from "../../images/secondImage.png";
import Third from "../../images/letstalkbubble.png";

import Logo from "../../images/logo.png";

import Insta from "../../images/icons/socialmedia/insta.png";
import Facebook from "../../images/icons/socialmedia/facebook.png";

//IMAGES BAD

import CircularProgress from "@material-ui/core/CircularProgress";

//REDUX STUFF
import { connect } from "react-redux";
import { Link } from "react-router-dom";

//DETECT DEVICE
import { isMobileOnly } from "react-device-detect";

//COOKIES
import Cookies from "universal-cookie";
const cookies = new Cookies();

const styles = {
  wrapper: {
    backgroundColor: "white",
    width: "100vw",
    height: "100vh",
    position: "fixed",
    overflow: "scroll",
  },
  closeButton: {
    zIndex: 9999,
    position: "fixed",
    left: "32px",
    width: "30px",
    marginTop: "18px",
    color: "#ffd388",
    transform: "scale(1.5)",
  },
  nav: {
    width: "100vw",
    height: "80px",
    position: "fixed",
    backgroundColor: "white",
    zIndex: 999,
  },

  PlattformButton2: {
    position: "fixed",
    zIndex: 9999,
    paddingTop: "10px",
    paddingBottom: "10px",
    textAlign: "center",
    width: "50vw",
    left: "25vw",
    bottom: "2em",
    borderRadius: "100px",
    color: "white",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.2)",
    backgroundColor: "#414345",
    textTransform: "none",
    fontSize: "14pt",
  },

  KontaktButton: {
    position: "absolute",
    height: "50px",
    zIndex: 99,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    width: "50vw",
    left: "25vw",
    top: "1670px",
    borderRadius: "100px",
    color: "#414345",
    backgroundColor: "white",
    textTransform: "none",
    fontSize: "14pt",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.2)",
  },

  TopPath: {
    position: "absolute",
    top: "0",
    width: "100vw",
  },

  FirstImage: {
    position: "absolute",
    top: "24vw",
    width: "75vw",
    marginLeft: "15.3vw",
  },
};

const IntroductionInformation = ({ classes }) => {
  const history = useHistory();
  const { t } = useTranslation();

  useEffect(() => {
    if (!isMobileOnly) {
      history.push("/");
    }

    if (
      cookies.get("Cookie_settings") !== "all" &&
      cookies.get("Cookie_settings") !== "minimum"
    ) {
      history.push("/intro");
    }
  }, []);

  return (
    <div className={classes.wrapper}>
      <div className={classes.nav}>
        <h1 className="logo1">
          <img src={Logo} width="100px"></img>
        </h1>
      </div>

      <div className="wrapperMenu">
        <Grid container spacing={0}>
          <Grid item sm={12}>
            <div className="StartBackground" />

            <LazyImage
              src={TopPath}
              className={classes.TopPath}
              width="100%"
              alt="Top_image_person_with_mustard_tube_good_quality"
              placeholder={({ imageProps, ref }) => (
                <img
                  ref={ref}
                  src={TopPathBad}
                  className={classes.TopPath}
                  width="100%"
                  alt="Top_image_person_with_mustard_tube_bad_quality"
                />
              )}
              actual={({ imageProps }) => (
                <img
                  {...imageProps}
                  alt="Top_image_person_with_mustard_tube_good_quality"
                />
              )}
            />

            <div className="FirstWrapper">
              <span className="title1">{t("infopage_block1_title")}</span>

              <span className="subTitle1">{t("infopage_block1_subtitle")}</span>

              <LazyImage
                src={First}
                className="First"
                width="100%"
                alt="First_image_persons_idea_good_quality"
                placeholder={({ imageProps, ref }) => (
                  <img
                    ref={ref}
                    src={FirstBad}
                    className="First"
                    width="100%"
                    alt="First_image_persons_idea_bad_quality"
                  />
                )}
                actual={({ imageProps }) => (
                  <img
                    {...imageProps}
                    alt="First_image_persons_idea_good_quality"
                  />
                )}
              />
            </div>

            <span className="title2">{t("infopage_block2_title")}</span>

            <span className="subTitle2">{t("infopage_block2_subtitle")}</span>
            <img src={Second} className="Second" alt="TopPath" />

            <span className="title3">{t("infopage_block3_title")}</span>

            <span className="subTitle3">{t("infopage_block3_subtitle")}</span>

            <img src={Third} className="Third" alt="TopPath" />

            <Link to="/">
              <button className="ToWishes buttonWide">{t("next")}</button>
            </Link>

            <a href="mailto:dein@senf.koeln">
              <div className={classes.KontaktButton}>{t("contact")}</div>
            </a>

            <span className="footerStart">
              <Link to="/impressum">
                <span className="impressum"> {t("imprint")}</span>
              </Link>
              <Link to="/datenschutz">
                <span className="datenschutz"> | {t("dataPrivacy")} | </span>
              </Link>
              <Link to="/agb">
                <span className="agb"> {t("termsAndConditions")} </span>
              </Link>
            </span>
            <span className="footercopyStart">{t("infopage_illustrator")}</span>
          </Grid>{" "}
        </Grid>
      </div>
    </div>
  );
};

export default withStyles(styles)(IntroductionInformation);
