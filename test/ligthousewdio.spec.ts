import type { Config, Puppeteer, UserFlow } from "lighthouse";

describe("LightHouseWDIO", () => {

  it("Should log single page", async () => {
    const pageTags = {
      url: "https://beta.familysearch.org/",
      reload: false
    }
    try {
      const config: Config = {
        extends: "lighthouse:default",
        settings: {
          formFactor: "desktop",
          screenEmulation: {
            width: 1920,
            height: 1080,
            mobile: false,
            deviceScaleFactor: 1,
            disabled: false
          }
        }
      };
      const puppeteerBrowser = await browser.getPuppeteer();
      const [page] = (await puppeteerBrowser.pages());
      // Start Lighthouse flow
      console.log("runLighthouse import");
      // const lighthouse = (await import("lighthouse/core/index.cjs"));
      // log("runLighthouse lighthouse imported");
      const { startFlow } = await import("lighthouse/core");
      console.log("runLighthouse startFlow imported");
      const flow: UserFlow = await startFlow(page as unknown as Puppeteer.Page, { config, name: pageTags.url });
      console.log("runLighthouse got flow");
      await flow.navigate(pageTags.url, {
        name: `Cold Cache Navigation - ${pageTags.url}`,
        disableStorageReset: false
      });
      console.log(`Cold Cache Run Called`);

      // Get the comprehensive flow report.
      const lighthouseComprehensiveResult = await flow.generateReport();

      // Create and get JSON result for Splunk.
      const lighthouseJSONResult = await flow.createFlowResult();

      // TODO
    } catch (error: unknown) {
      console.error("single page error", error);
      throw error;
    }
  });
});
