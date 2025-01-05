export interface Paragraph {
    type: "paragraph",
    properties: {
        fontFamily: string;
        fontWeight: "bold" | "semibold" | "medium" | "thin";
        text: string;
        rowsNumber: number;
        fontSize: number;
    };
}