const fetch = require('node-fetch');

module.exports = async (req, res) => {
  const { url } = req.query;
  if (!url) {
    res.status(400).json({ error: 'url parameter is required' });
    return;
  }

  const apiUrl = `https://storebix.serv00.net/whois-check.php?url=${encodeURIComponent(url)}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch WHOIS data' });
  }
};
