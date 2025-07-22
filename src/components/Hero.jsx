function Hero({ title, description }) {
  return (
    <section className="hero">
      <div className="document">
        <h1>{title}</h1>
        <p>{description}</p>
        <button className="cta-btn"><a href="#course">معرفی درس 🎯</a></button>
      </div>
      <div className="banner"></div>
    </section>
  );
}

export default Hero;
