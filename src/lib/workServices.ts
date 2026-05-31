import wallefpvPreview from "@/assets/Works/wallefpv/preview.png";
import wokyisPreview from "@/assets/Works/wokyis/preview.png";
import triyanaPreview from "@/assets/Works/triyana/preview.png";
import goaorinPreview from "@/assets/Works/goaorin/preview.png";
import ovovsPreview from "@/assets/Works/ovovs/preview.png";
import arunakePreview from "@/assets/Works/arunake/preview.png";
import airBaristaPreview from "@/assets/Works/air-barista/preview.png";

/** Native aspect ratio of desktop project previews (wallefpv preview.png). */
export const DESKTOP_PREVIEW_ASPECT = "1672 / 941";

export interface WorkService {
  number: string;
  slug: string;
  title: string;
  /** Short copy for the work listing grid. */
  description: string;
  /** Long-form copy for the project detail page only. Falls back to `description`. */
  pageDescription?: string;
  image: string;
  /** CSS aspect-ratio value; defaults to desktop preview ratio. */
  imageAspect?: string;
  /** External URL for the project page “Check out my work” link. */
  ctaUrl?: string;
}

/** "WalleFPV Shopify Drone Store" → "wallefpv-shopify-drone-store" */
export function workProjectSlug(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/['']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function service(
  entry: Omit<WorkService, "slug"> & { slug?: string },
): WorkService {
  return {
    ...entry,
    slug: entry.slug ?? workProjectSlug(entry.title),
  };
}

export const WORK_SERVICES: WorkService[] = [
  service({
    number: "01",
    title: "Triyana Shopify Gemstone Jewellery Store",
    description:
      "A clean and elegant ecommerce website for Triyana, a handmade gemstone jewellery and wellness brand in India. The store was built to showcase women's and men's jewellery, crystal decor, wellness ritual products, new arrivals, bestsellers, and sale collections with a calm, premium, and spiritual brand feeling.",
    pageDescription: `Triyana was a Shopify ecommerce project I worked on for a handmade gemstone jewellery and holistic wellness brand. The main goal was to create a beautiful online store that could present the brand's natural, spiritual, and sustainable identity while also making the shopping experience simple and comfortable for customers.

My work focused on building a responsive ecommerce layout that clearly organizes different product categories, including women's necklaces, bracelets, earrings, men's jewellery, crystal decor, wellness rituals, new arrivals, bestsellers, and sale items. Since the brand sells visual and meaningful products, I paid strong attention to product presentation, image layout, spacing, typography, collection structure, and call-to-action placement so each item could feel premium and easy to explore.

I also worked on shaping the store experience around Triyana's brand message. The website needed to feel more than a normal jewellery shop, because the brand connects its products with mindfulness, intention, sustainability, and spiritual growth. I structured the homepage sections to highlight handcrafted jewellery, curated collections, customer reviews, journal content, brand promises, and trust-building information such as secure payments and shipping.

This project gave me strong experience in creating a Shopify store for a lifestyle and wellness-focused jewellery brand. It helped me combine ecommerce development, responsive UI design, product storytelling, collection organization, and conversion-focused shopping flow into one polished online store.`,
    image: triyanaPreview,
    imageAspect: DESKTOP_PREVIEW_ASPECT,
    ctaUrl: "https://triyana.in",
  }),
  service({
    number: "02",
    title: "AORIN Shopify Outdoor Bottle Store",
    description:
      "A modern Shopify ecommerce website built for AORIN, an outdoor lifestyle brand focused on sports water bottles, stainless steel bottles, Tritan bottles, straw-lid bottles, and cooler bags. The store was designed to present colorful product options clearly, support quick shopping actions, and create a clean adventure-focused shopping experience.",
    pageDescription: `AORIN was a Shopify ecommerce project I worked on for an outdoor and lifestyle product brand. The main goal was to create a clean, practical, and product-focused online store for customers who need water bottles and outdoor accessories for gym, yoga, running, camping, travel, and daily use. The website includes product categories such as stainless steel water bottles, Tritan sports bottles, Tritan bottles with straw lids, ultra-light stainless steel bottles, and cooler bags.

My work focused on building a responsive Shopify storefront that makes product browsing simple across desktop and mobile devices. Since the products have many size and color variations, I paid close attention to product option layout, collection structure, quick-view behavior, quick-add flow, product cards, and clear call-to-action placement. The goal was to help customers quickly compare bottle types, choose the right size or color, and move smoothly from product discovery to checkout.

I also worked on shaping the visual direction around AORIN's "Built For The Adventure" brand feeling. The store needed to look active, fresh, and suitable for outdoor use, while still keeping the interface clean and ecommerce-focused. I structured homepage sections, product collections, promotional areas, navigation, support links, and trust-related information so the store feels reliable and easy to use.

This project gave me strong experience in creating a Shopify store for a lifestyle and outdoor product brand. It helped me combine ecommerce development, responsive UI design, product variation handling, collection organization, and conversion-focused shopping flow into one polished online store.`,
    image: goaorinPreview,
    imageAspect: DESKTOP_PREVIEW_ASPECT,
    ctaUrl: "https://goaorin.com",
  }),
  service({
    number: "03",
    title: "WalleFPV Shopify Drone Store",
    description:
      "A custom Shopify ecommerce website for an FPV drone brand, built to showcase micro drones, RTF kits, frame kits, batteries, props, electronics, and motors. The project focused on clear product navigation, responsive shopping flow, product option handling, and a smooth cart-to-checkout experience for global FPV customers.",
    pageDescription: `WalleFPV was a Shopify ecommerce project I developed for an FPV drone brand, with the goal of creating a clean, practical, and product-focused online store for drone enthusiasts. The website needed to present different FPV products clearly, including micro drones, RTF kits, frame kits, batteries, props, electronics, motors, and accessories, while keeping the shopping experience simple and easy to follow.

My work focused on building a responsive Shopify storefront that works smoothly across desktop and mobile devices. I structured the homepage, collection pages, product pages, and shopping flow so customers could quickly understand the products, compare options, view important details, and move toward checkout without confusion. Since FPV drone products often include technical specifications and multiple related parts, I paid attention to layout clarity, product organization, spacing, and visual hierarchy.

I also worked on improving the product presentation by making the store feel more professional and trustworthy. The design was kept minimal and clean so the products remained the main focus, while the navigation, product cards, buttons, and cart flow were arranged to support a better ecommerce experience. Mobile responsiveness was especially important because many customers browse and purchase from phones, so I made sure the layout remained usable, readable, and visually balanced on smaller screens.

Overall, this project gave me hands-on experience creating a complete Shopify store for a niche technical product category. It strengthened my ability to combine ecommerce development, responsive UI implementation, product page structure, and user-focused shopping flow into one polished Shopify project.`,
    image: wallefpvPreview,
    imageAspect: DESKTOP_PREVIEW_ASPECT,
    ctaUrl: "https://wallefpv.com",
  }),
  service({
    number: "04",
    title: "Wokyis Shopify Retro Tech Store",
    description:
      "A modern Shopify ecommerce website built for Wokyis, a retro-inspired tech brand selling Mac mini docking stations and NVMe SSD enclosures. The store was designed to present premium hardware products clearly, with strong product visuals, smooth navigation, responsive layouts, and a clean shopping experience from product discovery to checkout.",
    pageDescription: `Wokyis was a Shopify ecommerce project I worked on for a retro-style technology brand focused on Mac mini docking stations, SSD enclosures, and smart hardware accessories. The goal of the project was to create a clean, trustworthy, and product-focused online store that could clearly explain technical products while still keeping the shopping experience simple and visually attractive.

My work focused on building a responsive Shopify storefront that presents the brand's products in a professional way across desktop and mobile devices. Since the products have unique technical features, such as Mac mini docking support, NVMe storage expansion, built-in display screens, USB-C hub functionality, and real-time SSD monitoring, I paid close attention to product page structure, content hierarchy, image placement, feature sections, and call-to-action flow.

I also worked on improving the ecommerce experience by organizing the homepage, navigation, product collections, cart flow, and product detail pages so visitors can quickly understand what each product does and why it is useful. The design needed to balance a retro visual identity with a modern ecommerce layout, so I focused on clean spacing, clear product cards, readable technical information, and a smooth purchase journey.

This project gave me strong experience in creating a Shopify store for a premium hardware product brand. It helped me combine ecommerce development, responsive UI design, product storytelling, technical product presentation, and conversion-focused Shopify structure into one complete online shopping experience.`,
    image: wokyisPreview,
    imageAspect: DESKTOP_PREVIEW_ASPECT,
    ctaUrl: "https://wokyis.com",
  }),
  service({
    number: "05",
    title: "OVOVS Shopify Automotive Lighting Store",
    description:
      "A Shopify ecommerce website built for OVOVS, an automotive lighting brand focused on LED headlights, off-road light bars, rock lights, work lights, search lights, and vehicle lighting accessories. The store was designed to organize many technical lighting products clearly, support product browsing by category, and create a straightforward shopping experience for car, truck, Jeep, ATV, UTV, and off-road customers.",
    pageDescription: `OVOVS was a Shopify ecommerce project I worked on for an automotive and off-road lighting brand. The main goal was to create a clean product-focused online store where customers could easily browse different vehicle lighting products, including Jeep headlights, LED light bars, rock lights, work lights, search lights, wiring harness kits, and other lighting accessories. Since the store contains many product types and vehicle-specific items, the structure needed to be clear, practical, and easy to navigate.

My work focused on building a responsive Shopify storefront that presents technical automotive products in a simple and organized way. I paid attention to product collections, category navigation, product cards, pricing display, product detail pages, and the cart-to-checkout flow so visitors could quickly understand what each item is used for and move smoothly toward purchase. For products such as LED headlights, off-road lights, and work lights, I also focused on making specifications and product information easy to read, because customers often need details like power, lumen output, voltage, waterproof rating, beam type, and vehicle compatibility before buying.

I also worked on shaping the store around a practical automotive ecommerce experience. The design needed to feel direct, reliable, and product-driven rather than overly decorative, because the main audience is looking for functional lighting upgrades for cars, trucks, Jeeps, ATVs, UTVs, boats, and off-road vehicles. I organized the layout so customers could browse by lighting type, compare products, view options, and access checkout without unnecessary friction.

This project gave me strong experience in creating a Shopify store for a technical automotive product brand. It helped me combine Shopify ecommerce development, responsive UI structure, technical product presentation, collection organization, and conversion-focused shopping flow into one complete online store.`,
    image: ovovsPreview,
    imageAspect: DESKTOP_PREVIEW_ASPECT,
    ctaUrl: "https://ovovs.com",
  }),
  service({
    number: "06",
    title: "Aruna Estore Shopify Fashion & Lifestyle Store",
    description:
      "A Shopify ecommerce website built for Aruna Estore, an online fashion and lifestyle store offering footwear, clothing, accessories, cosmetics, household items, and car accessories. The store was designed with simple category navigation, clear product displays, mobile-friendly shopping flow, and a clean checkout experience for customers in Kenya.",
    pageDescription: `Aruna Estore was a Shopify ecommerce project I worked on for a multi-category fashion and lifestyle online store. The main goal was to create a simple, practical, and easy-to-use shopping platform where customers could browse different product types, including ladies' shoes, gents' shoes, bags, wallets, jewelry, watches, clothing, cosmetics, household items, and car accessories.

My work focused on building a responsive Shopify storefront that makes product discovery smooth across desktop and mobile devices. Since the store includes different categories rather than only one product type, I paid attention to navigation structure, collection organization, product cards, search behavior, pricing display, and cart flow. The goal was to help visitors quickly find the right section, view new arrivals, compare products, and continue toward checkout without confusion.

I also worked on creating a clean ecommerce layout that keeps the products as the main focus. The homepage needed to highlight new arrivals and encourage users to shop directly, while the product pages and collections needed to feel clear and trustworthy. I focused on spacing, product image presentation, call-to-action placement, mobile readability, and a smooth shopping experience from browsing to cart.

This project gave me strong experience in creating a Shopify store for a broad fashion and lifestyle product catalog. It helped me improve my skills in Shopify customization, responsive ecommerce design, category-based product organization, user-friendly navigation, and conversion-focused shopping flow.`,
    image: arunakePreview,
    imageAspect: DESKTOP_PREVIEW_ASPECT,
    ctaUrl: "https://arunake.com",
  }),
  service({
    number: "07",
    title: "Airbarista Shopify Pneumatic Espresso Machine Store",
    description:
      "A Shopify ecommerce website built for Airbarista, a coffee equipment brand focused on the AB58 Pro pneumatic espresso machine and related parts. The store was designed to present a small but powerful espresso machine with clear product information, simple navigation, mobile-friendly shopping flow, and a direct cart-to-checkout experience.",
    pageDescription: `Airbarista was a Shopify ecommerce project I worked on for a coffee equipment brand focused on portable pneumatic espresso brewing. The main goal was to create a clean and product-focused online store that could explain the AB58 Pro espresso machine clearly while making the buying process simple for coffee lovers who want to brew espresso anywhere. The website presents the product as a small but powerful espresso machine and includes key navigation sections such as AB-58 Pro, Parts, Blog, Manual, and Contact.

My work focused on building a responsive Shopify storefront that works smoothly across desktop and mobile devices. Since this product has technical details and package options, I paid attention to product page structure, product images, option selection, included package information, pricing display, quantity control, add-to-cart flow, and checkout access. The goal was to help customers quickly understand what comes with the machine, compare the available options, and purchase without confusion.

I also worked on shaping the website around Airbarista's coffee innovation message. The design needed to feel modern, practical, and trustworthy while keeping the product as the main focus. I structured the homepage, product section, customer review area, newsletter section, support links, and policy pages so the store could support both product discovery and customer confidence. The site also includes useful ecommerce elements such as worldwide shipping messaging, customer account access, cart sidebar, newsletter signup, and policy links.

This project gave me strong experience in creating a Shopify store for a niche coffee hardware product. It helped me combine ecommerce development, responsive UI design, technical product presentation, product option handling, and conversion-focused shopping flow into one polished online store.`,
    image: airBaristaPreview,
    imageAspect: DESKTOP_PREVIEW_ASPECT,
    ctaUrl: "https://air-barista.com",
  }),
];

export function getWorkServiceBySlug(slug: string): WorkService | undefined {
  return WORK_SERVICES.find((project) => project.slug === slug);
}
