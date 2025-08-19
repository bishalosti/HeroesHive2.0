import { Trans, useTranslation } from "react-i18next";
import type { TFunction } from "i18next";

// Declare the key type based on `TFunction`'s key inference
// type TranslationKey = Parameters<TFunction<'translation'>>[0];

// export function formatT(key: TranslationKey) {
//   return (
//     <Trans
//       i18nKey={key as any}
      
//       components={{
//         highlight: <span className="text-[#FF8200]" />,
//       }}
//     />
//   );
// }

export function formatT(key: string[]) {
  return (
    <Trans
      i18nKey={key[0] as any}
      
      components={{
        highlight: <span className="text-[#FF8200]" />,
      }}
    />
  );
}

