import classNames from "classnames";
import { FC } from "react";
import AppLink, { AppLinkTheme } from "shared/ui/AppLink/AppLink";
import styles from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

const Navbar: FC<NavbarProps> = ({ className }) => {
  return (
    <div className={classNames(styles.navbar, className)}>
      <div className={styles.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} to="/" className={styles.link}>
          Главная
        </AppLink>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to="/about"
          className={styles.link}
        >
          О сайте
        </AppLink>
      </div>
    </div>
  );
};

export default Navbar;
