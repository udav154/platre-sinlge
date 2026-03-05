import { Resend } from "resend";
import { NextRequest } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return Response.json(
        { error: "Все поля обязательны для заполнения" },
        { status: 400 }
      );
    }

    const contactEmail = process.env.CONTACT_EMAIL || "sokolovva.ole4ka@yandex.ru";

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY не настроен");
      return Response.json(
        { error: "Сервис отправки писем не настроен. Добавьте RESEND_API_KEY в .env.local" },
        { status: 500 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM || "Platre <onboarding@resend.dev>",
      to: [contactEmail],
      replyTo: email,
      subject: `Новое сообщение с сайта от ${name}`,
      html: `
        <h2>Новое сообщение с сайта Platre</h2>
        <p><strong>Имя:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Сообщение:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json(
        { error: error.message || "Не удалось отправить сообщение" },
        { status: 500 }
      );
    }

    return Response.json({ success: true, id: data?.id });
  } catch (err) {
    console.error("Contact API error:", err);
    return Response.json(
      { error: "Произошла ошибка при отправке" },
      { status: 500 }
    );
  }
}
