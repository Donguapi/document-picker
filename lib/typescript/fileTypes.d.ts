declare const mimeTypes: Readonly<{
    readonly allFiles: "*/*";
    readonly audio: "audio/*";
    readonly csv: "text/csv";
    readonly doc: "application/msword";
    readonly docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
    readonly images: "image/*";
    readonly pdf: "application/pdf";
    readonly plainText: "text/plain";
    readonly ppt: "application/vnd.ms-powerpoint";
    readonly pptx: "application/vnd.openxmlformats-officedocument.presentationml.presentation";
    readonly video: "video/*";
    readonly xls: "application/vnd.ms-excel";
    readonly xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
    readonly zip: "application/zip";
}>;
declare const utis: Readonly<{
    readonly allFiles: "public.item";
    readonly audio: "public.audio";
    readonly csv: "public.comma-separated-values-text";
    readonly doc: "com.microsoft.word.doc";
    readonly docx: "org.openxmlformats.wordprocessingml.document";
    readonly images: "public.image";
    readonly pdf: "com.adobe.pdf";
    readonly plainText: "public.plain-text";
    readonly ppt: "com.microsoft.powerpoint.ppt";
    readonly pptx: "org.openxmlformats.presentationml.presentation";
    readonly video: "public.movie";
    readonly xls: "com.microsoft.excel.xls";
    readonly xlsx: "org.openxmlformats.spreadsheetml.sheet";
    readonly zip: "public.zip-archive";
}>;
declare const extensions: Readonly<{
    readonly allFiles: "*";
    readonly audio: ".3g2 .3gp .aac .adt .adts .aif .aifc .aiff .asf .au .m3u .m4a .m4b .mid .midi .mp2 .mp3 .mp4 .rmi .snd .wav .wax .wma";
    readonly csv: ".csv";
    readonly doc: ".doc";
    readonly docx: ".docx";
    readonly images: ".jpeg .jpg .png";
    readonly pdf: ".pdf";
    readonly plainText: ".txt";
    readonly ppt: ".ppt";
    readonly pptx: ".pptx";
    readonly video: ".mp4";
    readonly xls: ".xls";
    readonly xlsx: ".xlsx";
    readonly zip: ".zip .gz";
}>;
export type PlatformTypes = {
    android: typeof mimeTypes;
    ios: typeof utis;
    windows: typeof extensions;
    harmony: typeof mimeTypes;
};
export type SupportedPlatforms = 'ios' | 'android' | 'windows' | 'harmony';
export declare const perPlatformTypes: {
    android: Readonly<{
        readonly allFiles: "*/*";
        readonly audio: "audio/*";
        readonly csv: "text/csv";
        readonly doc: "application/msword";
        readonly docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
        readonly images: "image/*";
        readonly pdf: "application/pdf";
        readonly plainText: "text/plain";
        readonly ppt: "application/vnd.ms-powerpoint";
        readonly pptx: "application/vnd.openxmlformats-officedocument.presentationml.presentation";
        readonly video: "video/*";
        readonly xls: "application/vnd.ms-excel";
        readonly xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
        readonly zip: "application/zip";
    }>;
    ios: Readonly<{
        readonly allFiles: "public.item";
        readonly audio: "public.audio";
        readonly csv: "public.comma-separated-values-text";
        readonly doc: "com.microsoft.word.doc";
        readonly docx: "org.openxmlformats.wordprocessingml.document";
        readonly images: "public.image";
        readonly pdf: "com.adobe.pdf";
        readonly plainText: "public.plain-text";
        readonly ppt: "com.microsoft.powerpoint.ppt";
        readonly pptx: "org.openxmlformats.presentationml.presentation";
        readonly video: "public.movie";
        readonly xls: "com.microsoft.excel.xls";
        readonly xlsx: "org.openxmlformats.spreadsheetml.sheet";
        readonly zip: "public.zip-archive";
    }>;
    windows: Readonly<{
        readonly allFiles: "*";
        readonly audio: ".3g2 .3gp .aac .adt .adts .aif .aifc .aiff .asf .au .m3u .m4a .m4b .mid .midi .mp2 .mp3 .mp4 .rmi .snd .wav .wax .wma";
        readonly csv: ".csv";
        readonly doc: ".doc";
        readonly docx: ".docx";
        readonly images: ".jpeg .jpg .png";
        readonly pdf: ".pdf";
        readonly plainText: ".txt";
        readonly ppt: ".ppt";
        readonly pptx: ".pptx";
        readonly video: ".mp4";
        readonly xls: ".xls";
        readonly xlsx: ".xlsx";
        readonly zip: ".zip .gz";
    }>;
    macos: Readonly<{
        readonly allFiles: "*";
        readonly audio: ".3g2 .3gp .aac .adt .adts .aif .aifc .aiff .asf .au .m3u .m4a .m4b .mid .midi .mp2 .mp3 .mp4 .rmi .snd .wav .wax .wma";
        readonly csv: ".csv";
        readonly doc: ".doc";
        readonly docx: ".docx";
        readonly images: ".jpeg .jpg .png";
        readonly pdf: ".pdf";
        readonly plainText: ".txt";
        readonly ppt: ".ppt";
        readonly pptx: ".pptx";
        readonly video: ".mp4";
        readonly xls: ".xls";
        readonly xlsx: ".xlsx";
        readonly zip: ".zip .gz";
    }>;
    web: Readonly<{
        readonly allFiles: "*";
        readonly audio: ".3g2 .3gp .aac .adt .adts .aif .aifc .aiff .asf .au .m3u .m4a .m4b .mid .midi .mp2 .mp3 .mp4 .rmi .snd .wav .wax .wma";
        readonly csv: ".csv";
        readonly doc: ".doc";
        readonly docx: ".docx";
        readonly images: ".jpeg .jpg .png";
        readonly pdf: ".pdf";
        readonly plainText: ".txt";
        readonly ppt: ".ppt";
        readonly pptx: ".pptx";
        readonly video: ".mp4";
        readonly xls: ".xls";
        readonly xlsx: ".xlsx";
        readonly zip: ".zip .gz";
    }>;
    harmony: Readonly<{
        readonly allFiles: "*";
        readonly audio: ".3g2 .3gp .aac .adt .adts .aif .aifc .aiff .asf .au .m3u .m4a .m4b .mid .midi .mp2 .mp3 .mp4 .rmi .snd .wav .wax .wma";
        readonly csv: ".csv";
        readonly doc: ".doc";
        readonly docx: ".docx";
        readonly images: ".jpeg .jpg .png";
        readonly pdf: ".pdf";
        readonly plainText: ".txt";
        readonly ppt: ".ppt";
        readonly pptx: ".pptx";
        readonly video: ".mp4";
        readonly xls: ".xls";
        readonly xlsx: ".xlsx";
        readonly zip: ".zip .gz";
    }>;
};
export declare const typesAreEqual: true;
export {};
//# sourceMappingURL=fileTypes.d.ts.map