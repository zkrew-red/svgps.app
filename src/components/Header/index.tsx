import { NavLink } from "react-router-dom";

import Icon from "src/components/Icon";
import ThemeSwitcher from "src/components/ThemeSwitcher";
import ImportButton from "src/components/ImportButton";

import packageJson from "../../../package.json";

const getActiveClassName = ({ isActive }) =>
  isActive ? "text-purple-700 dark:text-purple-500" : null;

const Header = () => (
  <div className="w-full flex justify-between">
    <div className="flex items-center justify-center select-none cursor-pointer flex-nowrap text-purple-700 dark:text-purple-500">
      <NavLink to="/" className="flex items-center">
        <Icon icon="package" className="w-8 h-8" />
        <span className={`font-bold hidden sm:block`}>
          SVGPS
          <span className="text-xs text-neutral-600 font-thin p-1">
            {packageJson.version}
          </span>
        </span>
      </NavLink>
    </div>
    <nav className="flex items-center gap-3 font-bold text-sm text-neutral-800 dark:text-white">
      <NavLink to="/" className={getActiveClassName}>
        About
      </NavLink>
      <NavLink to="/icons" className={getActiveClassName}>
        Icons
      </NavLink>
      <a
        href="https://github.com/aykutkardas/svgps-online"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
      >
        <Icon
          icon="github"
          className="w-6 h-6 text-neutral-800 dark:text-white"
        />
      </a>
      <ThemeSwitcher />
      <ImportButton />
    </nav>
  </div>
);

export default Header;
