export async function onRequestPost(context) {
  try {
    const data = await context.request.json();

    const requiredFields = [
      'fullName',
      'email',
      'phone',
      'location',
      'interest',
      'availability',
      'message'
    ];

    for (const field of requiredFields) {
      if (!data[field] || !String(data[field]).trim()) {
        return new Response(
          JSON.stringify({
            success: false,
            error: `Missing required field: ${field}`
          }),
          {
            status: 400,
            headers: {
              'Content-Type': 'application/json'
            }
          }
        );
      }
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(String(data.email).trim())) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Please provide a valid email address.'
        }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
    }

    const cleanedData = {
      fullName: String(data.fullName || '').trim(),
      email: String(data.email || '').trim(),
      phone: String(data.phone || '').trim(),
      location: String(data.location || '').trim(),
      dob: String(data.dob || '').trim(),
      sex: String(data.sex || '').trim(),
      bloodGroup: String(data.bloodGroup || '').trim(),
      interest: String(data.interest || '').trim(),
      availability: String(data.availability || '').trim(),
      experience: String(data.experience || '').trim(),
      message: String(data.message || '').trim(),
      submittedAt: new Date().toISOString()
    };

    console.log('Volunteer application received:', cleanedData);

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Thank you. Your volunteer application has been submitted.'
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        success: false,
        error: 'Invalid request. Please try again.'
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }
}