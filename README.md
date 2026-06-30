# Wool & Loop — Crochet Storefront

A small e-commerce frontend for a handmade crochet shop, built with React and
structured for deployment on AWS (S3 + CloudFront, with API Gateway/Lambda/DynamoDB
planned as the backend).

## Project structure

```
src/
  components/
    Header.jsx        Nav, category filter, cart button
    Hero.jsx           Landing section + signature yarn divider
    YarnDivider.jsx     Signature SVG element
    ProductGrid.jsx    Maps products to ProductCard
    ProductCard.jsx     Single product tile (add to cart / wishlist)
    CartDrawer.jsx      Slide-out cart with qty controls + checkout
    StitchBadge.jsx     Small category pill
    Footer.jsx
  hooks/
    useCart.js          Cart state: add, remove, totals, item count
  services/
    api.js              Data fetching layer — swap local data for API Gateway calls here
  data/
    products.js          Local product data (placeholder for DynamoDB)
  App.jsx                 Top-level composition + state wiring
  App.css                  Global styles, font imports, Tailwind directives
  index.js                  React entry point
public/
  index.html
```

## Why it's split this way

Each component owns one responsibility and takes data/callbacks as props rather
than reaching into global state — `ProductCard` doesn't know about the cart, it
just calls `onAddToCart`. Cart logic lives in `useCart.js` as a hook so it's
testable in isolation and not tangled into `App.jsx`. The `services/api.js`
file is the single seam where this swaps from static data to a real backend —
swap `fetchProducts()`'s body for a `fetch()` call and nothing else changes.

## Run locally

```bash
npm install
npm start
```

## Build for production

```bash
npm run build
```

This outputs to `build/`, which is what gets uploaded to S3.

## Planned AWS architecture

- **Frontend**: this app, built and uploaded to S3, served via CloudFront
- **Auth**: Cognito User Pool
- **Product data**: DynamoDB table, served through API Gateway + Lambda
  (replaces `src/data/products.js`)
- **Orders**: API Gateway → Lambda → RDS (relational integrity for line items/totals)
- **Async processing**: SNS → SQS (payment + inventory) with DLQs for idempotent retry
- **Notifications**: SES for order confirmation emails

See `src/services/api.js` for the commented-out fetch calls that would replace
the local data once the backend is live.
