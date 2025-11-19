import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { nombre, email, telefono, empresa, mensaje, tipoConsulta } = body;

    const airtableToken = process.env.AIRTABLE_KEY;

    if (!airtableToken) {
      return NextResponse.json(
        { error: 'Airtable token no configurado' },
        { status: 500 }
      );
    }

    const response = await fetch('https://api.airtable.com/v0/appXAi3Xfmn61vC6Q/Contactos', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${airtableToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        fields: {
          'Nombre': nombre,
          'Email': email,
          'Teléfono': telefono,
          'Empresa': empresa,
          'Mensaje': mensaje,
          'Tipo de Consulta': tipoConsulta,
          'Fuente de Contacto': 'Web'
        }
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Error de Airtable:', errorData);
      return NextResponse.json(
        { error: 'Error al guardar en Airtable' },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json({ success: true, data });

  } catch (error) {
    console.error('Error en API route:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
