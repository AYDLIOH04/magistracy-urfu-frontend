import { aboutData, heroData, professionData } from '@/mocks/program';
import {
  AboutSection,
  EducationPlanSection,
  EmployeesSection,
  FaqSection,
  HeroSection,
  PartnersSection,
  ProfessionSection,
  QuestionSection,
  ReviewsSection,
  EnterInstituteSection,
  TestSection,
} from './(sections)';
import { ScrollButton } from '@/components';

const ProgramPage = ({ params }: { params: { programId: string } }) => {
  return (
    <>
      <HeroSection data={heroData} />
      <AboutSection data={aboutData} />
      <ProfessionSection data={professionData} />
      <TestSection />
      <EducationPlanSection />
      <EmployeesSection />
      <PartnersSection />
      <EnterInstituteSection />
      <ReviewsSection />
      <FaqSection />
      <QuestionSection />
      <ScrollButton />
    </>
  );
};

export default ProgramPage;
