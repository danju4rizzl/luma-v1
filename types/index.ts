// Setup types here

import { ReactNode } from "react";

export interface CustomButtonProps {
  title: string;
  outline?: boolean;
  icon?: ReactNode
}

export interface CustomLottiePlayerProps {
  src: object
}

export interface SectionTitleProps {
  title: string
}

export interface RatingProps {
  ratedBy: string, rating: number
}


