const express = require("express");
const puppeteer = require("puppeteer-extra");
const cors = require("cors");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");
const router = express.Router();
puppeteer.use(StealthPlugin());

const PORT = process.env.PORT || 3000;

router.use(express.json());
router.use(cors());

// Endpoint to scrape Google Maps
router.get("/", async (req, res) => {
  const keyword = req.query.keyword || "咖啡廳";
  let browser = null;

  try {
    browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    await page.setUserAgent(
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
    );
    await page.setViewport({ width: 1280, height: 800 });

    await page.goto(
      `https://www.google.com.tw/maps/search/${keyword}/@24.9562585,121.1824919,15z/data=!3m1!4b1?hl=zh-TW`,
      { waitUntil: "networkidle2" }
    );

    await page.waitForSelector(
      'div[role="feed"] > div > div[class="Nv2PK THOPZb CpccDe "]'
    );

    const results = await page.evaluate(() => {
      const items = Array.from(
        document.querySelectorAll(
          'div[role="feed"] > div > div[class="Nv2PK THOPZb CpccDe "]'
        )
      );

      return items.map((item, index) => {
        let data = {};

        try {
          data.title =
            item.querySelector(".fontHeadlineSmall")?.textContent.trim() ||
            "N/A";
          data.star =
            item.querySelector(".MW4etd")?.textContent.trim() || "N/A";
          data.href = item.querySelector(".hfpxzc")?.href || "N/A";
          data.image = item.querySelector(".FQ2IWe.p0Hhde img")?.src || "N/A";
        } catch (error) {
          console.error(`Error extracting data for item #${index + 1}:`, error);
        }

        return data;
      });
    });

    return res.json({ keyword, results });
  } catch (error) {
    console.error("Error during scraping:", error);
    return res.status(500).json({ error: "Failed to scrape data" });
  } finally {
    if (browser) {
      await browser.close();
    }
  }
});

router.post("/:keyword", async (req, res) => {
  const { keyword } = req.params;
  console.log(`Received keyword: ${keyword}`);
  try {
    browser = await puppeteer.launch({ headless: true });
    console.log("Browser launched successfully.");
    const page = await browser.newPage();

    const primarySelector =
      'div[role="feed"] > div > div[class="Nv2PK THOPZb CpccDe "]';
    const fallbackSelector =
      'div[role="feed"] > div > div[class="Nv2PK tH5CWc THOPZb "]';

    await page.setUserAgent(
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
    );

    await page.goto(
      `https://www.google.com.tw/maps/search/${keyword}/@24.9562585,121.1824919,15z/data=!3m1!4b1?hl=zh-TW`,
      { waitUntil: "networkidle2" }
    );

    let selectorToUse;
    const isPrimarySelectorAvailable = await page.$(primarySelector);
    if (isPrimarySelectorAvailable) {
      selectorToUse = primarySelector;
    } else {
      // if primarySelector not exist，try to use fallbackSelector
      const isFallbackSelectorAvailable = await page.$(fallbackSelector);
      if (isFallbackSelectorAvailable) {
        selectorToUse = fallbackSelector;
      } else {
        throw new Error("Neither primary nor fallback selector is available.");
      }
    }

    await page.waitForSelector(selectorToUse, { timeout: 30000 });
    console.log(`Using selector: ${selectorToUse}`);

    

    const results = await page.evaluate((selector) => {
      const items = Array.from(
        document.querySelectorAll(
          selector
        )
      );

      console.log('items',items);

      return items.map((item, index) => {
        let data = {};

        try {
          data.title =
            item.querySelector(".fontHeadlineSmall")?.textContent.trim() ||
            "N/A";
          data.star =
            item.querySelector(".MW4etd")?.textContent.trim() || "N/A";
          data.href = item.querySelector(".hfpxzc")?.href || "N/A";
          data.image = item.querySelector(".FQ2IWe.p0Hhde img")?.src || "N/A";
        } catch (error) {
          console.error(`Error extracting data for item #${index + 1}:`, error);
        }

        return data;
      });
    },selectorToUse);

    return res.json({ keyword, results });
  } catch (error) {
    console.error("Error during scraping:", error);
    return res.status(500).json({ error: "Failed to scrape data" });
  } finally {
    if (browser) {
      await browser.close();
    }
  }
});

module.exports = router;
