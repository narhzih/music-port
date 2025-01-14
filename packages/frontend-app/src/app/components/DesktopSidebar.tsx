import React from "react";

import { Button } from "./Button/Button";
import { DiscoverIcon, LogoIcon, ConvertIcon } from "./icons";

import { constructURL } from "../../utils/url";
import { routeIds } from "../routes";

export const DesktopSidebar: React.FC = () => {
  return (
    <aside className="px-6 py-4 bg-secondary300 w-full h-full relative border-r-secondary100 border-r">
      <LogoIcon />
      <ul className="mt-5">
        <li>
          <Button
            variant="transparent"
            to={constructURL({ routeId: routeIds.discover })}
            fullWidth
            icon={<DiscoverIcon size={20} />}
            focused
          >
            Discover
          </Button>
        </li>
        <li>
          <Button
            variant="transparent"
            to={constructURL({ routeId: routeIds.discover })}
            icon={<ConvertIcon size={20} />}
            fullWidth
          >
            Convert
          </Button>
        </li>
      </ul>
    </aside>
  );
};
