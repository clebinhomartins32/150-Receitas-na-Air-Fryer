/**
 * Meta / Facebook Ads Tracking (Pixel + Conversions API CAPI)
 * Pixel ID: 1831949861549871
 */

export const KIWIFY_CHECKOUT_URL = 'https://pay.kiwify.com.br/o8J9J39';
export const META_PIXEL_ID = '1831949861549871';
export const META_API_TOKEN = 'EAASodim8Xd8BSXjXhGq2YpZBNCkZCEku1bGDi5YkWQHnMYumENn0jZBB1hgPjRoRL0ymPZCtFZBkgLojUjpFvQ8n8owlaInyFODLFAjzQZBZBQ94dFbx8tgoTeMJHDYEkNRBGoqk6dzpHXevnb04ZAHHeCuC5bbtJkVZCLgy9ZCcwhWNLF2ZCa4FVEkG3iwZAyeF5AZDZD';

declare global {
  interface Window {
    fbq?: any;
    _fbq?: any;
  }
}

// Generate unique event ID for Pixel and Conversions API deduplication
export const generateEventId = (prefix: string) => {
  return `${prefix}_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
};

/**
 * Dispatch event to Meta Conversions API (CAPI)
 */
export const sendMetaCapiEvent = async (eventName: string, eventId: string, customData: Record<string, any> = {}) => {
  try {
    const payload = {
      data: [
        {
          event_name: eventName,
          event_time: Math.floor(Date.now() / 1000),
          event_id: eventId,
          event_source_url: typeof window !== 'undefined' ? window.location.href : '',
          action_source: 'website',
          user_data: {
            client_user_agent: typeof navigator !== 'undefined' ? navigator.userAgent : '',
          },
          custom_data: {
            content_name: '150 Receitas na Air Fryer - O Guia Definitivo',
            currency: 'BRL',
            value: 14.99,
            ...customData,
          },
        },
      ],
    };

    // Send asynchronously to Meta Graph API
    await fetch(`https://graph.facebook.com/v19.0/${META_PIXEL_ID}/events?access_token=${META_API_TOKEN}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
      mode: 'cors',
    }).catch((err) => {
      // Graceful catch so network blockers won't interrupt UX
      console.warn('Meta CAPI background sync:', err);
    });
  } catch (error) {
    console.warn('Meta CAPI error:', error);
  }
};

/**
 * Track PageView
 */
export const trackPageView = () => {
  const eventId = generateEventId('pageview');
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'PageView', {}, { eventID: eventId });
  }
  sendMetaCapiEvent('PageView', eventId);
};

/**
 * Track InitiateCheckout when clicking buy buttons
 */
export const trackInitiateCheckout = (source: string = 'cta_button') => {
  const eventId = generateEventId('initiate_checkout');
  const params = {
    content_name: '150 Receitas na Air Fryer - O Guia Definitivo',
    content_category: 'E-book Culinária Saudável',
    content_type: 'product',
    value: 14.99,
    currency: 'BRL',
    num_items: 1,
    source,
  };

  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'InitiateCheckout', params, { eventID: eventId });
  }

  sendMetaCapiEvent('InitiateCheckout', eventId, params);
};

/**
 * Track Purchase event
 */
export const trackPurchase = (customData: Record<string, any> = {}) => {
  const eventId = generateEventId('purchase');
  const params = {
    content_name: '150 Receitas na Air Fryer - O Guia Definitivo',
    content_category: 'E-book Culinária Saudável',
    content_type: 'product',
    value: 14.99,
    currency: 'BRL',
    num_items: 1,
    ...customData,
  };

  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Purchase', params, { eventID: eventId });
  }

  sendMetaCapiEvent('Purchase', eventId, params);
};

/**
 * Central action when clicking checkout CTA buttons:
 * 1. Fires InitiateCheckout on Pixel & Conversions API
 * 2. Redirects to Kiwify checkout url
 */
export const redirectToKiwifyCheckout = (source: string = 'direct_cta') => {
  trackInitiateCheckout(source);

  // Give 150ms for beacon/fetch to initiate then redirect
  setTimeout(() => {
    window.location.href = KIWIFY_CHECKOUT_URL;
  }, 150);
};
