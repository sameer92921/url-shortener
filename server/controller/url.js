const { Url } = require("../model/url");
const { nanoid } = require('nanoid');

exports.postUrl = async (req, res) => {
    const { longUrl } = req.body;
    const userId = req.userId; // Comes from verifyToken middleware

    if (!longUrl) return res.status(400).json({ error: 'URL required' });

    try {
        const shortCode = nanoid(10);
        const url = new Url({
            _id: shortCode,
            longUrl,
            userId,
        });

        await url.save();

        res.json({ shortUrl: `${process.env.BASE_URL}/${shortCode}` });
    } catch (err) {
        console.error("Error creating short URL:", err);
        res.status(500).json({ error: 'Server error' });
    }
};

exports.getUrl = async (req, res) => {
    const { shortCode } = req.params;
    try {
        const url = await Url.findById(shortCode);
        if (url) {
            url.clicks++;
            await url.save();
            return res.redirect(301, url.longUrl);
        }
        res.status(404).json({ error: 'URL not found' });
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};