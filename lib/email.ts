import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// All site email is delivered here.
const TO = process.env.CONTACT_TO_EMAIL || 'info@truelightbaptist.org';
// Must be an address on a domain verified in Resend (e.g. noreply@truelightbaptist.org).
const FROM = process.env.CONTACT_FROM_EMAIL || 'onboarding@resend.dev';

export type ContactSubmission = {
  name: string;
  email: string;
  phone?: string;
  message?: string;
  interests?: string[];
};

function escapeHtml(s: string) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export async function sendContactEmail(
  data: ContactSubmission,
): Promise<{ ok: true; id?: string } | { ok: false; error: string }> {
  if (!process.env.RESEND_API_KEY) {
    return { ok: false, error: 'Email is not configured (missing RESEND_API_KEY).' };
  }

  const interests = data.interests?.length ? data.interests.join(', ') : '—';
  const rows: [string, string][] = [
    ['Name', data.name],
    ['Email', data.email],
    ['Phone', data.phone || '—'],
    ['Interested in', interests],
  ];

  const html = `
    <div style="font-family: Arial, sans-serif; color: #1E1E1E; max-width: 560px;">
      <h2 style="color:#A02319; margin:0 0 16px;">New message from the website</h2>
      <table style="border-collapse:collapse; width:100%; margin-bottom:16px;">
        ${rows
          .map(
            ([k, v]) =>
              `<tr>
                 <td style="padding:8px 12px; background:#F4F1EC; font-weight:bold; width:130px; border:1px solid #eee;">${k}</td>
                 <td style="padding:8px 12px; border:1px solid #eee;">${escapeHtml(v)}</td>
               </tr>`,
          )
          .join('')}
      </table>
      ${
        data.message
          ? `<p style="font-weight:bold; margin:0 0 6px;">Message</p>
             <p style="white-space:pre-wrap; background:#F4F1EC; padding:12px; border-radius:8px; margin:0;">${escapeHtml(
               data.message,
             )}</p>`
          : ''
      }
      <p style="color:#6B6B6B; font-size:12px; margin-top:20px;">Reply directly to this email to respond to ${escapeHtml(
        data.name,
      )}.</p>
    </div>`;

  const { data: result, error } = await resend.emails.send({
    from: `True Light Baptist Church <${FROM}>`,
    to: TO,
    replyTo: data.email,
    subject: `New website message from ${data.name}`,
    html,
  });

  if (error) return { ok: false, error: error.message };
  return { ok: true, id: result?.id };
}

export type PrayerSubmission = {
  name: string;
  request: string;
  confidential?: boolean;
};

export async function sendPrayerEmail(
  data: PrayerSubmission,
): Promise<{ ok: true; id?: string } | { ok: false; error: string }> {
  if (!process.env.RESEND_API_KEY) {
    return { ok: false, error: 'Email is not configured (missing RESEND_API_KEY).' };
  }

  const html = `
    <div style="font-family: Arial, sans-serif; color: #1E1E1E; max-width: 560px;">
      <h2 style="color:#A02319; margin:0 0 16px;">New prayer request</h2>
      <table style="border-collapse:collapse; width:100%; margin-bottom:16px;">
        <tr>
          <td style="padding:8px 12px; background:#F4F1EC; font-weight:bold; width:130px; border:1px solid #eee;">From</td>
          <td style="padding:8px 12px; border:1px solid #eee;">${escapeHtml(data.name)}</td>
        </tr>
        <tr>
          <td style="padding:8px 12px; background:#F4F1EC; font-weight:bold; border:1px solid #eee;">Confidential</td>
          <td style="padding:8px 12px; border:1px solid #eee;">${data.confidential ? 'Yes — share only with the prayer team' : 'No'}</td>
        </tr>
      </table>
      <p style="font-weight:bold; margin:0 0 6px;">Request</p>
      <p style="white-space:pre-wrap; background:#F4F1EC; padding:12px; border-radius:8px; margin:0;">${escapeHtml(data.request)}</p>
      <p style="color:#6B6B6B; font-size:12px; margin-top:20px;">Submitted through the True Light website prayer form.</p>
    </div>`;

  const { data: result, error } = await resend.emails.send({
    from: `True Light Baptist Church <${FROM}>`,
    to: TO,
    subject: `Prayer request from ${data.name}`,
    html,
  });

  if (error) return { ok: false, error: error.message };
  return { ok: true, id: result?.id };
}
