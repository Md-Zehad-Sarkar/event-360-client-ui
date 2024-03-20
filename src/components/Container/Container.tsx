import { cn } from "@/lib/utils";
import { ReactNode } from "react";
type TContainer = {
  children: ReactNode;
  className?: string;
};

const Container = ({ children, className }: TContainer) => {
  return (
    <div className={(cn("w-ful max-w-[1440px] mx-auto md:mx-[40px] lg:mx-[80px]"), className)}>
      {children}
    </div>
  );
};

export default Container;
