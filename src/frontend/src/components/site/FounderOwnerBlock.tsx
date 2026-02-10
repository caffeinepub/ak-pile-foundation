export function FounderOwnerBlock() {
  return (
    <div className="mb-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Founder & Owner</h2>
        <p className="text-lg text-muted-foreground">
          Leading with vision and expertise
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="bg-card border rounded-lg shadow-construction overflow-hidden">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 p-8">
            {/* Photo */}
            <div className="flex-shrink-0">
              <img
                src="/assets/B9880E96-BF00-4325-A5A7-C90172ACF09D-16.png"
                alt="Photo of the Founder and Owner, Nizamuddin Khan"
                className="w-48 h-48 md:w-56 md:h-56 object-cover rounded-lg shadow-md"
              />
            </div>

            {/* Content */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                NIZAMUDDIN KHAN
              </h3>
              <p className="text-lg text-primary font-semibold mb-4">
                Founder & Owner
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With years of experience in the construction industry, NIZAMUDDIN KHAN 
                founded AK Pile Foundation with a vision to deliver excellence in piling 
                and construction services. His leadership and commitment to quality have 
                established the company as a trusted name across India.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
