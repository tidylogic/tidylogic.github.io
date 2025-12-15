import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import pngToIco from 'png-to-ico';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function generateFavicon() {
  const svgPath = path.join(__dirname, 'public', 'icon.svg');
  const icoPath = path.join(__dirname, 'public', 'favicon.ico');

  // SVG를 여러 크기의 PNG로 변환 후 ICO 생성
  const sizes = [16, 32, 48];
  const pngPaths = [];

  // 임시 PNG 파일 생성
  for (const size of sizes) {
    const tempPath = path.join(__dirname, 'public', `temp-${size}.png`);
    await sharp(svgPath)
      .resize(size, size)
      .png()
      .toFile(tempPath);
    pngPaths.push(tempPath);
  }

  // PNG들을 ICO로 변환
  const buf = await pngToIco(pngPaths);
  fs.writeFileSync(icoPath, buf);

  // 임시 파일 삭제
  pngPaths.forEach(p => fs.unlinkSync(p));

  console.log('✓ favicon.ico가 성공적으로 생성되었습니다!');

  // 추가로 여러 크기의 PNG 아이콘도 생성 (웹앱 매니페스트용)
  const iconSizes = [16, 32, 48, 64, 128, 192, 512];

  for (const size of iconSizes) {
    await sharp(svgPath)
      .resize(size, size)
      .png()
      .toFile(path.join(__dirname, 'public', `icon-${size}.png`));
    console.log(`✓ icon-${size}.png 생성 완료`);
  }
}

generateFavicon().catch(console.error);

