import MvAnimation from "@/components/effects/MvAnimation";
import ServiceSwiper from "@/components/ui/ServiceSwiper";
import WorksSlide from "@/components/ui/WorksSlide";

export default function HomePage() {
  return (
    <main>
      <div className="stars-bg"></div>
      <div className="mv">
        <div className="l-inner">
          <MvAnimation />
        </div>
      </div>

      <section className="service">
        <div className="l-inner">
          <h2 className="heading-A">Service</h2>
          <ServiceSwiper />
        </div>
      </section>

      <section className="works">
        <div className="l-inner">
          <h2 className="heading-A">Works</h2>
          <WorksSlide />
        </div>
      </section>

      <section className="contact">
        <div className="contact__scroll-border"></div>
        <p className="contact__scroll-txt">Click Here</p>
        <h2 className="contact__ttl"><a href="/contact">Contact</a></h2>
      </section>
    </main>
  );
}
