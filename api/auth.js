// GitHub OAuth authentication endpoint for Decap CMS
export default async function handler(req, res) {
  const { code } = req.query;
  
  if (!code) {
    return res.status(400).json({ error: 'No authorization code provided' });
  }

  try {
    // Exchange authorization code for access token
    const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        client_id: 'Ov23liqWxSjU12KPiP70',
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code: code,
      }),
    });

    const tokenData = await tokenResponse.json();

    if (tokenData.access_token) {
      // Return the token in the format expected by Decap CMS
      res.json({
        token: tokenData.access_token,
        provider: 'github',
      });
    } else {
      res.status(400).json({ error: 'Failed to get access token' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Authentication failed' });
  }
}