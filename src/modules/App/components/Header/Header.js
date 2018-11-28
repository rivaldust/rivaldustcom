import React from "react";
import PropTypes from "prop-types";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { CssConcat } from "../../../../utils/CssConcat";
import HeaderImage from "../../resources/rival_dust_icon_header.png";

export function Header(props, context) {
	const siteTitleCss = CssConcat(styles["vert-center"], styles["site-title"]);
	const siteLinksCss = CssConcat(styles.link);
	return (
		<nav className={styles["cg-nav"]}>
			<div className={styles.header}>
				<div className={styles.content}>
					<figure>
						<img
							className={`${styles["vert-center"]} ${
								styles["header-logo"]
							}`}
							src={HeaderImage}
						/>
					</figure>
					<h1 className={siteTitleCss}>
						<Link to="/">Rival Dust</Link>
					</h1>
					<div className={siteLinksCss}>
						<Link to="/Blog">Blog</Link>
						<Link to="/Games">Games</Link>
						<Link to="/About">About&nbsp;Us</Link>
					</div>
				</div>
			</div>
		</nav>
	);
}

Header.contextTypes = {
	router: PropTypes.object
};

Header.propTypes = {};

export default Header;
