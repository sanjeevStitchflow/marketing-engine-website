import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const containerVariants = cva("h-full mx-auto px-4 md:px-20 lg:px-8", {
  variants: {
    variant: {
      contained: "w-full max-w-[1400px] mx-auto",
      fullWidth: "max-w-full",
    },
  },
  defaultVariants: {
    variant: "contained",
  },
});

interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {
  paddingTop?: string;
  paddingBottom?: string;
}

export default function Container(props: ContainerProps) {
  const { variant, className, paddingTop, paddingBottom, children } = props;

  const paddingTopStyles = {
    "pt-0": paddingTop === "none",
    "pt-7": paddingTop === "small",
    "pt-14 md:pt-20": paddingTop === "medium",
    "pt-16 md:pt-28": paddingTop === "default",
    "pt-16 md:pt-28 lg:pt-36": paddingTop === "large",
  };

  const paddingBottomStyles = {
    "pb-0": paddingBottom === "none",
    "pb-7": paddingBottom === "small",
    "pb-14 md:pb-20": paddingBottom === "medium",
    "pb-16 md:pb-28": paddingBottom === "default",
    "pb-16 md:pb-28 lg:pb-36": paddingBottom === "large",
  };

  return (
    <div
      className={cn(
        paddingTopStyles,
        paddingBottomStyles,
        containerVariants({ variant, className })
      )}
    >
      {children}
    </div>
  );
}
