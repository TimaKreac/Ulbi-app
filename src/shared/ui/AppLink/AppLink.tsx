import classNames from "classnames";
import { FC } from "react";
import { Link, LinkProps } from "react-router-dom";
import styles from "./AppLink.module.scss";

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

const AppLink: FC<AppLinkProps> = (props) => {
  const {
    to,
    className,
    children,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
  } = props;

  return (
    <Link
      to={to}
      className={classNames(styles.link, styles[theme], className)}
      {...otherProps}
    >
      {children}
    </Link>
  );
};

export default AppLink;
