Add-Type -AssemblyName PresentationCore, WindowsBase -ErrorAction SilentlyContinue

$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$academyDir = Join-Path $scriptDir "assets\academy"
$thumbsDir = Join-Path $academyDir "thumbs"
$fuzionRawDir = Join-Path $scriptDir "FUZION"
$registryFile = Join-Path $scriptDir "assets\js\photos-list.js"

if (!(Test-Path $academyDir)) { New-Item -ItemType Directory -Path $academyDir -Force | Out-Null }
if (!(Test-Path $thumbsDir)) { New-Item -ItemType Directory -Path $thumbsDir -Force | Out-Null }

Write-Host "=================================================" -ForegroundColor Cyan
Write-Host " FUZION ACADEMY - FAST PHOTO SCANNER & SYNC" -ForegroundColor Green
Write-Host "=================================================" -ForegroundColor Cyan

# 1. Convert any new CR2 raw files from FUZION if present
if (Test-Path $fuzionRawDir) {
    $raws = Get-ChildItem -Path $fuzionRawDir -Filter "*.CR2" -ErrorAction SilentlyContinue
    foreach ($r in $raws) {
        $baseName = [System.IO.Path]::GetFileNameWithoutExtension($r.Name)
        $outJpg = Join-Path $academyDir ($baseName + ".jpg")
        if (!(Test-Path $outJpg)) {
            try {
                $uri = New-Object System.Uri($r.FullName)
                $decoder = [System.Windows.Media.Imaging.BitmapDecoder]::Create($uri, [System.Windows.Media.Imaging.BitmapCreateOptions]::None, [System.Windows.Media.Imaging.BitmapCacheOption]::OnLoad)
                $frame = $decoder.Frames[0]
                $scale = 1.0
                if ($frame.PixelWidth -gt 1280) { $scale = 1280.0 / $frame.PixelWidth }
                $transformed = New-Object System.Windows.Media.Imaging.TransformedBitmap($frame, (New-Object System.Windows.Media.ScaleTransform($scale, $scale)))
                $encoder = New-Object System.Windows.Media.Imaging.JpegBitmapEncoder
                $encoder.QualityLevel = 82
                $encoder.Frames.Add([System.Windows.Media.Imaging.BitmapFrame]::Create($transformed))
                $fs = [System.IO.File]::Create($outJpg)
                $encoder.Save($fs)
                $fs.Close()
                Write-Host "  Converted RAW -> $baseName.jpg" -ForegroundColor Yellow
            } catch {
                Write-Host "  Failed to convert $baseName : $_" -ForegroundColor Red
            }
        }
    }
}

# 2. Compress any oversized camera images (> 500KB) in assets/academy
$oversized = Get-ChildItem -Path $academyDir -File | Where-Object { $_.Length -gt 500000 -and ($_.Extension -match "\.(jpg|jpeg)$") }
foreach ($f in $oversized) {
    try {
        $tempPath = [System.IO.Path]::GetTempFileName()
        $uri = New-Object System.Uri($f.FullName)
        $decoder = [System.Windows.Media.Imaging.BitmapDecoder]::Create($uri, [System.Windows.Media.Imaging.BitmapCreateOptions]::None, [System.Windows.Media.Imaging.BitmapCacheOption]::OnLoad)
        $frame = $decoder.Frames[0]
        $scale = 1.0
        if ($frame.PixelWidth -gt 1280) { $scale = 1280.0 / $frame.PixelWidth }
        $transformed = New-Object System.Windows.Media.Imaging.TransformedBitmap($frame, (New-Object System.Windows.Media.ScaleTransform($scale, $scale)))
        $encoder = New-Object System.Windows.Media.Imaging.JpegBitmapEncoder
        $encoder.QualityLevel = 82
        $encoder.Frames.Add([System.Windows.Media.Imaging.BitmapFrame]::Create($transformed))
        $outStream = [System.IO.File]::Create($tempPath)
        $encoder.Save($outStream)
        $outStream.Close()
        Copy-Item -Path $tempPath -Destination $f.FullName -Force
        Remove-Item -Path $tempPath -Force -ErrorAction SilentlyContinue
        Write-Host "  Compressed oversized: $($f.Name)" -ForegroundColor Yellow
    } catch {}
}

# 3. Ensure thumbnails exist
$allImages = Get-ChildItem -Path $academyDir -File | Where-Object { $_.Extension -match "\.(jpg|jpeg|png)$" }
foreach ($f in $allImages) {
    $thumbPath = Join-Path $thumbsDir $f.Name
    if (!(Test-Path $thumbPath)) {
        try {
            $uri = New-Object System.Uri($f.FullName)
            $decoder = [System.Windows.Media.Imaging.BitmapDecoder]::Create($uri, [System.Windows.Media.Imaging.BitmapCreateOptions]::None, [System.Windows.Media.Imaging.BitmapCacheOption]::OnLoad)
            $frame = $decoder.Frames[0]
            $scale = 400.0 / $frame.PixelWidth
            if ($scale -gt 1.0) { $scale = 1.0 }
            $transformed = New-Object System.Windows.Media.Imaging.TransformedBitmap($frame, (New-Object System.Windows.Media.ScaleTransform($scale, $scale)))
            $encoder = New-Object System.Windows.Media.Imaging.JpegBitmapEncoder
            $encoder.QualityLevel = 78
            $encoder.Frames.Add([System.Windows.Media.Imaging.BitmapFrame]::Create($transformed))
            $outStream = [System.IO.File]::Create($thumbPath)
            $encoder.Save($outStream)
            $outStream.Close()
        } catch {}
    }
}

# 4. Scan all image files in assets/academy and write JS registry
$allowedExtensions = @(".jpg", ".jpeg", ".png", ".webp", ".svg")
$foundImages = Get-ChildItem -Path $academyDir -File | Where-Object { $allowedExtensions -contains $_.Extension.ToLower() } | Sort-Object Name

Write-Host "`nFound $($foundImages.Count) optimized photos in assets/academy/" -ForegroundColor Green

$jsContent = @"
/**
 * FUZION ACADEMY - PHOTO REGISTRY
 * Automatically generated by update-photos.bat on $(Get-Date -Format "yyyy-MM-dd HH:mm:ss")
 * Total photos registered: $($foundImages.Count)
 */
window.FUZION_ACADEMY_PHOTOS = [
"@

for ($i = 0; $i -lt $foundImages.Count; $i++) {
    $name = $foundImages[$i].Name
    $comma = if ($i -lt ($foundImages.Count - 1)) { "," } else { "" }
    $jsContent += "`n  '$name'$comma"
}

$jsContent += @"

];
"@

Set-Content -Path $registryFile -Value $jsContent -Encoding UTF8 -Force
Write-Host "Successfully updated: assets/js/photos-list.js" -ForegroundColor Green
Write-Host "All photos are now optimized and ready in Photo Customizer Studio!`n" -ForegroundColor Cyan
