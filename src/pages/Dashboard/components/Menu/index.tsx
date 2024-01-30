import { PropsWithChildren } from "react";
import { DesktopMenu } from "../DesktopMenu";
import { MovilMenu } from "../MovilMenu";

export const Menu = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="hidden lg:block">
        <DesktopMenu>{children}</DesktopMenu>
      </div>
      <div className="lg:hidden">
        <div className="flex justify-end items-center pr-5 mb-5 h-[60px] w-full">
          <MovilMenu />
        </div>
        {children}
      </div>
    </>
  );
};
