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
    if (!body.firstName || !body.lastName || !body.email || !body.message) {
      throw createError({
        statusCode: 400,
        statusMessage: "Missing required fields",
      });
    }

    const { firstName, lastName, email, message } = body;

    // Send notification email to the couple
    const emailData = await resend.emails.send({
      from: `Wedding Questions <${runtimeConfig.resendFromEmail}>`,
      to: [runtimeConfig.resendToEmail],
      replyTo: email,
      subject: `Question de ${firstName} ${lastName} - Mariage`,
      html: `
        <div style="font-family: 'Georgia', serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #fefdfb;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #d4af37; font-size: 28px; margin: 0;">❓ Nouvelle question</h1>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); border: 2px solid #f5f1e8;">
            <h2 style="color: #8b4513; margin-top: 0;">Question de votre invité</h2>
            
            <div style="margin: 15px 0; padding: 10px; background: #f9f7f4; border-radius: 8px;">
              <strong style="color: #d4af37;">De:</strong> ${firstName} ${lastName}
            </div>
            
            <div style="margin: 15px 0; padding: 10px; background: #f9f7f4; border-radius: 8px;">
              <strong style="color: #d4af37;">Email:</strong> 
              <a href="mailto:${email}" style="color: #8b4513; text-decoration: none;">${email}</a>
            </div>
            
            <div style="margin: 20px 0; padding: 20px; background: #f0f8ff; border-radius: 10px; border-left: 4px solid #d4af37;">
              <strong style="color: #d4af37; font-size: 16px;">Question:</strong><br><br>
              <div style="color: #555; line-height: 1.6; font-size: 15px; white-space: pre-wrap;">${message}</div>
            </div>
            
            <div style="margin-top: 25px; padding: 15px; background: #e8f5e8; border-radius: 8px; text-align: center;">
              <p style="margin: 0; color: #2d5016; font-size: 14px;">
                💡 <strong>Astuce:</strong> Vous pouvez répondre directement à cet email pour contacter ${firstName}.
              </p>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 20px; color: #8b4513; font-style: italic;">
            Reçu le ${new Date().toLocaleDateString('fr-FR', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })}
          </div>
        </div>
      `,
    });

    // Send confirmation email to the guest
    await resend.emails.send({
      from: `Yannick & Louise <${runtimeConfig.resendFromEmail}>`,
      to: [email],
      subject: "Question reçue - Mariage Yannick & Louise",
      html: `
        <div style="font-family: 'Georgia', serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #fefdfb;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #d4af37; font-size: 32px; margin: 0;">💝 Yannick & Louise</h1>
            <h2 style="color: #8b4513; font-size: 24px; margin: 10px 0;">Merci pour votre question !</h2>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); border: 2px solid #f5f1e8;">
            <p style="font-size: 18px; line-height: 1.6; color: #555; margin-top: 0;">
              Cher(e) <strong style="color: #d4af37;">${firstName}</strong>,
            </p>
            
            <p style="font-size: 16px; line-height: 1.6; color: #555;">
              Nous avons bien reçu votre question concernant notre mariage. 
              Nous vous répondrons dans les plus brefs délais ! 😊
            </p>
            
            <div style="margin: 25px 0; padding: 20px; background: #f0f8ff; border-radius: 10px; border-left: 4px solid #d4af37;">
              <strong style="color: #d4af37; font-size: 16px;">Rappel de votre question :</strong><br><br>
              <div style="color: #555; line-height: 1.6; font-style: italic; white-space: pre-wrap;">"${message}"</div>
            </div>
            
            <div style="background: #fff3cd; padding: 20px; border-radius: 10px; margin: 20px 0;">
              <h3 style="color: #d4af37; margin-top: 0;">En attendant notre réponse :</h3>
              <ul style="color: #555; line-height: 1.6; margin-bottom: 0;">
                <li>Consultez notre <strong>FAQ</strong> sur le site web</li>
                <li>N'hésitez pas à poser d'autres questions</li>
                <li>Pensez à confirmer votre présence si ce n'est pas encore fait</li>
              </ul>
            </div>
            
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
            Vous recevez cet email suite à votre question sur notre site de mariage.
          </div>
        </div>
      `,
    });

    return {
      success: true,
      message: "Question submitted successfully",
      emailId: emailData.data?.id,
    };
  } catch (error) {
    console.error("Question submission error:", error);

    throw createError({
      statusCode: 500,
      statusMessage: "Failed to submit question",
      data: { error: error.message },
    });
  }
});