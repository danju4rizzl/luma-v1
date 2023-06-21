import {
  SectionTitle,
  Text,
  Pricing,
  Container,
} from "@/components";

export default function PricingSection() {
  return (
    <Container className="py-24">
      <div className="text-center">
        <SectionTitle title={`Choose Plan That's Right For You`} />
        <Text text="Choose a plan that works best for you, feel free to contact us" />
      </div>
      <Pricing />
    </Container>
  );
}
