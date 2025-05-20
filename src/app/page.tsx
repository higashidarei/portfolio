import MvAnimation from "@/components/effects/MvAnimation";
import ContactIcon from "@/components/effects/ContactIcon";
import ServiceSlide from "@/sections/service/ServiceSlide";
import WorksSlide from "@/sections/works/WorksSlide";

export default function HomePage() {
  return (
    <>
      <div className="stars-bg"></div>
      <div className="mv">
        <div className="l-inner">
          <MvAnimation />
        </div>
      </div>

      <section className="service">
        <div className="l-inner">
          <ServiceSlide />
        </div>
      </section>

      <div className="service-spacer" />

      <section className="works">
        <div className="l-inner">
          <h2 className="heading-A">Works</h2>
          <WorksSlide />
        </div>
      </section>

      <section className="contact">
        <div className="contact__scroll-border"></div>
        <p className="contact__scroll-txt">Click Here</p>
        <ContactIcon />
      </section>
    </>
  );
}
