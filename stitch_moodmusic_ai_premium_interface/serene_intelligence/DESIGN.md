---
name: Serene Intelligence
colors:
  surface: '#0b1326'
  surface-dim: '#0b1326'
  surface-bright: '#31394d'
  surface-container-lowest: '#060e20'
  surface-container-low: '#131b2e'
  surface-container: '#171f33'
  surface-container-high: '#222a3d'
  surface-container-highest: '#2d3449'
  on-surface: '#dae2fd'
  on-surface-variant: '#ccc4cf'
  inverse-surface: '#dae2fd'
  inverse-on-surface: '#283044'
  outline: '#958e99'
  outline-variant: '#4a454e'
  surface-tint: '#d5bbf9'
  primary: '#edddff'
  on-primary: '#3a2659'
  primary-container: '#d6bcfa'
  on-primary-container: '#5e497e'
  inverse-primary: '#6a548a'
  secondary: '#a7cce0'
  on-secondary: '#0b3445'
  secondary-container: '#294d5f'
  on-secondary-container: '#99bed2'
  tertiary: '#eadeff'
  on-tertiary: '#3c0090'
  tertiary-container: '#d1bdff'
  on-tertiary-container: '#6038b3'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#eddcff'
  primary-fixed-dim: '#d5bbf9'
  on-primary-fixed: '#250f43'
  on-primary-fixed-variant: '#513c71'
  secondary-fixed: '#c3e8fd'
  secondary-fixed-dim: '#a7cce0'
  on-secondary-fixed: '#001e2b'
  on-secondary-fixed-variant: '#274b5c'
  tertiary-fixed: '#eaddff'
  tertiary-fixed-dim: '#d1bcff'
  on-tertiary-fixed: '#24005b'
  on-tertiary-fixed-variant: '#5429a6'
  background: '#0b1326'
  on-background: '#dae2fd'
  surface-variant: '#2d3449'
typography:
  headline-lg:
    fontFamily: Manrope
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-max-width: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  stack-sm: 12px
  stack-md: 24px
  stack-lg: 48px
---

## Brand & Style
The design system is anchored in a philosophy of "Serene Intelligence." It aims to evoke a sense of high-level cognitive clarity and premium tranquility. The target audience is sophisticated users who value focus and depth over overstimulation. 

The aesthetic is **Modern / Glassmorphic**, utilizing deep, atmospheric backgrounds contrasted against ethereal, glowing accents. By blending the precision of technical interfaces with the softness of a cooler color palette, the UI creates an environment that feels both cutting-edge and emotionally grounding. Layouts prioritize generous breathing room and a structured hierarchy to maintain a calm, professional tone.

## Colors
The palette is centered on a dark modern base, moving away from high-energy warmth toward a cooling, intellectual spectrum. 

- **Primary (Soft Lavender):** Used for primary actions and brand moments. It provides a sophisticated glow against the dark background.
- **Secondary (Baby Blue):** Used for supportive accents, informative states, and secondary visual interest.
- **Backgrounds:** A deep navy-charcoal foundation ensures high legibility for light text while maintaining a premium, "night-mode" default.
- **Surface Strategy:** Layers are built using incremental luminosity rather than pure gray scales, ensuring the "intelligence" of the color theory is felt through tonal depth.

## Typography
Typography in the design system is clean and balanced. **Manrope** provides a refined, modern Sans-Serif feel for both headlines and body copy, ensuring the interface feels approachable yet professional.

For technical data, metadata, and utility labels, **Geist** is employed to introduce a precise, "developer-grade" aesthetic that reinforces the brand's intelligent persona. Tight letter-spacing is reserved for large headlines to create a compact, premium "editorial" look, while body text maintains standard tracking for optimal readability on dark backgrounds.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy for desktop to maintain a curated, high-end feel, centering the content within a 1280px container. On mobile, the system transitions to a fluid model with 20px side margins.

A consistent 8px linear scale governs all spacing. Vertical rhythm is established through "Stack" tokens, ensuring that components and sections are separated by intentional gaps that favor "white space" (or in this case, "dark space") to prevent cognitive overload. Gutters are kept wide at 24px to emphasize the airy, serene nature of the system.

## Elevation & Depth
Depth is communicated through **Glassmorphism and Tonal Layers**. Surfaces do not rely on heavy black shadows; instead, they use:

1.  **Backdrop Blurs:** Elevated panels (like modals or navigation bars) use a 20px Gaussian blur with a semi-transparent navy fill.
2.  **Inner Glows:** A 1px translucent lavender stroke on the top and left edges of cards simulates a light source, creating a "glass edge" effect.
3.  **Tinted Shadows:** Where shadows are necessary, they are deep navy (#020617) with low opacity, making them feel like a natural extension of the background rather than a gray smudge.

## Shapes
The shape language is consistently **Rounded**. 

The base radius of 0.5rem (8px) is applied to all standard components like input fields and small cards. This softness offsets the technical precision of the typography. Larger containers and sections use the `rounded-xl` (1.5rem/24px) token to create a more immersive, "contained" feel. Interactive elements like tags or chips may occasionally use pill-shapes to distinguish them from structural layout elements.

## Components
- **Buttons:** Primary buttons use a solid Lavender fill with dark navy text for maximum contrast. Secondary buttons use a subtle Baby Blue outline with a 5% blue fill.
- **Input Fields:** Styled with a dark navy background and a 1px "glass-stroke." On focus, the stroke glows with a soft Baby Blue outer shadow.
- **Cards:** Defined by the `container` color with a 1px top-oriented Lavender stroke. Backdrop blurs are applied to cards sitting over image-heavy backgrounds.
- **Chips/Badges:** Use the `label-sm` typography. They feature a desaturated version of the secondary Baby Blue with 10% opacity for the background to keep the interface calm.
- **Progress Indicators:** Use a linear gradient moving from Primary Lavender to Secondary Baby Blue, symbolizing a smooth flow of data or time.