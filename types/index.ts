// Setup types here

import React, { ReactNode } from "react";

export interface NavigationItemsProps {
  title: string;
  url: string;
  isPrimary?: boolean;
  isLink?: boolean;
}

export interface ButtonProps {
  title: string;
  active?: boolean;
}

export interface CustomButtonProps {
  title: string;
  outline?: boolean;
  icon?: ReactNode;
}

export interface CustomLottiePlayerProps {
  src: object;
}

export interface SectionTitleProps {
  title: string;
}

export interface CustomTextProps {
  text: string;
}

export interface RatingProps {
  ratedBy: string;
  rating: number;
}

export interface FeaturesCardProps {
  image: string;
  title: string;
  body: string;
}

export interface TogglerProps {
  title: string;
  active: boolean;
  onClick: () => void;
}

export type TogglerType = "monthly" | "yearly"

export interface CustomListItemProps {
  title: string;
  isSmall?: boolean;
}

export interface PricingCardProps {
  price: string;
  title: string;
  offers: {
    offer: string;
  }[];
  isPopularPlan?: boolean
}
