export interface Heading {
    type: "heading",
    properties: {
        fontFamily: string;
        fontWeight: "bold" | "semibold" | "medium" | "thin";
        text: string;
        rowsNumber: number;
        fontSize: number;
    };
}