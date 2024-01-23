import React from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

type SelectProps = React.HTMLProps<HTMLSelectElement> & {
  className?: string;
};

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (props, ref) => {
    const { className, ...selectProps } = props;

    return (
      <div className="relative">
        <select
          className={cn(
            "h-10 w-full appearance-none truncate rounded-md border border-input bg-background py-2 pl-3 pr-8 text-sm ring-offset-background hover:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            className,
          )}
          ref={ref}
          {...selectProps}
        />
        <ChevronDown className="absolute right-3 top-3 h-4 w-4 opacity-50" />
      </div>
    );
  },
);

Select.displayName = "Select";

export default Select;
