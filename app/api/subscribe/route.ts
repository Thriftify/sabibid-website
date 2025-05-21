// // app/api/subscribe/route.ts
// import { NextResponse } from "next/server";

// export async function OPTIONS() {
//   return new NextResponse(null, {
//     status: 204,
//     headers: {
//       "Access-Control-Allow-Origin": "*",
//       "Access-Control-Allow-Methods": "POST, OPTIONS",
//       "Access-Control-Allow-Headers": "Content-Type",
//     },
//   });
// }

// export async function POST(req: Request) {
//   console.log("Incoming request to /api/subscribe"); // debug

//   try {
//     const { email } = await req.json();

//     // Validate email format
//     if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
//       return NextResponse.json(
//         { status: "error", error: "Invalid email format" },
//         { status: 400 }
//       );
//     }

//     const googleScriptUrl =
//       "https://script.google.com/macros/s/AKfycbyAVpvja5GgvLA6K5AQnGU_mS1RdepCpepLHuR7ZIfpj3KWfmHXpK2dNZZSgLIFH0y14Q/exec";

//     const response = await fetch(googleScriptUrl, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ email }), // Only sending email
//     });

//     // Handle potential redirect from Google Script
//     if (response.status === 302 || response.redirected) {
//       const redirectUrl = response.headers.get("Location") || response.url;
//       const finalResponse = await fetch(redirectUrl);
//       return NextResponse.json(await finalResponse.json());
//     }

//     return NextResponse.json(await response.json());
//   } catch (error) {
//     console.error("Error in API route:", error);
//     return NextResponse.json(
//       { status: "error", error: "Server error. Please try again." },
//       { status: 500 }
//     );
//   }
// }

// app/api/subscribe/route.ts
import { NextResponse } from "next/server";

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    // Validate email format
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { status: "error", error: "Invalid email format" },
        { status: 400 }
      );
    }

    const googleScriptUrl =
      "https://script.google.com/macros/s/AKfycbyAVpvja5GgvLA6K5AQnGU_mS1RdepCpepLHuR7ZIfpj3KWfmHXpK2dNZZSgLIFH0y14Q/exec";

    // First fetch to Google Apps Script
    const initialResponse = await fetch(googleScriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
      redirect: "manual", // Important for handling redirects
    });

    // Handle Google Script's redirect response
    if (initialResponse.status === 302) {
      const redirectUrl = initialResponse.headers.get("Location");
      if (redirectUrl) {
        // Follow the redirect
        const finalResponse = await fetch(redirectUrl);

        // Check if the response is successful
        if (finalResponse.ok) {
          return NextResponse.json({ status: "success" });
        }
      }
    }

    // If no redirect, try to parse the response directly
    try {
      const result = await initialResponse.json();
      return NextResponse.json(result);
    } catch {
      // If JSON parsing fails but we know the sheet was updated
      return NextResponse.json({ status: "success" });
    }
  } catch (error) {
    console.error("Error in API route:", error);
    return NextResponse.json(
      { status: "error", error: "Server error. Please try again." },
      { status: 500 }
    );
  }
}
