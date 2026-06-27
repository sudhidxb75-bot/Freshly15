# Freshly Complete Website + Backend Package V3.0

This consolidated V3.0 package includes all Freshly features discussed so far.

## Public Website
- Freshly branded homepage with logo/header.
- Full-width homepage banner slider.
- Backend-managed banners through Google Sheet `Banners`.
- Local fallback banners in `assets/banners/`.
- Recommended banner size: 1916 × 821 px.
- Banner mode: `DisplayMode = ImageOnly`, `ImageFit = cover`, `BannerHeight = 320px`.
- Product catalogue with categories.
- Product details modal/page.
- Quantity options for kg, litre, piece, dozen, pack and combo.
- Cart and checkout flow.
- Browse without login; login/sign-up required at checkout.
- Customer portal, track order, bulk order, Freshly Mart link page, Join Freshly page, policies and contact page.
- Public footer cleaned: no admin/partner portal links.

## Categories
- Fish & Seafood
- Chicken
- Mutton
- Eggs
- Fruits & Vegetables
- Groceries
- Daily Essentials
- Ready to Cook
- Combo Packs

## Country and Location
- Country selection included.
- India: INR / ₹ / +91 / UPI.
- UAE: AED / AED / +971 / payment link/bank transfer/card.
- Location flow: Country → District / City / Emirate → Pincode / Area → Freshly Hub.
- Multiple hubs under same pincode supported.
- Location popup visibility fixed for laptop/mobile.
- Cart button hidden while location popup is open.

## Backend / Google Sheets
- Google Sheets + Apps Script backend.
- Stable backend base restored from last working V2.9.9 structure.
- Setup function: `setupFreshlyBackend`.
- Admin menu: `Freshly Backend`.
- Sheets include Countries, CountryPayments, Banners, Settings, FreshlyIDRegistry, Districts, Hubs, DeliveryAreas, DeliverySlots, Categories, Products, Pricing, Suppliers, Customers, Orders, Payments, Reports, Print Sheets, AdminUsers, Roles, Sessions, AuditLog and WhatsAppQueue.
- GST/FSSAI backend fields with admin relaxation option.
- Product and supplier approval model.
- Public site shows active + approved products only.

## Admin
- Direct/private admin page: `admin.html`.
- Admin dashboard, orders, products, approvals, reports/print sheets, Freshly ID manager, admin management, WhatsApp queue and settings.

## Partner Dashboards
Separate direct/private pages:
- `hub-partner-dashboard.html`
- `delivery-partner-dashboard.html`
- `district-master-dashboard.html`

## Reports / Print Sheets
- Daily order report.
- Daily product requirement report.
- Payment pending report.
- Product stock report.
- Supplier, hub and customer statements.
- Sales summary report.
- Printable daily sheets.
- Clear print sheets / reports.
- Monthly and yearly reports.

## Payments
- Freshly-controlled payment model.
- India: UPI, UPI QR at hub, COD with UPI confirmation.
- UAE: Payment link, bank transfer, card on delivery.
- Payment tracking supported.

## WhatsApp
- WhatsApp queue included.
- Order message flow support.
- Multiple operational WhatsApp numbers can be configured/customized.

## Setup
Use `QUICK_SETUP_CHECKLIST_V3_0.txt`.
