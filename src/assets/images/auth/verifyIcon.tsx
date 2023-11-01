import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { memo } from 'react';

const SvgComponent = (props: SvgProps) => (
  <Svg width={290} height={220} fill="none" {...props}>
    <Path
      d="M75.2336 217.704C79.3432 214.218 81.8394 208.711 81.1848 203.35C80.5301 197.989 76.4755 193.06 71.2161 191.922C65.9567 190.783 59.9613 193.935 58.3639 199.092C57.4847 189.149 56.4717 178.788 51.2054 170.32C46.437 162.652 38.1779 157.165 29.2269 156.184C20.276 155.202 10.8518 158.91 5.2694 166.002C-0.312978 173.095 -1.6798 183.406 2.22996 191.548C5.11013 197.547 10.4164 202.011 15.9761 205.643C33.9415 217.279 55.4886 222.012 76.6529 218.969"
      fill="#F2F2F2"
    />
    <Path
      d="M14.1209 159.115C21.5066 165.154 28.2821 171.909 34.3496 179.28C43.8451 190.778 51.529 203.669 57.1336 217.504C57.5438 218.513 55.9113 218.952 55.5056 217.954C51.9415 209.207 47.5321 200.831 42.3405 192.948C34.2448 180.632 24.3264 169.628 12.9271 160.313C12.0843 159.624 13.2851 158.432 14.1209 159.115V159.115Z"
      fill="white"
    />
    <Path
      d="M78.0721 217.704C73.9625 214.218 71.4663 208.711 72.1209 203.35C72.7755 197.989 76.8301 193.06 82.0895 191.922C87.3489 190.783 93.3443 193.935 94.9418 199.092C95.821 189.149 96.834 178.788 102.1 170.32C106.869 162.652 115.128 157.165 124.079 156.184C133.03 155.202 142.454 158.91 148.036 166.002C153.619 173.095 154.985 183.406 151.076 191.548C148.196 197.547 142.889 202.011 137.33 205.643C119.364 217.279 97.8171 222.012 76.6528 218.969"
      fill="#F2F2F2"
    />
    <Path
      d="M139.185 159.115C131.799 165.154 125.024 171.909 118.956 179.28C109.461 190.778 101.777 203.669 96.1723 217.504C95.762 218.513 97.3945 218.952 97.8002 217.954C106.97 195.469 121.609 175.652 140.379 160.313C141.222 159.624 140.021 158.432 139.185 159.115V159.115Z"
      fill="white"
    />
    <Path
      d="M90.2671 98.9664C97.8698 98.9664 104.033 92.7792 104.033 85.1468C104.033 77.5144 97.8698 71.3271 90.2671 71.3271C82.6644 71.3271 76.5012 77.5144 76.5012 85.1468C76.5012 92.7792 82.6644 98.9664 90.2671 98.9664Z"
      fill="#F2F2F2"
    />
    <Path
      d="M47.8232 37.5083H142.666V42.7176H59.9307C55.0662 42.7175 50.2493 43.6794 45.755 45.5483C41.2608 47.4171 37.1772 50.1563 33.7374 53.6095C30.2977 57.0627 27.5691 61.1622 25.7076 65.674C23.846 70.1858 22.8878 75.0215 22.8878 79.9051V139.088H12.5099C12.0512 139.088 11.6113 138.905 11.2869 138.58C10.9625 138.254 10.7803 137.812 10.7803 137.352V74.6958C10.7803 69.8123 11.7384 64.9765 13.6 60.4647C15.4616 55.9529 18.1901 51.8534 21.6299 48.4002C25.0696 44.9471 29.1532 42.2078 33.6475 40.339C38.1417 38.4702 42.9586 37.5083 47.8232 37.5083Z"
      fill="#F2F2F2"
    />
    <Path
      d="M66.0659 217.994V138.865H89.1571V217.994C89.1565 218.526 88.9457 219.036 88.5711 219.412C88.1965 219.788 87.6886 219.999 87.1588 220H68.0642C67.5344 219.999 67.0265 219.788 66.6519 219.412C66.2772 219.036 66.0665 218.526 66.0659 217.994Z"
      fill="#111111"
    />
    <Path
      d="M5.89575 137.305V72.9617C5.90727 62.7186 9.96559 52.8984 17.1804 45.6554C24.3951 38.4124 34.1771 34.3383 44.3804 34.3267H142.222V139.534H8.11605C7.5274 139.534 6.96306 139.299 6.54681 138.881C6.13057 138.463 5.89643 137.896 5.89575 137.305ZM141.334 35.2183H44.3804C34.4126 35.2296 24.8563 39.2098 17.8081 46.2856C10.7598 53.3614 6.79514 62.955 6.78387 72.9617V137.305C6.78426 137.66 6.92474 138 7.17449 138.251C7.42423 138.501 7.76286 138.642 8.11605 138.643H141.334V35.2183Z"
      fill="#111111"
    />
    <Path
      d="M90.2673 92.2796C88.1481 92.2772 86.1164 91.431 84.6179 89.9267C83.1194 88.4223 82.2766 86.3827 82.2742 84.2553V26.7477C82.2738 26.3931 82.1333 26.0532 81.8836 25.8025C81.6338 25.5517 81.2952 25.4107 80.942 25.4103H49.8578C49.2691 25.4096 48.7048 25.1746 48.2885 24.7567C47.8723 24.3388 47.6381 23.7723 47.6375 23.1813V2.22898C47.6381 1.63802 47.8723 1.07147 48.2885 0.653605C48.7048 0.235739 49.2691 0.000684313 49.8578 0H96.0401C96.6287 0.000676071 97.193 0.235731 97.6093 0.653598C98.0255 1.07147 98.2597 1.63802 98.2604 2.22898V84.2553C98.258 86.3827 97.4151 88.4223 95.9166 89.9267C94.4181 91.431 92.3864 92.2772 90.2673 92.2796Z"
      fill="#699CFF"
    />
    <Path
      d="M145.775 33.4346C152.474 33.4205 158.904 36.0786 163.651 40.824C168.398 45.5694 171.072 52.0135 171.086 58.7386V131.987H220.821C222.819 131.983 224.737 132.776 226.152 134.191C227.568 135.606 228.366 137.528 228.37 139.534H120.463V58.7386C120.477 52.0135 123.152 45.5694 127.899 40.824C132.646 36.0786 139.076 33.4205 145.775 33.4346Z"
      fill="#111111"
    />
    <Path
      d="M139.701 75.1469L144.942 96.8821L247.467 71.9659L242.226 50.2307C242.163 49.965 242.034 49.7196 241.851 49.5173C241.668 49.3151 241.437 49.1625 241.179 49.0739C240.989 49.0067 240.788 48.9764 240.587 48.9843L181.323 18.1791C180.976 18.001 180.576 17.9535 180.197 18.045C179.818 18.1365 179.484 18.361 179.255 18.678L150.693 58.663L139.926 73.7411C139.906 73.7675 139.893 73.7978 139.886 73.83C139.879 73.8622 139.879 73.8954 139.886 73.9275C139.667 74.2937 139.601 74.7318 139.701 75.1469Z"
      fill="white"
    />
    <Path
      d="M139.886 73.9275C139.891 73.9558 139.902 73.9828 139.917 74.007C139.933 74.0311 139.953 74.052 139.976 74.0683C140.004 74.0875 140.036 74.1007 140.069 74.1073C140.102 74.1138 140.136 74.1135 140.169 74.1065C140.222 74.0921 140.269 74.0595 140.301 74.0141L140.338 73.9626L140.899 73.1756L151.081 58.926L179.634 18.9502C179.797 18.7237 180.036 18.5633 180.306 18.4981C180.577 18.433 180.862 18.4675 181.109 18.5952L239.914 49.1619L240.442 49.4369C240.463 49.4459 240.485 49.4535 240.507 49.4599C240.547 49.4526 240.588 49.4487 240.628 49.4483C240.683 49.4298 240.729 49.3907 240.757 49.3392C240.771 49.312 240.78 49.2823 240.783 49.2518C240.786 49.2212 240.782 49.1903 240.773 49.161C240.764 49.1317 240.75 49.1044 240.73 49.0807C240.711 49.0571 240.687 49.0376 240.66 49.0233L240.587 48.9844L181.323 18.1791C180.975 18.001 180.576 17.9535 180.197 18.045C179.818 18.1365 179.484 18.361 179.255 18.678L150.693 58.663L139.926 73.7411C139.906 73.7675 139.892 73.7978 139.886 73.83C139.879 73.8622 139.879 73.8954 139.886 73.9275Z"
      fill="#111111"
    />
    <Path
      d="M170.678 76.1436L172.96 76.3977L189.897 78.2813L201.126 79.5293L201.789 79.6033L215.8 68.6168L216.337 68.1959L219.646 65.6013L231.42 56.3706L231.491 55.7222L235.678 17.7787C235.735 17.2563 235.584 16.7324 235.257 16.3219C234.93 15.9115 234.454 15.648 233.933 15.5892L178.046 9.37405C177.525 9.317 177.004 9.46929 176.595 9.7976C176.186 10.1259 175.924 10.6035 175.865 11.1257L172.912 37.8901L171.273 52.7288L169.808 66.0038L169.129 72.1688L168.931 73.9546C168.874 74.4773 169.026 75.0011 169.354 75.4114C169.681 75.8217 170.157 76.085 170.678 76.1436Z"
      fill="#E6E6E6"
    />
    <Path
      d="M186.036 42.8841L210.244 45.5759L218.83 46.5302C219.209 46.5723 219.592 46.5391 219.958 46.4324C220.325 46.3257 220.666 46.1477 220.964 45.9084C221.262 45.6691 221.51 45.3733 221.694 45.0379C221.877 44.7025 221.994 44.334 222.036 43.9535C222.078 43.5729 222.044 43.1878 221.938 42.8202C221.832 42.4525 221.655 42.1094 221.416 41.8105C221.178 41.5116 220.883 41.2628 220.549 41.0783C220.215 40.8937 219.848 40.777 219.469 40.7349L208.791 39.5476L186.677 37.086C185.911 37.0011 185.143 37.2249 184.542 37.7082C183.94 38.1915 183.555 38.8948 183.47 39.6634C183.385 40.432 183.607 41.2031 184.089 41.807C184.57 42.411 185.27 42.7984 186.036 42.8841Z"
      fill="white"
    />
    <Path
      d="M184.657 53.6349C184.72 53.6461 184.782 53.6573 184.846 53.6634L212.948 56.7889L217.64 57.3117C218.406 57.3968 219.174 57.1729 219.776 56.6894C220.377 56.2059 220.762 55.5024 220.847 54.7336C220.932 53.9648 220.709 53.1937 220.227 52.5899C219.746 51.9862 219.045 51.5992 218.279 51.5142L211.495 50.7606L189.234 48.2843L185.487 47.8676C184.738 47.7837 183.986 47.9956 183.39 48.4584C182.793 48.9213 182.399 49.5988 182.292 50.3478C182.184 51.0968 182.37 51.8585 182.812 52.4719C183.253 53.0854 183.915 53.5024 184.657 53.6348V53.6349Z"
      fill="white"
    />
    <Path
      d="M181.477 63.1681C181.707 63.5519 182.022 63.8773 182.398 64.1189C182.774 64.3605 183.2 64.5119 183.644 64.5613L195.162 65.842L215.676 68.1236L215.681 68.1225L216.337 68.1959L219.646 65.6013C219.667 65.4042 219.667 65.2055 219.647 65.0084C219.577 64.3465 219.284 63.7284 218.817 63.2563C218.35 62.7842 217.736 62.4864 217.077 62.4121L214.227 62.0943L202.923 60.8384L194.789 59.9328L184.282 58.7638C183.744 58.704 183.2 58.7965 182.711 59.031C182.222 59.2655 181.808 59.6326 181.516 60.0907C181.225 60.5489 181.066 61.0798 181.059 61.6237C181.052 62.1675 181.197 62.7024 181.477 63.168L181.477 63.1681Z"
      fill="white"
    />
    <Path
      d="M197.655 29.7434L203.679 30.4131L206.339 30.7097L210.358 31.1562C211.124 31.2413 211.892 31.0174 212.493 30.5339C213.095 30.0505 213.48 29.3469 213.565 28.5781C213.649 27.8093 213.426 27.0382 212.945 26.4344C212.463 25.8307 211.762 25.4437 210.997 25.3587L198.297 23.9475C197.531 23.8621 196.763 24.0855 196.162 24.5686C195.56 25.0516 195.174 25.7548 195.089 26.5234C195.004 27.2919 195.227 28.063 195.708 28.6669C196.189 29.2707 196.89 29.658 197.655 29.7434V29.7434Z"
      fill="white"
    />
    <Path
      d="M148.402 45.8864L155.746 76.3404L168.002 78.68L179.34 80.847L191.504 83.1706L195.391 83.9132C195.619 83.9563 195.853 83.9504 196.078 83.8957C196.303 83.841 196.514 83.7388 196.697 83.5959L199.815 81.151L201.789 79.6032L215.8 68.6167L206.891 31.672C206.803 31.3045 206.612 30.9702 206.339 30.7095C206.1 30.4788 205.807 30.3123 205.487 30.2252C205.166 30.1382 204.83 30.1334 204.507 30.2115L149.857 43.4929C149.348 43.6169 148.909 43.9386 148.636 44.3874C148.363 44.8362 148.279 45.3753 148.402 45.8864Z"
      fill="#699CFF"
    />
    <Path
      d="M165.241 70.1138C165.423 70.8651 165.894 71.5132 166.551 71.9159C167.209 72.3185 167.999 72.4429 168.747 72.2617L200.815 64.4684C201.563 64.2855 202.208 63.8123 202.609 63.1524C203.01 62.4926 203.134 61.7001 202.954 60.9485C202.946 60.9113 202.936 60.8745 202.923 60.8386C202.718 60.114 202.242 59.4971 201.594 59.1172C200.946 58.7373 200.177 58.6239 199.448 58.8007L167.38 66.5939C166.632 66.7765 165.987 67.2496 165.585 67.9096C165.184 68.5695 165.06 69.3623 165.241 70.1138Z"
      fill="white"
    />
    <Path
      d="M168.002 78.6801L179.34 80.847L203.357 75.0104C204.105 74.8284 204.751 74.3554 205.153 73.6952C205.554 73.0351 205.677 72.242 205.496 71.4905C205.315 70.7389 204.844 70.0903 204.186 69.6875C203.529 69.2847 202.739 69.1607 201.99 69.3426L169.923 77.1358C169.252 77.2974 168.662 77.6946 168.258 78.2554C168.161 78.3895 168.075 78.5315 168.002 78.6801Z"
      fill="white"
    />
    <Path
      d="M191.504 83.1705L195.391 83.9131C195.619 83.9563 195.853 83.9503 196.078 83.8956C196.303 83.8409 196.514 83.7387 196.697 83.5959L199.815 81.1509L191.504 83.1705Z"
      fill="white"
    />
    <Path
      d="M171.702 53.7838C171.884 54.535 172.355 55.1831 173.013 55.5858C173.67 55.9885 174.46 56.1129 175.209 55.9316L187.629 52.9131C188.377 52.7302 189.022 52.2569 189.424 51.5971C189.825 50.9373 189.949 50.1447 189.769 49.3932C189.672 48.9894 189.489 48.6113 189.233 48.2849C188.89 47.8436 188.427 47.5109 187.9 47.3266C187.373 47.1423 186.805 47.1141 186.262 47.2454L173.842 50.2639C173.093 50.4459 172.447 50.919 172.046 51.5791C171.645 52.2391 171.521 53.0322 171.702 53.7837V53.7838Z"
      fill="white"
    />
    <Path
      d="M179.339 80.847L191.506 83.1712L195.391 83.9141C195.619 83.9567 195.853 83.9505 196.077 83.8959C196.302 83.8412 196.513 83.7394 196.696 83.597L199.816 81.1515L198.721 81.4176L196.41 83.228C196.279 83.3297 196.129 83.4024 195.968 83.4414C195.807 83.4805 195.64 83.4849 195.478 83.4545L192.601 82.9051L180.434 80.5809L179.339 80.847ZM215.68 68.1245L215.799 68.6157L216.338 68.1945L215.68 68.1245ZM179.339 80.847L191.506 83.1712L195.391 83.9141C195.619 83.9567 195.853 83.9505 196.077 83.8959C196.302 83.8412 196.513 83.7394 196.696 83.597L199.816 81.1515L198.721 81.4176L196.41 83.228C196.279 83.3297 196.129 83.4024 195.968 83.4414C195.807 83.4805 195.64 83.4849 195.478 83.4545L192.601 82.9051L180.434 80.5809L179.339 80.847ZM179.339 80.847L191.506 83.1712L195.391 83.9141C195.619 83.9567 195.853 83.9505 196.077 83.8959C196.302 83.8412 196.513 83.7394 196.696 83.597L199.816 81.1515L198.721 81.4176L196.41 83.228C196.279 83.3297 196.129 83.4024 195.968 83.4414C195.807 83.4805 195.64 83.4849 195.478 83.4545L192.601 82.9051L180.434 80.5809L179.339 80.847ZM139.701 75.1467L153.43 132.079C153.531 132.5 153.795 132.863 154.164 133.088C154.532 133.314 154.974 133.384 155.393 133.282L254.757 109.134C255.176 109.032 255.537 108.767 255.762 108.398C255.986 108.028 256.056 107.584 255.955 107.163L242.226 50.2305C242.163 49.9648 242.034 49.7194 241.851 49.5171C241.668 49.3149 241.437 49.1623 241.179 49.0737C240.989 49.0066 240.788 48.9762 240.587 48.9842C240.352 48.991 240.122 49.0517 239.914 49.1617C239.819 49.2074 239.728 49.2638 239.645 49.3298L231.49 55.7224L219.647 65.0099L215.679 68.1211L215.68 68.1245L215.677 68.1253L201.127 79.5278L198.721 81.4176L196.41 83.228C196.279 83.3296 196.129 83.4024 195.968 83.4414C195.807 83.4805 195.64 83.4849 195.478 83.4545L192.601 82.9051L180.434 80.5809L168.257 78.2558L141.586 73.1605C141.359 73.1152 141.124 73.1203 140.899 73.1754C140.596 73.2498 140.32 73.4101 140.105 73.6372C140.023 73.7264 139.949 73.8236 139.886 73.9274C139.667 74.2935 139.601 74.7316 139.701 75.1467ZM179.339 80.847L191.506 83.1712L195.391 83.9141C195.619 83.9567 195.853 83.9505 196.077 83.8959C196.302 83.8412 196.513 83.7394 196.696 83.597L199.816 81.1515L198.721 81.4176L196.41 83.228C196.279 83.3297 196.129 83.4024 195.968 83.4414C195.807 83.4805 195.64 83.4849 195.478 83.4545L192.601 82.9051L180.434 80.5809L179.339 80.847ZM179.339 80.847L191.506 83.1712L195.391 83.9141C195.619 83.9567 195.853 83.9505 196.077 83.8959C196.302 83.8412 196.513 83.7394 196.696 83.597L199.816 81.1515L198.721 81.4176L196.41 83.228C196.279 83.3297 196.129 83.4024 195.968 83.4414C195.807 83.4805 195.64 83.4849 195.478 83.4545L192.601 82.9051L180.434 80.5809L179.339 80.847ZM179.339 80.847L191.506 83.1712L195.391 83.9141C195.619 83.9567 195.853 83.9505 196.077 83.8959C196.302 83.8412 196.513 83.7394 196.696 83.597L199.816 81.1515L198.721 81.4176L196.41 83.228C196.279 83.3297 196.129 83.4024 195.968 83.4414C195.807 83.4805 195.64 83.4849 195.478 83.4545L192.601 82.9051L180.434 80.5809L179.339 80.847Z"
      fill="white"
    />
    <Path
      d="M179.339 80.847L191.506 83.1712L195.391 83.9141C195.619 83.9567 195.853 83.9505 196.077 83.8959C196.302 83.8412 196.513 83.7394 196.696 83.597L199.816 81.1515L198.721 81.4176L196.41 83.228C196.279 83.3296 196.129 83.4024 195.968 83.4414C195.807 83.4805 195.64 83.4849 195.478 83.4545L192.601 82.9051L180.434 80.5809L179.339 80.847ZM215.68 68.1245L215.799 68.6157L216.338 68.1945L215.68 68.1245ZM179.339 80.847L191.506 83.1712L195.391 83.9141C195.619 83.9567 195.853 83.9505 196.077 83.8959C196.302 83.8412 196.513 83.7394 196.696 83.597L199.816 81.1515L198.721 81.4176L196.41 83.228C196.279 83.3296 196.129 83.4024 195.968 83.4414C195.807 83.4805 195.64 83.4849 195.478 83.4545L192.601 82.9051L180.434 80.5809L179.339 80.847ZM179.339 80.847L191.506 83.1712L195.391 83.9141C195.619 83.9567 195.853 83.9505 196.077 83.8959C196.302 83.8412 196.513 83.7394 196.696 83.597L199.816 81.1515L198.721 81.4176L196.41 83.228C196.279 83.3296 196.129 83.4024 195.968 83.4414C195.807 83.4805 195.64 83.4849 195.478 83.4545L192.601 82.9051L180.434 80.5809L179.339 80.847ZM140.339 73.9625L140.399 74.0079C140.409 73.9913 140.427 73.9764 140.44 73.959C140.574 73.8185 140.742 73.7136 140.927 73.6539C141.111 73.5941 141.308 73.5814 141.499 73.6168L168.003 78.6783L179.339 80.847L191.506 83.1712L195.391 83.9141C195.619 83.9567 195.853 83.9505 196.077 83.8959C196.302 83.8412 196.513 83.7394 196.696 83.597L199.816 81.1514L198.721 81.4176L196.41 83.2279C196.279 83.3296 196.129 83.4024 195.968 83.4414C195.807 83.4805 195.64 83.4849 195.478 83.4544L192.601 82.9051L180.434 80.5809L168.257 78.2558L141.586 73.1605C141.359 73.1152 141.124 73.1203 140.899 73.1754L140.339 73.9625ZM139.701 75.1467L153.43 132.079C153.531 132.5 153.795 132.863 154.164 133.088C154.532 133.314 154.974 133.384 155.393 133.282L254.757 109.134C255.176 109.032 255.537 108.767 255.762 108.398C255.986 108.028 256.056 107.584 255.955 107.163L242.226 50.2305C242.163 49.9648 242.034 49.7194 241.851 49.5171C241.668 49.3149 241.437 49.1623 241.179 49.0737C240.989 49.0066 240.788 48.9762 240.587 48.9842C240.352 48.991 240.122 49.0517 239.914 49.1617C239.819 49.2074 239.728 49.2638 239.645 49.3298L231.49 55.7224L219.647 65.0099L215.679 68.1211L215.68 68.1245L215.677 68.1253L201.127 79.5278L198.721 81.4176L196.41 83.228C196.279 83.3296 196.129 83.4024 195.968 83.4414C195.807 83.4805 195.64 83.4849 195.478 83.4545L192.601 82.9051L180.434 80.5809L168.257 78.2558L141.586 73.1605C141.359 73.1152 141.124 73.1203 140.899 73.1754C140.596 73.2498 140.32 73.41 140.105 73.6372C140.023 73.7264 139.949 73.8236 139.886 73.9273C139.667 74.2935 139.601 74.7316 139.701 75.1467ZM140.154 75.0367C140.113 74.8689 140.111 74.6941 140.146 74.5251C140.182 74.3561 140.254 74.1973 140.359 74.0602C140.368 74.04 140.382 74.0222 140.399 74.0079C140.409 73.9913 140.427 73.9764 140.44 73.959C140.574 73.8185 140.742 73.7136 140.927 73.6539C141.111 73.5941 141.308 73.5814 141.499 73.6168L168.003 78.6783L179.339 80.847L191.506 83.1712L195.391 83.9141C195.619 83.9567 195.853 83.9505 196.077 83.8959C196.302 83.8412 196.513 83.7394 196.696 83.597L199.816 81.1515L201.79 79.6037L215.799 68.6156L216.338 68.1944L219.645 65.601L231.421 56.3689L239.934 49.6947C240.063 49.5933 240.213 49.5208 240.372 49.482C240.417 49.4711 240.462 49.4636 240.508 49.4597C240.547 49.4524 240.588 49.4485 240.628 49.4481C240.764 49.4468 240.9 49.469 241.028 49.5136C241.212 49.5777 241.376 49.6869 241.507 49.8312C241.638 49.9755 241.73 50.1503 241.777 50.3397L255.505 107.272C255.542 107.421 255.548 107.576 255.524 107.728C255.501 107.88 255.448 108.025 255.368 108.156C255.288 108.287 255.184 108.401 255.06 108.492C254.937 108.582 254.796 108.647 254.648 108.683L155.284 132.831C154.985 132.903 154.669 132.853 154.406 132.692C154.143 132.53 153.954 132.27 153.882 131.969L140.154 75.0367ZM179.339 80.847L191.506 83.1712L195.391 83.9141C195.619 83.9567 195.853 83.9505 196.077 83.8959C196.302 83.8412 196.513 83.7394 196.696 83.597L199.816 81.1515L198.721 81.4176L196.41 83.228C196.279 83.3297 196.129 83.4024 195.968 83.4414C195.807 83.4805 195.64 83.4849 195.478 83.4545L192.601 82.9051L180.434 80.5809L179.339 80.847ZM179.339 80.847L191.506 83.1712L195.391 83.9141C195.619 83.9567 195.853 83.9505 196.077 83.8959C196.302 83.8412 196.513 83.7394 196.696 83.597L199.816 81.1515L198.721 81.4176L196.41 83.228C196.279 83.3297 196.129 83.4024 195.968 83.4414C195.807 83.4805 195.64 83.4849 195.478 83.4545L192.601 82.9051L180.434 80.5809L179.339 80.847ZM179.339 80.847L191.506 83.1712L195.391 83.9141C195.619 83.9567 195.853 83.9505 196.077 83.8959C196.302 83.8412 196.513 83.7394 196.696 83.597L199.816 81.1515L198.721 81.4176L196.41 83.228C196.279 83.3297 196.129 83.4024 195.968 83.4414C195.807 83.4805 195.64 83.4849 195.478 83.4545L192.601 82.9051L180.434 80.5809L179.339 80.847Z"
      fill="#111111"
    />
    <Path
      d="M228.859 97.9489C228.636 97.016 228.789 96.032 229.287 95.2129C229.785 94.3938 230.586 93.8064 231.515 93.5795L244.056 90.5318C244.984 90.3097 245.962 90.4659 246.776 90.9662C247.589 91.4665 248.172 92.2701 248.396 93.2009C248.621 94.1318 248.469 95.114 247.973 95.9324C247.478 96.7508 246.679 97.3387 245.753 97.5673L233.212 100.615C232.282 100.84 231.302 100.685 230.486 100.185C229.671 99.6856 229.085 98.8813 228.859 97.9489Z"
      fill="#699CFF"
    />
    <Path
      d="M90.2671 87.3759C91.9838 87.3759 93.3755 85.9788 93.3755 84.2553C93.3755 82.5319 91.9838 81.1348 90.2671 81.1348C88.5504 81.1348 87.1587 82.5319 87.1587 84.2553C87.1587 85.9788 88.5504 87.3759 90.2671 87.3759Z"
      fill="white"
    />
  </Svg>
);

export const VerifyIcon = memo(SvgComponent);