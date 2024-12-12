import { cn } from "@/lib/utils";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

// Define variants for the label using `class-variance-authority`
const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70", 
  {
    variants: {
      // Control the text size based on the device size
      size: {
        small: "text-sm",  // Mobile devices (sm)
        medium: "text-base", // Tablets (md)
        large: "text-lg", // Desktops (lg and above)
      },
      // Control the text alignment
      alignment: {
        left: "text-left",
        center: "text-center",
        right: "text-right",
      },
    },
    defaultVariants: {
      size: "medium", // Default size is medium for tablets
      alignment: "left", // Default alignment is left
    },
  }
);

// ForwardRef component for Label with responsive variants
const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants>
>(({ className, size, alignment, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(
      labelVariants({ size, alignment }), // Apply size and alignment variants
      className
    )}
    {...props}
  />
));

Label.displayName = LabelPrimitive.Root.displayName;

export { Label };



// import * as React from "react"
// import * as LabelPrimitive from "@radix-ui/react-label"
// import { cva, type VariantProps } from "class-variance-authority"

// import { cn } from "@/lib/utils"

// const labelVariants = cva(
//   "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
// )

// const Label = React.forwardRef<
//   React.ElementRef<typeof LabelPrimitive.Root>,
//   React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
//     VariantProps<typeof labelVariants>
// >(({ className, ...props }, ref) => (
//   <LabelPrimitive.Root
//     ref={ref}
//     className={cn(labelVariants(), className)}
//     {...props}
//   />
// ))
// Label.displayName = LabelPrimitive.Root.displayName

// export { Label }
