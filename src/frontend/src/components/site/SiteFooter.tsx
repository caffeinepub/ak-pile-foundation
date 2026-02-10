import { Heart } from 'lucide-react';

export function SiteFooter() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'ak-pile-foundation'
  );

  return (
    <footer className="border-t bg-secondary text-secondary-foreground">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="font-semibold text-lg">AK PILE FOUNDATION</p>
            <p className="text-sm text-secondary-foreground/70">
              Building Strong Foundations Since {currentYear}
            </p>
          </div>
          
          <div className="text-center md:text-right text-sm text-secondary-foreground/70">
            <p>© {currentYear} AK PILE FOUNDATION. All rights reserved.</p>
            <p className="flex items-center justify-center md:justify-end gap-1 mt-1">
              Built with <Heart className="w-3 h-3 fill-primary text-primary" /> using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
