import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";

type LoadingButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  loading: boolean;
};

export default function LoadingButton({
  children,
  loading,
  ...props
}: LoadingButtonProps) {
  return (
    <Button {...props} disabled={props.disabled || loading}>
      <span className="flex items-center justify-center gap-1">
        {loading && <Loader2 className="animate-spin" size={16} />}
        {children}
      </span>
    </Button>
  );
}
