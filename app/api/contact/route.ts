import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const body = await request.json()

  const { name, email, phone, subject, message } = body

 
  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Champs requis manquants' }, { status: 400 })
  }

  console.log('Formulaire reçu:', { name, email, phone, subject, message })

  return NextResponse.json({ success: true, message: 'Message envoyé avec succès' })
}
