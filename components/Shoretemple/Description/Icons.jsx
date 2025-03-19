import * as React from "react";
import { View } from "react-native";
import Svg, {
  Circle,
  Path,
  G,
  Defs,
  ClipPath,
  Rect,
  Mask,
} from "react-native-svg";

export const BackIcon = () => (
  <Svg width={48} height={48} viewBox="0 0 48 48" fill="none">
    <Circle cx={24} cy={24} r={24} fill="#161616" fillOpacity={0.3} />
    <Path
      d="M27 30L21 24L27 18"
      stroke="white"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const ScanIcon = () => (
  <Svg width={36} height={37} viewBox="0 0 36 37" fill="none">
    <G clipPath="url(#clip0_1_1199)">
      <Path
        d="M13.5 24.88c0-.298.119-.584.33-.795.21-.211.497-.33.795-.33h6.75c.298 0 .584.119.795.33.211.21.33.497.33.795 0 .298-.119.584-.33.795-.21.211-.497.33-.795.33h-6.75c-.298 0-.584-.119-.795-.33-.211-.21-.33-.497-.33-.795zM6.75 14.895c0-2.93 2.779-5.168 5.692-4.896 3.697.345 7.418.345 11.115 0 2.914-.272 5.693 1.966 5.693 4.896v2.603a2.25 2.25 0 01-1.721 2.104c-1.902.33-5.265.778-9.529.778-4.264 0-7.627-.45-9.529-.778a2.25 2.25 0 01-1.721-2.104v-2.603zm10.22-1.86a.75.75 0 00-.489.152l-2.07 2.025a31.331 31.331 0 01-4.21-.412.75.75 0 00-.153 1.114 31.728 31.728 0 004.545.434.75.75 0 00.425-.16l1.696-1.656 1.906 3.847a.75.75 0 001.377-.018l2.097-2.182c1.446-.086 2.889-.227 4.324-.423a.75.75 0 00-.153-1.114 31.331 31.331 0 01-4.21.412.75.75 0 00-.426.171l-1.697 1.766-1.894-3.825a.75.75 0 00-.41-.304z"
        fill="#fff"
      />
      <Path
        d="M19.125.954a2.25 2.25 0 00.954-1.087 2.25 2.25 0 00.094-1.444 2.25 2.25 0 00-.803-1.202 2.25 2.25 0 00-1.37-.466 2.25 2.25 0 00-1.37.466 2.25 2.25 0 00-.803 1.202 2.25 2.25 0 00.094 1.444 2.25 2.25 0 00.954 1.087v2.552h-4.5a11.25 11.25 0 00-7.16 2.965A11.25 11.25 0 002.25 13.63v1.125a2.25 2.25 0 00-2.25 2.25v4.5a2.25 2.25 0 002.25 2.25v2.25a4.5 4.5 0 004.5 4.5h22.5a4.5 4.5 0 004.5-4.5v-2.25a2.25 2.25 0 002.25-2.25v-4.5a2.25 2.25 0 00-2.25-2.25V13.63a11.25 11.25 0 00-3.284-7.965A11.25 11.25 0 0023.625 3.506h-4.5V.954zm12.375 12.677v12.375a2.25 2.25 0 01-2.25 2.25h-22.5a2.25 2.25 0 01-2.25-2.25V13.63a7.875 7.875 0 017.875-7.875h11.25a7.875 7.875 0 017.875 7.875z"
        fill="#fff"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_1_1199">
        <Rect
          width={36}
          height={36}
          fill="#fff"
          transform="translate(0 .755)"
        />
      </ClipPath>
    </Defs>
  </Svg>
);

export const SearchIcon = () => (
  <Svg width={24} height={24} viewBox="0 0 25 25" fill="none">
    <Path
      d="M11.18 19.297a7.932 7.932 0 100-15.865 7.932 7.932 0 000 15.865zM21.204 21.28l-4.36-4.313"
      stroke="#8B8B8B"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const ClockIcon = () => (
  <Svg width={24} height={24} viewBox="0 0 25 25" fill="none">
    <Path
      d="M12.32 22.271c5.536 0 10.024-4.439 10.024-9.915 0-5.476-4.488-9.915-10.024-9.915-5.537 0-10.025 4.439-10.025 9.915 0 5.476 4.488 9.915 10.025 9.915z"
      stroke="#8B8B8B"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12.32 6.407v5.949l4.01 1.983"
      stroke="#8B8B8B"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const UserIcon = () => (
  <Svg width={24} height={24} viewBox="0 0 25 25" fill="none">
    <Path
      d="M12.414 10.474a4 4 0 100-8 4 4 0 000 8zM12.414 22.474c4.418 0 8-1.79 8-4s-3.582-4-8-4-8 1.79-8 4 3.582 4 8 4z"
      stroke="#7C7C7C"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const HomeIcon = () => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
    <Path
      d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
      stroke="#8B8B8B"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M9 22V12h6v10"
      stroke="#8B8B8B"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
