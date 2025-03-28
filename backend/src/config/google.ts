import dotenv from "dotenv";
dotenv.config();
import { JWT } from "google-auth-library";
import { GoogleSpreadsheet } from "google-spreadsheet";

const serviceAccountAuth = new JWT({
  email: process.env.GOOGLE_CLIENT_EMAIL,
  key: process.env.GOOGLE_PRIVATE_KEY!.replace(/\\n/g, '\n'),
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

export const checkSheetAccess = async (spreadsheetId: string) => {
  try {
    
    console.log(process.env.GOOGLE_PRIVATE_KEY);
    const doc = new GoogleSpreadsheet(spreadsheetId, serviceAccountAuth);

    await doc.loadInfo();

    return { success: true, title: doc.title };
  } catch (error: any) {
    console.log(error);
    if (error.response?.status === 403) {
      return {
        success: false,
        message:
          "Please give access to the provided email to your spreadsheet before proceeding.",
      };
    }
    return {
      success: false,
      message: "Invalid Spreadsheet ID or another error occurred.",
    };
  }
};

export default serviceAccountAuth;
