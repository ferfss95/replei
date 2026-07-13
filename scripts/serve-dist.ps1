param(
  [int]$Port = 5173,
  [string]$Root = (Join-Path $PSScriptRoot "..\dist")
)

Add-Type -AssemblyName System.Web -ErrorAction SilentlyContinue

$Root = (Resolve-Path $Root).Path
$prefix = "http://localhost:$Port/"

$mime = @{
  ".html" = "text/html; charset=utf-8"
  ".htm"  = "text/html; charset=utf-8"
  ".js"   = "application/javascript; charset=utf-8"
  ".mjs"  = "application/javascript; charset=utf-8"
  ".css"  = "text/css; charset=utf-8"
  ".json" = "application/json; charset=utf-8"
  ".svg"  = "image/svg+xml"
  ".png"  = "image/png"
  ".jpg"  = "image/jpeg"
  ".jpeg" = "image/jpeg"
  ".gif"  = "image/gif"
  ".webp" = "image/webp"
  ".ico"  = "image/x-icon"
  ".woff" = "font/woff"
  ".woff2"= "font/woff2"
  ".ttf"  = "font/ttf"
  ".map"  = "application/json"
  ".txt"  = "text/plain; charset=utf-8"
}

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add($prefix)
try { $listener.Start() } catch {
  Write-Host "Falha ao iniciar o listener em $prefix - $($_.Exception.Message)"
  exit 1
}

Write-Host "Servindo $Root em $prefix (Ctrl+C para parar)"
Write-Host "Local:   $prefix"

try {
  while ($listener.IsListening) {
    try {
      $ctx = $listener.GetContext()
    } catch {
      Write-Host "GetContext error: $($_.Exception.Message)"
      continue
    }
    $req = $ctx.Request
    $res = $ctx.Response

    try {
      $rel = [Uri]::UnescapeDataString($req.Url.AbsolutePath)
      if ([string]::IsNullOrEmpty($rel) -or $rel -eq "/") { $rel = "/index.html" }
      $rel = $rel.TrimStart("/")
      $path = Join-Path $Root $rel

      if (-not (Test-Path -LiteralPath $path -PathType Leaf)) {
        $path = Join-Path $Root "index.html"
      }

      $bytes = [System.IO.File]::ReadAllBytes($path)
      $ext = [System.IO.Path]::GetExtension($path).ToLowerInvariant()
      $ct = $mime[$ext]
      if (-not $ct) { $ct = "application/octet-stream" }
      $res.ContentType = $ct
      $res.ContentLength64 = $bytes.Length
      $res.OutputStream.Write($bytes, 0, $bytes.Length)
      Write-Host ("{0} {1} -> {2}" -f $req.HttpMethod, $req.Url.AbsolutePath, ([System.IO.Path]::GetFileName($path)))
    } catch {
      Write-Host "Request error: $($_.Exception.Message)"
      try {
        $res.StatusCode = 500
        $msg = [Text.Encoding]::UTF8.GetBytes("500 - $($_.Exception.Message)")
        $res.OutputStream.Write($msg, 0, $msg.Length)
      } catch {}
    } finally {
      try { $res.OutputStream.Close() } catch {}
    }
  }
} finally {
  $listener.Stop()
}
