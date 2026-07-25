export async function onRequestPost() {
  return new Response(
    JSON.stringify({
      success: false,
      error: 'This endpoint is no longer in use. Volunteer submissions are handled through Web3Forms.'
    }),
    {
      status: 410,
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );
}
