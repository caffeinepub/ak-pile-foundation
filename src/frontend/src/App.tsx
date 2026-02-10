import { SiteHeader } from './components/site/SiteHeader';
import { OverviewSection } from './sections/OverviewSection';
import { ServicesSection } from './sections/ServicesSection';
import { TeamRolesSection } from './sections/TeamRolesSection';
import { ContactSection } from './sections/ContactSection';
import { SiteFooter } from './components/site/SiteFooter';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <OverviewSection />
        <ServicesSection />
        <TeamRolesSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}

export default App;
