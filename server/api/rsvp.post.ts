import { Resend } from "resend";

export default defineEventHandler(async (event) => {
  try {
    const runtimeConfig = useRuntimeConfig();

    // Validate required environment variables
    if (!runtimeConfig.resendApiKey) {
      throw createError({
        statusCode: 500,
        statusMessage: "Resend API key not configured",
      });
    }

    if (!runtimeConfig.resendFromEmail) {
      throw createError({
        statusCode: 500,
        statusMessage: "Resend from email not configured",
      });
    }

    if (!runtimeConfig.resendToEmail) {
      throw createError({
        statusCode: 500,
        statusMessage: "Resend to email not configured",
      });
    }

    const resend = new Resend(runtimeConfig.resendApiKey);
    // Read and validate request body
    const body = await readBody(event);

    // Basic validation
    if (!body.firstName || !body.lastName || !body.email || !body.attendance) {
      throw createError({
        statusCode: 400,
        statusMessage: "Missing required fields",
      });
    }

    const {
      firstName,
      lastName,
      email,
      attendance,
      dietaryRestrictions,
      message,
    } = body;

    // Send notification email to the couple
    const emailData = await resend.emails.send({
      from: `Wedding RSVP <${runtimeConfig.resendFromEmail}>`,
      to: [runtimeConfig.resendToEmail],
      subject: `RSVP - ${attendance === 'yes' ? 'PRÉSENT' : 'ABSENT'} - ${firstName} ${lastName}`,
      html: `
        <div style="font-family: 'Georgia', serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #fefdfb;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #d4af37; font-size: 28px; margin: 0;">💌 Nouvelle réponse RSVP</h1>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); border: 2px solid #f5f1e8;">
            <h2 style="color: #8b4513; margin-top: 0;">Informations de l'invité</h2>
            
            <div style="margin: 15px 0; padding: 10px; background: #f9f7f4; border-radius: 8px;">
              <strong style="color: #d4af37;">Nom complet:</strong> ${firstName} ${lastName}
            </div>
            
            <div style="margin: 15px 0; padding: 10px; background: #f9f7f4; border-radius: 8px;">
              <strong style="color: #d4af37;">Email:</strong> ${email}
            </div>
            
            <div style="margin: 15px 0; padding: 10px; background: ${attendance === "yes" ? "#e8f5e8" : "#ffeaea"}; border-radius: 8px;">
              <strong style="color: #d4af37;">Présence:</strong> 
              <span style="color: ${attendance === "yes" ? "#2d5016" : "#721c24"}; font-weight: bold;">
                ${attendance === "yes" ? "✅ Oui, je serai présent(e)" : "❌ Non, je ne pourrai pas venir"}
              </span>
            </div>
            
            ${
              dietaryRestrictions
                ? `
              <div style="margin: 15px 0; padding: 10px; background: #fff3cd; border-radius: 8px;">
                <strong style="color: #d4af37;">Restrictions alimentaires:</strong> ${dietaryRestrictions}
              </div>
            `
                : ""
            }
            
            ${
              message
                ? `
              <div style="margin: 15px 0; padding: 15px; background: #f0f8ff; border-radius: 8px; border-left: 4px solid #d4af37;">
                <strong style="color: #d4af37;">Message:</strong><br>
                <em style="color: #555; line-height: 1.5;">${message.replace(/\n/g, "<br>")}</em>
              </div>
            `
                : ""
            }
          </div>
          
          <div style="text-align: center; margin-top: 20px; color: #8b4513; font-style: italic;">
            Reçu le ${new Date().toLocaleDateString("fr-FR", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </div>
        </div>
      `,
    });

    // Send confirmation email to the guest
    await resend.emails.send({
      from: `Yannick & Louise <${runtimeConfig.resendFromEmail}>`,
      to: [email],
      subject: "Confirmation RSVP - Mariage Yannick & Louise",
      html: `
        <div style="font-family: 'Georgia', serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #fefdfb;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #d4af37; font-size: 32px; margin: 0;">💝 Yannick & Louise</h1>
            <h2 style="color: #8b4513; font-size: 24px; margin: 10px 0;">Merci pour votre réponse !</h2>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); border: 2px solid #f5f1e8;">
            <p style="font-size: 18px; line-height: 1.6; color: #555; margin-top: 0;">
              Cher(e) <strong style="color: #d4af37;">${firstName}</strong>,
            </p>
            
            <p style="font-size: 16px; line-height: 1.6; color: #555;">
              Nous avons bien reçu votre réponse à notre invitation de mariage. 
              ${
                attendance === "yes"
                  ? "Nous sommes ravis que vous puissiez vous joindre à nous pour célébrer notre union ! 🎉"
                  : "Nous comprenons et vous remercions de nous avoir prévenus. Vous serez dans nos pensées ce jour-là. 💕"
              }
            </p>
            
            <div style="margin: 25px 0; padding: 20px; background: ${attendance === "yes" ? "#e8f5e8" : "#ffeaea"}; border-radius: 10px; text-align: center;">
              <strong style="color: ${attendance === "yes" ? "#2d5016" : "#721c24"}; font-size: 18px;">
                Votre réponse: ${attendance === "yes" ? "Présent(e)" : "Absent(e)"}
              </strong>
            </div>
            
            ${
              attendance === "yes"
                ? `
              <div style="background: #f0f8ff; padding: 20px; border-radius: 10px; margin: 20px 0; border-left: 4px solid #d4af37;">
                <h3 style="color: #d4af37; margin-top: 0;">Informations importantes :</h3>
                <ul style="color: #555; line-height: 1.6;">
                  <li><strong>Date :</strong> 20 décembre 2025</li>
                  <li><strong>Lieu :</strong> Dakar, Sénégal</li>
                  <li><strong>Heure :</strong> Plus de détails suivront</li>
                </ul>
                <p style="color: #555; margin-bottom: 0;">
                  Si vous avez des questions, n'hésitez pas à nous contacter via le formulaire sur notre site web.
                </p>
              </div>
            `
                : ""
            }
            
            <div style="text-align: center; margin-top: 30px;">
              <p style="font-size: 18px; color: #8b4513; font-style: italic; margin: 0;">
                Avec tout notre amour,
              </p>
              <p style="font-size: 24px; color: #d4af37; font-weight: bold; margin: 10px 0 0 0;">
                Yannick & Louise 💕
              </p>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 20px; font-size: 12px; color: #999;">
            Vous recevez cet email suite à votre réponse sur notre site de mariage.
          </div>
        </div>
      `,
    });

    return {
      success: true,
      message: "RSVP submitted successfully",
      emailId: emailData.data?.id,
    };
  } catch (error) {
    console.error("RSVP submission error:", error);

    throw createError({
      statusCode: 500,
      statusMessage: "Failed to submit RSVP",
      data: { error: error.message },
    });
  }
});

