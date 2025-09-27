import HomeHeroSlider from "../../Components/SectionComponents/HomePageSections/HomeHeroSlider/HomeHeroSlider";
import InstituteFeaturesCard from "../../Components/UI/Cards/InstituteFeaturesCard/InstituteFeaturesCard";
import Notice from "../../Components/SectionComponents/HomePageSections/Notice/Notice";
import AllDepartment from "../../Components/Shared/AllDepartment/AllDepartment";
import GoogleMap from "../../Components/Shared/GoogleMap/GoogleMap";
import Video from "../../Components/Video/Video";
import ActionButton from "../../Components/UI/ActionButton/ActionButton";
import SectionTitle from "../../Components/Shared/Titles/SectionTitle/SectionTitle";
import StudentsTestimonial from "../../Components/Widgets/StudentsTestimonial/StudentsTestimonial";
import GeneralParagraphText from "../../Components/Shared/GeneralParagraphText/GeneralParagraphText";
import InstituteInfo from "../../Components/SectionComponents/HomePageSections/InstituteInfo/InstituteInfo";
import WhyReadDiploma from "../../Components/SectionComponents/HomePageSections/WhyReadDiploma/WhyReadDiploma";
// json Data
import instituteFeaturesData from "../../Data/HomePageJsonData/instituteFeatures.json";
import instituteInfoData from "../../Data/HomePageJsonData/instituteInfo.json";
import HostelSection from "../../Components/SectionComponents/HomePageSections/Hostel/Hostel";

const HomePage = () => {
  const { features } = instituteFeaturesData.instituteFeaturesInfo;
  const { instituteInfo } = instituteInfoData;

  return (
    <main className="home-page">
      {/* Hero Section */}
      <header className="-mt-10">
        <HomeHeroSlider />
      </header>

      {/* Notice Section */}
      <section aria-label="Institute Notices">
        <Notice />
      </section>

      {/* Department Section */}
      <section aria-label="Departments">
        <AllDepartment />
      </section>

      {/* Institute Info  */}
      <section
        className="w-full px-4 lg:px-12 py-16 bg-white"
        aria-label="Institute Info"
      >
        <h2 className="text-center mb-12">
          <SectionTitle title={"ইন্সটিটিউট সম্পর্কে"} />
        </h2>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <article className="lg:w-1/2 flex flex-col gap-6 text-justify">
            <InstituteInfo instituteInfo={instituteInfo} />
          </article>

          <aside className="lg:w-1/2 w-full h-[300px] lg:h-[350px]">
            <GoogleMap className="w-full h-full rounded-xl shadow-lg" />
          </aside>
        </div>
      </section>

      {/* Institute Features */}
      <section className=" py-15  bg-gray-100" aria-label="Institute Features">
        <h2 className="text-center  mx-auto">
          <SectionTitle title={"বিশেষ সুবিধা ও বৈশিষ্ট্য"} />
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
          {features &&
            features.slice(0, 4).map((feature) => (
              <article className=" md:w-[360px] lg:w-[490px]" key={feature.id}>
                <InstituteFeaturesCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              </article>
            ))}
        </div>
        <div className="flex justify-center mt-15">
          <ActionButton link="#" />
        </div>
      </section>

      {/* Campus Video Section */}
      <section
        className="px-[15px] lg:px-[50px] py-[60px]"
        aria-label="Campus Videos"
      >
        <div>
          <SectionTitle title={"এক নজরে ক্যাম্পাস ট্যুর"} />
        </div>
        <Video />

        {/* Local Video */}
        {/* <div className="mt-12">
          <Video src={sampleVideo} controls autoPlay muted loop />
        </div> */}
      </section>

      <section>
        <HostelSection />
      </section>

      {/* Why Read Diploma */}
      <section className="px-[15px] bg-gray-100" aria-label="Why Read Diploma">
        <WhyReadDiploma />
      </section>

      {/* Student Testimonial */}
      <section className="py-[60px] bg-white" aria-label="Students Testimonial">
        <div>
          <SectionTitle title={"শিক্ষার্থীদের মতামত"} />
        </div>
        <div>
          <GeneralParagraphText
            text={
              "আমাদের প্রাক্তন ও বর্তমান শিক্ষার্থীরা ক্যাম্পাসের পরিবেশ, শিক্ষকদের আন্তরিকতা, আধুনিক ল্যাব ও ব্যবহারিক ক্লাসের মান এবং অন্যান্য সুযোগ-সুবিধা নিয়ে তাদের মূল্যবান মতামত শেয়ার করেছেন। এখানে শিক্ষার্থীরা কেবল জ্ঞান অর্জন করে না, বরং ব্যক্তিগত দক্ষতা, নেতৃত্বগুণ এবং ভবিষ্যতের জন্য নিজেকে প্রস্তুত করে তোলে।"
            }
          />
        </div>
        <div>
          <StudentsTestimonial />
        </div>
        <div className="flex justify-center mt-10">
          <ActionButton text={"আরও পড়ুন..."} link="/all_testimonial" />
        </div>
      </section>
    </main>
  );
};

export default HomePage;
