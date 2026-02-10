export function BrandLogo() {
  return (
    <div className="flex items-center gap-3">
      <img
        src="/assets/generated/ak-pile-foundation-logo.dim_512x512.png"
        alt="AK PILE FOUNDATION logo"
        className="h-10 w-10 object-contain"
      />
      <div className="flex flex-col">
        <span className="text-lg font-bold leading-tight tracking-tight text-foreground">
          AK PILE FOUNDATION
        </span>
        <span className="text-xs text-muted-foreground leading-tight">
          Construction Excellence
        </span>
      </div>
    </div>
  );
}
