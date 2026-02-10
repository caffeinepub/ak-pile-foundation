import { Section } from '../components/site/Section';
import { ServiceCard } from '../components/site/ServiceCard';

export function ServicesSection() {
  const services = [
    {
      title: 'Piling',
      description: 'Professional deep foundation piling services using advanced equipment and techniques. We ensure structural integrity and load-bearing capacity for all types of construction projects.',
      iconSrc: '/assets/generated/icon-piling.dim_256x256.png',
      iconAlt: 'Piling service icon showing foundation work'
    },
    {
      title: 'Breeze Making',
      description: 'High-quality breeze block manufacturing with precise dimensions and consistent strength. Our blocks meet all industry standards for residential and commercial construction.',
      iconSrc: '/assets/generated/icon-breeze-making.dim_256x256.png',
      iconAlt: 'Breeze block manufacturing icon'
    },
    {
      title: 'General Construction',
      description: 'Comprehensive construction services from ground preparation to final finishing. We handle residential, commercial, and industrial projects with expertise and attention to detail.',
      iconSrc: '/assets/generated/icon-general-construction.dim_256x256.png',
      iconAlt: 'General construction services icon'
    }
  ];

  return (
    <Section id="services" background="muted">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Comprehensive construction solutions tailored to your project needs
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            title={service.title}
            description={service.description}
            iconSrc={service.iconSrc}
            iconAlt={service.iconAlt}
          />
        ))}
      </div>
    </Section>
  );
}
