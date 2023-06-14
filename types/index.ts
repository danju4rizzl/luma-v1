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

export interface CustomTextProps {
  text: string
}

export interface RatingProps {
  ratedBy: string, rating: number
}

export interface FeaturesCardProps {
  image: string;
  title: string;
  body: string;
}


