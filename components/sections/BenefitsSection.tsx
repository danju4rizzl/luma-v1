import {
  SectionTitle,
  CustomLottiePlayer,
  IconListItem,
  Container,
} from "@/components";
import benefitsLottie from "@/public/lottie-2.json";

const benefitsList = [
  { title: "Free Consulting With Expert Saving Money" },
  { title: "Online Banking" },
  { title: "Investment Report Every Month" },
  { title: "Saving Money For The Future" },
  { title: "Online Transaction" },
];

export default function BenefitsSection() {
  return (
    <Container className="mb-5 flex flex-col-reverse md:flex-row items-center">
      <div className="sm:pr-8 max-w-lg">
        <SectionTitle title="What Benefits Will You Get" />
        <ul>
          {benefitsList.map(({ title }, index) => (
            <IconListItem title={title} key={index} />
          ))}
        </ul>
      </div>
      <div className="w-full">
        <CustomLottiePlayer src={benefitsLottie} />
      </div>
    </Container>
  );
}
