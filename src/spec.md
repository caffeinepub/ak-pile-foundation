# Specification

## Summary
**Goal:** Replace the Founder & Owner section photo with the newly uploaded image and serve it from frontend static assets.

**Planned changes:**
- Add `B9880E96-BF00-4325-A5A7-C90172ACF09D-16.png` to the frontend public static assets directory so it is accessible via a stable `/assets/...` URL.
- Update `frontend/src/components/site/FounderOwnerBlock.tsx` to use the new `/assets/...` image path for the founder/owner photo across mobile and desktop layouts.
- Keep the image alt text accessible and in English, referencing the Founder/Owner.

**User-visible outcome:** The Founder & Owner block displays the newly uploaded founder/owner photo correctly on both mobile and desktop, without any backend changes.
