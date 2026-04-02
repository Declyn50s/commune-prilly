declare module "lucide-react" {
  import * as React from "react";

  export type LucideProps = React.SVGProps<SVGSVGElement> & {
    size?: number | string;
    absoluteStrokeWidth?: boolean;
  };

  export type LucideIcon = React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;

  export const ArrowRight: LucideIcon;
  export const AlertCircle: LucideIcon;
  export const AlertTriangle: LucideIcon;
  export const BadgeInfo: LucideIcon;
  export const Building2: LucideIcon;
  export const CalendarDays: LucideIcon;
  export const CheckCircle2: LucideIcon;
  export const ChevronDown: LucideIcon;
  export const ChevronRight: LucideIcon;
  export const Clock3: LucideIcon;
  export const Download: LucideIcon;
  export const FileCheck: LucideIcon;
  export const FileCheck2: LucideIcon;
  export const FileText: LucideIcon;
  export const Filter: LucideIcon;
  export const Home: LucideIcon;
  export const Mail: LucideIcon;
  export const MapPin: LucideIcon;
  export const MapPinned: LucideIcon;
  export const Menu: LucideIcon;
  export const Phone: LucideIcon;
  export const PhoneCall: LucideIcon;
  export const Recycle: LucideIcon;
  export const Search: LucideIcon;
  export const SearchCode: LucideIcon;
  export const ShieldCheck: LucideIcon;
  export const Sparkles: LucideIcon;
  export const TramFront: LucideIcon;
  export const Trees: LucideIcon;
  export const Users: LucideIcon;
  export const X: LucideIcon;
}
