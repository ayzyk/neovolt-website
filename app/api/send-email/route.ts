import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend('re_Vac7coFT_FMHm2JZevegTBHUhGy7nxepf');

export async function POST(request: Request) {
  try {
    const { name, email, phone, message } = await request.json();

    const { data, error } = await resend.emails.send({
      from: 'NEOVOLT <onboarding@resend.dev>',
      to: ['neo.volt@yahoo.com'],
      subject: `Новое сообщение от ${name}`,
      text: `
        Имя: ${name}
        Email: ${email}
        Телефон: ${phone}
        Сообщение: ${message}
      `,
    });

    if (error) {
      throw error;
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
} 