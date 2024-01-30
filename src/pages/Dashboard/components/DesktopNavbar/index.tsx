
import {
  Navbar,
} from "@material-tailwind/react";

export const DesktopNavbar = () => {
  return (
    <Navbar
      placeholder={""}
      className="h-[60px] max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 border-0 border-b-2 border-blue-gray-200  "
      shadow={false}
    >
      <div className="flex items-center justify-end text-blue-gray-900">
        <div className="flex items-center gap-4">
          <div className="mr-4 hidden lg:block">

          </div>
        </div>
      </div>
    </Navbar>
  );
};
