<?php

namespace App\Notifications;

use Illuminate\Auth\Notifications\VerifyEmail as VerifyEmailBase;
use Illuminate\Notifications\Messages\MailMessage;

class CustomVerifyEmail extends VerifyEmailBase
{
    /**
     * Get the mail representation of the notification.
     */
    public function toMail($notifiable): MailMessage
    {
        $verificationUrl = $this->verificationUrl($notifiable);

        return (new MailMessage)
            ->subject('Verifica tu dirección de correo electrónico')
            ->line('Haz clic en el botón de abajo para verificar tu dirección de correo electrónico.')
            ->action('Verificar correo electrónico', $verificationUrl)
            ->line('Si no creaste una cuenta, no se requiere ninguna acción adicional.');
    }
}
