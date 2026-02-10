interface ServiceCardProps {
  title: string;
  description: string;
  iconSrc: string;
  iconAlt: string;
}

export function ServiceCard({ title, description, iconSrc, iconAlt }: ServiceCardProps) {
  return (
    <div className="group relative bg-card border rounded-lg p-6 hover:shadow-construction transition-all duration-300 hover:border-primary/50">
      <div className="flex flex-col items-center text-center gap-4">
        <div className="w-24 h-24 flex items-center justify-center bg-muted/50 rounded-lg group-hover:bg-primary/10 transition-colors">
          <img
            src={iconSrc}
            alt={iconAlt}
            className="w-16 h-16 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
          />
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
