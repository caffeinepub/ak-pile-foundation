import { Section } from '../components/site/Section';
import { ContactForm } from '../components/site/ContactForm';
import { MapPin, Phone, Mail } from 'lucide-react';

export function ContactSection() {
  return (
    <Section id="contact" background="muted">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Ready to start your construction project? Contact us today for a consultation
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Service Area</p>
                  <p className="text-muted-foreground">
                    We provide professional piling, breeze making, and general construction services all over India.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Phone</p>
                  <div className="text-muted-foreground space-y-1">
                    <p className="font-mono">+91 9479479078</p>
                    <p className="font-mono">+91 79-87249591</p>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Email</p>
                  <a 
                    href="mailto:anashkhan2426@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors font-mono"
                  >
                    anashkhan2426@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card border rounded-lg p-6">
            <h4 className="font-semibold mb-3">Why Choose AK PILE FOUNDATION?</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Experienced team of construction professionals</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Quality materials and modern equipment</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Timely project completion</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Competitive pricing and transparent quotes</span>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
