import { PropsWithChildren } from "react";
import { Sidebar } from "../SiderBar";
import { DesktopNavbar } from "../DesktopNavbar";

export const DesktopMenu = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full">
        <DesktopNavbar />
        <div className="h-[calc(100vh-60px)] overflow-auto pb-10">
          {children}
        </div>
      </div>
    </div>
  );
};
