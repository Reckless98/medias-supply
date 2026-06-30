import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    // Dynamic params
    const hasTitle = searchParams.has("title");
    const title = hasTitle
      ? searchParams.get("title")?.slice(0, 100)
      : "P.S. MEDIAS SUPPLY CO., LTD.";
    
    const hasDesc = searchParams.has("desc");
    const desc = hasDesc
      ? searchParams.get("desc")?.slice(0, 150)
      : "โรงพิมพ์บริการงานพิมพ์ครบวงจร คอมพิวเตอร์ฟอร์ม ถุงกระดาษ สติ๊กเกอร์";

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            padding: "80px",
            backgroundColor: "#171717", // neutral-900
            backgroundImage: "radial-gradient(circle at 25px 25px, #eeece1 2%, transparent 0%), radial-gradient(circle at 75px 75px, #eeece1 2%, transparent 0%)",
            backgroundSize: "100px 100px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "40px",
            }}
          >
            <div
              style={{
                color: "#e22c26", // primary red
                fontSize: 60,
                fontWeight: "bold",
                letterSpacing: "-0.05em",
                marginRight: "20px",
              }}
            >
              PS
            </div>
            <div
              style={{
                color: "#eeece1", // text-secondary
                fontSize: 24,
                fontWeight: "bold",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              Medias Supply
            </div>
          </div>
          
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              maxWidth: "900px",
            }}
          >
            <div
              style={{
                fontSize: 64,
                fontWeight: 800,
                color: "white",
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
                fontFamily: "sans-serif",
              }}
            >
              {title}
            </div>
            <div
              style={{
                fontSize: 32,
                color: "#a3a3a3", // neutral-400
                lineHeight: 1.4,
                fontFamily: "sans-serif",
                marginTop: "20px",
              }}
            >
              {desc}
            </div>
          </div>

          <div
            style={{
              position: "absolute",
              bottom: "80px",
              left: "80px",
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                color: "#eeece1",
                fontSize: 24,
                fontWeight: 600,
                padding: "8px 24px",
                backgroundColor: "rgba(226, 44, 38, 0.2)", // primary/20
                borderRadius: "9999px",
                border: "1px solid rgba(226, 44, 38, 0.5)",
              }}
            >
              📞 081-922-6779
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: unknown) {
    console.log(`${(e as Error).message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
