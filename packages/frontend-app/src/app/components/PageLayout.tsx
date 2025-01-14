import React from "react";

import { AppHeader } from "./AppHeader/AppHeader";
import { DesktopSidebar } from "./DesktopSidebar";
import { HeadMarkup } from "./HeadMarkup";

import type { ReactNode } from "react";

interface IProps {
  title: string;
  description?: string;
  children?: ReactNode;
}

export const PageLayout: React.FC<IProps> = ({ title, description }) => {
  return (
    <div className={"mx-0 h-screen grid grid-cols-1 lg:grid-cols-[260px_4fr]"}>
      <HeadMarkup title={title} description={description} />
      <div className="hidden lg:block">
        <DesktopSidebar />
      </div>
      <div>
        <AppHeader />
      </div>
    </div>
  );
};
