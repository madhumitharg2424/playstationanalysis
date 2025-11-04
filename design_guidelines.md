# PlayStation Sales Predictor - Design Guidelines

## Design Approach
**Reference-Based Approach**: Inspired by modern AI/ML platforms (Vercel AI, Linear, Hugging Face) with PlayStation branding elements. Focus on clean data presentation with purposeful, delightful animations that enhance user understanding and engagement.

## Core Design Principles
1. **Data-Driven Clarity**: Information hierarchy that makes predictions easy to understand
2. **Motion with Purpose**: Animations that guide attention and provide feedback
3. **Gaming Heritage**: Subtle PlayStation aesthetic without overwhelming functionality
4. **Conversational Interface**: Welcoming, approachable tone for both voice and text interactions

## Typography System

**Font Families**:
- Primary: Inter (via Google Fonts) - body text, UI elements, data
- Accent: Space Grotesk (via Google Fonts) - headings, predictions, emphasis

**Type Scale**:
- Hero/Display: text-5xl to text-6xl, font-bold (Space Grotesk)
- Section Headers: text-3xl to text-4xl, font-semibold (Space Grotesk)
- Subsections: text-xl to text-2xl, font-medium (Inter)
- Body: text-base to text-lg, font-normal (Inter)
- Labels/Small: text-sm to text-xs, font-medium (Inter)
- Predictions (large numbers): text-7xl to text-8xl, font-bold (Space Grotesk)

## Layout System

**Spacing Units**: Use Tailwind units of 2, 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- Component padding: p-6 to p-8
- Section spacing: py-12 to py-20
- Card gaps: gap-4 to gap-8
- Form field spacing: space-y-4 to space-y-6

**Grid Structure**:
- Container: max-w-7xl mx-auto px-4 to px-8
- Two-column layouts: grid-cols-1 lg:grid-cols-2 gap-8 to gap-12
- Three-column feature grids: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6

## Component Library

### Navigation
- Sticky header with logo, main nav links, and CTA button
- Logo: PlayStation-style icon with "Sales Predictor" wordmark
- Nav items: Dashboard, Predictions, Analytics, About
- Mobile: Hamburger menu with slide-in drawer animation

### Hero Section (Landing Page)
- Full-width gradient background with subtle PlayStation controller silhouette pattern
- Centered content with max-w-4xl
- Animated headline with staggered word reveals
- Two CTAs: "Start Predicting" (primary) and "View Demo" (secondary)
- Floating stat cards showing "80%+ Accuracy", "4,965 Games Analyzed", "Multi-Region Data"

### Prediction Interface
**Chat/Conversational View**:
- Card-based layout with rounded-2xl borders
- Message bubbles: User (right-aligned, accent background), Bot (left-aligned, neutral background)
- Voice input button: Large, pulsing microphone icon when active
- Text input: Modern chat input with send button and voice toggle
- Loading state: Animated dots with PlayStation icons rotation

**Form View**:
- Clean form card with subtle shadow and border
- Dropdown selects with custom styling (rounded-lg, hover states)
- Sections for Console (PS2-PS5 with icons), Region (map-based visualization option), Genre (icon grid)
- Large "Predict Sales" button with loading spinner animation
- Form validation with smooth error message slides

### Results Display
- Hero number: Massive prediction value with counter animation (0 to predicted value)
- Accuracy badge: Pill-shaped element showing model confidence
- Breakdown cards: Regional sales split with animated bar charts
- Comparison metrics: Similar games carousel with horizontal scroll
- Confidence indicator: Progress ring animation showing prediction strength

### Data Visualization
- Interactive charts using Chart.js or Recharts
- Line charts for trend analysis with gradient fills
- Bar charts for regional comparisons with staggered entry animations
- Donut charts for genre distribution with segment hover effects
- Color-coded regions: NA (blue), EU (green), Japan (red), Other (purple)

### Feature Cards
- Grid of 3-4 cards highlighting capabilities
- Icons from Lucide React (mic, brain, trending-up, globe)
- Hover effect: Subtle lift (translate-y) with shadow increase
- Each card: Icon, heading, description, optional "Learn More" link

### Footer
- Multi-column layout: About, Features, Resources, Social
- Newsletter signup with inline form
- Tech stack badges (React, Flask, Scikit-learn)
- Copyright and links

## Animation Specifications

**Core Animations** (Use Tailwind transitions and custom keyframes):

1. **Prediction Counter**: Animated number increment from 0 to predicted value over 1.5s
2. **Voice Pulse**: Concentric circles emanating from mic button when listening (scale animation)
3. **Message Slides**: Chat messages slide up with fade-in (translate-y-4 to translate-y-0, opacity-0 to opacity-100)
4. **Loading Spinner**: Rotating PlayStation icons (3 icons in sequence, rotating 360deg)
5. **Chart Animations**: Bars/lines draw in over 800ms with ease-out timing
6. **Card Hover**: translate-y-1 with shadow transition over 200ms
7. **Form Validation**: Error messages slide down from top with shake animation
8. **Button States**: Scale 0.98 on click, smooth background transitions on hover

**Micro-interactions**:
- Dropdown opens with scale and fade (origin-top)
- Success checkmark draws in with SVG stroke animation
- Accuracy badge pulses subtly on prediction completion
- Genre/console selection highlights with border glow animation

## Images

### Hero Section Background
- Large hero image: Abstract PlayStation-themed gradient with floating geometric shapes
- Overlay: Semi-transparent dark gradient for text legibility
- Size: Full viewport width, 70vh height
- Style: Modern, tech-forward aesthetic with blue/purple gradients

### Prediction Interface Illustrations
- Empty state illustration: Person with gaming controller + speech bubble
- Success state: Celebration icon/graphic when prediction completes
- Style: Minimal line art with accent color fills

### Data Visualization Graphics
- Console icons: Clean PS2, PS3, PS4, PS5 controller silhouettes for selection
- Region map: Simplified world map highlighting sales regions
- Genre icons: Representative icons for each game genre (gun for shooter, ball for sports, etc.)

## Accessibility
- Form labels and inputs maintain proper association
- ARIA labels for icon-only buttons
- Focus states: 2px ring with offset on all interactive elements
- Color contrast: Minimum 4.5:1 for text
- Voice input includes visual feedback for screen readers
- Keyboard navigation fully supported with visible focus indicators

## Responsive Breakpoints
- Mobile: Base styles, single column, stacked components
- Tablet (md: 768px): Two-column grids, expanded navigation
- Desktop (lg: 1024px): Full three-column layouts, side-by-side forms
- Wide (xl: 1280px): Maximum content width, enhanced spacing

## Special Considerations
- Prediction results should feel rewarding with celebratory micro-animations
- Voice input provides clear visual feedback (waveform or pulsing indicator)
- Loading states are engaging, not boring (PlayStation-themed spinners)
- Form interactions feel immediate and responsive
- Data visualizations load progressively for performance