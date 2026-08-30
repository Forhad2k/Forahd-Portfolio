// EmailJS configuration
//
// This project sends the contact form directly from the browser using
// EmailJS (https://www.emailjs.com) — no custom backend/API route required.
//
// 1. Create a free account at https://dashboard.emailjs.com
// 2. Add an Email Service (e.g. Gmail) -> copy the Service ID
// 3. Create an Email Template with variables: from_name, from_email, message
//    -> copy the Template ID
// 4. Account -> General -> copy your Public Key
// 5. Put the three values in a `.env.local` file at the project root:
//
//    NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
//    NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
//    NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
//
// These are exposed to the browser on purpose — EmailJS public keys are
// designed to be used client-side and are rate-limited/domain-restricted
// from your EmailJS dashboard.

export const emailjsConfig = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "",
};

export const emailjsConfigured =
  !!emailjsConfig.serviceId && !!emailjsConfig.templateId && !!emailjsConfig.publicKey;
