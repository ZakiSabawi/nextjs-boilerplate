import Image from "next/image";
import Script from "next/script";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
           Welcome To Monday Assistant.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Click on the bottom right to start using the Schedule Optimizer. 
          </p>
        </div>
      </main>

      {/* Watson Orchestrate Chat Widget Container */}
      <div id="watson-chat-root"></div>

      {/* Watson Orchestrate Configuration and Loader Script */}
      <Script
        id="watson-orchestrate-config"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            window.wxOConfiguration = {
              orchestrationID: "f7cab0539e664661bd14fe80c5586549_e8e14bc5-0b34-46ba-ae63-c8c7283f762a",
              hostURL: "https://au-syd.watson-orchestrate.cloud.ibm.com",
              rootElementID: "watson-chat-root",
              deploymentPlatform: "ibmcloud",
              crn: "crn:v1:bluemix:public:watsonx-orchestrate:au-syd:a/f7cab0539e664661bd14fe80c5586549:e8e14bc5-0b34-46ba-ae63-c8c7283f762a::",
              chatOptions: {
                agentId: "856265af-1817-4385-87c4-5cf36e75fd72",
                agentEnvironmentId: "5e2d335e-0213-427c-be85-6326c9e3742e", 
              }
            };
            setTimeout(function () {
              const script = document.createElement('script');
              script.src = window.wxOConfiguration.hostURL + '/wxochat/wxoLoader.js?embed=true';
              script.addEventListener('load', function () {
                if (window.wxoLoader) {
                  wxoLoader.init();
                }
              });
              document.head.appendChild(script);
            }, 1000);
          `,
        }}
      />
    </div>
  );
}
