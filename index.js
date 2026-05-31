export default {
  async fetch(request) {
    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <title>My Cloudflare Worker Site</title>
        </head>
        <body>
          <h1>Hello from Cloudflare Worker!</h1>
          <p>Your site is live at site.yubo169.workers.dev</p>
        </body>
      </html>
    `;
    return new Response(html, {
      headers: { "Content-Type": "text/html" }
    });
  }
};
