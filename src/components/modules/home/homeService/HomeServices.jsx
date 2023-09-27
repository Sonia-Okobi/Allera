import ServiceCard from "./serviceCard/ServiceCard";
import { services } from "./serviceCard/constant";

function HomeServices() {
  return (
    <div className="home--services app-container">
      <div className="home--services__content app-container__section">
        <h2 className="home--services__content__header">Our Services</h2>
        <div className="home--services__content__services">
          {services.map((service, index) => (
            <ServiceCard
              variant={service.variant}
              key={index}
              title={service.title}
            >
              {service.description.map((item, index) => {
                const [title, desc] = item.split(":");
                return (
                  <p key={index}>
                    <strong>{title}:</strong>
                    {desc}
                  </p>
                );
              })}
            </ServiceCard>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomeServices;
