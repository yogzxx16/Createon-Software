import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed.' });
  }

  try {
    const name = typeof req.body.name === 'string' ? req.body.name.trim() : '';
    const email = typeof req.body.email === 'string' ? req.body.email.trim() : '';
    const company = typeof req.body.company === 'string' ? req.body.company.trim() : '';
    const message = typeof req.body.message === 'string' ? req.body.message.trim() : '';

    // Validation
    if (!name) {
      return res.status(400).json({ success: false, message: 'Please provide a valid name.' });
    }
    if (name.length > 100) {
      return res.status(400).json({ success: false, message: 'Name is too long.' });
    }

    if (!email) {
      return res.status(400).json({ success: false, message: 'Please provide a valid email.' });
    }
    if (email.length > 254) {
      return res.status(400).json({ success: false, message: 'Email is too long.' });
    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ success: false, message: 'Invalid email format.' });
    }

    if (!message) {
      return res.status(400).json({ success: false, message: 'Please provide a valid message.' });
    }
    if (message.length > 5000) {
      return res.status(400).json({ success: false, message: 'Message is too long.' });
    }

    if (company && company.length > 150) {
      return res.status(400).json({ success: false, message: 'Company name is too long.' });
    }

    // Config Check
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const RESEND_FROM_EMAIL = process.env.RESEND_FROM_EMAIL;
    
    console.log(`[API Diagnostic] RESEND_API_KEY configured: ${!!RESEND_API_KEY}`);
    console.log(`[API Diagnostic] RESEND_FROM_EMAIL configured: ${!!RESEND_FROM_EMAIL}`);

    if (!RESEND_API_KEY) {
      return res.status(500).json({ success: false, message: 'Email service is not configured.' });
    }

    if (!RESEND_FROM_EMAIL) {
      return res.status(500).json({ success: false, message: 'Email sender address is not configured.' });
    }

    const resend = new Resend(RESEND_API_KEY);

    const { data, error } = await resend.emails.send({
      from: RESEND_FROM_EMAIL,
      to: ['createonsoftware@gmail.com'],
      replyTo: email,
      subject: 'New Project Enquiry — CreateOn Software',
      html: `
        <h2>CREATEON SOFTWARE</h2>
        <h3>NEW PROJECT ENQUIRY</h3>
        <p><strong>Name:</strong><br/> ${name}</p>
        <p><strong>Email:</strong><br/> ${email}</p>
        <p><strong>Company / Project:</strong><br/> ${company || 'N/A'}</p>
        <p><strong>What They're Building:</strong><br/> ${message}</p>
        <hr/>
        <p><small>Source: CreateOn Software Website</small></p>
      `,
    });

    if (error) {
      console.error('Resend API error:', error);
      return res.status(500).json({ success: false, message: 'Unable to send your message.' });
    }

    return res.status(200).json({ success: true, message: 'Message sent successfully.' });
  } catch (error) {
    console.error('Unexpected error in /api/contact:', error);
    return res.status(500).json({ success: false, message: 'Unable to send your message.' });
  }
}
