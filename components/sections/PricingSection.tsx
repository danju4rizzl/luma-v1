import {
  SectionTitle,
  CustomText,
  Pricing,
  SectionContainer,
} from "@/components";

export default function PricingSection() {
  return (
    <SectionContainer className="py-24">
      <div className="text-center">
        <SectionTitle title={`Choose Plan That's Right For You`} />
        <CustomText text="Choose a plan that works best for you, feel free to contact us" />
      </div>
      <Pricing />
    </SectionContainer>
  );
}