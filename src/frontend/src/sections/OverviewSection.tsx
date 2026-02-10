import { Section } from '../components/site/Section';
import { Building2, HardHat, Award } from 'lucide-react';

export function OverviewSection() {
  return (
    <Section id="overview" className="pt-8 md:pt-16">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              Building Strong{' '}
              <span className="text-primary">Foundations</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              AK PILE FOUNDATION specializes in comprehensive construction solutions, 
              delivering excellence in piling, breeze block manufacturing, and general construction work.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 pt-4">
            <div className="flex flex-col items-center text-center p-4 bg-muted/30 rounded-lg">
              <Building2 className="w-8 h-8 text-primary mb-2" />
              <p className="font-semibold text-sm">Expert Team</p>
            </div>
            <div className="flex flex-col items-center text-center p-4 bg-muted/30 rounded-lg">
              <HardHat className="w-8 h-8 text-primary mb-2" />
              <p className="font-semibold text-sm">Quality Work</p>
            </div>
            <div className="flex flex-col items-center text-center p-4 bg-muted/30 rounded-lg">
              <Award className="w-8 h-8 text-primary mb-2" />
              <p className="font-semibold text-sm">Proven Results</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <img
            src="/assets/generated/hero-construction-piling.dim_1920x800.png"
            alt="Construction site showing piling and foundation work at AK PILE FOUNDATION"
            className="w-full h-auto rounded-lg shadow-construction"
          />
        </div>
      </div>

      <div className="mt-16 prose prose-lg max-w-none">
        <p className="text-muted-foreground leading-relaxed">
          With a dedicated team of skilled professionals, we provide end-to-end construction services 
          that meet the highest industry standards. Our expertise spans from deep foundation piling work 
          to precision breeze block manufacturing and comprehensive general construction projects. 
          We pride ourselves on delivering projects on time, within budget, and to exceptional quality standards.
        </p>
      </div>
    </Section>
  );
}
