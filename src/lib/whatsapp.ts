// Centralized WhatsApp lead helpers
export const WHATSAPP_PHONE = "917569864565";

export const buildWhatsAppUrl = (message: string): string => {
  const text = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_PHONE}?text=${text}`;
};

export const WA_MESSAGES = {
  quote:
    "Hi XPrint! 👋 I'd like to get a free quote for a printing project. Could you share the details and pricing?",
  general:
    "Hi XPrint! 👋 I'd like to know more about your printing services.",
  service: (service: string) =>
    `Hi XPrint! 👋 I'm interested in *${service}*. Could you share pricing, turnaround time and minimum order details?`,
  portfolio: (work: string) =>
    `Hi XPrint! 👋 I saw your *${work}* in your recent work and I'd like something similar. Can you help with a quote?`,
  contact:
    "Hi XPrint! 👋 I'd like to start a new project with you. When can we discuss the details?",
};
